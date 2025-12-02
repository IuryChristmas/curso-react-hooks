export function numberAdd2(dispatch) {
    dispatch({type: 'numberAdd2'})
}
export function numberMultiply7(dispatch) {
    dispatch({type: 'numberMultiply7'})
}
export function numberDivide25(dispatch) {
    dispatch({type: 'numberDivide25'})
}
export function numberParseInt(dispatch) {
    dispatch({type: 'numberParseInt'})
}
export function numberAddN(dispatch, number) {
    dispatch({type: 'numberAddN', payload: number})
}