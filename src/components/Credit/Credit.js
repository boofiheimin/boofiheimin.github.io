import { Container, Box, Typography, Divider } from "@material-ui/core";
import useStyles from "./styles";

import CreditCard from "./CreditCard/CreditCard";

const Credit = ({ handleCardClick, illustratorCredits, staffCredits }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.root}>
        <Box padding={3} textAlign="center">
          <Typography variant="h3">Credit</Typography>
        </Box>
        <Divider />
        <Box padding={3} textAlign="center">
          <Typography variant="h4">Illustration</Typography>
        </Box>
        <Box
          padding={3}
          display="grid"
          alignItems="center"
          gridTemplateColumns="repeat(auto-fit, 250px)"
          gridGap="20px"
          justifyContent="space-around"
        >
          {illustratorCredits.map((illustrator) => (
            <CreditCard
              illustrator={illustrator}
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
          gridTemplateColumns="repeat(auto-fit, 250px)"
          gridGap="20px"
          justifyContent="space-around"
        >
          {staffCredits.map((staff) => (
            <CreditCard illustrator={staff} handleCardClick={handleCardClick} />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Credit;
