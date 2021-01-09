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
    userLogin = (username, password)=>{
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(()=>{
          return alert("Successfully Login")
        })
        .catch((error)=> {
         
          return alert(error)
        })
      }
    
      userSignUp = (username, password) =>{
        firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((response)=>{
          return alert("User Added Successfully")
        })
        .catch(function(error) {
         
          return alert(error)
        });
      }
      render(){
        return(
          <View style={styles.container}>
            {/* <View style={styles.profileContainer}>
            
            </View> */}
            <Text style={{margin:20,fontWeight:'bold',color:'red',fontSize:60}}>Sign Up and Login Screen</Text>
            <View style={styles.buttonContainer}>
             
              <View style={{alignItems:'center'}}>
                <TextInput placeholder='Enter username'
                style={styles.inputbox}
                keyboardType ='email-address'
                onChangeText={(text)=>{
                  this.setState({
                    username: text
                  })
                }}
                />
              </View>
             
              <View style={{alignItems:'center'}}>
                <TextInput placeholder='Enter password'
                  style={styles.inputbox}
                  secureTextEntry = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                />
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity
                  style={[styles.buttons,{marginBottom:10}]}
                  onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
                  >
                  <Text style={{color:'white', fontSize:18, fontStyle:'italic',marginLeft:10}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={()=>{this.userSignUp(this.state.username, this.state.password)}}
                  >
                  <Text style={{color:'white', fontSize:18, fontStyle:'italic',marginLeft:5}}>SIGN UP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
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
    margin:10,
},
buttons:{
    backgroundColor:"red",
    border:"solid",
    color:"white",
    margin:20,
    width:90,
    height:35,
}
});
