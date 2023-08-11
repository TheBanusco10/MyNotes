import {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {supabase} from '../../../utils/supabase';

export const RegisterForm = ({setShowLoginForm, navigation}) => {
  const [registerInformation, setRegisterInformation] = useState({
    email: '',
    password: '',
  });

  const handleRegisterUser = async () => {
    const {data, error} = await supabase.auth.signUp(registerInformation);

    if (!error) {
      console.log(data.user);

      navigation.navigate('Dashboard');

      setRegisterInformation({
        email: '',
        password: '',
      });
    }
  };

  return (
    <View className="w-3/4 py-8 px-4 bg-white rounded shadow-lg">
      <Text className="text-2xl text-center">Create account</Text>
      <TextInput
        className="border-b border-b-emerald-600"
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={value =>
          setRegisterInformation({
            ...registerInformation,
            email: value,
          })
        }
      />
      <TextInput
        className="border-b border-b-emerald-600"
        secureTextEntry
        placeholder="Password"
        onChangeText={value =>
          setRegisterInformation({
            ...registerInformation,
            password: value,
          })
        }
      />
      <Pressable
        className="flex justify-center items-center mt-8 bg-emerald-600 rounded text-center text-white p-2"
        onPress={() => handleRegisterUser()}>
        <Text className="text-white uppercase tracking-wider">
          Create account
        </Text>
      </Pressable>
      <Pressable onPress={() => setShowLoginForm(true)}>
        <Text className="mt-4 border-b">Log into MyNotes</Text>
      </Pressable>
    </View>
  );
};
