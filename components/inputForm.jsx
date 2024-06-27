import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const InputForm = ({ control, errors }) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: "Name is required" }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            placeholder="Enter your Name"
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        rules={{ required: "Starting place is required" }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            placeholder="Enter your Starting place"
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
        name="starting place"
      />
      <Controller
        control={control}
        rules={{ required: "Destination is required" }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            placeholder="Enter your Destination"
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
        name="destination"
      />
      <Controller
        control={control}
        rules={{ required: "Duration is required" }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            placeholder="Enter Duration of your Trip in Days"
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            keyboardType="numeric"
          />
        )}
        name="duration"
      />
      <Controller
        control={control}
        rules={{ required: "Budget is required" }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            placeholder="Enter your Budget in INR"
            placeholderTextColor="gray"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            keyboardType="numeric"
          />
        )}
        name="budget"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});

export default InputForm;
