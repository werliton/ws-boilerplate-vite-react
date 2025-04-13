import { initialState, patientReducer } from "@/reducers/patientReducer";
import { medical_records } from "@/utilities";
import { useReducer } from "react";

export const usePatient = () => {
    const [state, dispatch] = useReducer(patientReducer, initialState);
   
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

    return {
        handlePatient,
        setNextRecord,
        setRecord,
        data,
        patientId
    }
}
