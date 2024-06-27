import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import InputForm from "../../components/inputForm";
import LoadingScreen from "../../components/LoadingScreen";
import { GEMINI_API_KEY } from "@env";

const API_KEY = GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-pro";

const Home = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: MODEL_NAME,
      });

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 12000,
      };
      const safetySetting = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
      ];
      const chatSession = model.startChat({
        generationConfig,
        safetySettings: safetySetting,
        history: [],
      });

      const prompt = `
      Name: ${data.name}
      Starting Place: ${data.startingPlace}
      Destination: ${data.destination}
      Duration: ${data.duration} Days
      Budget: ${data.budget} INR

      Please provide a detailed day-wise itinerary for the trip, including the following information for each day:
      1. Famous places to visit with brief descriptions.
      2. Famous street and restaurant foods to try, including must-visit food spots.
      3. Good things to do and fun activities available locally.
      4. Recommendations for good hotels to stay, along with a rough price breakdown.
      5. Approximate local travel prices.
      6. Estimated food costs.
      
      Ensure the plan aligns with the budget provided and covers the entire duration of the trip.`;

      const result = await chatSession.sendMessage(prompt);
      const response = result.response;
      console.log(response.text());
      navigation.navigate("Detail", { itinerary: response.text() });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen style={styles.loading} />
      ) : (
        <View style={styles.homeContainer}>
          <Text style={styles.heading}>Welcome to ExploreEase!</Text>
          <Text style={styles.text}>
            Fill up the important details and watch ExploreEase Ease up Your
            Trip!!
          </Text>
          <InputForm control={control} errors={errors} />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Genarate Itinerary</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "centre",
    alignItems: "centre",
    backgroundColor: "#fff",
  },
  homeContainer: {
    width: "100%",
    alignItems: "flex-start",
    padding: 40,
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 90,
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    padding: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Home;
