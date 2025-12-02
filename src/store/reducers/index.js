export function reducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberMultiply7':
            return {...state, number: state.number * 7}
        case 'numberDivide25':
            return {...state, number: state.number / 25}
        case 'numberParseInt':
            const numberInt = Number(state.number)
            return {...state, number: parseInt(numberInt)}
        case 'numberAddN':
            return {...state, number: state.number + action.payload}
        case 'login':
            return {...state, user: {name: action.payload}}
        default:
            return state
    }
}