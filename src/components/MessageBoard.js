import { Component } from "react";
import Papa from "papaparse";
import {
  Grid,
  Container,
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  messageCard: {
    width: 500,
    marginTop: "1rem",
    marginBottom: "1rem",
    textAlign: "left",
  },
  messageSender: {
    textAlign: "right",
  },
});

class MessageBoard extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    this.getCsvData();
  };

  getData = (result) => {
    this.setState({ data: result.data });
  };

  getCsvData = async () => {
    Papa.parse("/data/input.csv", {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: this.getData,
    });
  };

  render = () => {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <Container className={classes.root}>
        <Typography variant="h4">Messages from Oversea Brothers!</Typography>
        <Grid container direction="column" justify="center" alignItems="center">
          {data.map(({ message, user, image }) => {
            return (
              <Card className={classes.messageCard}>
                {image && <CardMedia component="img" image={image} />}
                <CardContent>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {message}
                  </Typography>
                  <Divider />
                  <Typography
                    className={classes.messageSender}
                    variant="body2"
                    component="p"
                  >
                    {user}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Container>
    );
  };
}

export default withStyles(styles)(MessageBoard);
