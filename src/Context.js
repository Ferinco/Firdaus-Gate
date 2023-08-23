import { createContext, useContext, useState } from "react";

const AppContext = createContext()
export function AppProvider({children}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    return(
        <AppContext.Provider value={{isSidebarOpen, setIsSidebarOpen, isProfileOpen, setIsProfileOpen}}>
{children}
        </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext);
}