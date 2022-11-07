import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View ,Button, TextInput,ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'


export default function App() {
 const [enteredGoalText, setEnteredGoalText] = useState('')
 const [courseGoals,setCourseGoals] =useState([])
 
 const goalInputHandler=(enteredText)=>{
    setEnteredGoalText(enteredText)
 }

 const addGoalHandler=()=>{
  setCourseGoals(currentCourseGoals=>[...currentCourseGoals,
   {text: enteredGoalText, id:Math.random().toString()}
  ])
 }
 

  return (
     
      <View style={styles.appContainer}>
      <View  style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal" 
        onChangeText={goalInputHandler} />
        <Button  title="Add Goal" onPress={addGoalHandler}/>
      </View>
      
      < View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return(
            <GoalItem goals={courseGoals} />
          )
        }} 
        keyExtractor={(item,index)=>{
          return item.id
        }}
        alwaysBounceVertical={false} />
           
      </View>
      </View>
//  <View style={{padding:50,flexDirection:'row' ,width:'80%',height:300}}>

// <View style={{ 
//       backgroundColor:'red',
    
//       justifyContent:'center',
//       alignItems:'center',
//       flex:1
//       }}>
//           <Text>1</Text>
//       </View>
//       <View style={{ 
//       backgroundColor:'blue',
//        flex:1,
//       justifyContent:'center',
//       alignItems:'center'
      
//       }}>
//           <Text>2</Text>
//       </View>
//       <View style={{ 
//       backgroundColor:'green',
//       justifyContent:'center',
//       alignItems:'center',
//       flex:1
      
//       }}>
//           <Text>3</Text>
//       </View>

//  </View>
    
     
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
    paddingHorizontal:16,
    flex:1
  },
 
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
   marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
 
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex:5
  }
  
});
