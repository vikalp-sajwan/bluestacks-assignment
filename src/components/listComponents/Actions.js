import styled from "styled-components";

import IconButton from "./IconButton";

const Wrapper = styled.div`
  display: flex;
  width: 400px;
`;

function Actions() {
  return (
    <Wrapper>
      <IconButton type="file" />
      <IconButton type="report" />
      <IconButton type="calendar" />
    </Wrapper>
  );
}

export default Actions;
