import PPLoader from "../../../components/PPLoader";

const PPLoaderContainer = ({ show, transitionEnd, onTransitionEnd }) => {
  return (
    <PPLoader
      show={show}
      transitionEnd={transitionEnd}
      onTransitionEnd={onTransitionEnd}
    />
  );
};

export default PPLoaderContainer;
