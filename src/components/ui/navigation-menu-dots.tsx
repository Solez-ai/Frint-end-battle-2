import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MoreVertical,
  Home,
  BarChart3,
  Calendar,
  TrendingUp,
  CreditCard,
  MessageSquare,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationMenuDotsProps {
  className?: string;
}

interface MenuSection {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const navigationSections: MenuSection[] = [
  {
    id: "hero",
    label: "Home",
    icon: Home,
    description: "Welcome & Overview",
  },
  {
    id: "features",
    label: "Features",
    icon: BarChart3,
    description: "AI-Driven Capabilities",
  },
  {
    id: "events",
    label: "Events",
    icon: Calendar,
    description: "Latest Updates",
  },
  {
    id: "stats",
    label: "Statistics",
    icon: TrendingUp,
    description: "Performance Metrics",
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: CreditCard,
    description: "Plans & Packages",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    icon: MessageSquare,
    description: "Customer Reviews",
  },
];

export default function NavigationMenuDots({
  className,
}: NavigationMenuDotsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    // Observe all sections
    navigationSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    closed: {
      rotate: 0,
      scale: 1,
    },
    open: {
      rotate: 180,
      scale: 1.1,
    },
  };

  return (
    <div className={cn("fixed top-6 right-6 z-50", className)}>
      {/* Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-12 h-12 rounded-full backdrop-blur-md transition-all duration-300",
          "shadow-lg border border-white/20 group",
          isOpen
            ? "bg-white/20 text-white"
            : "bg-white/10 hover:bg-white/20 text-white/80 hover:text-white",
        )}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isOpen
              ? [
                  "0 0 0 0 rgba(255,255,255,0.3)",
                  "0 0 0 8px rgba(255,255,255,0)",
                ]
              : "0 0 0 0 rgba(255,255,255,0)",
          }}
          transition={{ duration: 1.5, repeat: isOpen ? Infinity : 0 }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-full h-full"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <MoreVertical className="w-5 h-5" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={cn(
                "absolute top-16 right-0 w-80 bg-white/10 backdrop-blur-xl",
                "rounded-2xl border border-white/20 shadow-2xl overflow-hidden",
              )}
            >
              {/* Header */}
              <motion.div
                className="p-6 border-b border-white/10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h3 className="text-white font-semibold text-lg mb-1">
                  Navigation
                </h3>
                <p className="text-white/60 text-sm">Jump to any section</p>
              </motion.div>

              {/* Menu Items */}
              <div className="p-2">
                {navigationSections.map((section, index) => {
                  const isActive = activeSection === section.id;
                  const Icon = section.icon;

                  return (
                    <motion.button
                      key={section.id}
                      variants={itemVariants}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300",
                        "hover:bg-white/10 group relative overflow-hidden",
                        isActive && "bg-white/10 shadow-lg",
                      )}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Active Indicator */}
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-teal-400"
                        initial={{ opacity: 0, x: -4 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -4,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Icon */}
                      <motion.div
                        className={cn(
                          "flex items-center justify-center w-10 h-10 rounded-lg",
                          "bg-white/10 group-hover:bg-white/20 transition-all duration-300",
                          isActive && "bg-white/20 shadow-lg",
                        )}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon
                          className={cn(
                            "w-5 h-5 transition-colors duration-300",
                            isActive
                              ? "text-blue-300"
                              : "text-white/70 group-hover:text-white",
                          )}
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 text-left">
                        <div
                          className={cn(
                            "font-medium transition-colors duration-300",
                            isActive
                              ? "text-white"
                              : "text-white/90 group-hover:text-white",
                          )}
                        >
                          {section.label}
                        </div>
                        <div className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
                          {section.description}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Active Glow */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer */}
              <motion.div
                className="p-4 border-t border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <div className="text-center text-white/40 text-xs">
                  Scroll to navigate • Press ESC to close
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
