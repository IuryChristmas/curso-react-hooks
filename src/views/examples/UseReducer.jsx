import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import {numberAdd2, numberMultiply7, numberDivide25, numberParseInt, numberAddN, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?  
                <span className="text">{state.user.name}</span>
                : <span className="text">Sem Usuário</span>
            }
                
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" 
                        onClick={() => login(dispatch, 'Iury')}>
                        Login
                    </button>
                    <button className="btn" 
                        onClick={() => numberAdd2(dispatch)}>
                        +2
                    </button>
                    <button className="btn" 
                        onClick={() => numberMultiply7(dispatch)}>
                        *7
                    </button>
                    <button className="btn" 
                        onClick={() => numberDivide25(dispatch)}>
                        Divide por 25
                    </button>
                    <button className="btn" 
                        onClick={() => numberParseInt(dispatch)}>
                        Converte para inteiro
                    </button>
                    <button className="btn" 
                        onClick={() => numberAddN(dispatch, 15)}>
                        Add número
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
