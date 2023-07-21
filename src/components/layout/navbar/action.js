export const SET_OPEN_HEADER = "SET_OPEN_HEADER";
export const SET_CLOSE_HEADER = "SET_CLOSE_HEADER";

export const openHeader = (dispatch) => {
    return () => {
        dispatch({
            type: SET_OPEN_HEADER,
            payload: true
        })
    }
}

export const closeHeader = (dispatch) => {
    return () => {
        dispatch({
            type: SET_CLOSE_HEADER,
            payload: false
        })
    }
}