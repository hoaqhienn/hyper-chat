import { View, Text, Pressable, StyleSheet } from "react-native";


export default function HomeScreen({ navigation }: { navigation: any }) { 
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        welcome: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
        },
        button: {
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
        },
        buttonText: {
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Pressable
                onPress={() => {
                    console.log('Button pressed');
                    navigation.navigate('Login');
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Press me!</Text>
            </Pressable>
        </View>
    );
}
