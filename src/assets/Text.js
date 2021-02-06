import styled from "styled-components";
import * as colors from "./colors";

const fontSizes = {
  xs: 14,
  s: 16,
  m: 18,
  l: 24,
  xl: 48,
};

const fontWeights = {
  light: 400,
  medium: 500,
  bold: 700,
};

const Wrapper = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => fontWeights[props.weight]};
  font-size: ${(props) => fontSizes[props.size]}px;
  ${"" /* line-height: ${(props) => fontSizes[props.size] + 15}px; */}
  margin: 0;
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  color: ${(props) => (props.color ? props.color : colors.textTabTitle)};
`;

function Text({
  size = "m",
  italic = false,
  weight = "medium",
  children = "",
  color = "",
}) {
  return (
    <Wrapper size={size} weight={weight} italic={italic} color={color}>
      {children}
    </Wrapper>
  );
}

export default Text;
