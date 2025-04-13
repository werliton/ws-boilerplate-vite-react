import React from "react";
import Search from "./components/Search";
import Records from "./components/Records";
import { medical_records } from "./utilities";

const title = "Patient Medical Records";

const App = () => {
  const [selectedPatient, setSelectedPatient] = React.useState("");
  const [dataTable, setDataTable] = React.useState([]);

  const handlePatient = (value: any) => {
    setSelectedPatient(value);
  };

  const setRecord = () => {
    // buscar no array de data o dados do usuario e enviar para a tabela
    if (selectedPatient) {
      const foundPatient = medical_records.find(
        (item) => item.id === selectedPatient
      );

      if (foundPatient?.id) {
        setDataTable(foundPatient.data as any);
      }
    }
  };

  const setNextRecord = () => {
    // encontrar pelo index e definir o proximo index
    const currentIndex = medical_records.findIndex(
      (item) => item.id === selectedPatient
    );
    const nextIndex = (currentIndex + 1) % medical_records.length;
    const nextPatient = medical_records[nextIndex];

    setDataTable(nextPatient.data as any);
    setSelectedPatient(nextPatient.id);
  };

  return (
    <div className="bg-white h-screen flex flex-col">
      <nav className="h-14 bg-black text-green-500 flex items-center p-2 font-black">
        {title}
      </nav>
      <div className="flex flex-col items-center w-full">
        <Search
          setRecord={setRecord}
          setId={handlePatient}
          selectedPatientId={selectedPatient}
        />
        {dataTable.length > 0 && (
          <Records data={dataTable} setNextRecord={setNextRecord} />
        )}
      </div>
    </div>
  );
};

export default App;
