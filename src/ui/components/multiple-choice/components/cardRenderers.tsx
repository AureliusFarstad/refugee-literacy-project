// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { ColorTheme, CardDisplayType } from '../types';
// import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
// import { EarButton } from "@/ui/icons/circular/ear-button";
// import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";

// export const renderFrontCardText = (
//   word: string,
//   colors: ColorTheme
// ) => {
//   const styles = StyleSheet.create({
//     cardText: {
//       fontSize: 36,
//       fontWeight: 'bold',
//       color: colors.appBlackColor,
//     },
//   });
//   return <Text style={styles.cardText}>{word}</Text>;
// }

// export const renderFrontCardAudio = (
//   word: string,
//   colors: ColorTheme,
//   audioSources: Record<string, { file: React.FC<any> }>
// ) => {
//   const buttonStyles: ButtonColorProps = {
//     primaryColor: colors.sectionPrimaryColor,
//     secondaryColor: colors.sectionSecondaryColor,
//     offwhiteColor: colors.appWhiteColor,
//     offblackColor: colors.appBlackColor,
//     backgroundColor: colors.appBackgroundColor,
//   };
//   return (
//     <AnimatedAudioButton
//       audioSource={audioSources[word]?.file}
//       width={120}
//       height={120}
//     >
//       <View style={{ width: 120, height: 120 }}>
//         <EarButton {...buttonStyles} />
//       </View>
//     </AnimatedAudioButton>
//   );
// }

// /**
//  * Renders the back card content based on display type
//  */
// export const renderBackCardContent = (
//   word: string,
//   colors: ColorTheme,
//   formatText: (text: string) => string,
//   displayType: CardDisplayType,
//   imageSources: Record<string, { file: React.FC<any> }>,
//   customRender?: (word: string, colors: ColorTheme) => React.ReactNode
// ) => {
//   // Use custom renderer if provided
//   if (customRender) {
//     return customRender(word, colors);
//   }

//   const styles = StyleSheet.create({
//     cardBackImageContainer: {
//       width: '100%',
//       height: 200,
//       padding: 20,
//       backgroundColor: colors.appBackgroundColor,
//       borderRadius: 10,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: 40,
//       position: 'relative',
//     },
//     cardBackImage: {
//       borderRadius: 8,
//     },
//     cardBackText: {
//       fontSize: 36,
//       fontWeight: 'bold',
//       color: colors.appBlackColor,
//     },
//   });

//   const SvgComponent = imageSources[word]?.file;

//   switch (displayType) {
//     case 'image':
//       return (
//         <>
//           <View style={styles.cardBackImageContainer}>
//             {SvgComponent && <SvgComponent style={styles.cardBackImage} />}
//           </View>
//           <Text style={styles.cardBackText}>{formatText(word)}</Text>
//         </>
//       );
//     case 'text':
//       return <Text style={styles.cardBackText}>{formatText(word)}</Text>;
//     default:
//       return (
//         <>
//           <View style={styles.cardBackImageContainer}>
//             {SvgComponent && <SvgComponent style={styles.cardBackImage} />}
//           </View>
//           <Text style={styles.cardBackText}>{formatText(word)}</Text>
//         </>
//       );
//   }
// };
