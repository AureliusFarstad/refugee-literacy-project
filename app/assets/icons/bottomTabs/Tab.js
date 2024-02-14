import React from 'react';

import { View } from 'react-native'

import CheckMark from '../CheckMark';

export default function TabContainer({checked, children}) {
    return (
        <View className="flex flex-column items-center">
            <View className="w-[20px] h-[20px] mb-[5px]">
                <CheckMark checked={checked} />
            </View>
            <View className="w-[50px] h-[50px]">
                {children}
            </View>
        </View>
    )
}