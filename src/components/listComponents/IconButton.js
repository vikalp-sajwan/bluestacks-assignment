import * as React from "react";
import styled from "styled-components";
import calendar from "../../assets/images/calendar.png";
import file from "../../assets/images/file.png";
import price from "../../assets/images/price.png";
import report from "../../assets/images/report.png";

import Text from "../../assets/Text";

import * as colors from "../../assets/colors";

const iconAssetType = {
  calendar: calendar,
  file: file,
  price: price,
  report: report,
};

const iconText = {
  calendar: "Schedule Again",
  file: "CSV",
  price: "View Pricing",
  report: "Report",
};

const Img = styled.img`
  height: 24px;
  width: auto;
  margin-right: 5px;
`;

const Button = styled.button`
  height: 40px;
  padding: 5px;
  display: flex;
  border: 0px;
  border-radius: 3px;
  justify-content: space-between;
  background: ${colors.white};
  margin: 20px;
  :hover {
    background-color: ${colors.accentSecondary};
  }
`;

function IconButton({ type, alt = "button", clickHandler, ...props }) {
  return (
    <Button onClick={clickHandler} {...props}>
      <Img src={iconAssetType[type]} alt={alt} />
      <Text size="xs" weight="light" color={colors.gray10}>
        {iconText[type]}
      </Text>
    </Button>
  );
}

export default IconButton;
