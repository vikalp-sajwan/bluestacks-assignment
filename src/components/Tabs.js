import "@reach/tabs/styles.css";

import * as React from "react";

import { Tabs, TabList, TabPanels, TabPanel, Tab } from "@reach/tabs";
import ListBox from "./ListBox";
import TabItem from "./TabItem";

function TabsComponent({ campaignData }) {
  const [activeTab, setActiveTab] = React.useState("upcoming");

  return (
    <Tabs
      onChange={(index) => setActiveTab(["upcoming", "live", "past"][index])}
      style={{ maxWidth: "1200px", margin: "auto auto" }}
    >
      <TabList
        style={{
          marginLeft: "20px",
          backgroundColor: "white",
        }}
      >
        <Tab>
          <TabItem
            active={activeTab === "upcoming"}
            title={"Upcoming Campaigns"}
          />
        </Tab>
        <Tab>
          <TabItem active={activeTab === "live"} title={"Live Campaigns"} />
        </Tab>
        <Tab>
          <TabItem active={activeTab === "past"} title={"Past Campaigns"} />
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ListBox campaigns={campaignData["upcoming"]} />
        </TabPanel>
        <TabPanel>
          <ListBox campaigns={campaignData["live"]} />
        </TabPanel>
        <TabPanel>
          <ListBox campaigns={campaignData["past"]} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsComponent;
