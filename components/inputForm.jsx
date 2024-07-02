import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { BlurView } from "expo-blur";

const InputForm = ({ control, errors }) => {
  return (
    <BlurView intensity={90} style={styles.blurContainer}>
      <View style={styles.formContainer}>
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
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
    gap: 5,
    top: 0,
    bottom: 0,
  },
  input: {
    fontSize: 16,
    padding: 30,
    width: "100%",
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});

export default InputForm;
