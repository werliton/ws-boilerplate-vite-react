import Search from "./components/Search";
import Records from "./components/Records";
import { usePatient } from "./hooks/usePatient";

const title = "Patient Medical Records";

const App = () => {
  const { data, handlePatient, patientId, setNextRecord, setRecord } =
    usePatient();

  return (
    <div className="bg-white h-screen flex flex-col">
      <nav className="h-14 bg-black text-green-500 flex items-center p-2 font-black">
        {title}
      </nav>
      <div className="flex flex-col items-center w-full">
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
