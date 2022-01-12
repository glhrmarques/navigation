import React from 'react';
import { Text, View, Pressable, StyleSheet} from 'react-native';



export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable 
                style={styles.buttonWrapper}
                onPress={ () => navigation.navigate('Profile')}>
              <Text style={styles.buttonText}>This is your home page</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonWrapper: {
        backgroundColor: '#3d3d3d',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 8,
    },

    buttonText: {
     color: '#fafafa',
     fontWeight:'bold'
    },

});