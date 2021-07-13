import { makeStyles } from "@material-ui/core";
import backgroundImage from "../../assets/images/pptile.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImage});`,
    backgroundSize: 150,
    backgroundRepeat: "repeat",
    minHeight: "100vh",
    padding: `${theme.spacing(2)}px 0`,
    position: "relative",
  },
  container: {
    height: "100vh",
  },
  creditContainer: {
    height: "100%",
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 32,
    fontSize: 50,
  },
  icon: {
    fontSize: 40,
  },
  creditHeader: {
    fontWeight: "bold",
    color: "black",
    textShadow:
      "-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF",
  },
  specialThanks: {
    padding: theme.spacing(3),
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
}));

export default useStyles;
