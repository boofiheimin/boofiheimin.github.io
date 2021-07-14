import reon from "./assets/images/reon.png";
import vee from "./assets/images/vee.png";
import jrp from "./assets/images/jrp.jpeg";

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
    avatar:
      "https://pbs.twimg.com/profile_images/1354468890265276418/nKK6t0Eq_400x400.jpg",
  },
  {
    type: "youtube",
    name: "iH8Ecchi",
    link: "https://youtu.be/vuq8eIvLgwk",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLRnkFLan5pgv7yLahYGSYz0h5c8YU1FGv5YhUj8=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    type: "discord",
    name: "reon",
    subtitle: "",
    avatar: reon,
  },
  {
    type: "youtube",
    name: "Ppang",
    subtitle: "",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLTxb1IqdtY5Se0LqxJ0bRo-avWCvIcrUFHwOOFQ=s88-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/channel/UCwpLYwcf9wRB-C4gnNlIcog",
  },
  {
    type: "discord",
    name: "Wafuu",
    subtitle: "#8008",
  },
  {
    type: "twitter",
    name: "reo",
    subtitle: "@HorsesHh",
    link: "https://twitter.com/HorsesHh",
    avatar:
      "https://pbs.twimg.com/profile_images/1385825901804462080/ktO1zQri_400x400.jpg",
  },
  {
    type: "discord",
    name: "GEN",
    subtitle: "#2461",
  },
  {
    type: "discord",
    name: "The Unknown",
    subtitle: "#9439",
  },
  {
    type: "twitter",
    name: "Rex55",
    subtitle: "@RexAstaLevi",
    link: "https://twitter.com/RexAstaLevi",
    avatar:
      "https://pbs.twimg.com/profile_images/1394307445757857796/wnGT190B_400x400.jpg",
  },
  {
    type: "twitter",
    name: "Third",
    subtitle: "@third12_",
    link: "https://twitter.com/third12_",
    avatar:
      "https://pbs.twimg.com/profile_images/1269095250993090560/8RlAeNA__400x400.jpg",
  },
  {
    type: "reddit",
    name: "tabloomoo",
    link: "https://www.reddit.com/user/tabloomoo",
  },
  {
    type: "discord",
    name: "CruelN1N1",
    subtitle: "#7975",
  },
  {
    type: "twitter",
    name: "Translator Aki",
    subtitle: "@TranslatorAki",
    link: "https://twitter.com/TranslatorAki",
    avatar:
      "https://pbs.twimg.com/profile_images/1391163509648420866/VVbXg-eq_400x400.jpg",
  },
  {
    type: "twitter",
    name: "Vee",
    subtitle: "@DoctorEevee",
    link: "https://twitter.com/DoctorEevee",
    avatar: vee,
  },
  {
    type: "twitter",
    name: "らーめんP",
    subtitle: "@menyakanataso",
    link: "https://twitter.com/menyakanataso",
    avatar:
      "https://pbs.twimg.com/profile_images/1414186098134175744/5a9vpwcS_400x400.jpg",
  },
  {
    type: "twitter",
    name: "Darrick966",
    subtitle: "@Darrick966",
    link: "https://twitter.com/Darrick966",
    avatar:
      "https://pbs.twimg.com/profile_images/1351096737042227203/j-vk8m1u_400x400.jpg",
  },
  {
    type: "discord",
    name: "kenshiro kosuke",
    subtitle: "#4992",
  },
  {
    type: "twitter",
    name: "vtange",
    subtitle: "@vtange",
    link: "https://twitter.com/vtange",
    avatar:
      "https://pbs.twimg.com/profile_images/1188658056877330432/qSoI8GvH_400x400.jpg",
  },
  {
    type: "twitter",
    name: "Jared Hays",
    subtitle: "@JRPHays",
    link: "https://twitter.com/JRPHays",
    avatar: jrp,
  },
];

const groupCredits = [
  {
    type: "discord",
    name: "Oshio Family Discord",
    link: "https://discord.gg/ppt",
    avatar:
      "https://cdn.discordapp.com/icons/712808142638940182/a_31c7eb87563d5be7758fad75a1713cd1.png?size=128",
  },
  {
    type: "reddit",
    name: "Hololive Subreddit",
    link: "https://www.reddit.com/r/Hololive/",
    avatar:
      "https://styles.redditmedia.com/t5_29numb/styles/communityIcon_mteajwr3czn41.png?width=256&s=3bff9b841f14bd94b3c1467ffa32747580725c16",
  },
  {
    type: "facebook",
    name: "PPTYakkai",
    link: "https://www.facebook.com/PPTYakkai/",
    avatar:
      "https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.6435-9/194836102_311189213882554_2110712698402000993_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFk5qpTVS_BHFRUpQHWSHLLeoJVsFwwjNx6glWwXDCM3FKpu5t9MbhwXncnMJPg_4c&_nc_ohc=ijGwwBk59TEAX88_ndj&_nc_ht=scontent.fbkk2-7.fna&oh=c87a950efa50978c3f47162b896c6703&oe=60F2F879",
  },
  {
    type: "facebook",
    name: "Kanata Posting from Heaven Academy",
    link: "https://www.facebook.com/PPTenshiSquad/",
    avatar:
      "https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.6435-9/90203640_102727381358763_5376968299160535040_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHZ9zL9YeoMx-2UQFSdanQquI31HOg1Czm4jfUc6DULOXO4wwgRXzv1VIDvLDU1PyM&_nc_ohc=j4iA6D41JdAAX9Z7w9R&_nc_ht=scontent.fbkk2-5.fna&oh=036829894f6ee70d48c0a32eb2a275b8&oe=60F37FAB",
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
  groupCredits,
};
