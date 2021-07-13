import { Card, CardMedia, CardActionArea, Typography } from "@material-ui/core";
import useStyles from "./styles";

import shabani from "../../../assets/images/shabaniavatar.jpg";

const typeReducer = (type) => {
  switch (type) {
    case "twitter":
      return {
        name: "fab fa-twitter",
        color: "#00acee",
      };
    case "discord":
      return {
        name: "fab fa-discord",
        color: "#7289d9",
      };
    case "github":
      return {
        name: "fab fa-github",
        color: "#4078c0",
      };
    case "youtube":
      return {
        name: "fab fa-youtube",
        color: "#c4302b",
      };
    case "reddit":
      return {
        name: "fab fa-reddit",
        color: "#FF5700",
      };
    case "facebook":
      return {
        name: "fab fa-facebook",
        color: "#3b5998 ",
      };
    default:
      return {
        name: "fab fa-twitter",
        color: "#00acee",
      };
  }
};

const CreditCard = ({ target, handleCardClick }) => {
  const { name, subtitle, link = null, avatar = shabani, type } = target;
  const reducedType = typeReducer(type);
  const classes = useStyles({ color: reducedType.color });

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleCardClick(link)}>
        <div className={classes.container}>
          <CardMedia className={classes.media} image={avatar} title="avatar" />
          <div className={classes.name}>
            <Typography variant="h6">{name}</Typography>
            <Typography>{subtitle}</Typography>
          </div>
          <div className={classes.icon}>
            <i className={reducedType.name} />
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default CreditCard;
