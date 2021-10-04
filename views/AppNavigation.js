// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import Home from "./screens/Home";
// import Orbita from "./screens/Orbita";
// import Videos from "./screens/Videos";

// // Estrela
// import Sol from "./stars/Sol";

// // Planetas
// import Mercurio from "./planets/Mercurio";
// import Venus from "./planets/Venus";
// import Terra from "./planets/Terra";
// import Marte from "./planets/Marte";
// import Jupiter from "./planets/Jupiter";
// import Saturno from "./planets/Saturno";
// import Urano from "./planets/Urano";
// import Netuno from "./planets/Netuno";

// // Satélites naturais

// import Lua from "./moons/Lua";
// import Fobos from "./moons/Fobos";
// import Deimos from "./moons/Deimos";
// import Europa from "./moons/Europa";
// import Calisto from "./moons/Calisto";
// import Tita from "./moons/Tita";
// import Encelado from "./moons/Encelado";
// import Umbriel from "./moons/Umbriel";
// import Titania from "./moons/Titania";
// import Nereida from "./moons/Nereida";
// import Larissa from "./moons/Larissa";
// import PageTabs from "../component/page.component";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const SunStack = createStackNavigator();
// function SunScreen () {
//   return <SunStack.Navigator>
//     <SunStack.Screen name="Sun" component={Sol} />
//   </SunStack.Navigator>
// }


// function getHeaderTitle(route) {
//   const routeName = route.state ? route.state.routeNames[route.state.index] : route.name;
//   switch (routeName) {
//     case "Home":
//       return "AstroLab";

//     case "Orbita":
//       return "Sistema Solar";

//     case "Videos":
//       return "Play";
//   }
// }

// function MainTabNavigator() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         inactiveTintColor: "#C0C0C0",
//         activeTintColor: "#fff",
//         style: {
//           backgroundColor: "#4682B4",
//         },
//       }}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ size }) => {
//           let iconName;
//           if (route.name == "Home") {
//             iconName = "home-map-marker";
//           } else if (route.name == "Orbita") {
//             iconName = "rocket";
//           } else if (route.name == "Videos") {
//             iconName = "animation-play";
//           }

//           return (
//             <MaterialCommunityIcons
//               name={iconName}
//               color={"#fff"}
//               size={size}
//             />
//           );
//         },
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{ title: "Home", color: "#fff" }}
//       />
//       <Tab.Screen
//         name="Orbita"
//         component={Orbita}
//         options={{ title: "Sistema Solar", color: "#fff" }}
//       />
//       <Tab.Screen
//         name="Videos"
//         component={Videos}
//         options={{ title: "Animações", color: "#fff" }}
//       />
//     </Tab.Navigator>
//   );
// }



// function MainStackNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           gestureEnabled: true,
//           headerStyle: {
//             backgroundColor: "#4682B4",
//           },
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//           headerTintColor: "#fff",
//           headerBackTitleVisible: true,
//         }}
//         headerMode="float"
//       >
//         <Stack.Screen
//           name="Home"
//           component={MainTabNavigator}
//           options={({ route }) => ({
//             title: "Home",

//             headerTitle: getHeaderTitle(route),
//           })}
//         />

//         <Stack.Screen
//           name="Sol"
//           component={MainTabNavigator}
//           options={{
//             title: "Sol",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Mercurio"
//           component={Mercurio}
//           options={{
//             title: "Mercúrio",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Venus"
//           component={Venus}
//           options={{
//             title: "Vênus",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Terra"
//           component={Terra}
//           options={{
//             title: "Terra",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Marte"
//           component={Marte}
//           options={{
//             title: "Marte",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Jupiter"
//           component={Jupiter}
//           options={{
//             title: "Júpiter",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Saturno"
//           component={Saturno}
//           options={{
//             title: "Saturno",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Urano"
//           component={Urano}
//           options={{
//             title: "Urano",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Netuno"
//           component={Netuno}
//           options={{
//             title: "Netuno",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Lua"
//           component={Lua}
//           options={{
//             title: "Lua",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Fobos"
//           component={Fobos}
//           options={{
//             title: "Fobos",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Deimos"
//           component={Deimos}
//           options={{
//             title: "Deimos",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Europa"
//           component={Europa}
//           options={{
//             title: "Europa",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Calisto"
//           component={Calisto}
//           options={{
//             title: "Calisto",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Tita"
//           component={Tita}
//           options={{
//             title: "Titã",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Encelado"
//           component={Encelado}
//           options={{
//             title: "Encélado",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Umbriel"
//           component={Umbriel}
//           options={{
//             title: "Umbriel",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Titania"
//           component={Titania}
//           options={{
//             title: "Titânia",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Nereida"
//           component={Nereida}
//           options={{
//             title: "Nereida",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Larissa"
//           component={Larissa}
//           options={{
//             title: "Larissa",
//             headerStyle: { backgroundColor: "#4682B4" },
//             headerTitleStyle: {
//               fontSize: 35,
//               fontWeight: "bold",
//               color: "#fff",
//               alignSelf: "center",
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MainStackNavigator;
