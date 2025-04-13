import { createContext, useState } from "react";

interface PatientContextProps {
  selectedPatient: number;
  handlePatient(value: any): void;
}

export const PatientContext = createContext({} as PatientContextProps);

export const PatientProvider = ({ children }: any) => {
  const [selectedPatient, setSelectedPatient] = useState(0);

  const handlePatient = (value: any) => {
    setSelectedPatient(value);
  };
  return (
    <PatientContext.Provider
      value={{
        selectedPatient,
        handlePatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
