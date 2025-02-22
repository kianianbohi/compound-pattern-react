import {JSX, ReactNode, useContext} from "react";
import {TabsContext} from "./TabsContext.tsx";

type TabProps = {
    children:ReactNode;
    tabId:string;
}

const Tab = ({tabId,children}:TabProps):JSX.Element=>{
    const context = useContext(TabsContext);

    if (!context) {
        throw new Error("Tab must be used within a Tabs component");
    }

    const { activeTab, setActiveTab } = context;

    return (
        <button
            className={`tab ${activeTab === tabId ? "active" : ""}`}
            onClick={() => setActiveTab(tabId)}
        >
            {children}
        </button>
    );
};

export default Tab;
