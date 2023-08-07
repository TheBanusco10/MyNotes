import {Button, Pressable, Text, TextInput, View} from 'react-native';

export default LoginScreen = ({navigation}) => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-3/4 py-8 px-4 bg-white rounded shadow-lg">
        <Text className="text-2xl text-center">Welcome to MyNotes 📃</Text>
        <TextInput
          className="border-b border-b-emerald-600"
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          className="border-b border-b-emerald-600"
          secureTextEntry
          placeholder="Password"
        />
        <Pressable
          className="flex justify-center items-center mt-8 bg-emerald-600 rounded text-center text-white p-2"
          onPress={() => {}}>
          <Text className="text-white uppercase tracking-wider">Log in</Text>
        </Pressable>
        <Text className="mt-4 border-b">Create a new account</Text>
      </View>
    </View>
  );
};
