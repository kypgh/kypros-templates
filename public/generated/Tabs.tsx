import React, { useState, ReactElement, ReactNode, cloneElement } from "react";

// Define the types for props
interface TabsProps {
  children: ReactElement[] | ReactNode[];
}

interface TabListProps {
  children: ReactElement[];
  activeIndex?: number;
  setActiveIndex?: (index: number) => void;
}

interface TabProps {
  children: ReactNode;
  isActive?: boolean;
  setActiveIndex?: () => void;
}

interface TabPanelProps {
  children: ReactNode;
}

// This component manages the tabs state.
export function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === TabList) {
          return cloneElement(child as ReactElement<TabListProps>, {
            activeIndex,
            setActiveIndex,
          });
        }
        if (React.isValidElement(child) && child.type === TabPanel) {
          return index === activeIndex + 1 ? child : null;
        }
        return null;
      })}
    </>
  );
}

// This component displays the tab headers.
export function TabList({
  children,
  activeIndex,
  setActiveIndex,
}: TabListProps) {
  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? cloneElement(child as ReactElement<TabProps>, {
              isActive: index === activeIndex,
              setActiveIndex: () => setActiveIndex && setActiveIndex(index),
            })
          : null
      )}
    </div>
  );
}

// This component is for each individual tab header.
export function Tab({
  children,
  isActive,
  setActiveIndex,
  ...props
}: TabProps) {
  return (
    <button onClick={setActiveIndex} disabled={isActive} {...props}>
      {children}
    </button>
  );
}

// This component displays the content of the currently active tab.
export function TabPanel({ children }: TabPanelProps) {
  return <>{children}</>;
}
