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

const illustratorCredits = [
  {
    type: "twitter",
    name: "氷川　翔",
    subtitle: "@hikawa21",
    link: "https://twitter.com/hikawa21",
    avatar:
      "https://pbs.twimg.com/profile_images/378800000649915865/a3ceac87913432180e28374bce9eb9ea_400x400.jpeg",
  },
  {
    type: "twitter",
    name: "朱昆布",
    subtitle: "@konbusennin2",
    link: "https://twitter.com/konbusennin2",
    avatar:
      "https://pbs.twimg.com/profile_images/1388873896229629959/T7OjsslJ_400x400.jpg",
  },
  {
    type: "twitter",
    name: "海鼠",
    subtitle: "@NAMCOOo",
    link: "https://twitter.com/NAMCOOo",
    avatar:
      "https://pbs.twimg.com/profile_images/1384222868205043715/63lYMX4C_400x400.jpg",
  },
  {
    type: "twitter",
    name: "ゆうひどら",
    subtitle: "@Yu_Hydra0319",
    link: "https://twitter.com/Yu_Hydra0319",
    avatar:
      "https://pbs.twimg.com/profile_images/1336581137032888322/vGuQWKUj_400x400.jpg",
  },
  {
    type: "twitter",
    name: "Misa",
    subtitle: "@Misamisatotomi",
    link: "https://twitter.com/Misamisatotomi",
    avatar:
      "https://pbs.twimg.com/profile_images/1377449389703110657/-Lje6Uil_400x400.jpg",
  },
  {
    type: "twitter",
    name: "みたらしねこ",
    subtitle: "@mitarashi_neko",
    link: "https://twitter.com/mitarashi_neko",
    avatar:
      "https://pbs.twimg.com/profile_images/1399708173884280833/-wMPxRLz_400x400.jpg",
  },
  {
    type: "twitter",
    name: "江倉まに",
    subtitle: "@ekuramani",
    link: "https://twitter.com/ekuramani",
    avatar:
      "https://pbs.twimg.com/profile_images/975151216496861185/iKyHcB0e_400x400.jpg",
  },
];

const staffCredits = [
  {
    type: "github",
    name: "buffy",
    subtitle: "",
    link: "https://github.com/boofiheimin",
  },
  {
    type: "discord",
    name: "iH8Ecchi",
    subtitle: "iH8Ecchi#2778",
  },
  {
    type: "discord",
    name: "reon",
    subtitle: "",
  },
  {
    type: "discord",
    name: "ppang",
    subtitle: "",
  },
  {
    type: "discord",
    name: "Wafuu",
    subtitle: "Wafuu#8008",
  },
  {
    type: "twitter",
    name: "reo",
    subtitle: "@HorsesHh",
    link: "https://twitter.com/HorsesHh",
  },
  {
    type: "discord",
    name: "GEN",
    subtitle: "GΞN#2461",
  },
  {
    type: "discord",
    name: "The Unknown",
    subtitle: "The Unknown#9439",
  },
  {
    type: "twitter",
    name: "Rex55",
    subtitle: "@RexAstaLevi",
    link: "https://twitter.com/RexAstaLevi",
  },
  {
    type: "twitter",
    name: "Third",
    subtitle: "@third12_",
    link: "https://twitter.com/third12_",
  },
  {
    type: "discord",
    name: "tabloomoo",
    subtitle: "tabloomoo#5380",
  },
  {
    type: "discord",
    name: "CruelN1N1",
    subtitle: "CruelN1N1#7975",
  },
  {
    type: "twitter",
    name: "Translator Aki",
    subtitle: "@TranslatorAki",
    link: "https://twitter.com/TranslatorAki",
  },
  {
    type: "twitter",
    name: "Vee",
    subtitle: "@DoctorEevee",
    link: "https://twitter.com/DoctorEevee",
  },
];

export {
  SPREADSHEET_ID,
  SHEET_ID,
  GOOGLE_API_KEY,
  LIMIT,
  COLOR,
  illustratorCredits,
  staffCredits,
};
