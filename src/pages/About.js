import React from 'react';
import { Text, View, ScrollView, SafeAreaProvider} from 'react-native';

export default function About() {
    return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>This is your about page</Text>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>This is your about page</Text>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>This is your about page</Text>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>This is your about page</Text>
            </View>
    )
};