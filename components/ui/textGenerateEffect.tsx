"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  highlightWord,
  className,
  filter = true,
  duration = 0.5,
  onAnimationComplete,
}: {
  words: string;
  highlightWord?: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  onAnimationComplete?: () => void;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    ).then(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isHighlighted = word === highlightWord;
          return (
            <motion.span
              key={word + idx}
              className={cn("opacity-0", {
                "dark:text-secondarybg text-secondarybg": isHighlighted,
                "dark:text-white text-white": !isHighlighted,
              })}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-white text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};