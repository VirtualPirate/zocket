import "./App.css";

import { Routes, Route } from "react-router-dom";
import SideMenu from "./components/side-menu/side-menu.component";
import TopSection from "./components/top-section/top-section.component";
import Campaign from "./components/campaign/campaign.component";

import FormStep1 from "./routes/form-step-1/form-step-1.component";

function App() {
  return (
    <>
      <SideMenu />
      <TopSection />

      <Routes>
        <Route>
          <Route index element={<Campaign />} />
          <Route path="step1" element={<FormStep1 />} />
          <Route path="step2" element={<>step2</>} />
          <Route path="step3" element={<>step3</>} />
          <Route path="step3" element={<>step4</>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
