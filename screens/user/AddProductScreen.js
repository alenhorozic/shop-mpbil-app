import React from "react";
import { Text, View, TextInput, ScrollView, StyleSheet } from "react-native";

const AddProductScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title form</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    form: {
        margin:20
    },
    formControl: {
        width: "100%",
    },
    label: {
        fontWeight: "bold",
        marginVertical:8,
    },
    input: {
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    }
});


export default AddProductScreen;