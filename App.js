import { StyleSheet } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import FilterScreen from "./screens/FilterScreen";
import SearchScreen from "./screens/SearchScreen";
import LocationHomeScreen from "./screens/LocationHomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Profile from "./components/Profile";
import CategoryScreen from "./screens/CategoryScreen";
import FeaturedScreen from "./screens/FeaturedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="Filter"
            component={FilterScreen}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="LocationHomeScreen"
            component={LocationHomeScreen}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="CategoryList"
            component={CategoryScreen}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="Featured"
            component={FeaturedScreen}
            options={{ presentation: "fullScreenModal" }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
