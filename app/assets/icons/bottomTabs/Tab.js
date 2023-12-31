import React from 'react';

import { View } from 'react-native'

import CheckMark from '../CheckMark';

export default function TabContainer({checked, children}) {
    return (
        <View className="flex flex-column items-center">
            <View className="pb-[5px]">
                <CheckMark checked={checked} />
            </View>
            {children}
        </View>
    )
}