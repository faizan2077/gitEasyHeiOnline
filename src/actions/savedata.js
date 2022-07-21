import {SAVE_DATA} from "./types"
export const savedata = (data) => {
  return (dispatch) =>{
    dispatch({
      type:SAVE_DATA,
      payload: data
    })
  }
}
