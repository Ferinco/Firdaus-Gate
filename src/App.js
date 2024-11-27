import React, { useEffect, useState } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./contexts/Context";
import toast, { Toaster } from "react-hot-toast";
import { OverlayLoading } from "./components/OverlayLoading";
import { useAuth } from "./hooks/useAuth";
import axios from "axios";
import { fetchCurrentTerm } from "./redux/slices/term";
import { useDispatch } from "react-redux";
function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { isInitialized } = useAuth();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [termName, setTermName] = useState("");
const [isLoading , setIsLoading] = useState(false)
  //current term
  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        setTermName(res[res.length - 1]);
        console.log(termName);
      })
      .catch((error) => {});
      if(user?.role != "admin" && termName){
        getResults()
      }
  }, [user]);

  const getResults = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://ferrum-sever.onrender.com/api/studentsresults/${termName?.session}/${termName?.term}/${user?.role === "teacher" ? user?.classHandled : user?.currentClass}`
      );
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          {!isInitialized || isLoading ? <OverlayLoading /> : <Routes />}

          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#fff",
                color: "#000",
              },

              // Default options for specific types
              success: {
                duration: 5000,
                theme: {
                  primary: "blue",
                  secondary: "black",
                },
              },
            }}
          />
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
