import {StyleSheet,Text,ScrollView,View,Pressable,ImageBackground,Dimensions} from 'react-native'
import {FredokaOne_400Regular} from '@expo-google-fonts/dev'
import {Licorice_400Regular} from '@expo-google-fonts/dev'
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'
import {useNavigation} from '@react-navigation/native'

var {height} = Dimensions.get('window')

export default function Home() {
    const navigation = useNavigation()
    let [fonts] = useFonts({FredokaOne_400Regular,Licorice_400Regular})
    if (!fonts) {return <AppLoading />}
    return (
        <ScrollView style={styles.home}>
            <ImageBackground source={require('../assets/photos/index.jpg')} resizeMode="cover" style={styles.backGhome}>
                <View style={styles.backGhome}>
                    <Text style={styles.licorice}>MyTinerary</Text>
                    <Text style={styles.fredoka}>FIND YOUR PERFECT TRIP</Text>
                    <Text style={styles.fredoka}>designed by insiders who know and love their cities!</Text>
                    <Pressable onPress={()=>navigation.navigate('Cities')} style={styles.linkHero} >
                        <Text style={[styles.linkText,styles.fredoka]}>START!</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

//configuro hoja de estilos
const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        width: "100%",
        backgroundColor: 'rgba(196, 165, 126, 0.4)'
    },
    backGhome: {
        width: '100%',
        height: height,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(196, 165, 126, 0.4)'
    },
    licorice: {
        fontSize: 70,
        fontFamily: 'Licorice_400Regular',
        elevation: 100,
        textShadowColor: 'white',
        textShadowOffset: {width: 0,height: 2},
        textShadowRadius: 1,
        color: 'rgb(165, 126, 196)',
        padding: 10,
        marginTop: 50,
    },
    fredoka: {
        fontFamily: 'FredokaOne_400Regular',
        textAlign: 'center'
    },
    linkHero: {
        marginTop: 15,
        padding: 10,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'rgb(165, 126, 196)',
        borderRadius: 20
    },
    linkText: {
        color: 'white'
    }
})