const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const LIMIT = parseInt(process.env.REACT_APP_MESSAGE_LIMIT, 10);

const COLOR = {
  powerPoint: "#C43E1C",
  powerPointHovered: "#CE5435",
  youtube: "#FF3737",
  youtubeHovered: "#FF5757",
  discord: "#829DFA",
  discordHovered: "#97AEFE",
  png: "#29b6f6",
  pngHovered: "#81d4fa",
};

export { SPREADSHEET_ID, SHEET_ID, GOOGLE_API_KEY, LIMIT, COLOR };
