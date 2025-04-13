import { usePatientData, usePatientId, useSetData, useSetNextPatient, useSetPatient } from "@/store/patientStore";
import { medical_records } from "@/utilities";

export const usePatient = () => {

    const patientId = usePatientId()
    const data = usePatientData()
    const setNextPatient = useSetNextPatient()
    const setData = useSetData()
    const setPatient = useSetPatient()

    const handlePatient = (value: string) => {
        setPatient(value)
    };
  
    const setRecord = () => {
      // buscar no array de data o dados do usuario e enviar para a tabela
      if (patientId) {
        const foundPatient = medical_records.find(
          (item) => item.id === patientId
        );
  
        if (foundPatient?.id) {
          setData(foundPatient.data as any,)
          
        }
      }
    };
  
    const setNextRecord = () => {
      // encontrar pelo index e definir o proximo index
      setNextPatient(medical_records as any)
    };

    return {
        handlePatient,
        setNextRecord,
        setRecord,
        data,
        patientId
    }
}
