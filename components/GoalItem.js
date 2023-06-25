import { Pressable, StyleSheet ,Text, View} from "react-native";


const GoalItem = (probs) => {

  return (
    <Pressable style={({pressed})=>pressed && styles.pressedItem} android_ripple={{color:"red"}} onPress={probs.onDeleteGoal.bind(this,probs.id)}>
      <View style={styles.goalItem}> 
          <Text style={styles.goalText} > {probs.text} </Text> 
      </View>
    </Pressable>

  )
}

const styles = StyleSheet.create({
    goalItem:{
      margin:8,
      borderRadius:6,
      backgroundColor:"#5e0acc",
     
    },
    goalText:{
       color:"#fff"
       ,padding:8
    },
    pressedItem:{
      opacity:0.5
    }
  });

export default GoalItem
