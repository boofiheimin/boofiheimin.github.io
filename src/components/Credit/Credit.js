import {
  Container,
  Box,
  Typography,
  Divider,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import useStyles from "./styles";

import CreditCard from "./CreditCard/CreditCard";
import { FormGroup } from "react-bootstrap";

const theme = createTheme({
  typography: {
    fontFamily: "M PLUS 1p",
  },
});

const Credit = ({
  handleCardClick,
  illustratorCredits,
  staffCredits,
  groupCredits,
  goBack,
}) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container maxWidth="lg" className={classes.root}>
          <Box padding={3} textAlign="center">
            <IconButton className={classes.backButton} onClick={goBack}>
              <ArrowBackIcon className={classes.icon} />
            </IconButton>
            <Typography className={classes.creditHeader} variant="h3">
              Credit
            </Typography>
          </Box>
          <Divider />
          <Box padding={3} textAlign="center">
            <Typography variant="h4">Illustration</Typography>
          </Box>
          <Box
            padding={3}
            display="grid"
            alignItems="center"
            gridTemplateColumns="repeat(auto-fit, 300px)"
            gridGap="20px"
            justifyContent="center"
          >
            {illustratorCredits.map((illustrator) => (
              <CreditCard
                target={illustrator}
                handleCardClick={handleCardClick}
              />
            ))}
          </Box>
          <Divider />
          <Box padding={3} textAlign="center">
            <Typography variant="h4">Staff</Typography>
          </Box>
          <Box
            padding={3}
            display="grid"
            alignItems="center"
            gridTemplateColumns="repeat(auto-fit, 300px)"
            gridGap="20px"
            justifyContent="center"
          >
            {staffCredits.map((staff) => (
              <CreditCard target={staff} handleCardClick={handleCardClick} />
            ))}
          </Box>
          <Divider />
          <Box padding={3} textAlign="center">
            <Typography variant="h4">Special Thanks</Typography>
          </Box>
          <div className={classes.specialThanks}>
            {groupCredits.map((group) => (
              <CreditCard target={group} handleCardClick={handleCardClick} />
            ))}
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Credit;
