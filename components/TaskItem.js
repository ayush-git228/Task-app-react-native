import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const TaskItem = (props) => {
    return (
        <TouchableOpacity activeOpacity ={0.7} onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItem} >
                <Text> {props.title} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: "black",
        borderWidth: 1,
      }
})




// Toucable opacity is like a parent component here and what it does it shows a toucable opacity effect on pressing the listItem
// activeOpacity measures level of opacity effect.
// We could use props.anyname here(any name can be props name) , here props containing itemData.item.value which will pass in App.js