import WelcomeVideoAnimation from "assets/videos/welcome";

import { APP_COLORS } from "@/constants/routes";
import type { VideoInput } from "@/ui/components/interactive-video-player";
import InteractiveVideoPlayer from "@/ui/components/interactive-video-player";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";

// Example usage in your VideoTab component
const VideoTab = () => {
  // Define your video inputs
  const welcomeVideoInputs: VideoInput[] = [
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partA.mp3"),
      svgator: "welcome_screen_1",
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partB.mp3"),
      svgator: "welcome_screen_2",
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partC.mp3"),
      svgator: "welcome_screen_3",
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partD.mp3"),
      svgator: "welcome_screen_4",
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partE.mp3"),
      svgator: "welcome_screen_5",
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partF.mp3"),
      svgator: "welcome_screen_6",
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partG.mp3"),
      svgator: "welcome_screen_7",
    },
  ];

  // Define button color scheme
  const buttonColorProps: ButtonColorProps = {
    primaryColor: APP_COLORS.green,
    secondaryColor: APP_COLORS.lightgreen,
    offwhiteColor: APP_COLORS.offwhite,
    offblackColor: APP_COLORS.offblack,
    backgroundColor: APP_COLORS.backgroundgrey,
  };

  return (
    <InteractiveVideoPlayer
      videoInputs={welcomeVideoInputs}
      buttonColorProps={buttonColorProps}
      videoComponent={WelcomeVideoAnimation}
      slideDuration={10000} // 10 seconds per slide
      onComplete={() => {
        console.log("Welcome video completed!");
      }}
      onSlideChange={(slide, index) => {
        console.log(`Now playing slide ${index + 1}:`, slide.svgator);
      }}
      showHomeButton={false}
      playButtonColor="#FBD65B"
      playButtonSize={80}
    />
  );
};

export default VideoTab;
