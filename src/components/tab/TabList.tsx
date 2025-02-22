import {JSX, ReactNode} from "react";

type TabListProps = {
    children: ReactNode;
}

const TabList = ({children}:TabListProps):JSX.Element=>{
    return <div className="tab-list">{children}</div>
}

export default TabList;