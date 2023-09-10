import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Context";
import ReportProvider from "./contexts/ReportContext";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <AppProvider>
      <ReportProvider>
        <div className="App">
          <BrowserRouter>
            <Routes />
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
      </ReportProvider>
    </AppProvider>
  );
}

export default App;
