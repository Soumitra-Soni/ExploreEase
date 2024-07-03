import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import BgAnimation from "../../components/BgAnimation";
import InputForm from "../../components/inputForm";
import LoadingScreen from "../../components/LoadingScreen";
import { GEMINI_API_KEY } from "@env";

const API_KEY = GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-pro";

const TravelData = () => {
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
      <StatusBar translucent backgroundColor="#000" barStyle={"dark-content"} />
      {isLoading ? (
        <LoadingScreen style={styles.loading} />
      ) : (
        <>
          <BgAnimation />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Fill up the details and watch ExploreEase Ease up Your Trip!!
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <InputForm control={control} errors={errors} />
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "#000",
    padding: 30,
    width: "100%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 40,
    marginTop: 100,
  },
  bottomContainer: {
    width: "100%",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
    fontWeight: "bold",
  },
  button: {
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#fff",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 20,
    marginVertical: 40,
  },
});

export default TravelData;
