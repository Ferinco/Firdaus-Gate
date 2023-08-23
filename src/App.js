import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Context";

function App() {
  return (
    <AppProvider>

    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
    </AppProvider>
  );
}

export default App;
