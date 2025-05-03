import { medical_records } from "@/utilities";

interface SearchProps {
  setRecord(): void;
  setId(id: string): void;
  selectedPatientId?: string;
}

function Search({ setRecord, setId, selectedPatientId }: SearchProps) {
  // cabe usar useMemo
  const patientNames = medical_records.map((item) => ({
    id: item.data[0].userId,
    name: item.data[0].userName,
  }));

  return (
    <div className="flex w-[1024px] py-8">
      <div className="flex w-full gap-2 p-2 bg-gray-100">
        <select
          data-testid="patient-name"
          value={selectedPatientId}
          className="flex  w-full p-2"
          onChange={(e) => setId(e.target.value)}
        >
          <option value="" disabled>
            Select Patient
          </option>
          {patientNames.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        data-testid="show"
        className="bg-secondary-dark p-1 px-4 "
        onClick={setRecord}
      >
        Show
      </button>
    </div>
  );
}

export default Search;
