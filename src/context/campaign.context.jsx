import { createContext, useState, useEffect } from "react";

export const CampaignContext = createContext({
  campaigns: [],
});

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);

  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
};
