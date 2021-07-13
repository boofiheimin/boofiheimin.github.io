import { Outlet } from "react-router";
import styled from "styled-components";
import CornerButtons from "./CornerButtons";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Nav = (props) => {
  return (
    <Wrapper>
      <CornerButtons {...props} />
      <Outlet />
    </Wrapper>
  );
};

export default Nav;
