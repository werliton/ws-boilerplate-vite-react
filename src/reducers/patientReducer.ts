
type ACTION_TYPE = {
    type: "SET_PATIENT" | "SET_DATA";
    payload: any;
  };
  
  export const initialState = {
    patientId: "",
    data: [] as any,
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
  
      default:
        return state;
    }
  }