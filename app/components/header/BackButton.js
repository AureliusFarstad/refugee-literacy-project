import * as React from 'react';
import { Pressable, View } from 'react-native';
import HomeIcon from '../../assets/icons/Home';

export default function Home({ navigation }) {
    return (
        <Pressable 
            className="pl-2"
            onPress={() => navigation.navigate("Home")}
        >
            <HomeIcon />
        </Pressable>
    )
}
