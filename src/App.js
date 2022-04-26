import React from "react";
import AdminContext from "./context/AdminContext";
import ClientContext from "./context/ClientContext";
import Navigation from "./Navigation";

function App() {
  return (
    <ClientContext>
      <AdminContext>
        <Navigation />
      </AdminContext>
    </ClientContext>
  );
}

export default App;
