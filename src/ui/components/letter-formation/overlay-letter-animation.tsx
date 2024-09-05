import LetterDotAnimation from "assets/animation/alphabet/lowercase/a-purpledot";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { View } from "react-native";

type AnimatedLetterComponentProps = {
  name: string;
  onAnimationComplete: (letter: string) => void;
  onAnimationStart: () => void;
  isAnimating: boolean;
  isOverlayAnimation: boolean;
};

type AnimatedLetterComponentRef = {
  animateLowercase: () => void;
};

interface LetterRef {
  play?: () => void;
}

const OverlayLetterAnimation = forwardRef<
  AnimatedLetterComponentRef,
  AnimatedLetterComponentProps
>(({ name, onAnimationComplete, onAnimationStart, isAnimating }, ref) => {
  const lowercaseRef = useRef<LetterRef>(null);

  const animateLowercase = () => {
    if (!isAnimating && lowercaseRef.current && lowercaseRef.current.play) {
      onAnimationStart();
      lowercaseRef.current?.play();
    }
  };

  useImperativeHandle(ref, () => ({
    animateLowercase,
  }));

  const handleLowercaseComplete = () => {
    onAnimationComplete(name);
  };

  const lowerCaseLetterSvgProps = {
    onAnimationComplete: handleLowercaseComplete,
    letter: name,
  };

  const renderLowercaseLetter = () => {
    return (
      <LetterDotAnimation ref={lowercaseRef} {...lowerCaseLetterSvgProps} />
    );
  };

  return (
    <View className="z-100 absolute inset-0 flex size-full h-[356] flex-row justify-around   border-purple-500   bg-transparent">
      <View className="flex w-[200] items-center justify-center  ">
        {renderLowercaseLetter()}
      </View>
    </View>
  );
});

export default OverlayLetterAnimation;
