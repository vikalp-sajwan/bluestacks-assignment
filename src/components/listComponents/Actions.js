import styled from "styled-components";

import IconButton from "./IconButton";

const Wrapper = styled.div`
  display: flex;
  width: 400px;
`;

function Actions({ name }) {
  return (
    <Wrapper>
      <IconButton
        type="file"
        clickHandler={() => console.log(`${name} CSV button was clicked!`)}
      />
      <IconButton
        type="report"
        clickHandler={() => console.log(`${name} Report button was clicked!`)}
      />
      <IconButton type="calendar" />
    </Wrapper>
  );
}

export default Actions;
