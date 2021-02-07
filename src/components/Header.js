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

const ImgWrapper = styled.div`
  width: 80%;
  margin: auto auto;
  max-width: 1200px;
`;

const Img = styled.img`
  position: relative;
  top: 17px;
  left: 20px;
`;

function Header() {
  return (
    <Background>
      <ImgWrapper>
        <Img src={companyLogo} alt="Company Logo" />
      </ImgWrapper>
    </Background>
  );
}

export default Header;
