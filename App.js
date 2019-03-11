import React, { Component } from 'react';
 
import { StyleSheet, ActivityIndicator, Icon,ListView, Text, View, Alert,Button,Image,TouchableOpacity } from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";

class Vedantu extends Component {
  
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,

    }

  }

GetItem (name) {
   
  Alert.alert(name);
 
}
 
componentDidMount(){

  return fetch('https://api.github.com/users/supreetsingh247/repos')
  .then((response) => response.json())
  .then((responseJson) => {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      isLoading: false,
      dataSource: ds.cloneWithRows(responseJson),
    }, function() {
      // In this block you can do something with new state.
    });
  })
  .catch((error) => {
    console.error(error);
  });

}
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
      <View style={styles.MainContainer}>
 
        <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}

          enableEmptySections = {true}
 
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
          onPress={this.GetItem.bind(this, rowData.name)} >{rowData.name}</Text>}

        />
 
      </View>
    );
  }
}

class Home extends Component {
 
  toggleDrawer = () => {
 
    this.props.navigationProps.toggleDrawer();
 
  }
 
  render() {
 
    return (
 
      <View style={{ flexDirection: 'row' }}>
 
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
 
          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
 
        </TouchableOpacity>
      
      </View>
 
    );
 
 
  }
}

class Home_Screen extends Component {
 
  static navigationOptions =
    {
      title: 'Overview',
 
    };

 
  render() {
 
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={styles.text}></Text>
        <Text style={styles.text}>This is Overview Screen Activity.</Text>
 
 
      </View>
    );
  }
}


class Repository_Screen extends Component {
  state = {
    names: [
       {
          id: 0,
          name: 'bgoyal2222/react-native-multiselect-view',
          title:'this will help to create a multiselect list UI with great experence',
          Icon:'far fa-star' },
       {
          id: 1,
          name: 'bgoyal2222/react-native-checkbox-component/blob/master/README.md',
          title:'this will help to create a multiselect list UI with great experence',
          Icon:'far fa-star'
       },
       {
          id: 2,
          name: 'bgoyal2222/react-native-checkbox-component/blob/master/README.md',
          title:'this will help to create a multiselect list UI with great experence',
          Icon:'far fa-star'
       },
       {
          id: 3,
          name: 'bgoyal2222/react-native-checkbox-component/blob/master/README.md',
          title:'this will help to create a multiselect list UI with great experence',
          Icon:'far fa-star'
       }
    ]
 }
 
  static navigationOptions =
    {
      title: 'Repository-11',
    };
 
  render() {
 
    return (
 
      <View>
      {
         this.state.names.map((item, index) => (
            <TouchableOpacity
               key = {item.id}
               style = {styles.container}
               onPress = {() => this.alertItemName(item)}>
               <Text style={styles.text}>
                  {item.name},
                  {item.title},
                  {item.Icon}
                  

                  

               </Text>
              
  
            </TouchableOpacity>
         ))
      }
   </View>
    );
  }
}



class Stars_Screen extends Component {
 
  static navigationOptions =
    {
      title: 'Starts-6',
    };
 
  render() {
 
    return (
 
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Starts Screen Activity.</Text>
 
 
      </View>
    );
  }
}


class Fork_Screen extends Component {
 
  static navigationOptions =
    {
      title: 'Fork',
    };
 
  render() {
 
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={styles.text}>This is Fork Screen Activity.</Text>
 
      </View>
    );
  }
}
  
export const Tab_1 = createMaterialTopTabNavigator({
  First: {
    screen: Home_Screen,
  },
  Second: {
    screen: Repository_Screen,
  },
  Third: {
    screen: Stars_Screen,
  },
  Forth: {
    screen: Fork_Screen,
  }
}, {
    tabBarPosition: 'top',
 
    swipeEnabled: true,
 
    tabBarOptions: {
 
      activeTintColor: '#fff',
      pressColor: '#004D40',
      inactiveTintColor: '#fff',
      style: {
 
        backgroundColor: '#00B8D4'
 
      },
 
      labelStyle: {
        fontSize: 16,
        fontWeight: '200'
      }
    }
 
  });
 
const First_2_Tabs = createStackNavigator({
  
  First: {
    screen: Tab_1,
    navigationOptions: ({ navigation }) => ({
      title: 'First Screen',
      headerLeft: <Home navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00B8D4',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      
      headerTintColor: '#fff',
    })
  },
});
 
const MyDrawerNavigator = createDrawerNavigator({
 
  Home_Menu_Label: {
 
    screen: First_2_Tabs,
 
  }
 
 
 
});
 
export default createAppContainer(MyDrawerNavigator);
 
const styles = StyleSheet.create({
 
  MainContainer: {
 
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
 
  },
 
  text:
  {
    fontSize: 22,
    color: '#000',

    marginBottom: 10
  },
 
  container: {
    padding: 15,
    marginTop: 10,
    
    backgroundColor: '#ffe',
    alignItems: 'center',
 },
 
rowViewContainer: {
  fontSize: 20,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
}
 
});
