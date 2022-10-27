import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const Home = () => (
    <SafeAreaView style={{
        backgroundColor: '#f4f4f4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }}>
        <Text style={{ color: '#333' }}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Teste')}>
            <Text>Ir para "Teste"</Text>
        </TouchableOpacity>
    </SafeAreaView>
)

export default Home;
