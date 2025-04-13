import React, { useReducer } from "react";
import Search from "./components/Search";
import Records from "./components/Records";
import { medical_records } from "./utilities";

const title = "Patient Medical Records";

type ACTION_TYPE = {
  type: "SET_PATIENT" | "SET_DATA";
  payload: any;
};

const initialState = {
  patientId: "",
  data: [] as any,
};

function reducer(state = initialState, action: ACTION_TYPE) {
  switch (action.type) {
    case "SET_PATIENT":
      return {
        ...state,
        patientId: action.payload,
      };

    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { patientId, data } = state;

  const handlePatient = (value: string) => {
    dispatch({
      type: "SET_PATIENT",
      payload: value,
    });
  };

  const setRecord = () => {
    // buscar no array de data o dados do usuario e enviar para a tabela
    if (patientId) {
      const foundPatient = medical_records.find(
        (item) => item.id === patientId
      );

      if (foundPatient?.id) {
        dispatch({
          type: "SET_DATA",
          payload: foundPatient.data as any,
        });
      }
    }
  };

  const setNextRecord = () => {
    // encontrar pelo index e definir o proximo index
    const currentIndex = medical_records.findIndex(
      (item) => item.id === patientId
    );
    const nextIndex = (currentIndex + 1) % medical_records.length;
    const nextPatient = medical_records[nextIndex];

    dispatch({
      type: "SET_PATIENT",
      payload: nextPatient.id,
    });
    dispatch({
      type: "SET_DATA",
      payload: nextPatient.data as any,
    });
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
          selectedPatientId={patientId}
        />
        {data.length > 0 && (
          <Records data={data} setNextRecord={setNextRecord} />
        )}
      </div>
    </div>
  );
};

export default App;
