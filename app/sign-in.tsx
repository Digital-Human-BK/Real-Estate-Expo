import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {};

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        // contentContainerStyle={{ flexGrow: 1 }}
        contentContainerClassName="flex-grow pb-10"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={images.onboarding}
          className="w-full h-[400]"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to ReState
          </Text>
          <Text className="text-3xl font-rubik-medium text-black-300 text-center mt-2">
            Let's get you closer to {"\n"}
            <Text className="text-primary-300">Your dream home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-600 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="font-rubik-medium text-black-300 text-lg ml-3">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
