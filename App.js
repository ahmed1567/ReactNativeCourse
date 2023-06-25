import { useState } from 'react';
import { StyleSheet, Text, TextInput, View ,Button,StatusBar,SafeAreaView, ScrollView,FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList,setGoalsList]=useState([])
  const [modalIsVisible,setModalIsVisible]=useState(false)

  addGoalHandler=(enteredGoalText)=>{
    setGoalsList((currentGoals)=>[...currentGoals,{text:enteredGoalText,id:Math.random().toString()}])
    modalVisibility()
  }
  deleteGoalHandler=(id)=>{
    setGoalsList((currentGoals)=>{return currentGoals.filter((goal)=>goal.id!==id)})

  }

  modalVisibility=()=>{
       setModalIsVisible(!modalIsVisible)
  }
  return (
    <SafeAreaView style={styles.container} >
      <Button title='Add New Goal' color="#5e0acc" onPress={modalVisibility}/>
      {modalIsVisible && <GoalInput visible={modalIsVisible}  onAddGoal={addGoalHandler} onCancel={modalVisibility} />}

        <View style={styles.goalsContainer}>
          {/* <ScrollView  alwaysBounceVertical={false} >
            {goalsList.map((goal)=>( 
              <View style={styles.goalItem} id={goal}> 
                <Text style={styles.goalText} > {goal} </Text> 
              </View> 
            ))}
          </ScrollView> */}

          <FlatList  data={goalsList} renderItem={(itemData)=>{
              return(
                <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteGoal={deleteGoalHandler} />
              )           
          }} alwaysBounceVertical={false} >

          </FlatList>

          
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop:Platform.OS==="android"? StatusBar.currentHeight : 0,
    paddingHorizontal:16,
    flex:1
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingBottom:30,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc",
    flex:1
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    padding:8,
    marginRight:20
  },
  goalsContainer:{
    flex:5,
  },
  goalItem:{
    margin:8,
    borderRadius:6,
    backgroundColor:"#5e0acc",
    padding:8,
   
  },
  goalText:{
     color:"#fff"
  }


});
