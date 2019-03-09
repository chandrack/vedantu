import React from 'react';

import { StyleSheet, Text, View ,Root} from 'react-native';
import { vedantu } from './action/vedantuAction';
import {connect, Provider} from 'react-redux';
import configureStore from './reducer/store';

 class Index extends React.Component {
constructor(props)
{
  super(props)

}
  componentDidMount(){
    let data = {id:1}
    this.props.getData(data);
  }
  
  render() {
    return (
     
     <View>
         <Text>Welcome</Text>
     </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps (state) {
  return {
    result: state.vedantuReducer,
    errors: (state.vedantuReducer ? state.vedantuReducer: null)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getData: (data) => dispatch(vedantu(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
