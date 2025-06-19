import { useState, useRef, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Play,
  BarChart3,
  TrendingUp,
  Layout,
  Merge,
  Brain,
} from "lucide-react";
import TrustIndicators from "@/components/ui/trust-indicators";
import DashboardPopup from "@/components/ui/dashboard-popup";
import EventsSection from "@/components/ui/events-section";
import StatsSection from "@/components/ui/stats-section";

const Index = () => {
  const [activeHover, setActiveHover] = useState<
    "reports" | "forecasts" | "dashboards" | "consolidations" | null
  >(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleWordHover = (
    word: "reports" | "forecasts" | "dashboards" | "consolidations" | null,
  ) => {
    setActiveHover(word);
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-brand-900 via-brand-800 to-teal-900 relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-400/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-teal-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Navigation dots on the right */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
          <div className="flex flex-col space-y-3">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-6 py-8">
          {/* Trust indicators */}
          <TrustIndicators />

          {/* Hero section */}
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Create{" "}
              <span
                className="relative cursor-pointer hover:text-blue-300 transition-all duration-300"
                onMouseEnter={() => handleWordHover("reports")}
                onMouseLeave={() => handleWordHover(null)}
              >
                reports
              </span>
              ,{" "}
              <span
                className="relative cursor-pointer hover:text-teal-300 transition-all duration-300"
                onMouseEnter={() => handleWordHover("forecasts")}
                onMouseLeave={() => handleWordHover(null)}
              >
                forecasts
              </span>
              ,
              <br />
              <span
                className="relative cursor-pointer hover:text-blue-300 transition-all duration-300"
                onMouseEnter={() => handleWordHover("dashboards")}
                onMouseLeave={() => handleWordHover(null)}
              >
                dashboards
              </span>
              {" & "}
              <span
                className="relative cursor-pointer hover:text-teal-300 transition-all duration-300"
                onMouseEnter={() => handleWordHover("consolidations")}
                onMouseLeave={() => handleWordHover(null)}
              >
                consolidations
              </span>
            </motion.h1>

            {/* AI insights badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full px-6 py-3 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">
                Now with AI-insights
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={scrollToFeatures}
                className="bg-white text-brand-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                See Our Features
              </button>

              <button className="flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors duration-300">
                <Play className="w-4 h-4" />
                Ai Being Utlilized To its Limit
              </button>
            </motion.div>

            {/* Subtle Decorative Elements */}
            <motion.div
              className="relative mt-16 opacity-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.2, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* Analytics Chart Mockup */}
              <motion.div
                className="absolute left-1/4 transform -translate-x-1/2 bg-white/5 backdrop-blur-md rounded-2xl p-6 w-80 h-48 border border-white/10"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="space-y-3">
                  {/* Chart Header */}
                  <div className="flex justify-between items-center">
                    <div className="h-3 bg-white/20 rounded w-20"></div>
                    <div className="h-2 bg-white/15 rounded w-12"></div>
                  </div>

                  {/* Chart Bars */}
                  <div className="flex items-end gap-2 h-24">
                    {[60, 40, 80, 30, 70, 45, 90, 35, 65].map((height, i) => (
                      <motion.div
                        key={i}
                        className="bg-gradient-to-t from-blue-400/30 to-teal-400/30 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1.5 + i * 0.1, duration: 0.6 }}
                      />
                    ))}
                  </div>

                  {/* Chart Labels */}
                  <div className="flex justify-between">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 bg-white/15 rounded w-8"
                      ></div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connection Nodes Network */}
              <motion.div
                className="absolute right-1/4 transform translate-x-1/2 w-72 h-56"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -1, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Central Node */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-violet-400/40 to-purple-400/40 rounded-full border-2 border-white/20 backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Surrounding Nodes */}
                {[
                  { x: 20, y: 20, delay: 0 },
                  { x: 80, y: 30, delay: 0.5 },
                  { x: 75, y: 75, delay: 1 },
                  { x: 25, y: 80, delay: 1.5 },
                  { x: 10, y: 55, delay: 2 },
                  { x: 90, y: 60, delay: 2.5 },
                ].map((node, i) => (
                  <motion.div key={i} className="absolute">
                    {/* Connection Line */}
                    <motion.div
                      className="absolute bg-gradient-to-r from-white/10 to-transparent h-px origin-left"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: `${Math.sqrt(Math.pow(50 - node.x, 2) + Math.pow(50 - node.y, 2))}%`,
                        transform: `rotate(${(Math.atan2(50 - node.y, 50 - node.x) * 180) / Math.PI}deg)`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 2 + node.delay, duration: 1 }}
                    />

                    {/* Node */}
                    <motion.div
                      className="w-4 h-4 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full border border-white/15 backdrop-blur-sm"
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.6 }}
                      transition={{ delay: 1.8 + node.delay, duration: 0.5 }}
                      whileHover={{ scale: 1.5, opacity: 1 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Dashboard Elements */}
              <motion.div
                className="absolute left-12 bottom-20 bg-white/5 backdrop-blur-md rounded-xl p-4 w-48 h-32 border border-white/10"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="h-2 bg-white/20 rounded w-16"></div>
                    <div className="h-2 bg-green-400/30 rounded w-8"></div>
                  </div>
                  <div className="h-1 bg-white/15 rounded w-full"></div>
                  <div className="h-1 bg-white/15 rounded w-3/4"></div>

                  {/* Mini progress bars */}
                  <div className="space-y-1 mt-3">
                    {[70, 45, 90].map((width, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400/30 rounded-full"></div>
                        <div className="h-1 bg-white/10 rounded flex-1">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-400/40 to-teal-400/40 rounded"
                            initial={{ width: 0 }}
                            animate={{ width: `${width}%` }}
                            transition={{ delay: 2.5 + i * 0.3, duration: 1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tree/Hierarchy Structure */}
              <motion.div
                className="absolute right-16 bottom-16 w-40 h-40"
                animate={{
                  x: [0, -15, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Root Node */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded border border-white/20 backdrop-blur-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                />

                {/* Branch Lines */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="w-px h-8 bg-white/15"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 2.3, duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute top-8 left-0 w-16 h-px bg-white/15 transform -translate-x-1/2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.6, duration: 0.5 }}
                  />
                </div>

                {/* Child Nodes */}
                {[-20, 20].map((offset, i) => (
                  <motion.div key={i}>
                    <motion.div
                      className="w-4 h-4 bg-gradient-to-r from-teal-400/30 to-emerald-400/30 rounded border border-white/15 backdrop-blur-sm"
                      style={{
                        position: "absolute",
                        top: "60px",
                        left: `calc(50% + ${offset}px)`,
                        transform: "translateX(-50%)",
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.8 + i * 0.2, duration: 0.5 }}
                    />

                    {/* Vertical lines from children */}
                    <motion.div
                      className="w-px h-6 bg-white/10"
                      style={{
                        position: "absolute",
                        top: "76px",
                        left: `calc(50% + ${offset}px)`,
                        transform: "translateX(-50%)",
                      }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 3 + i * 0.2, duration: 0.5 }}
                    />

                    {/* Grandchild nodes */}
                    <motion.div
                      className="w-3 h-3 bg-gradient-to-r from-violet-400/25 to-purple-400/25 rounded border border-white/10 backdrop-blur-sm"
                      style={{
                        position: "absolute",
                        top: "100px",
                        left: `calc(50% + ${offset}px)`,
                        transform: "translateX(-50%)",
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 3.2 + i * 0.2, duration: 0.5 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Metrics Cards */}
              <motion.div
                className="absolute top-16 left-16 bg-white/5 backdrop-blur-md rounded-lg p-3 w-32 h-20 border border-white/10"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 0.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="space-y-1">
                  <div className="h-2 bg-white/20 rounded w-full"></div>
                  <div className="text-right">
                    <div className="h-4 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded w-16 ml-auto"></div>
                  </div>
                  <div className="h-1 bg-white/15 rounded w-2/3"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-20 right-20 bg-white/5 backdrop-blur-md rounded-lg p-3 w-28 h-16 border border-white/10"
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -0.5, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="space-y-1">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400/30 rounded-full"></div>
                    <div className="h-2 bg-white/15 rounded flex-1"></div>
                  </div>
                  <div className="h-3 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded w-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Dashboard popup overlays */}
        <DashboardPopup type={activeHover} isVisible={activeHover !== null} />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-32 right-1/4 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-12 w-4 h-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-50"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Features Section */}
      <FeaturesSection ref={featuresRef} />

      {/* Events Section */}
      <EventsSection />

      {/* Stats Section */}
      <StatsSection />
    </>
  );
};

// Features Section Component
const FeaturesSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [activeFeature, setActiveFeature] = useState(0);

  console.log("Active feature:", activeFeature); // Debug log

  const features = [
    {
      icon: BarChart3,
      title: "Smart Reporting",
      subtitle: "Instantaneous, accurate billing aggregation",
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-400",
      items: [
        "Auto-generated Reports (daily/weekly/monthly)",
        'NLP-based Report Queries: Ask questions like "Show Q2 sales in Asia"',
        "Anomaly Detection: Highlights unusual data patterns",
        "Report Summarization: Auto-summarizes long reports using AI",
      ],
    },
    {
      icon: TrendingUp,
      title: "AI Forecasting",
      subtitle:
        "AI-powered insights that predict customer needs and drive personalized experiences.",
      gradient: "from-teal-500 to-emerald-500",
      color: "text-teal-400",
      items: [
        "Predictive Analytics: Sales, revenue, churn, expenses",
        "Custom Forecast Models: Built using past user/company data",
        'Scenario Simulation: "What if" analysis (e.g., budget cuts, market changes)',
        "Time Series Modeling: ARIMA, Prophet, LSTM-based predictions",
      ],
    },
    {
      icon: Layout,
      title: "Dashboard Generation",
      subtitle: "Real-time dashboards that adapt to your data automatically.",
      gradient: "from-violet-500 to-purple-500",
      color: "text-violet-400",
      items: [
        "Auto-generated Dashboards: Based on imported data",
        "AI Widget Suggestions: Recommends KPIs based on business type",
        "Real-time Syncing: Live dashboards with data streams",
        'Custom Views via AI: "Create a dashboard for marketing spend vs ROI"',
      ],
    },
    {
      icon: Merge,
      title: "Consolidation & Integration",
      subtitle: "Unified data pipeline connecting all your business systems.",
      gradient: "from-orange-500 to-red-500",
      color: "text-orange-400",
      items: [
        "Multi-source Merging: Combine Excel, Sheets, APIs, CSVs",
        "Smart Mapping: AI aligns fields and columns across different formats",
        "Currency/Unit Normalization: Standardizes data from global sources",
        "Conflict Resolution: Suggests best-value when merging conflicting data",
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-brand-900 via-brand-800 to-brand-900 relative overflow-hidden min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-teal-400/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="text-center pt-20 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-white/60 text-sm font-medium tracking-wider mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          ( EFFICIENCY, SCALABILITY, AND AGILITY )
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Unparalleled
        </motion.h2>
        <motion.h3
          className="text-4xl md:text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          AI-Driven Capabilities
        </motion.h3>
      </motion.div>

      {/* Features Navigation */}
      <motion.div
        className="flex justify-center gap-4 mb-16 relative z-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.button
            key={feature.title}
            onClick={() => {
              console.log("Button clicked:", index); // Debug log
              setActiveFeature(index);
            }}
            className={`px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer z-10 relative ${
              activeFeature === index
                ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                : "bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 hover:text-white"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <feature.icon className="w-5 h-5 inline mr-2" />
            {feature.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Single Dynamic Feature Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <FeatureCard
          key={`feature-${activeFeature}`}
          feature={features[activeFeature]}
          index={activeFeature}
        />
      </div>
    </div>
  );
});

// Individual Feature Card Component
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  return (
    <motion.div
      key={feature.title}
      className="min-h-[60vh] flex items-center py-12"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h3
            className="text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {feature.title}
          </motion.h3>

          <motion.p
            className="text-xl text-white/80 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {feature.subtitle}
          </motion.p>

          <div className="space-y-4">
            {feature.items.map((item: string, itemIndex: number) => (
              <motion.div
                key={itemIndex}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + itemIndex * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className={`flex-shrink-0 w-2 h-2 rounded-full mt-3 ${
                    index === 0
                      ? "bg-blue-400"
                      : index === 1
                        ? "bg-teal-400"
                        : index === 2
                          ? "bg-violet-400"
                          : "bg-orange-400"
                  }`}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: itemIndex * 0.5,
                  }}
                />
                <p className="text-white/90 leading-relaxed text-lg group-hover:text-white transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side - Dashboard Mockup */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <DashboardMockup feature={feature} index={index} />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Dashboard Mockup Component matching your screenshots
const DashboardMockup = ({
  feature,
  index,
}: {
  feature: any;
  index: number;
}) => {
  const titles = [
    "Smart Reporting Engine",
    "AI Forecasting Models",
    "Auto-Generated Dashboards",
    "Data Integration Hub",
  ];

  const descriptions = [
    "AI-powered analytics with automated anomaly detection and NLP-based queries.",
    "Advanced predictive models using ARIMA, Prophet, and LSTM for accurate forecasting.",
    "Real-time dashboards that adapt to your data automatically.",
    "Unified data pipeline connecting all your business systems.",
  ];

  return (
    <motion.div
      className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl min-h-[500px]"
      whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 3 : -3 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative z-10">
        <motion.h4
          className="text-3xl font-bold text-slate-800 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {titles[index]}
        </motion.h4>
        <motion.p
          className="text-slate-600 text-base mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {descriptions[index]}
        </motion.p>

        {/* Dashboard content based on feature */}
        {index === 0 && <ReportsContent />}
        {index === 1 && <ChargingContent />}
        {index === 2 && <DashboardContent />}
        {index === 3 && <IntegrationContent />}
      </div>
    </motion.div>
  );
};

// Content Components
const ReportsContent = () => (
  <div className="space-y-6">
    {/* Report Summary Cards */}
    <div className="grid grid-cols-2 gap-6">
      <motion.div
        className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-slate-700">
            Monthly Revenue
          </span>
          <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
            +12.5%
          </div>
        </div>
        <div className="text-3xl font-bold text-slate-800 mb-2">$2.4M</div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="text-xs text-slate-500 mt-2">vs last month</div>
      </motion.div>

      <motion.div
        className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-slate-700">
            Anomalies Detected
          </span>
          <div className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
            3 Issues
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-xs text-slate-600">
              Unusual spending pattern in Q2
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-xs text-slate-600">
              Revenue spike on Mar 15
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-xs text-slate-600">
              Missing data from Asia region
            </span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Report Generation Status */}
    <motion.div
      className="bg-white rounded-xl p-4 shadow-lg border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">
          Auto-Generated Reports
        </span>
        <div className="text-xs text-blue-600">Processing...</div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex justify-between text-xs">
          <span>Daily Sales Report</span>
          <span className="text-green-600">✓ Complete</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>Weekly Analytics</span>
          <span className="text-blue-600">🔄 In Progress</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>Monthly Summary</span>
          <span className="text-slate-400">⏳ Queued</span>
        </div>
      </div>
    </motion.div>
  </div>
);

const ChargingContent = () => (
  <div className="space-y-6">
    {/* Forecasting Charts */}
    <div className="grid grid-cols-2 gap-6">
      <motion.div
        className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-slate-700">
            Revenue Prediction
          </span>
          <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
            +24% Growth
          </div>
        </div>
        <div className="text-2xl font-bold text-slate-800 mb-4">$3.2M</div>
        <div className="text-xs text-slate-500 mb-3">Next Quarter Forecast</div>

        {/* Mini forecast chart */}
        <div className="h-16 flex items-end gap-1">
          {[40, 50, 45, 60, 55, 70, 65, 85].map((height, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t flex-1"
              style={{ height: `${height}%` }}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
        <div className="text-xs text-slate-400 mt-2">
          Historical vs Predicted
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-slate-700">
            Risk Assessment
          </span>
          <div className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded">
            Medium Risk
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Market Volatility</span>
            <div className="flex gap-1">
              {[1, 1, 1, 0, 0].map((filled, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${filled ? "bg-orange-500" : "bg-slate-200"}`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Demand Prediction</span>
            <div className="flex gap-1">
              {[1, 1, 1, 1, 0].map((filled, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${filled ? "bg-green-500" : "bg-slate-200"}`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-600">Churn Likelihood</span>
            <div className="flex gap-1">
              {[1, 1, 0, 0, 0].map((filled, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${filled ? "bg-blue-500" : "bg-slate-200"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* AI Model Performance */}
    <motion.div
      className="bg-white rounded-xl p-4 shadow-lg border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-slate-700">
          AI Model Accuracy
        </span>
        <motion.div
          className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-sm shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0.7)",
              "0 0 0 10px rgba(34, 197, 94, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          94%
        </motion.div>
      </div>
      <div className="text-xs text-slate-500">
        Model trained on 2.3M data points • Last updated: 2 hours ago
      </div>
    </motion.div>
  </div>
);

const DashboardContent = () => (
  <motion.div
    className="grid grid-cols-3 gap-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    viewport={{ once: true }}
  >
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="bg-white rounded-xl p-4 shadow-lg border border-slate-200"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.05 }}
      >
        <motion.div
          className="h-12 bg-gradient-to-r from-blue-200 to-teal-200 rounded-lg mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="h-2 bg-slate-200 rounded-full mb-2"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="h-2 bg-slate-200 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "65%" }}
          transition={{ delay: 1.1 + i * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>
    ))}
  </motion.div>
);

const IntegrationContent = () => (
  <div className="relative">
    <motion.div
      className="grid grid-cols-4 gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {["Excel", "API", "CSV", "DB"].map((source, i) => (
        <motion.div
          key={source}
          className="bg-white rounded-xl p-4 text-center shadow-lg border border-slate-200"
          initial={{ opacity: 0, y: 30, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, rotate: 5 }}
        >
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg mb-3 mx-auto"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          />
          <div className="text-xs font-bold text-slate-700">{source}</div>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(249, 115, 22, 0.7)",
            "0 0 0 20px rgba(249, 115, 22, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <Merge className="w-8 h-8 text-white" />
      </motion.div>
    </motion.div>
  </div>
);

export default Index;
