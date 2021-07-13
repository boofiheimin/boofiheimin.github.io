import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
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
    display: "Flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
}));

export default useStyles;
