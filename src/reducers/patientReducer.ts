
type ACTION_TYPE = {
    type: "SET_PATIENT" | "SET_DATA" | 'SET_NEXT_PATIENT';
    payload: any;
  };

  export interface PatientRecord {
    id: string
    date: string;
    diagnosis: string;
    weight: number;
    doctor: string;
  }
  
  export const initialState = {
    patientId: "",
    data: [] as PatientRecord[],
  };
  
  export function patientReducer(state = initialState, action: ACTION_TYPE) {
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
      case "SET_NEXT_PATIENT":{
        const { payload: records } = action
        // encontrar pelo index e definir o proximo index
        const currentIndex = records.findIndex(
        (item: any) => item.id === state.patientId
        );
        const nextIndex = (currentIndex + 1) % records.length;
        const next= records[nextIndex];

        return {
            ...state,
            patientId: next.id,
            data: next.data
        }
    }
      default:
        return state;
    }
  }

function setPatient(dispatch: React.ActionDispatch<[action: ACTION_TYPE]>, value: string){
    dispatch({
        type: "SET_PATIENT",
        payload: value,
    })
}
function setData(dispatch: React.ActionDispatch<[action: ACTION_TYPE]>, value: []){
    dispatch({
        type: "SET_DATA",
        payload: value,
    })
}

function setNextPatient(dispatch: React.ActionDispatch<[action: ACTION_TYPE]>, value: []){
    dispatch({
        type: "SET_NEXT_PATIENT",
        payload: value
    })
}

export const Patient = {
    setPatient,
    setData,
    setNextPatient
}
