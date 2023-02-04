import "./App.css";

import { Routes, Route } from "react-router-dom";
import SideMenu from "./components/side-menu/side-menu.component";
import TopSection from "./components/top-section/top-section.component";
import Campaign from "./components/campaign/campaign.component";

import Form from "./routes/form/form.component";

function App() {
  return (
    <>
      <SideMenu />
      <TopSection />

      <Routes>
        <Route index element={<Campaign />} />
        <Route path="/form/*" element={<Form />} />
        {/* <Route path="step2" element={<>step2</>} />
        <Route path="step3" element={<>step3</>} />
        <Route path="step3" element={<>step4</>} /> */}
      </Routes>
    </>
  );
}

export default App;
