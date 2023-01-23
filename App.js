import { useState } from 'react';
import { Platform, StyleSheet, StatusBar, TouchableOpacity, ScrollView, KeyboardAvoidingView, Text, TextInput, View, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Task from './components/Task';
import { data } from './data';

export default function App() {

  const [todos, setTodos] = useState(data);
  const [currentTodo, setCurrentTodo] = useState('')

  const handleChange = (text) => {
    setCurrentTodo({ todo: text })
    console.log(currentTodo)
  }

  const handleSubmit = () => {
    if (currentTodo === '') {
      alert("Please enter a Task!")
    } else {
      Alert.alert('', 'Is this todo important?', [
        {
          text: 'No',
          onPress: () => {
            setTodos([...todos, { ...currentTodo, important: false, id: Math.floor(Math.random() * 9999) }])
            setCurrentTodo('')
          }
        },
        {
          text: 'Yes',
          onPress: () => {
            setTodos([...todos, { ...currentTodo, important: true, id: Math.floor(Math.random() * 9999) }])
            setCurrentTodo('')
          }
        },
      ])
    }
  }
  const handlePress = (id) => {
    console.log("test", id)

    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    console.log(todos)
  }


  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            {todos.map(todo => (
              <Task todo={todo.todo} important={todo.important} key={todo.id} press={handlePress} id={todo.id} />
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <View style={styles.Add}>
          <TextInput onChangeText={handleChange} value={currentTodo} style={styles.input} placeholder={'Write a task'} />
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 15,
  },
  Add: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",

  },
  addWrapper: {

  },
  addText: {
    fontSize: 30,
  },
  input: {
    width: "90%",
    height: "100%",
  }
})