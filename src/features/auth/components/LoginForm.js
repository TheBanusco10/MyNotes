import {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {supabase} from '../../../utils/supabase';

export const LoginForm = ({setShowLoginForm, navigation}) => {
  const [loginInformation, setLoginInformation] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    const {data, error} = await supabase.auth.signInWithPassword(
      loginInformation,
    );

    if (!error) {
      console.log(data.user);

      navigation.navigate('Dashboard');

      setLoginInformation({
        email: '',
        password: '',
      });
    } else {
      console.error(error);
    }
  };

  return (
    <View className="w-3/4 py-8 px-4 bg-white rounded shadow-lg">
      <Text className="text-2xl text-center">Welcome to MyNotes 📃</Text>
      <TextInput
        className="border-b border-b-emerald-600"
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={value =>
          setLoginInformation({
            ...loginInformation,
            password: value,
          })
        }
      />
      <TextInput
        className="border-b border-b-emerald-600"
        secureTextEntry
        placeholder="Password"
        onChangeText={value =>
          setLoginInformation({
            ...loginInformation,
            password: value,
          })
        }
      />
      <Pressable
        className="flex justify-center items-center mt-8 bg-emerald-600 rounded text-center text-white p-2"
        onPress={() => handleLogin()}>
        <Text className="text-white uppercase tracking-wider">Log in</Text>
      </Pressable>
      <Pressable onPress={() => setShowLoginForm(false)}>
        <Text className="mt-4 border-b">Create a new account</Text>
      </Pressable>
    </View>
  );
};
