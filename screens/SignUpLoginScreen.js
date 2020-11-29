import  React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config';
export default class App extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
        }
    }
    userSignUp=(username,password)=>{
        firebase.auth().createUserWithEmailAndPassword(username,password)
        .then((response)=>{
            return(
                alert("User added Successfully")
            )
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return alert(errorMessage)
        });
    }
    userLogin=(username,password)=>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{
            return alert("Successfully Login")
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return alert(errorMessage)
        })
    }
  render(){
  return (
    <View style={styles.container}>
        <Text style={{margin:20,fontWeight:'bold',color:'red',fontSize:60}}>Sign Up and Login Screen</Text>
      <TextInput placeholder='Enter username'
      style={styles.inputbox}
      keyboardType="email-address" 
           onChangeText={(text)=>{
               this.setState({
                   username:text
               })
      }} />
    <TextInput placeholder='Enter password'
      style={styles.inputbox}
      secureTextEntry={true}
      onChangeText={(text)=>{
          this.setState({password:text})
      }} />
      <TouchableOpacity style={styles.buttons} 
      onPress={this.userSignUp(this.state.username,this.state.password)}>
          <Text style={{color:'white',padding:5}}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} 
      onPress={this.userLogin(this.state.username,this.state.password)}>
          <Text style={{color:'white',padding:5}}>Login</Text>
      </TouchableOpacity>
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
  inputbox:{
    height:50,
    width:300,
    border:"solid",
    borderWidth:3,
    //borderColor:"red",
},
buttons:{
    backgroundColor:"red",
    border:"solid",
    color:"white",
    margin:20,
    width:70,
    height:35,
}
});
