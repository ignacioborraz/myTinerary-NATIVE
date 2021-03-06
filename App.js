//importo de librerias externas
import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {FredokaOne_400Regular} from '@expo-google-fonts/dev'
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'

//importo las páginas que se van a renderizar
import Home from './screens/Home'
import Cities from './screens/Cities'
import Itineraries from './screens/Itineraries'

//importo los componentes de REDUX:
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './redux/reducers/mainReducer'


const reduxStore = createStore(mainReducer,applyMiddleware(thunk))

const Stack = createStackNavigator();

export default function App() {
    let [fonts] = useFonts({FredokaOne_400Regular})
    if (!fonts) {return <AppLoading />}
    return (
        <Provider store={reduxStore}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{
                        title: 'MyTineraryApp',
                        headerStyle: {backgroundColor: 'rgb(165, 126, 196)'},
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular'}
                    }}/>
                    <Stack.Screen name="Cities" component={Cities} options={{
                        title: 'MyTineraryApp-Cities',
                        headerStyle: {backgroundColor: 'rgb(165, 126, 196)'},
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular'}
                    }}/>
                    <Stack.Screen name="Itineraries" component={Itineraries} options={{
                        title: 'MyTineraryApp-Itineraries',
                        headerStyle: {backgroundColor: 'rgb(165, 126, 196)'},
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular'}
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

//REDUX
//npm i react-redux
//npm i redux
//npm i redux-thunk

//AXIOS
//npm i axios

//STACK para start
//npm install @react-navigation/stack
//npm install react-native-gesture-handler