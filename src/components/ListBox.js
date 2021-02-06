import ListItem from "./listComponents/ListItem";
import ListHeading from "./listComponents/ListHeading";

import styled from "styled-components";

import * as colors from "../assets/colors";

const Divider = styled.div`
  border-bottom: 1px solid ${colors.gray30};
  margin: 0 20px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 20px;
  background: ${colors.white};
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const ListWrapper = styled.div`
  display: flex;
  max-height: 55vh;
  flex-direction: column;
  overflow-y: scroll;
`;

function ListBox({ campaigns, title }) {
  return (
    <Wrapper key={title}>
      <ListHeading />
      <ListWrapper>
        {campaigns.map((campaign, idx, array) => {
          return (
            <div key={campaign.id}>
              <ListItem campaign={campaign} />
              {idx < array.length - 1 ? <Divider /> : ""}
            </div>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
}

export default ListBox;
