import { useNavigate } from "react-router";
import Credit from "../../components/Credit/Credit";
import {
  illustratorCredits,
  staffCredits,
  groupCredits,
} from "../../constants";

const CreditContainer = () => {
  const navigate = useNavigate();
  const handleCardClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <Credit
      handleCardClick={handleCardClick}
      illustratorCredits={illustratorCredits}
      staffCredits={staffCredits}
      groupCredits={groupCredits}
      goBack={goBack}
    />
  );
};

export default CreditContainer;
