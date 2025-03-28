module.exports = {
    theme: {
      extend: {
        animation: {
          "fade-in-up": "fadeInUp 1s ease-out",
          "fade-in-fast": "fadeInFast 0.5s ease-in",
          "pulse-slow": "pulseSlow 6s infinite",
          "rotate-stack": "rotateStack 10s infinite ease-in-out",
        },
        keyframes: {
          fadeInUp: {
            "0%": { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          fadeInFast: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          pulseSlow: {
            "0%, 100%": { opacity: "0.6" },
            "50%": { opacity: "0.3" },
          },
          rotateStack: {
            "0%, 100%": { transform: "rotateY(0deg)" },
            "50%": { transform: "rotateY(10deg)" },
          },
        },
        translate: {
          "z-10": "10px",
          "z-20": "20px",
        },
      },
    },
  };