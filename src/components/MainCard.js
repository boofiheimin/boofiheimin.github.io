/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import { Grid, Container, Divider, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import MessageBoard from "./MessageBoard";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    header: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    divline: {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  })
);

const MainCard = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Container maxWidth="md">
        <Typography className={classes.header} variant="h2">
          Congrats on 1M Kanatan
        </Typography>
        <Divider className={classes.divline} variant="middle" />
        <Typography variant="subtitle1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>
      <Container>
        <iframe
          src="https://onedrive.live.com/embed?cid=9C12431F4CA33E8E&amp;resid=9C12431F4CA33E8E%2129324&amp;authkey=AFLMoLDUu5SIfFw&amp;em=2&amp;wdAr=1.7777777777777777"
          width="962px"
          height="565px"
          frameborder="0"
        >
          This is an embedded{" "}
          <a target="_blank" href="https://office.com">
            Microsoft Office
          </a>{" "}
          presentation, powered by{" "}
          <a target="_blank" href="https://office.com/webapps">
            Office
          </a>
          .
        </iframe>
      </Container>
      <Container>
        <MessageBoard />
      </Container>
    </Grid>
  );
};

export default MainCard;
