import * as React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import Text from "../assets/Text";

import * as colors from "../assets/colors";

const Wrapper = styled.div`
  margin-top: 80px;
  width: 80%;
  margin: 80px auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const HeadingWrapper = styled.div`
  max-width: 1200px;
  margin: auto auto;
  padding: 40px 20px;
  @media (max-width: 1000px) {
    padding: 15px 10px;
  }
`;

function MainContent() {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    window
      .fetch("/data", { method: "GET" })
      .then((data) => data.json())
      .then((data) => setState(data));
  }, []);

  const updateSchedule = ({ id, newTimeStamp }) => {
    window
      .fetch("/updateschedule", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, newTimeStamp }),
      })
      .then((data) => data.json())
      .then((data) => setState(data));
  };

  const isMobile = window.matchMedia("(max-width: 1000px)");

  return (
    <Wrapper>
      <HeadingWrapper>
        <Text size={isMobile ? "l" : "xl"} weight="bold" color={colors.primary}>
          Manage Campaigns
        </Text>
      </HeadingWrapper>
      {state ? (
        <Tabs campaignData={{ updateHandler: updateSchedule, ...state.data }} />
      ) : (
        <h4>LOADING...</h4>
      )}
    </Wrapper>
  );
}

export default MainContent;
