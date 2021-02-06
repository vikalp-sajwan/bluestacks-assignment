import styled from "styled-components";

import Date from "./Date";
import Campaign from "./Campaign";
import ViewPrice from "./ViewPrice";
import Actions from "./Actions";

const Wrapper = styled.div`
  margin-top: 80px;
  ${"" /* border: 1px solid red; */}
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  max-width: 1200px;
  flex-wrap: wrap;
`;

function ListItem() {
  return (
    <Wrapper>
      <Date />
      <Campaign />
      <ViewPrice />
      <Actions />
    </Wrapper>
  );
}

export default ListItem;
