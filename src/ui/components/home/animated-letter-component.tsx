import LowercaseLetter from "assets/alphabet/animation/pencil";
import UppercaseLetter from "assets/alphabet/animation/pencil";
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

  console.log({ name });

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
    letter: "lowercase_" + name + "_pencil",
  };
  const uppercaseCaseLetterSvgProps = {
    onAnimationComplete: handleUppercaseComplete,
    letter: "uppercase_" + name + "_pencil",
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
      <View className="mb-16 flex w-[128px] items-center justify-center">
        {renderLowercaseLetter()}
      </View>
      <View className="mb-16 flex w-[132px] items-center justify-center">
        {renderUppercaseLetter()}
      </View>
    </View>
  );
});

export default AnimatedLetterComponent;
