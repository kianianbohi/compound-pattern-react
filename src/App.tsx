import './App.css'
import Tabs from "./components/tab/Tabs.tsx";
import TabList from "./components/tab/TabList.tsx";
import Tab from "./components/tab/Tab.tsx";
import TabPanels from "./components/tab/TabPanels.tsx";
import TabPanel from "./components/tab/TabPanel.tsx";

function App() {

    return (
        <Tabs defaultActiveTab="tab1">
            <TabList>
                <Tab tabId="tab1">Tab 1</Tab>
                <Tab tabId="tab2">Tab 2</Tab>
                <Tab tabId="tab3">Tab 3</Tab>
            </TabList>
            <TabPanels>
                <TabPanel tabId="tab1">
                    <p>Content for Tab 1</p>
                </TabPanel>
                <TabPanel tabId="tab2">
                    <p>Content for Tab 2</p>
                </TabPanel>
                <TabPanel tabId="tab3">
                    <p>Content for Tab 3</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default App
