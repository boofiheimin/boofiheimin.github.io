/* eslint-disable no-console */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { isMobile } from "react-device-detect";
import FileSaver from "file-saver";

import PPMessageBoard from "../../../components/PPMessageBoard";

import {
  SPREADSHEET_ID,
  SHEET_ID,
  GOOGLE_API_KEY,
  LIMIT,
} from "../../../constants";

const PPMessageBoardContainer = ({ t }) => {
  const messageRef = useRef(null);
  const sheetRef = useRef(null);
  const downloadRef = useRef(null);

  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);

  const doc = useMemo(() => new GoogleSpreadsheet(SPREADSHEET_ID), []);

  const fetchRows = useCallback(async () => {
    await doc.useApiKey(GOOGLE_API_KEY);
    await doc.loadInfo();
    sheetRef.current = doc.sheetsById[SHEET_ID];
    const rows = await sheetRef.current.getRows({ limit: LIMIT, offset: 0 });
    const promises = [];
    // preload image before render
    rows.forEach(({ image }) => {
      if (image) {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = image;
            img.onload = resolve;
          })
        );
      }
    });
    await Promise.all(promises);
    setTotal(parseInt(rows[0]["Total Messages"]));
    setData(rows);
  }, [doc]);

  useEffect(() => {
    console.log("load googlesheet");
    if (isMobile) {
      messageRef.current.style.backgroundAttachment = "scroll";
    }
    fetchRows();
  }, [fetchRows]);

  const fetchMore = async () => {
    if (data.length % LIMIT !== 0) {
      setHasMore(false);
    }

    if (data.length === 0) {
      fetchRows();
    } else {
      sheetRef.current = doc.sheetsById[SHEET_ID];
      const rows = await sheetRef.current.getRows({
        limit: LIMIT,
        offset: offset + LIMIT,
      });
      const promises = [];
      // preload image before render
      rows.forEach(({ image }) => {
        if (image) {
          promises.push(
            new Promise((resolve) => {
              const img = new Image();
              img.src = image;
              img.onload = resolve;
            })
          );
        }
      });
      await Promise.all(promises);
      if (rows.length === 0) {
        setHasMore(false);
      } else {
        setOffset(offset + LIMIT);
        setData([...data, ...rows]);
      }
    }
  };

  const onDownloadClick = () => {
    if (isMobile) {
      downloadRef.current.classList.remove("spinning_shuriken");
      void downloadRef.current.offsetWidth;
      downloadRef.current.classList.add("spinning_shuriken");
    }
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/message_board_final_final.zip",
      "msg_boards.zip"
    );
  };

  return (
    <PPMessageBoard
      t={t}
      data={data}
      total={total}
      hasMore={hasMore}
      fetchMore={fetchMore}
      messageRef={messageRef}
      downloadRef={downloadRef}
      onDownloadClick={onDownloadClick}
    />
  );
};

export default PPMessageBoardContainer;
