import { useEffect, useRef, useState } from "react";
import FileSaver from "file-saver";
import { isMobile } from "react-device-detect";

import PPMessageBoard from "../../../components/PPMessageBoard";

import { LIMIT } from "../../../constants";

import { readString } from "react-papaparse";

const PPMessageBoardContainer = ({ t }) => {
  const messageRef = useRef(null);
  const downloadRef = useRef(null);
  const [csvData, setCSV] = useState([]);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    console.log("load csv");
    if (isMobile) {
      messageRef.current.style.backgroundAttachment = "scroll";
    }
    const fetchCSV = async () => {
      const response = await fetch("data/response.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = await decoder.decode(result.value);
      const { data: csvData } = readString(csv, { header: true });
      csvData.pop();
      setCSV(csvData);
      const rows = csvData.slice(offset, LIMIT);
      const promises = [];
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
      setData(rows);
      setOffset(LIMIT + offset);
    };
    fetchCSV();
  }, []);

  const fetchMore = async () => {
    if (data.length !== 0) {
      const rows = csvData.slice(offset, LIMIT + offset);
      if (rows.length === 0) {
        setHasMore(false);
      }
      const promises = [];
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
      setData(data.concat(rows));
      setOffset(LIMIT + offset);
    }
  };

  const onDownloadClick = () => {
    if (isMobile) {
      downloadRef.current.classList.remove("spinning_shuriken");
      void downloadRef.current.offsetWidth;
      downloadRef.current.classList.add("spinning_shuriken");
    }
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/msg_boards.zip",
      "msg_boards.zip"
    );
  };

  return (
    <PPMessageBoard
      t={t}
      data={data}
      total={csvData.length}
      hasMore={hasMore}
      fetchMore={fetchMore}
      messageRef={messageRef}
      downloadRef={downloadRef}
      onDownloadClick={onDownloadClick}
    />
  );
};

export default PPMessageBoardContainer;
