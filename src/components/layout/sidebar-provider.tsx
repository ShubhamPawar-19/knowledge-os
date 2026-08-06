"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";


interface SidebarContextType {
  collapsed: boolean;
  toggle: () => void;
}


const SidebarContext =
  createContext<SidebarContextType | null>(null);


export function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [collapsed, setCollapsed] =
    useState(false);


  useEffect(() => {
    const value =
      localStorage.getItem(
        "sidebar-collapsed",
      );

    if (value === "true") {
      setCollapsed(true);
    }
  }, []);


  function toggle() {
    setCollapsed((prev) => {
      const next = !prev;

      localStorage.setItem(
        "sidebar-collapsed",
        String(next),
      );

      return next;
    });
  }


  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        toggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}


export function useSidebar() {
  const context =
    useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used inside SidebarProvider",
    );
  }

  return context;
}