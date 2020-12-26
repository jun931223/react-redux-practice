import {createStore} from 'redux'
// import {reducer} from './reducers'

let initialState = {
    displayNum:0
}

let reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return Object.assign({}, state, {displayNum: state.displayNum+action.addNum})


    default:
        return state
    }
}

const store = createStore(reducer
// chrome에서 개발자 도구에 Redux 의 동작을 확인 할 수 있게 인자로 추가
, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



export default store

/*
store는 state = {}
methods 
1. getState()
2. dispatch()
3. subscribe()
4. replaceReducer()
*/

