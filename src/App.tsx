import Search from "./components/Search";
import Records from "./components/Records";
import { usePatient } from "./hooks/usePatient";
import { Header } from "./components/Header";

const App = () => {
  const { data, handlePatient, patientId, setNextRecord, setRecord } =
    usePatient();

  return (
    <div className="flex h-screen flex-col bg-white">
      <Header />
      <div className="flex w-full flex-col items-center">
        <Search
          setRecord={setRecord}
          setId={handlePatient}
          selectedPatientId={patientId}
        />
        {data.length > 0 && (
          <Records data={data as any} setNextRecord={setNextRecord} />
        )}
      </div>
    </div>
  );
};

export default App;
