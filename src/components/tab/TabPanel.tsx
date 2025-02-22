import {JSX, ReactNode, useContext} from "react";
import {TabsContext} from "./TabsContext.tsx";

type TabPanelProps = {
    children: ReactNode;
    tabId: string;
}

const TabPanel = ({tabId,children}:TabPanelProps):JSX.Element|null=>{
    const context = useContext(TabsContext);

    if (!context) {
        throw new Error("TabPanel must be used within a Tabs component");
    }

    const { activeTab } = context;

    return activeTab === tabId ? <div className="tab-panel">{children}</div> : null;
}

export default TabPanel;