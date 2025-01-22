import { MotiView } from "moti";
import React from "react";

const ChatIndicator = () => {
  return (
    <>
      <MotiView
        from={{
          scale: 0.5,
          backgroundColor: "#FDE7A1",
        }}
        animate={{
          scale: 1,
          backgroundColor: "#FDE7A1",
        }}
        transition={{
          loop: true,
          duration: 1500,
          delay: 300,
        }}
        className="size-4 rounded-full "
      />
      <MotiView
        from={{
          scale: 0.5,
          backgroundColor: "#FCE184",
        }}
        animate={{
          scale: 1,
          backgroundColor: "#FCE184",
        }}
        transition={{
          loop: true,
          duration: 1500,
          delay: 700,
        }}
        className="mx-1 size-4 rounded-full "
      />
      <MotiView
        from={{
          scale: 0.5,
          backgroundColor: "#FBD65B",
        }}
        animate={{
          scale: 1,
          backgroundColor: "#FBD65C",
        }}
        transition={{
          loop: true,
          duration: 1500,
          delay: 1000,
        }}
        className="size-4 rounded-full "
      />
    </>
  );
};

export default ChatIndicator;
