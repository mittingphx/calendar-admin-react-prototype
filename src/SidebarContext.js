/**
 * File:    SidebarContext.jsx
 * Author:  Scott Mitting
 * Date:    12/4/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *   Context for the sidebar for the React app prototype admin website.
 */

import { createContext, useState } from 'react';

const SidebarContext = createContext({});

const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarProvider, SidebarContext };