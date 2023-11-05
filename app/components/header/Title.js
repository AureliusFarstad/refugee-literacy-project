import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import Home from '../../assets/icons/Home'

export default function Title({ headerTitle}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{headerTitle}</Text>
        </View>
    );
}
  