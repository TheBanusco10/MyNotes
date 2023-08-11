import {View} from 'react-native';
import {LoginForm} from '../components/LoginForm';
import {useState} from 'react';
import {RegisterForm} from '../components/RegisterForm';

export default LoginScreen = ({navigation}) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  return (
    <View className="flex-1 justify-center items-center">
      {showLoginForm ? (
        <LoginForm setShowLoginForm={setShowLoginForm} navigation={navigation} />
      ) : (
        <RegisterForm
          setShowLoginForm={setShowLoginForm}
          navigation={navigation}
        />
      )}
    </View>
  );
};
