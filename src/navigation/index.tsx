import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TodayScreen from '../screens/TodayScreen';
import CommentSection from '../screens/commentSection';
import { headerStyles } from '../styles/headerStyles';

export type RootStackParamList = {
  Today: undefined;
  Main: undefined;
  Detail: { itemId: string };
  Profile: undefined;
  CommentSection: { id_card: string }; // 🔥 Recebe o id_card como parâmetro
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Today"
        screenOptions={{
          headerTitleStyle: headerStyles.title,
        }}
      >
        <Stack.Screen
          name="Today"
          component={TodayScreen}
          options={{ title: 'Sugestão do Dia' }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Descubra' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detalhes' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Perfil' }}
        />
        <Stack.Screen
          name="CommentSection"
          component={CommentSection}
          options={{ title: 'Comentários' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
