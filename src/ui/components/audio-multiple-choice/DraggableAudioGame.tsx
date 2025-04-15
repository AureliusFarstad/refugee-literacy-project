// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { View, Text } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import type { Sound } from "expo-av/build/Audio";

// import { styles } from './styles';
// import { VOCABULARY_AUDIO_SOURCES, BUTTON_COLORS, CORRECT_BUTTON_ID } from './constants';
// import { ButtonItem, Position } from './types';
// import DraggableButton from './DraggableButton';
// import { measureViewPosition, playAudio } from './audioUtils';

// /**
//  * The main DraggableAudioGame component.
//  * Implements a flashcard game where users can drag letter buttons onto a target
//  * to match the correct letter for the displayed image.
//  */
// const DraggableAudioGame: React.FC = () => {
//   // State for tracking if the flashcard is in "active" state (being dragged over)
//   const [isCardActive, setIsCardActive] = useState<boolean>(false);

//   // Store the target drop circle position
//   const [targetPosition, setTargetPosition] = useState<Position | null>(null);

//   // Track which button is currently placed in the target
//   const [placedButtonId, setPlacedButtonId] = useState<string | null>(null);
//   const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
//   const [disabledButtons, setDisabledButtons] = useState<string[]>([]);

//   // Audio playback tracking
//   const [playingButtonId, setPlayingButtonId] = useState<string | null>(null);
//   const currentSound = useRef<Sound | null>(null);

//   // Reference to target drop circle
//   const dropCircleRef = useRef<View | null>(null);

//   // Available audio buttons
//   const availableButtons: ButtonItem[] = [
//     { id: 'a', word: 'a' },
//     { id: 'b', word: 'b' },
//     { id: 'c', word: 'c' },
//   ];

//   // Function to get the absolute position of the target drop circle
//   const measureDropCircle = useCallback((): void => {
//     measureViewPosition(dropCircleRef, (position) => {
//       setTargetPosition(position);
//     });
//   }, []);

//   // Measure the drop circle position when the component mounts
//   useEffect(() => {
//     // Use setTimeout to ensure the layout is complete before measuring
//     const timerId = setTimeout(() => {
//       measureDropCircle();
//     }, 500);

//     return () => clearTimeout(timerId);
//   }, [measureDropCircle]);

//   // Clean up sound when component unmounts
//   useEffect(() => {
//     return () => {
//       if (currentSound.current) {
//         currentSound.current.unloadAsync();
//         currentSound.current = null;
//       }
//     };
//   }, []);

//   // Wrapper for audio playback function
//   const handleAudioPlay = useCallback((audioFile: any, buttonId: string) => {
//     playAudio(audioFile, buttonId, currentSound, setPlayingButtonId);
//   }, []);

//   // Handle drag end for buttons
//   const handleDragEnd = useCallback((position: Position, buttonId: string, isInTarget: boolean): void => {
//     setIsCardActive(false);

//     if (isInTarget) {
//       setPlacedButtonId(buttonId);
//       const isCorrect = buttonId === CORRECT_BUTTON_ID;
//       setIsCorrectAnswer(isCorrect);

//       // Note: Button disabling happens in the button component after timeout
//     } else if (placedButtonId === buttonId) {
//       setPlacedButtonId(null);
//       setIsCorrectAnswer(null);
//     }
//   }, [placedButtonId]);

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       {/* Flashcard */}
//       <View
//         style={[styles.flashcard, isCardActive && styles.flashcardActive]}
//         onLayout={() => setTimeout(measureDropCircle, 100)}
//       >
//         {/* Character container */}
//         <View style={styles.characterContainer}>
//           <View style={styles.characterImageContainer}>
//             <View style={styles.characterImage} />
//           </View>
//           <View style={styles.speechBubble}><Text>😊</Text></View>
//           <View style={styles.soundIcon}><Text>🔊</Text></View>
//         </View>

//         {/* Drop target */}
//         <View style={styles.dropCircleContainer}>
//           <View ref={dropCircleRef} style={styles.emptyDropCircle} />
//         </View>
//       </View>

//       {/* Button Pool */}
//       <View style={styles.buttonPool}>
//         {availableButtons.map((item: ButtonItem) => (
//           <DraggableButton
//             key={item.id}
//             item={item}
//             onAudioPlay={() => handleAudioPlay(VOCABULARY_AUDIO_SOURCES[item.word].file, item.id)}
//             onDragStart={() => setIsCardActive(true)}
//             onDragEnd={(pos, isInTarget) => handleDragEnd(pos, item.id, isInTarget)}
//             buttonColor={BUTTON_COLORS[item.word]}
//             buttonText={VOCABULARY_AUDIO_SOURCES[item.word].letter}
//             targetPosition={targetPosition}
//             isPlaced={placedButtonId === item.id}
//             isCorrect={placedButtonId === item.id ? isCorrectAnswer : null}
//             disabled={disabledButtons.includes(item.id)}
//             isPlaying={playingButtonId === item.id}
//             onMarkDisabled={(buttonId: string) => setDisabledButtons(prev => [...prev, buttonId])}
//           />
