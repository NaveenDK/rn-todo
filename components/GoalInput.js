 
import {StyleSheet,View,TextInput,Button,Modal,Image} from 'react-native'
import {useState} from 'react'

const GoalInput = ({onAddGoal,visible ,onCancel}) => {


  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler=(enteredText)=>{
    setEnteredGoalText(enteredText)
 }

 const addGoalHandler = ()=>{
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
 }

  return (
   <Modal visible={ visible} animationType="slide">
    <View  style={styles.inputContainer}>
        <Image style={styles.image}source={require('../assets/images/goal.png')} />
        <TextInput style={styles.textInput} placeholder="Your course goal" 
        onChangeText={goalInputHandler} value={enteredGoalText} />
        <View style={styles.buttonContainer}> 
         <View style={styles.button} >
          <Button title="Add Goal" onPress={addGoalHandler}/>
         </View>
         <View style={styles.button} >
            <Button title='Cancel' onPress={onCancel} /> 
         </View>
          
        </View>
      </View>
    </Modal> 
  )
}

export default GoalInput

const styles= StyleSheet.create({
   
  inputContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
   marginBottom:24,
   padding:16,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    backgroundColor:'#311b6b'
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'100%',
    marginRight:8,
    padding:8
  },
  buttonContainer:{
    marginTop:8,
    flexDirection:'row'
  },
  button:{
    width:'40%',
    marginHorizontal:8
  }
})