import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Divider } from "semantic-ui-react";

import PPButton from "../PPButton";

import { COLOR } from "../../constants";
import parse from "html-react-parser";

const CenteredModal = (props) => {
  const { t } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {parse(t("credit"))}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4> {parse(t("illustrationCredit"))}</h4>
        <p>
          Hikawa (@hikawa21), shukonbu (@konbusennin2),NAMCOOo (@NAMCOOo),
          Yuuhidora (@Yu_Hydra0319)
        </p>
        <Divider />
        <h4> {parse(t("staffCredit"))}</h4>
        <p>
          buffy, iH8Ecchi, reon, GEN, reo, Wafuu, Ppang, The Unknown, Keaton,
          Rex55, Agent Sheep 003, CruelN1N1, Third
        </p>
      </Modal.Body>
      <Modal.Footer>
        <PPButton
          className="credit_close_button"
          backgroundColor={COLOR.png}
          hoveredBackgroundColor={COLOR.pngHovered}
          color="white"
          onClick={props.onHide}
        >
          Close
        </PPButton>
      </Modal.Footer>
    </Modal>
  );
};

const CreditModal = ({ t }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <PPButton
        className="credit_button"
        backgroundColor={"rgba(0,0,0,0)"}
        bordered
        color="white"
        onClick={() => setModalShow(true)}
      >
        {parse(t("credit"))}
      </PPButton>

      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        t={t}
      />
    </>
  );
};

export default CreditModal;
