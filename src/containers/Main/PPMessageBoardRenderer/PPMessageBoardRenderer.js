import PPMessageBoardRenderer from "../../../components/PPMessageBoard/PPMessageBoardRenderer";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { isMobile } from "react-device-detect";

import { SPREADSHEET_ID, SHEET_ID, GOOGLE_API_KEY } from "../../../constants";

Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

const PPMessageBoardRendererContainer = () => {
  const messageRef = useRef(null);
  const sheetRef = useRef(null);

  const [data, setData] = useState([]);

  const doc = useMemo(() => new GoogleSpreadsheet(SPREADSHEET_ID), []);

  const fetchRows = useCallback(async () => {
    await doc.useApiKey(GOOGLE_API_KEY);
    await doc.loadInfo();
    sheetRef.current = doc.sheetsById[SHEET_ID];
    const rows = await sheetRef.current.getRows({ limit: 40, offset: 325 });
    // 2 swap
    // rows.swap(29, 1);
    // rows.swap(30, 4);
    // rows.swap(39, 32);
    // rows.swap(34, 19);
    // 3 swap
    // rows.swap(32, 1);
    // rows.swap(29, 6);
    // rows.swap(34, 4);
    // rows.swap(34, 7);
    // rows.swap(31, 5);
    // rows.swap(33, 0);
    // rows.swap(30, 2);
    // rows.swap(33, 17);
    // rows.swap(33, 28);
    // rows.swap(34, 5);
    // 4 swap
    // rows.swap(32, 8);
    // rows.swap(33, 19);
    // rows.swap(31, 18);
    // rows.swap(34, 2);
    // rows.swap(21, 29);
    // rows.swap(33, 30);
    // rows.swap(25, 17);
    // 5 swap
    // rows.swap(33, 15);
    // 6 swap
    // rows.swap(41, 15);
    // rows.swap(47, 26);
    // rows.swap(48, 23);
    // rows.swap(49, 33);
    // 7 swap
    // rows.swap(36, 35);
    // 8
    // rows.swap(38, 5);
    // rows.swap(37, 15);
    // rows.swap(26, 16);
    // rows.swap(36, 25);
    // rows.swap(35, 21);
    // rows.swap(37, 35);
    setData(rows);
  }, [doc]);

  useEffect(() => {
    if (isMobile) {
      messageRef.current.style.backgroundAttachment = "scroll";
    }
    fetchRows();
  }, [fetchRows]);

  return <PPMessageBoardRenderer data={data} type={4} />;
};

export default PPMessageBoardRendererContainer;

// 45 0
// 40 45
// 35 85
// 35 120
// 35 155
// 50 190
// 45 240
// 40 285
// 40 325
