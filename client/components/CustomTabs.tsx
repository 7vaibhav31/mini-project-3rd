import { ReactNode, createContext, useContext, useState } from "react";

interface TabContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export function CustomTabs({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: ReactNode;
}) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
}

export function CustomTabsList({ children }: { children: ReactNode }) {
  return (
    <div className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 gap-2 p-1 rounded-lg bg-muted">
      {children}
    </div>
  );
}

export function CustomTabsTrigger({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error("CustomTabsTrigger must be used within CustomTabs");
  }

  const isActive = context.activeTab === value;

  return (
    <button
      onClick={() => context.setActiveTab(value)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export function CustomTabsContent({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error("CustomTabsContent must be used within CustomTabs");
  }

  if (context.activeTab !== value) {
    return null;
  }

  return <div className="mt-2">{children}</div>;
}
