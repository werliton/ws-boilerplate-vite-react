import { initialState, Patient, patientReducer } from "@/reducers/patientReducer";
import { medical_records } from "@/utilities";
import { useReducer } from "react";

export const usePatient = () => {
    const [state, dispatch] = useReducer(patientReducer, initialState);
   
    const { patientId, data } = state;
  
    const handlePatient = (value: string) => {
        Patient.setPatient(dispatch, value)
    };
  
    const setRecord = () => {
      // buscar no array de data o dados do usuario e enviar para a tabela
      if (patientId) {
        const foundPatient = medical_records.find(
          (item) => item.id === patientId
        );
  
        if (foundPatient?.id) {
            Patient.setData(dispatch, foundPatient.data as any,)
          
        }
      }
    };
  
    const setNextRecord = () => {
      // encontrar pelo index e definir o proximo index
      Patient.setNextPatient(dispatch, medical_records as any)
    };

    return {
        handlePatient,
        setNextRecord,
        setRecord,
        data,
        patientId
    }
}
