import styled from "styled-components";

import Text from "../../assets/Text";
import * as colors from "../../assets/colors";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20 0;
  max-width: 1200px;
  flex-wrap: wrap;
  background: ${colors.gray20};
`;

const DateDiv = styled.div`
  width: 120px;
  margin: 20px;
`;
const CampaignDiv = styled.div`
  min-width: 200px;
  margin: 20px;
  flex: 1;
`;

const ViewPriceDiv = styled.div`
  margin: 20px 50px 20px 20px;
  width: 140px;
`;

const ActionsDiv = styled.div`
  min-width: 360px;
  margin: 20px 20px;
`;

function ListHeading() {
  return (
    <Wrapper>
      <DateDiv>
        <Text size="s">DATE</Text>
      </DateDiv>
      <CampaignDiv>
        <Text size="s">CAMPAIGN</Text>
      </CampaignDiv>
      <ViewPriceDiv>
        <Text size="s">VIEW</Text>
      </ViewPriceDiv>
      <ActionsDiv>
        <Text size="s">ACTIONS</Text>
      </ActionsDiv>
    </Wrapper>
  );
}

export default ListHeading;
