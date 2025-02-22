import {JSX, ReactNode, useState} from "react";
import { TabsContext } from "./TabsContext";

type TabsProps = {
    children: ReactNode;
    defaultActiveTab: string;
};

const Tabs = ({ children, defaultActiveTab }: TabsProps):JSX.Element => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="tabs">{children}</div>
        </TabsContext.Provider>
    );
};

export default Tabs;