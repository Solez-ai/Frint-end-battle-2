import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Mail, Send, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "./dialog";
import { Input } from "./input";

const EventsSection = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [shuffledEvents, setShuffledEvents] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const events = [
    {
      id: "01",
      title: "AI SUMMIT - NEXT GEN ANALYTICS CONFERENCE 2025",
      subtitle: "The Future of Business Intelligence",
      location: "San Francisco, CA",
      date: "March 15-17, 2025",
      attendees: "2,500+ Leaders",
      description:
        "Join industry pioneers as we unveil breakthrough AI technologies transforming business analytics and decision-making processes.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      bgGradient: "from-blue-900/20 via-blue-800/30 to-indigo-900/20",
      accentColor: "blue",
      primaryColor: "rgb(37, 99, 235)",
      secondaryColor: "rgb(29, 78, 216)",
      features: ["Live AI Demos", "Expert Panels", "Networking Hub"],
    },
    {
      id: "02",
      title: "DIGITAL TRANSFORMATION EXPO SILICON VALLEY",
      subtitle: "Enterprise Innovation Showcase",
      location: "Palo Alto, CA",
      date: "June 8-10, 2025",
      attendees: "5,000+ Executives",
      description:
        "Experience cutting-edge solutions revolutionizing enterprise operations through AI-driven automation and intelligent systems.",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800",
      gradient: "from-teal-600 via-cyan-700 to-blue-800",
      bgGradient: "from-teal-900/20 via-cyan-800/30 to-blue-900/20",
      accentColor: "teal",
      primaryColor: "rgb(13, 148, 136)",
      secondaryColor: "rgb(6, 182, 212)",
      features: ["Product Launches", "Tech Demos", "Executive Roundtables"],
    },
    {
      id: "03",
      title: "GLOBAL DATA SCIENCE SYMPOSIUM INNOVATION WEEK",
      subtitle: "Advanced Analytics & Machine Learning",
      location: "New York, NY",
      date: "September 22-24, 2025",
      attendees: "3,200+ Scientists",
      description:
        "Explore the latest breakthroughs in predictive analytics, machine learning models, and AI-powered business intelligence platforms.",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800",
      gradient: "from-violet-600 via-purple-700 to-indigo-800",
      bgGradient: "from-violet-900/20 via-purple-800/30 to-indigo-900/20",
      accentColor: "violet",
      primaryColor: "rgb(124, 58, 237)",
      secondaryColor: "rgb(147, 51, 234)",
      features: [
        "Research Presentations",
        "Algorithm Workshops",
        "Industry Collaboration",
      ],
    },
  ];

  // Shuffle function
  const shuffleArray = (array: number[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize shuffled events
  useEffect(() => {
    setShuffledEvents(
      shuffleArray(Array.from({ length: events.length }, (_, i) => i)),
    );
  }, [events.length]);

  // Auto-rotate events every 5 seconds with shuffling
  useEffect(() => {
    if (!isInView || shuffledEvents.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentEvent((prev) => {
          const currentIndex = shuffledEvents.indexOf(prev);
          const nextIndex = (currentIndex + 1) % shuffledEvents.length;
          // If we've gone through all events, reshuffle
          if (nextIndex === 0) {
            const newShuffled = shuffleArray(
              Array.from({ length: events.length }, (_, i) => i),
            );
            setShuffledEvents(newShuffled);
            return newShuffled[0];
          }
          return shuffledEvents[nextIndex];
        });
        setIsTransitioning(false);
      }, 600); // Half of transition duration
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [isInView, events.length, shuffledEvents]);

  // Email functionality
  const handleEmailSubmit = () => {
    if (email.trim()) {
      setIsEmailSent(true);
      setTimeout(() => {
        setIsEmailModalOpen(false);
        setIsEmailSent(false);
        setEmail("");
      }, 2000);
    }
  };

  const handleEmailModalOpen = () => {
    setIsEmailModalOpen(true);
    setIsEmailSent(false);
    setEmail("");
  };

  const currentEventData = events[currentEvent];
  const nextEventData = events[(currentEvent + 1) % events.length];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-brand-900 via-brand-800 to-teal-900 overflow-hidden"
    >
      {/* Dynamic Morphing Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Primary Background Layer */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${currentEventData.bgGradient}`}
          key={`bg-${currentEvent}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Morphing Color Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${currentEventData.primaryColor}20 0%, transparent 50%),
                        radial-gradient(circle at 70% 50%, ${currentEventData.secondaryColor}15 0%, transparent 50%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 30% 50%, ${currentEventData.primaryColor}20 0%, transparent 50%),
               radial-gradient(circle at 70% 50%, ${currentEventData.secondaryColor}15 0%, transparent 50%)`,
              `radial-gradient(circle at 60% 30%, ${currentEventData.primaryColor}25 0%, transparent 60%),
               radial-gradient(circle at 40% 70%, ${currentEventData.secondaryColor}20 0%, transparent 60%)`,
              `radial-gradient(circle at 30% 50%, ${currentEventData.primaryColor}20 0%, transparent 50%),
               radial-gradient(circle at 70% 50%, ${currentEventData.secondaryColor}15 0%, transparent 50%)`,
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Geometric Transition Elements */}
        <AnimatePresence>
          {isTransitioning && (
            <>
              {/* Diagonal Sweep */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${nextEventData.gradient} opacity-20`}
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                animate={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                exit={{
                  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />

              {/* Color Morphing Shapes */}
              <motion.div
                className="absolute top-1/4 right-0 w-96 h-96"
                style={{
                  background: `linear-gradient(135deg, ${nextEventData.primaryColor}40, ${nextEventData.secondaryColor}30)`,
                  borderRadius: "50%",
                  filter: "blur(60px)",
                }}
                initial={{ x: "100%", scale: 0.5, opacity: 0 }}
                animate={{ x: "-50%", scale: 1.5, opacity: 0.6 }}
                exit={{ x: "-200%", scale: 2, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              <motion.div
                className="absolute bottom-1/4 left-0 w-80 h-80"
                style={{
                  background: `linear-gradient(45deg, ${nextEventData.secondaryColor}35, ${nextEventData.primaryColor}25)`,
                  borderRadius: "50%",
                  filter: "blur(40px)",
                }}
                initial={{ x: "-100%", scale: 0.3, opacity: 0 }}
                animate={{ x: "50%", scale: 1.2, opacity: 0.8 }}
                exit={{ x: "200%", scale: 1.8, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              />

              {/* Angular Transition Elements */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(45deg, transparent 40%, ${nextEventData.primaryColor}20 50%, transparent 60%)`,
                }}
                initial={{ transform: "translateX(-100%) skewX(-15deg)" }}
                animate={{ transform: "translateX(100%) skewX(-15deg)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 right-16 w-24 h-24 border-2 border-white/10 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
            borderColor: [
              "rgba(255,255,255,0.1)",
              `${currentEventData.primaryColor}40`,
              "rgba(255,255,255,0.1)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Header Section */}
      <motion.div
        className="relative z-10 text-center pt-20 pb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.p
          className="text-white/60 text-sm font-medium tracking-wider mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ( INNOVATION, NETWORKING, AND FUTURE INSIGHTS )
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Upcoming
        </motion.h2>
        <motion.h3
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-violet-400 bg-clip-text text-transparent mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Industry Events
        </motion.h3>
      </motion.div>

      {/* Single Event Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEvent}
            className="grid lg:grid-cols-2 gap-16 items-center min-h-[60vh]"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Content Side */}
            <motion.div
              className={`space-y-8 ${currentEvent % 2 === 0 ? "order-1" : "order-2"}`}
              initial={{ opacity: 0, x: currentEvent % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Animated Number */}
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
              >
                <motion.div
                  className={`text-[12rem] font-black bg-gradient-to-br ${currentEventData.gradient} bg-clip-text text-transparent leading-none select-none`}
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                      "blur(0px) hue-rotate(0deg)",
                      "blur(1px) hue-rotate(5deg)",
                      "blur(0px) hue-rotate(0deg)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {currentEventData.id}
                </motion.div>

                {/* Dynamic Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: `4px solid ${currentEventData.primaryColor}30`,
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                    borderColor: [
                      `${currentEventData.primaryColor}30`,
                      `${currentEventData.secondaryColor}50`,
                      `${currentEventData.primaryColor}30`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Event Title */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-white leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {currentEventData.title}
                </motion.h3>
                <motion.p
                  className="text-xl font-medium"
                  style={{ color: `${currentEventData.primaryColor}` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {currentEventData.subtitle}
                </motion.p>
              </motion.div>

              {/* Event Details */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div
                  className="flex items-center gap-3 text-white/80"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <Calendar
                    className="w-5 h-5"
                    style={{ color: currentEventData.primaryColor }}
                  />
                  <span className="text-sm">{currentEventData.date}</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-white/80"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: currentEventData.primaryColor }}
                  />
                  <span className="text-sm">{currentEventData.location}</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-white/80"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <Users
                    className="w-5 h-5"
                    style={{ color: currentEventData.primaryColor }}
                  />
                  <span className="text-sm">{currentEventData.attendees}</span>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-white/90 text-lg leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                {currentEventData.description}
              </motion.p>

              {/* Features */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                {currentEventData.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.4 + featureIndex * 0.1,
                    }}
                    whileHover={{ x: 15 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: currentEventData.primaryColor }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: featureIndex * 0.5,
                      }}
                    />
                    <span className="text-white/90 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Email Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <motion.button
                  onClick={handleEmailModalOpen}
                  className="group relative overflow-hidden rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${currentEventData.primaryColor}, ${currentEventData.secondaryColor})`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${currentEventData.primaryColor}40`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    background: [
                      `linear-gradient(135deg, ${currentEventData.primaryColor}, ${currentEventData.secondaryColor})`,
                      `linear-gradient(135deg, ${currentEventData.secondaryColor}, ${currentEventData.primaryColor})`,
                      `linear-gradient(135deg, ${currentEventData.primaryColor}, ${currentEventData.secondaryColor})`,
                    ],
                  }}
                  transition={{
                    background: { duration: 3, repeat: Infinity },
                  }}
                >
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email me the Details</span>
                  </motion.div>

                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${currentEventData.primaryColor}30, transparent)`,
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              className={`relative ${currentEvent % 2 === 0 ? "order-2" : "order-1"}`}
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: currentEvent % 2 === 0 ? 5 : -5,
              }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                className="relative group overflow-hidden rounded-3xl"
                whileHover={{
                  scale: 1.02,
                  rotateY: currentEvent % 2 === 0 ? 3 : -3,
                  rotateX: 2,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Dynamic Color Overlay */}
                <motion.div
                  className="absolute inset-0 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${currentEventData.primaryColor}20, ${currentEventData.secondaryColor}15)`,
                  }}
                  animate={{
                    background: [
                      `linear-gradient(135deg, ${currentEventData.primaryColor}20, ${currentEventData.secondaryColor}15)`,
                      `linear-gradient(135deg, ${currentEventData.secondaryColor}25, ${currentEventData.primaryColor}20)`,
                      `linear-gradient(135deg, ${currentEventData.primaryColor}20, ${currentEventData.secondaryColor}15)`,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image */}
                <motion.img
                  src={currentEventData.image}
                  alt={currentEventData.title}
                  className="w-full h-96 object-cover"
                  initial={{ scale: 1.2, filter: "blur(4px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />

                {/* Overlay Content */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.div
                    className="text-white space-y-2"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <motion.div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: currentEventData.primaryColor,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm font-medium">LIVE EVENT</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">
                      {currentEventData.subtitle}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {currentEventData.location} • {currentEventData.date}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Animated Corner Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 border-2 z-30"
                  style={{ borderColor: `${currentEventData.primaryColor}60` }}
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.1, 1],
                    borderColor: [
                      `${currentEventData.primaryColor}60`,
                      `${currentEventData.secondaryColor}80`,
                      `${currentEventData.primaryColor}60`,
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute bottom-6 left-6 w-8 h-8 rounded-full z-30"
                  style={{
                    backgroundColor: `${currentEventData.secondaryColor}40`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                    backgroundColor: [
                      `${currentEventData.secondaryColor}40`,
                      `${currentEventData.primaryColor}60`,
                      `${currentEventData.secondaryColor}40`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Event Progress Indicator */}
        <motion.div
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {events.map((_, index) => (
            <motion.div
              key={index}
              className="relative w-12 h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setCurrentEvent(index)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${events[index].primaryColor}, ${events[index].secondaryColor})`,
                }}
                initial={{ width: 0 }}
                animate={{
                  width: currentEvent === index ? "100%" : "0%",
                }}
                transition={{ duration: currentEvent === index ? 4 : 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-1/4 left-8 w-12 h-12 rounded-full"
        style={{
          background: `linear-gradient(45deg, ${currentEventData.primaryColor}30, ${currentEventData.secondaryColor}20)`,
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Email Modal */}
      <Dialog open={isEmailModalOpen} onOpenChange={setIsEmailModalOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border-gray-700/50 backdrop-blur-xl">
          <DialogHeader className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="mx-auto mb-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${currentEventData.primaryColor}, ${currentEventData.secondaryColor})`,
                }}
              >
                <Mail className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <DialogTitle asChild>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-bold text-white mb-2"
              >
                Get Event Details
              </motion.h2>
            </DialogTitle>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300"
            >
              Enter your email to receive detailed information about{" "}
              <span
                className="font-semibold"
                style={{ color: currentEventData.primaryColor }}
              >
                {currentEventData.title}
              </span>
            </motion.p>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {!isEmailSent ? (
              <motion.div
                key="email-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 py-4"
              >
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/30"
                    onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit()}
                  />
                </motion.div>

                <DialogFooter className="flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={() => setIsEmailModalOpen(false)}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>

                  <motion.button
                    onClick={handleEmailSubmit}
                    disabled={!email.trim()}
                    className="group relative overflow-hidden rounded-lg px-6 py-2 font-semibold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: email.trim()
                        ? `linear-gradient(135deg, ${currentEventData.primaryColor}, ${currentEventData.secondaryColor})`
                        : "rgba(107, 114, 128, 0.5)",
                    }}
                    whileHover={
                      email.trim()
                        ? {
                            scale: 1.05,
                            boxShadow: `0 10px 25px ${currentEventData.primaryColor}40`,
                          }
                        : {}
                    }
                    whileTap={email.trim() ? { scale: 0.98 } : {}}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 2 }}
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Details</span>
                    </motion.div>
                  </motion.button>
                </DialogFooter>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    type: "spring",
                    bounce: 0.6,
                  }}
                  className="mx-auto mb-4"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #10b981, #059669)`,
                    }}
                  >
                    <Check className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  Details Sent!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-gray-300"
                >
                  The details were sent to{" "}
                  <span className="font-semibold text-green-400">{email}</span>
                  <br />
                  Thanks a lot!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="mt-6"
                >
                  <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EventsSection;
