import * as React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import Text from "../assets/Text";

import * as colors from "../assets/colors";

const Wrapper = styled.div`
  margin-top: 80px;
  width: 80%;
  margin: 80px auto;
`;

const HeadingWrapper = styled.div`
  max-width: 1200px;
  margin: auto auto;
  padding: 40px 20px;
`;

function MainContent() {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    window
      .fetch("/data", { method: "GET" })
      .then((data) => data.json())
      .then((data) => setState(data));
  }, []);

  return (
    <Wrapper>
      <HeadingWrapper>
        <Text size="xl" weight="bold" color={colors.primary}>
          Manage Campaigns
        </Text>
      </HeadingWrapper>
      {state ? <Tabs campaignData={state.data} /> : <h4>LOADING...</h4>}
    </Wrapper>
  );
}

export default MainContent;
