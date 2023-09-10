import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./contexts/Context";
import toast, { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <AppProvider>
      <AuthProvider>
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
                  background: "#363636",
                  color: "#fff",
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
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
