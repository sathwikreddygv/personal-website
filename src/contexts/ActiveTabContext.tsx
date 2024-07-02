import React, { createContext, useState, ReactNode } from 'react';

interface ActiveTabContextType {
  active_tab: string;
  set_active_tab: (tab: string) => void;
}

const defaultValue: ActiveTabContextType = {
  active_tab: 'about-header',
  set_active_tab: () => {},
};

export const ActiveTabContext = createContext<ActiveTabContextType>(defaultValue);
