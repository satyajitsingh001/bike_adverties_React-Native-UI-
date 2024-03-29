import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'

const Home = (props) => {
    return (
        <View style={styles.container}>
             <StatusBar
        backgroundColor="red" 
        barStyle="-content" 
      />
            <Image source={require("../image/first.png")} style={styles.img} />
            <Text style={styles.title}>Ducati Panigale V4</Text>
            <Text style={styles.detail}>
                With an updated motor, and integrated anti-theft tech the Ducati
                are custom-tuned for the ultimate riding experience.
            </Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => props.navigation.navigate("Detail")}
            >
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
    },
    img: {
        height: "50%",
        width: "100%",
        resizeMode: "contain",
    },
    title: {
        color: "#FFF",
        // fontFamily:"",
        fontSize: 30,
        marginTop: 20,
    },
    detail: {
        color: "#FFF",
        // fontFamily: "Montserrat_400Regular",
        fontSize: 18,
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 30,
        marginTop: 30,
    },
    btn: {
        marginTop: 80,
        backgroundColor: "#E2443B",
        paddingHorizontal: 140,
        paddingVertical: 10,
        borderRadius: 30,
    },
    text: {
        // fontFamily: "Montserrat_600SemiBold",
        fontSize: 30,
        color: "#FFF",
    },
})