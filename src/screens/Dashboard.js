import {Button, Text, View} from 'react-native';

export default Dashboard = ({navigation}) => {
  return (
    <View>
      <Text>My dashboard screen</Text>
      <Button
        title="Go to Log in screen"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};
