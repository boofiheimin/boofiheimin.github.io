import PPMessageBoardRenderer from "../../../components/PPMessageBoard/PPMessageBoardRenderer";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { isMobile } from "react-device-detect";

import {
  SPREADSHEET_ID,
  SHEET_ID,
  GOOGLE_API_KEY,
  LIMIT,
} from "../../../constants";

const PPMessageBoardRendererContainer = () => {
  const messageRef = useRef(null);
  const sheetRef = useRef(null);

  const [data, setData] = useState([]);

  const doc = useMemo(() => new GoogleSpreadsheet(SPREADSHEET_ID), []);

  const fetchRows = useCallback(async () => {
    await doc.useApiKey(GOOGLE_API_KEY);
    await doc.loadInfo();
    sheetRef.current = doc.sheetsById[SHEET_ID];
    const rows = await sheetRef.current.getRows({ limit: 30, offset: 0 });
    setData(rows);
  }, [doc]);

  useEffect(() => {
    if (isMobile) {
      messageRef.current.style.backgroundAttachment = "scroll";
    }
    fetchRows();
  }, [fetchRows]);

  return <PPMessageBoardRenderer data={data} />;
};

export default PPMessageBoardRendererContainer;
