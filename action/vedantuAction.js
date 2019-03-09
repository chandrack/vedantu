import axios from 'axios';
import {LOADING, SUCCESS, FAILURE } from './constant'
export function vedantu(invitedvisitor){
  console.log(invitedvisitor);
  var data = new FormData();
   data.append('id', '1');
   return (dispatch) => {
     axios({
        method:'post',
        url: 'https://api.github.com/users/supreetsingh247/repos',
        headers: ['Accept: application/json',
        'Content-Type: application/json',
        'User-Agent: request' ],
        crossDomain: true,
        data
    }).then((res) => {
        if(res.status===200) {
        dispatch(getSuccess(res.data.data));
        }
    }).catch((err)=> {
        dispatch(getFailure(err.response.data));
    });
  }
}

export function getLoading() {
  return {
    type: LOADING
  }
}

export function getSuccess(data) {
  return {
    type: SUCCESS,
    data
  }
}

export function getFailure(error) {
  return {
    type: FAILURE,
    error
  }
}

