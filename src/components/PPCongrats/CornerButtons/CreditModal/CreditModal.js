import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { Divider } from "semantic-ui-react";
import parse from "html-react-parser";

import PPButton from "../../../PPButton";

import { COLOR } from "../../../../constants";

const CreditButton = styled(PPButton)`
  font-size: 1.3rem;
  text-shadow: 0 0 10px black;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;

const CreditCloseButton = styled(PPButton)`
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;

const Word = styled.div`
  display: inline-block;
`;

const CenteredModal = (props) => {
  const { t, ...restProps } = props;
  return (
    <Modal
      {...restProps}
      //  animation={false} //turn this back on if findDOMnode warning triggers you
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
        {/* prettier-ignore */}
        <p>
          <Word>
            氷川　翔{" "}
            <a
              href="https://twitter.com/hikawa21"
              target="_blank"
              rel="noreferrer"
            >
              (@hikawa21)
            </a>
            ,
          </Word>
          <Word>
            朱昆布{" "}
            <a
              href="https://twitter.com/konbusennin2"
              target="_blank"
              rel="noreferrer"
            >
              (@konbusennin2)
            </a>
            ,
          </Word>
          <Word>
            海鼠{" "}
            <a
              href="https://twitter.com/NAMCOOo"
              target="_blank"
              rel="noreferrer"
            >
              (@NAMCOOo)
            </a>
            ,
          </Word>
          <Word>
            ゆうひどら{" "}
            <a
              href="https://twitter.com/Yu_Hydra0319"
              target="_blank"
              rel="noreferrer"
            >
              (@Yu_Hydra0319)
            </a>
            ,
          </Word>
          <Word>
            からし{" "}
            <a
              href="https://twitter.com/asarikarasi"
              target="_blank"
              rel="noreferrer"
            >
              (@asarikarasi)
            </a>
            ,
          </Word>
        </p>
        <Divider />
        <h4> {parse(t("teamCredit"))}</h4>
        <p>
          buffy, iH8Ecchi, reon, GEN, reo, Wafuu, Ppang, The Unknown, Keaton,
          Rex55, Agent Sheep 003, CruelN1N1, Third
        </p>
      </Modal.Body>
      <Modal.Footer>
        <CreditCloseButton
          className="credit_close_button"
          backgroundColor={COLOR.png}
          hoveredBackgroundColor={COLOR.pngHovered}
          color="white"
          onClick={props.onHide}
        >
          Close
        </CreditCloseButton>
      </Modal.Footer>
    </Modal>
  );
};

const CreditModal = ({ t, modalShow, modalOnClick }) => {
  return (
    <>
      <CreditButton
        backgroundColor={"rgba(0,0,0,0.1)"}
        bordered
        color="white"
        onClick={() => modalOnClick(true)}
      >
        {parse(t("credit"))}
      </CreditButton>

      <CenteredModal
        show={modalShow}
        onHide={() => modalOnClick(false)}
        t={t}
      />
    </>
  );
};

export default CreditModal;
