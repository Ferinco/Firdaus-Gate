import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./contexts/Context";
import toast, { Toaster } from "react-hot-toast";
import { OverlayLoading } from "./components/OverlayLoading";
import { useAuth } from "./hooks/useAuth";
function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { isInitialized } = useAuth();

  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          {isInitialized ? <Routes /> : <OverlayLoading />}

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
