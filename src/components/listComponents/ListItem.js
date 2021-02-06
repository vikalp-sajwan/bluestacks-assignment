import styled from "styled-components";

import Date from "./Date";
import Campaign from "./Campaign";
import ViewPrice from "./ViewPrice";
import Actions from "./Actions";

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  max-width: 1200px;
  flex-wrap: wrap;
`;

function ListItem({ campaign }) {
  const { createdOn } = campaign;
  return (
    <Wrapper>
      <Date timeStamp={createdOn} />
      <Campaign {...campaign} />
      <ViewPrice campaign={campaign} />
      <Actions {...campaign} />
    </Wrapper>
  );
}

export default ListItem;
