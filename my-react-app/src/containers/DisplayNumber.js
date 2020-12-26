import DisplayNumber from '../components/DisplayNumber'
import {connect} from 'react-redux'

function mapStateToProps (state) {
    return {
        number:state.displayNum,
        // unit:'kg'
    }
}


export default connect(mapStateToProps)(DisplayNumber)

// import DisplayNumber from '../components/DisplayNumber'
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import store from '../store'

// const mapStateToProps = (state) => {
//     return {
//         number:state.displayNum
//     }
// }

// // const mapDispatchToProps = (dispatch) => {

// // }

// export default connect(mapStateToProps)(DisplayNumber)

// export default class extends Component {
//     state = {number: store.getState().displayNum}
//     constructor (props) {
//         super(props)
//         store.subscribe(()=> {
//             this.setState({number: store.getState().displayNum})
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <DisplayNumber number={this.state.number}/>
//             </div>
//         );
//     }
// }

