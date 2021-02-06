import styled from "styled-components";
import "@reach/tabs/styles.css";

import Text from "../assets/Text";

import { accent, textTabTitle } from "../assets/colors";

const Wrapper = styled.div`
  padding: ${(props) => (props.active ? "10px 10px" : "10px 0")};
  max-width: 200px;
  border-bottom: 4px solid ${(props) => (props.active ? accent : "transparent")};
`;

const TabText = styled(Text)``;

function TabItem({ active = false }) {
  return (
    <Wrapper active={active}>
      <TabText weight="light" color={active ? accent : textTabTitle}>
        Upcoming Campaigns
      </TabText>
    </Wrapper>
  );
}

export default TabItem;
