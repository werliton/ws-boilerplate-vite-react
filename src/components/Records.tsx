import { medical_records } from "@/utilities";

interface RecordsProps {
  data: Array<{
    id: number;
    userName: string;
    userDob: string;
    meta: {
      weight: number;
      height: number;
    };
    diagnosis: {
      id: number;
      name: string;
      severity: number;
    };
    doctor: {
      name: string;
    };
  }>;
  setNextRecord(): void;
}

function Records({ data, setNextRecord }: RecordsProps) {
  return (
    <div className="border border-gray-200 w-[1024px] p-4" id="profile-view">
      <div className="flex justify-center relative">
        <div
          id="patient-profile"
          data-testid="patient-profile"
          className="text-center"
        >
          <h4 id="patient-name">{data[0].userName}</h4>
          <h5 id="patient-dob">DOB: {data[0].userDob}</h5>
          <h5 id="patient-height">Height: {data[0].meta.height} cm</h5>
        </div>
        <button
          className="absolute right-2 top-3 p-1 px-4  bg-secondary"
          onClick={setNextRecord}
          data-testid="next-btn"
        >
          Next
        </button>
      </div>
      <div className="overflow-x-auto mt-5">
        <table
          id="patient-records-table"
          className="table-auto w-full text-sm text-left"
        >
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2">SL</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Diagnosis</th>
              <th className="px-4 py-2">Weight</th>
              <th className="px-4 py-2">Doctor</th>
            </tr>
          </thead>
          <tbody id="table-body" data-testid="patient-table">
            {data.map((item) => (
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.userDob}</td>
                <td className="px-4 py-2">{item.diagnosis.name}</td>
                <td className="px-4 py-2">{item.meta.weight}kg</td>
                <td className="px-4 py-2">{item.doctor.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records;
