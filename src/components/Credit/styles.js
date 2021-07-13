import { makeStyles } from "@material-ui/core";
import backgroundImage from "../../assets/images/pptile.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImage});`,
    backgroundSize: 150,
    backgroundRepeat: "repeat",
    minHeight: "100vh",
    padding: `${theme.spacing(2)}px 0`,
  },
  container: {
    height: "100vh",
  },
  creditContainer: {
    height: "100%",
  },
}));

export default useStyles;
