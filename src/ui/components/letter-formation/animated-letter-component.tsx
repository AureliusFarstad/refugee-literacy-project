// @ts-nocheck
import Pencil from "assets/alphabet/animation/pencil";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { View } from "react-native";

type AnimatedLetterComponentProps = {
  name: string;
  onAnimationComplete: (letter: string) => void;
  onAnimationStart: () => void;
};

type AnimatedLetterComponentRef = {
  animateLowercase: () => void;
  animateUppercase: () => void;
};

interface LetterRef {
  play?: () => void;
}

const AnimatedLetterComponent = forwardRef<
  AnimatedLetterComponentRef,
  AnimatedLetterComponentProps
>(({ name, onAnimationComplete, onAnimationStart }, ref) => {
  const lowercaseRef = useRef<LetterRef>(null);
  const uppercaseRef = useRef<LetterRef>(null);

  const animateLowercase = () => {
    if (lowercaseRef.current && lowercaseRef.current.play) {
      onAnimationStart();
      lowercaseRef.current.play();
    }
  };

  const animateUppercase = () => {
    if (uppercaseRef.current && uppercaseRef.current.play) {
      onAnimationStart();
      uppercaseRef.current.play();
    }
  };

  useImperativeHandle(ref, () => ({
    animateLowercase,
    animateUppercase,
  }));

  const handleLowercaseComplete = () => {
    onAnimationComplete(name.toLowerCase());
  };

  const handleUppercaseComplete = () => {
    onAnimationComplete(name.toUpperCase());
  };

  // Build the key for pencil-map.js: lowercase_X_pencil or uppercase_X_pencil
  const lowercaseKey = `lowercase_${name.toLowerCase()}_pencil`;
  const uppercaseKey = `uppercase_${name.toUpperCase()}_pencil`;

  const lowerCaseLetterSvgProps = {
    onAnimationComplete: handleLowercaseComplete,
    letter: lowercaseKey,
  };

  const uppercaseCaseLetterSvgProps = {
    onAnimationComplete: handleUppercaseComplete,
    letter: uppercaseKey,
  };

  const renderLowercaseLetter = () => {
    return <Pencil ref={lowercaseRef} {...lowerCaseLetterSvgProps} />;
  };

  const renderUppercaseLetter = () => {
    return <Pencil ref={uppercaseRef} {...uppercaseCaseLetterSvgProps} />;
  };

  return (
    <View className="z-100 absolute flex size-full flex-row justify-around border-purple-500">
      <View className="mb-16 flex w-[128px] items-center justify-center">
        {renderUppercaseLetter()}
      </View>
      <View className="mb-16 flex w-[132px] items-center justify-center">
        {renderLowercaseLetter()}
      </View>
    </View>
  );
});

export default AnimatedLetterComponent;
