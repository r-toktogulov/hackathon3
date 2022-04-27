import AdminContext from "./context/AdminContext";
import ClientContext from "./context/ClientContext";
import Navigation from "./Navigation";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <ClientContext>
      <AdminContext>
        <Navigation />
      </AdminContext>
    </ClientContext>
  );
};

export default App;
