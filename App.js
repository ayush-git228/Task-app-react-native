import React , { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';       // Text & View are components given by react native that are compiled to 
import { TaskInput } from './components/TaskInput';
import { TaskItem } from './components/TaskItem';


export default function App() {

  const [tasks, setTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = (taskTitle)=>{
    setTasks( (currentTasks) => [...currentTasks, {id: Math.random().toString(), value: taskTitle}] );  // This is passed as a function b/c since we are updating the most recent state which is not 
   // 100% sure it is right or not then setting a function always helps as the func will contain the latest value as its parameter(goals) here.
    setIsAddMode(false);   // React will run this two functions at once giving us our required modal.
  }

  const deleteTaskHandler = (taskId)=>{
    setTasks( (currentTasks)=>{
      return currentTasks.filter((task)=> task.id !== taskId);
    })
  }
      
  const onCancelModal = () =>{    // Need a function can't pass setIsAddMode directly in the onCancel prop.
    setIsAddMode(false);
  }

  return (

    <View style={styles.mainContainer} >          
      <Button title="Add New Task" onPress={()=>setIsAddMode(true)} />
      
      <TaskInput visible={isAddMode} onAddTask={addTaskHandler} onCancel = {onCancelModal} />
      
      <View>
        <FlatList keyExtractor = {(item, index) => item.id} data={tasks} 
         renderItem={ (itemData) => <TaskItem id={itemData.item.id} title={itemData.item.value} onDelete={deleteTaskHandler} />}  />
      </View>

      <View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({       
  mainContainer: {
    padding: 75,
  },

});





// native platform widgets. And Stylesheet is an extra feature that helps in styling.
// We can say the View & Text here can be said components or widgets.
// We could also have passed the itemData.item.id directly in the deleteTaskHandler that would have worked too
// KeyExtractor tells FlatList how to extract key like by id or by key. In react native id is "uid". 
// "ByDefault" FlatList looks for a key value to uniquely identify elements, but can change it with KeyExtractor.
// KeyExtractor is a function that takes two arguments: the item it is looking at and the index of that item.
// FlatList maps out the list on itself. Also it returns a lot of things so to access just the data part of it we do parameter.item
// ScrollView(closed tag) has one problem: even the items that are not currently visible are fully rendered.
// FlatList optimizes ScrollView rendering by only rendering those unique, necessary items and not those redundant ones.

//... Spread operator says take the array provided in its present state and if a value provided after it just add that value into that prsent array.
/* The <View> allows you to group other components together, 
structure them (i.e. provide a layout) and (optionally) add some container styling. 
default styling/ layout behavior of a <View> component: It uses "FLexbox* to organize its child component */

// () : It is not used in React function when calling on a onChange method b/c It will execute at the time of rendering ui only i.e 
// before even change in the value, not at the change everytime happen in the entered value i.e at at every "KeyStroke".

/* stOutputText here changes state of outputText  */
 // Though it offers CSS like styling with familiar CSS names but its all in javascript no CSS file. It adds validation to if some property is not CSS one.

 

