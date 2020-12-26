import AddNumber from '../components/AddNumber'
import {connect} from 'react-redux'

function mapDispatchToProps (dispatch) {
    return {
        clickUpdatedNum : function (number) {
            let action = {
                type:'INCREMENT',
                addNum: number
            }
            dispatch(action)
        }
    }
}


export default connect(null, mapDispatchToProps)(AddNumber)

// import AddNumber from '../components/AddNumber'
// import React, { Component } from 'react';
// // import store from '../store'
// import {connect, ReactReduxContext} from 'react-redux'




// /*
// A : component 한테 줄 props 를 전달 (state의 값) - redux store의 state 의 값을 갖고와서 하위 컴포넌트에 props로 전달
// mapStateToProps

// B : component 한테 줄 props 를 전달 (event) - redux store에 state을 변경하기 위한 이벤트 함수를 하위 컴포넌트의 props로 전달한다. 
// mapDispatchToProps
// */


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClick : (number) => {
//             let action={
//                 type:'INCREMENT',
//                 addNum:number
//             }
//             dispatch(action)
//         }
//     }
// }


// export default connect(null,mapDispatchToProps)(AddNumber)




// // export default class extends Component {

// //     increment (number) {
// //         let action={
// //             type:'INCREMENT',
// //             addNum:number
// //         }
// //         store.dispatch(action)
// //     }

// //     render() {
// //         return (
// //             <div>
// //                 <AddNumber onClick={this.increment.bind(this)} />
// //             </div>
// //         );
// //     }
// // }
