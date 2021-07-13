import Credit from "../../components/Credit/Credit";
import { illustratorCredits, staffCredits } from "../../constants";

const CreditContainer = () => {
  const handleCardClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Credit
      handleCardClick={handleCardClick}
      illustratorCredits={illustratorCredits}
      staffCredits={staffCredits}
    />
  );
};

export default CreditContainer;
