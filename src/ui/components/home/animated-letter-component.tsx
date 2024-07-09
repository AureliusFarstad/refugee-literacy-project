import LowerA from "assets/animation/a-animated";
import LowerS from "assets/animation/s-animated";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { View } from "react-native";

type AnimatedLetterComponentProps = {
  name: string;
  onAnimationComplete: (letter: string) => void;
};

type AnimatedLetterComponentRef = {
  animateLowercase: () => void;
  animateUppercase: () => void;
};

const AnimatedLetterComponent = forwardRef<
  AnimatedLetterComponentRef,
  AnimatedLetterComponentProps
>(({ name, onAnimationComplete }, ref) => {
  const lowercaseWebView = useRef(null);
  const uppercaseWebView = useRef(null);
  const animateLowercase = () => {
    const jsCommand = `document.querySelector('svg').svgatorPlayer['ready']((player) => player.play()); true;`;
    console.log(jsCommand);
    // @ts-ignore
    lowercaseWebView?.current?.injectJavaScript(jsCommand);
  };

  const animateUppercase = () => {
    const jsCommand = `document.querySelector('svg').svgatorPlayer['ready']((player) => player.play()); true;`;
    // @ts-ignore
    uppercaseWebView?.current?.injectJavaScript(jsCommand);
  };

  useImperativeHandle(ref, () => {
    return {
      animateLowercase: () => {
        animateLowercase();
        onAnimationComplete(name);
      },
      animateUppercase: () => {
        animateUppercase();
        onAnimationComplete(name.toUpperCase());
      },
    };
  });

  const renderLowercaseLetter = () => {
    switch (name) {
      case "a":
        return <LowerA ref={lowercaseWebView} key={name} />;
      case "s":
        return <LowerS ref={lowercaseWebView} key={name} />;
      default:
        return <LowerA ref={lowercaseWebView} key={name} />;
    }
  };
  const renderUppercaseLetter = () => {
    switch (name.toUpperCase()) {
      case "A":
        return <LowerA ref={uppercaseWebView} key={name.toUpperCase()} />;
      case "S":
        return <LowerS ref={uppercaseWebView} key={name.toUpperCase()} />;
      default:
        return <LowerA ref={uppercaseWebView} key={name.toUpperCase()} />;
    }
  };

  return (
    <View className="z-100 absolute flex size-full flex-row justify-around border-purple-500">
      <View className="flex w-[60px] items-center justify-center">
        {renderLowercaseLetter()}
      </View>
      <View className="flex w-[60px] items-center justify-center">
        {renderUppercaseLetter()}
      </View>
    </View>
  );
});

export default AnimatedLetterComponent;
