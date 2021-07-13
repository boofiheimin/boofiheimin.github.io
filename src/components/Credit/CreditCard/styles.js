import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
  },
  media: {
    height: "50px",
    width: "50px",
    borderRadius: "50px",
    marginRight: theme.spacing(2),
  },
  name: {
    lineHeight: 1,
    flexGrow: 1,
  },
  icon: ({ color }) => ({
    padding: theme.spacing(1),
    color: color,
    fontSize: 25,
  }),
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
}));

export default useStyles;
