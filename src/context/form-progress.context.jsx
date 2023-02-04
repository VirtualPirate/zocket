import { createContext, useState, useEffect } from "react";

export const FormProgressContext = createContext({
  step: 1,
});

export const FormProgressProvider = ({ children }) => {
  const [formStep, setFormStep] = useState(1);
  const value = { formStep, setFormStep };

  useEffect(() => {
    if (formStep > 4) {
      setFormStep(1);
    }
  }, [formStep]);

  return (
    <FormProgressContext.Provider value={value}>
      {children}
    </FormProgressContext.Provider>
  );
};
