const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(
  /\\n/g,
  "\n"
);

const LIMIT = parseInt(process.env.REACT_APP_MESSAGE_LIMIT, 10);

const COLOR = {
  powerPoint: "#C43E1C",
  powerPointHovered: "#CE5435",
  youtube: "#FF3737",
  youtubeHovered: "#FF5757",
  discord: "#829DFA",
  discordHovered: "#97AEFE",
};

export { SPREADSHEET_ID, SHEET_ID, CLIENT_EMAIL, PRIVATE_KEY, LIMIT, COLOR };
