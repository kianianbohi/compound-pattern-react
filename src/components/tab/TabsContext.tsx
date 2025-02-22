import { createContext} from "react";

type TabsContextType = {
    activeTab: string;
    setActiveTab: (tabId: string) => void;
};

export const TabsContext = createContext<TabsContextType | undefined>(undefined);