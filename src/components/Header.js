import styled from "styled-components";

import { primaryHeader } from "../assets/colors";

import companyLogo from "../assets/images/company-logo.png";

const Background = styled.header`
  position: absolute;
  height: 80px;
  left: 0;
  top: 0;
  right: 0;
  background: ${primaryHeader};
`;

const Img = styled.img`
  position: absolute;
  top: 17px;
  left: 182px;
`;

function Header() {
  return (
    <Background>
      <Img src={companyLogo} alt="Company Logo" />
    </Background>
  );
}

export default Header;
