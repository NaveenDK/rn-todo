import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View ,Button, TextInput,ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

 const [courseGoals,setCourseGoals] =useState([])
 const [modalIsVisible,setModalIsVisible] = useState(false)
 

function startAddGoalHandler(){
  setModalIsVisible(true)
}

const endAddGoalHandler = ()=>{
  setModalIsVisible(false)
}
 const addGoalHandler=(enteredGoalText)=>{
  setCourseGoals(currentCourseGoals=>[...currentCourseGoals,
   {text: enteredGoalText, id:Math.random().toString()}
  ])
  endAddGoalHandler()
 }
 
const deleteGoalHandler=(id)=>{
  setCourseGoals(currentCourseGoals=>{
    return currentCourseGoals.filter((goal)=>goal.id!==id)
  })
}

  return (
     
      <View style={styles.appContainer}>
       <Button title='Add New Goal ' color="#5e0acc" onPress={startAddGoalHandler} /> 
     <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}
     onCancel={endAddGoalHandler}
     />
      
      < View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return(
            <GoalItem 
            id={itemData.item.id}
            text={itemData.item.text}  onDeleteItem={deleteGoalHandler}/>
          )
        }} 
        keyExtractor={(item,index)=>{
          return item.id
        }}
        alwaysBounceVertical={false} />
           
      </View>
      </View>    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
    paddingHorizontal:16,
    flex:1
  },
 


  goalsContainer:{
    flex:5
  }
  
});
