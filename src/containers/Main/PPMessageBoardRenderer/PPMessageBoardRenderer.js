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
    const rows = await sheetRef.current.getRows({ limit: 25, offset: 411 });
    // first swap 45 0
    // rows.swap(37, 41);
    // second swap 38 45
    // rows.swap(29, 2);
    // rows.swap(30, 14);
    // rows.swap(34, 19);
    // rows.swap(35, 26);
    // third swap 35 83
    // rows.swap(31, 7);
    // rows.swap(34, 3);
    // rows.swap(32, 25);
    // fourth swap 33 118
    // rows.swap(27, 22);
    // rows.swap(31, 21);
    // fifth swap 25 151
    // rows.swap(21, 18);
    // rows.swap(11, 9);
    // sixth swap 25 175
    // rows.swap(13, 7);
    // rows.swap(16, 23);
    // rows.swap(21, 22);
    // rows.swap(14, 10);
    // rows.swap(24, 15);
    // rows.swap(24, 1);
    // rows.swap(20, 21);
    // seventh swap 37 200
    // eitgh swap 50 237
    // ninth swap 45 287
    // rows.swap(43, 30);
    // tenth swap 39 332
    // rows.swap(35, 26);
    // rows.swap(38, 3);
    // rows.swap(34, 2);
    // rows.swap(35, 33);
    // eleventh swap 40 371
    rows.swap(15, 10);
    rows.swap(9, 18);
    rows.swap(24, 18);
    rows.swap(23, 20);
    rows.swap(24, 21);
    rows.swap(20, 18);
    rows.swap(24, 9);
    rows.swap(3, 0);
    rows.swap(20, 17);
    // twelve swap 40 411

    setData(rows);
  }, [doc]);

  useEffect(() => {
    if (isMobile) {
      messageRef.current.style.backgroundAttachment = "scroll";
    }
    fetchRows();
  }, [fetchRows]);

  return <PPMessageBoardRenderer data={data} type={2} />;
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
