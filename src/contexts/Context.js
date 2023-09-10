import { createContext, useContext, useState } from "react";

const AppContext = createContext()
export function AppProvider({children}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState(false)
   const [currentUser, setCurrentUser] = useState()
    return(
        <AppContext.Provider value={{isSidebarOpen, setIsSidebarOpen, isProfileOpen, setIsProfileOpen, passwordVisibility, setPasswordVisibility, currentUser, setCurrentUser}}>
{children}
        </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext);
}
