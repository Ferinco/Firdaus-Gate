import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [teacherClass, setTeacherClass] = useState()
  const [studentClass, setStudentClass] = useState()
  const [resultsData, setResultsData] = useState([])


  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isProfileOpen,
        setIsProfileOpen,
        passwordVisibility,
        setPasswordVisibility,
        currentUser,
        setCurrentUser,
        teacherClass,
        setTeacherClass,
        studentClass,
        setStudentClass,
        resultsData,
        setResultsData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
