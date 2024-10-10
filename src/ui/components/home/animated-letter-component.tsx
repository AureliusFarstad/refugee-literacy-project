import LowercaseLetter from "assets/alphabet/animation/lowercase/lowercase-letter";
import UppercaseLetter from "assets/alphabet/animation/uppercase/uppercase-letter";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { View } from "react-native";

type AnimatedLetterComponentProps = {
  name: string;
  onAnimationComplete: (letter: string) => void;
  onAnimationStart: () => void;
  isAnimating: boolean;
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
>(({ name, onAnimationComplete, onAnimationStart, isAnimating }, ref) => {
  const lowercaseRef = useRef<LetterRef>(null);
  const uppercaseRef = useRef<LetterRef>(null);

  const animateLowercase = () => {
    if (!isAnimating && lowercaseRef.current && lowercaseRef.current.play) {
      onAnimationStart();
      lowercaseRef.current.play();
    }
  };

  const animateUppercase = () => {
    if (!isAnimating && uppercaseRef.current && uppercaseRef.current.play) {
      onAnimationStart();
      uppercaseRef.current.play();
    }
  };

  useImperativeHandle(ref, () => ({
    animateLowercase,
    animateUppercase,
  }));

  const handleLowercaseComplete = () => {
    onAnimationComplete(name);
  };

  const handleUppercaseComplete = () => {
    onAnimationComplete(name.toUpperCase());
  };

  const lowerCaseLetterSvgProps = {
    onAnimationComplete: handleLowercaseComplete,
    letter: name,
  };
  const uppercaseCaseLetterSvgProps = {
    onAnimationComplete: handleUppercaseComplete,
    letter: name.toUpperCase(),
  };

  const renderLowercaseLetter = () => {
    return <LowercaseLetter ref={lowercaseRef} {...lowerCaseLetterSvgProps} />;
  };

  const renderUppercaseLetter = () => {
    return (
      <UppercaseLetter ref={uppercaseRef} {...uppercaseCaseLetterSvgProps} />
    );
  };

  return (
    <View className="z-100 absolute flex size-full flex-row justify-around border-purple-500">
      <View className="mb-12 flex w-[90px] items-center justify-center">
        {renderLowercaseLetter()}
      </View>
      <View className="mb-12 flex w-[80px] items-center justify-center">
        {renderUppercaseLetter()}
      </View>
    </View>
  );
});

export default AnimatedLetterComponent;
