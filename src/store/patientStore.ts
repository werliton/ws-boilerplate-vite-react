import { PatientRecord } from "@/reducers/patientReducer";
import { create } from "zustand";

interface PatientGroup {
    id: string;
    data: PatientRecord[];
  }

interface PatientState {
    patientId: string,
    data: PatientRecord[],
    setPatient: (id: string) => void
    setData: (data: PatientRecord[]) => void
    setNextPatient: (records: PatientGroup[]) => void
}

export const usePatientStore = create<PatientState>()(set => ({
    patientId: "",
    data: [],
    setPatient: (id) => set({
        patientId: id
    }),
    setData: data => set({
        data
    }),
    setNextPatient: (records: PatientGroup[]) => {
        set((state) => {
            const currentIndex = records.findIndex(item => item.id === state.patientId)
            const nextIndex = (currentIndex + 1) % records.length
            const next = records[nextIndex]
            
            return {
                patientId: next.id,
                data: next.data
            }
        })
    }
}))

// selectors
export const usePatientId = () => usePatientStore(state => state.patientId)
export const usePatientData = () => usePatientStore(state => state.data)
export const useSetNextPatient = () => usePatientStore(state => state.setNextPatient)
export const useSetData = () => usePatientStore(state => state.setData)
export const useSetPatient = () => usePatientStore(state => state.setPatient)