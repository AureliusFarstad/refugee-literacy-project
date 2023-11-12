import React, { useState, createContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import ListenChooseSccreen from './ListenChooseSccreen';
import Alphabet from './Alphabet';

import TabContainer from '../../assets/icons/bottomTabs/Tab'
import Teacher from '../../assets/icons/bottomTabs/Teacher';
import Pencil from '../../assets/icons/bottomTabs/Pencil';
import Ear from '../../assets/icons/bottomTabs/Ear'

function Screen2() {
  return (
    <View>
      <Text>Screen 2</Text>
      <Pressable><Text>Hello</Text></Pressable>
    </View>
  );
}

const LevelOneCompletedScreensContext = createContext(null);

const Tab = createBottomTabNavigator();

function CustomTabBar() {

    const [completedScreens, setCompletedScreens] = useState([]);

    function completeScreen(screenName) {
        if (!completedScreens.includes(screenName)) {
            setCompletedScreens(x => {
                return [...x, screenName]
            })
        }
    };

    return (
        <LevelOneCompletedScreensContext.Provider value={{completeScreen}}>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                  height: 90,
                  paddingHorizontal: 5,
                  paddingTop: 5,
                  paddingBottom: 5,
                  backgroundColor: '#B5F5FF',
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Screen2"
                component={Alphabet}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabContainer checked={completedScreens.includes("Screen2")}>
                            <Teacher focused={focused} color={color} />
                        </TabContainer>
                    ),
                }}
            />
            <Tab.Screen
                name="Screen3"
                component={Screen2}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabContainer checked={completedScreens.includes("Screen1")}>
                            <Pencil focused={focused} color={color} />
                        </TabContainer>
                    ),
                }}
            />
            <Tab.Screen
                name="Screen1"
                component={ListenChooseSccreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabContainer checked={completedScreens.includes("Screen1")}>
                            <Ear focused={focused} color={color} />
                        </TabContainer>
                    ),
                }}
            />
        </Tab.Navigator>
        </LevelOneCompletedScreensContext.Provider>
    );
}

const styles = StyleSheet.create({
  tabIcon: {
    borderRadius: 28,
    margin: 6,
  },
  visitedTabIcon: {
    borderWidth: 2,
    borderColor: 'green', // Change this to the color you want for visited tabs
  },
});

export default CustomTabBar;

