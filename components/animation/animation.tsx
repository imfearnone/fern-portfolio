export const slideInFromRight = {
    hidden: { opacity: 0, x: 200 }, 
    visible: {
      opacity: 1,
      x: 0, 
      transition: {
        duration: 1, 
        ease: "easeInOut", 
      },
    },
  };

  export const slideInFromLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0, 
      transition: {
        duration: 1, 
        ease: "easeInOut", 
      },
    },
  };