import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingProgressBarProps {
  onComplete?: () => void;
}

interface LoadingStage {
  label: string;
  progress: number;
  duration: number;
}

const loadingStages: LoadingStage[] = [
  { label: "Initializing...", progress: 15, duration: 500 },
  { label: "Loading assets...", progress: 40, duration: 700 },
  { label: "Setting up components...", progress: 70, duration: 600 },
  { label: "Preparing interface...", progress: 90, duration: 400 },
  { label: "Ready!", progress: 100, duration: 300 },
];

export default function LoadingProgressBar({
  onComplete,
}: LoadingProgressBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentStageIndex = 0;

    const animateToNextStage = () => {
      if (currentStageIndex < loadingStages.length) {
        const stage = loadingStages[currentStageIndex];
        setCurrentStage(currentStageIndex);

        // Animate progress to the stage's target progress
        const startProgress = progress;
        const targetProgress = stage.progress;
        const startTime = Date.now();

        const animateProgress = () => {
          const elapsed = Date.now() - startTime;
          const progressRatio = Math.min(elapsed / stage.duration, 1);

          // Use easing function for smooth animation
          const easedProgress = easeOutCubic(progressRatio);
          const newProgress =
            startProgress + (targetProgress - startProgress) * easedProgress;

          setProgress(newProgress);

          if (progressRatio < 1) {
            requestAnimationFrame(animateProgress);
          } else {
            currentStageIndex++;
            if (currentStageIndex < loadingStages.length) {
              timeoutId = setTimeout(animateToNextStage, 200);
            } else {
              // Loading complete
              setIsComplete(true);
              timeoutId = setTimeout(() => {
                setIsVisible(false);
                onComplete?.();
              }, 800);
            }
          }
        };

        requestAnimationFrame(animateProgress);
      }
    };

    // Start the loading animation after a brief delay
    timeoutId = setTimeout(animateToNextStage, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []); // Remove progress dependency to avoid infinite loop

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-md px-8">
          {/* Logo/Brand Area */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-2xl shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0.3)",
                  "0 0 0 20px rgba(255,255,255,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full flex items-center justify-center text-black font-bold text-xl">
                F
              </div>
            </motion.div>
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Front End Battle
            </h1>
          </motion.div>

          {/* Progress Container */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Progress Bar */}
            <div className="relative">
              {/* Track */}
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: [-100, 400] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Progress fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-white via-gray-200 to-white rounded-full shadow-lg relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress glow */}
              <motion.div
                className="absolute inset-0 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full blur-sm"
                style={{ width: `${progress}%` }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Progress Text */}
            <div className="flex items-center justify-between">
              <motion.span
                key={currentStage}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 text-sm font-medium tracking-wide"
              >
                {loadingStages[currentStage]?.label || "Loading..."}
              </motion.span>

              <motion.span
                className="text-white text-sm font-bold tabular-nums"
                animate={{ scale: progress === 100 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>

            {/* Loading Dots */}
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-white/60 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Completion Animation */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.7)",
                      "0 0 0 40px rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{ duration: 1, repeat: 2 }}
                >
                  <motion.svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-8 text-center"
        >
          <p className="text-gray-400 text-xs tracking-widest">
            MADE BY SAMIN YEASAR
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
