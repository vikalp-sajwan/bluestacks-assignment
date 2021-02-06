import styled from "styled-components";
import "@reach/tabs/styles.css";

import { Tabs, TabList, TabPanels, TabPanel, Tab } from "@reach/tabs";
import ListBox from "./ListBox";
import TabItem from "./TabItem";

import { primary } from "../assets/colors";

const Wrapper = styled.div`
  height: 200px;
`;

function TabsComponent() {
  return (
    <Tabs style={{ "max-width": "1200px", margin: "auto auto" }}>
      <TabList
        style={{
          marginLeft: "20px",
          "background-color": "white",
        }}
      >
        <Tab>
          <TabItem />
        </Tab>
        <Tab>
          <TabItem active />
        </Tab>
        <Tab>
          <TabItem />
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ListBox />
        </TabPanel>
        <TabPanel>
          <ListBox />
        </TabPanel>
        <TabPanel>
          <ListBox />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsComponent;
