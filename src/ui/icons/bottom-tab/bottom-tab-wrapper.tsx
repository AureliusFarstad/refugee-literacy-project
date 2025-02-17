import { View, StyleSheet } from "react-native";
import { APP_COLORS } from "@/constants/routes";
import { SectionColorScheme } from "@/constants/routes";

const styles = StyleSheet.create({
    rounded_square: {
      width: 60,
      height: 60,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
export default function TabIcon({ icon, sectionColor, focused }: { 
        icon: (props: { lineColor: string }) => JSX.Element; 
        sectionColor: SectionColorScheme; 
        focused: boolean 
    }): JSX.Element {

    let backgroundColor: string = focused ? APP_COLORS.offwhite : sectionColor.light;
    let lineColor: string = focused ? APP_COLORS.offblack : sectionColor.dark;
  
    return (
      <View style={[styles.rounded_square, { backgroundColor }]}>
        {icon({ lineColor })}
      </View>
    );
  }