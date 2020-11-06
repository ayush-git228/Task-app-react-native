import React , {useState} from 'react';
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native';

export const TaskInput = (props) => {
    const [enteredTask, setEnteredTask] = useState('');

    const InputHandler = (value)=>{
        setEnteredTask(value);
    }

    const addTaskHandler = ()=>{
        props.onAddTask(enteredTask);
        setEnteredTask('');     // Sets input field to reset(empty string);
    }

    return (
        <Modal visible={props.visible} animationType= "fade" >
            <View style={styles.inputContainer} >
                <TextInput style={styles.textInput} placeholder="Add Task" 

                 onChangeText={InputHandler} value={enteredTask} />
                <View style={styles.buttonSection} >
                    <View style={styles.button} >           
                        <Button title="CANCEL" color = "red" onPress = {props.onCancel} />
                    </View>
                    <View style={styles.button} >
                        <Button title="ADD" color = "green" onPress ={addTaskHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: "center", 
        alignContent: "center" 
    },
      textInput:{
        borderColor: "black", 
        borderWidth: 1, 
        marginLeft: 17,
        marginRight: 17,
        alignContent: "center", 
        padding: 13,
        marginBottom: 10,
    },
    buttonSection:{
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button:{
        width: "27%",
        borderWidth: 1,
    }
})





// onPress={props.onAddTask.bind(this, enteredTask)}
// "Modal" takes the full height, width of the screen but "View" take space acc to its Chidren like height: height of all its children combined 
// and width: width of the broadest children.
// Can't use "inline" styling in Button.