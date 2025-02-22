import {JSX, ReactNode} from "react";

type TabPanelProps = {
    children: ReactNode;
}
const TabPanels = ({ children }:TabPanelProps):JSX.Element => {
    return <div className="tab-panels">{children}</div>;
};

export default TabPanels;