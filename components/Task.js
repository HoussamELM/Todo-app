import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'

function Task({ todo, important, press, id }) {

    return (
        <TouchableOpacity style={styles.item} onPress={() => { press(id) }}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{todo}</Text>
            </View>
            <View style={important ? styles.circularGreen : styles.circularRed}></View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: '80%',
    },
    text: {

    },
    circularGreen: {
        width: 12,
        height: 12,
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 5,
    },
    circularRed: {
        width: 12,
        height: 12,
        borderColor: "red",
        borderWidth: 2,
        borderRadius: 5,
    }
})

export default Task;