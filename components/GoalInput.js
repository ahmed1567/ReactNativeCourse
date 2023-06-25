import { useState } from 'react';
import { StyleSheet ,Text, TextInput, View,Button, Modal ,Image} from "react-native";
const GoalInput = (probs) => {
  const [enteredGoalText,setEnteredGoalText]=useState('');
  goalInputHandler=(enteredText)=>{
  setEnteredGoalText(enteredText)
  }
  addGoalHandler=()=>{
    probs.onAddGoal(enteredGoalText)
    setEnteredGoalText("")
  }

  return (
    <Modal visible={probs.visible} animationType='slide'>
      <View style={styles.inputContainer}>
         <Image style={styles.image} source={require('../assets/images/goal.jpg')} />

         <TextInput  style={styles.textInput} placeholder='enter your course goals' value={enteredGoalText} onChangeText={goalInputHandler}  />
        
        <View style={styles.buttonContainer}>
          <View styles={styles.button}>
            <Button  title='Add Goals' onPress={addGoalHandler}/>
          </View>
          <View styles={styles.button}>
            <Button  title='Cancel' onPress={probs.onCancel} />
          </View>
        </View>

          
      </View>  
    </Modal>

  )
}


const styles = StyleSheet.create({
    inputContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:30,
      padding:16,
      marginBottom:200
    }
    ,
    textInput:{
      borderWidth:1,
      borderColor:'#cccccc',
      width:'100%',
      padding:8,
      marginRight:20
    },
    buttonContainer:{
      marginTop:16,
      flexDirection:'row',
    },
    button:{
      width:"40%",
      marginHorizontal:8
    },
    image:{
      width:400,
      height:400,
      margin:20
    }
  });

export default GoalInput
