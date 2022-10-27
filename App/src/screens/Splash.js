import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native'
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const animationRef = useRef(null);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            backgroundColor: '#f4f4f4',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Lottie
                autoPlay
                ref={animationRef}
                loop={false}
                speed={2}
                source={require("../assets/loader.json")}
                onAnimationFinish={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    );
};

export default Splash;
