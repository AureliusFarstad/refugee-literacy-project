import { MotiView } from "moti";
import React from "react";

const ChatIndicator = () => {
  return (
    <>
      <MotiView
        from={{
          scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          loop: true,
          duration: 1500,
          delay: 300,
        }}
        className="size-4 rounded-full bg-[#D9D9D9]"
      />
      <MotiView
        from={{
          scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          loop: true,
          duration: 1500,
          delay: 700,
        }}
        className="mx-0.5 size-4 rounded-full bg-[#D9D9D9]"
      />
      <MotiView
        from={{
          scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          loop: true,
          duration: 1500,
          delay: 1000,
        }}
        className="size-4 rounded-full bg-[#D9D9D9]"
      />
    </>
  );
};

export default ChatIndicator;
