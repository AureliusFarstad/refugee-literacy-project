import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import HomeIcon from '../../assets/icons/Home';

export default function Home({ navigation }) {
    return (
        <TouchableOpacity 
            className="pl-2"
            onPress={() => navigation.navigate("Home")}
        >
            <HomeIcon />
        </TouchableOpacity>
    )
}
