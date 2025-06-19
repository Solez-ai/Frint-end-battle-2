import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Brain,
  Zap,
  Eye,
  MessageSquare,
  Share2,
  Heart,
  Download,
  Filter,
} from "lucide-react";

const StatsSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // AI Features Usage Data
  const aiUsageData = [
    {
      name: "Smart Reporting",
      value: 45048,
      percentage: 16,
      unit: "reports",
      color: "#3B82F6",
      trend: "+16%",
    },
    {
      name: "AI Forecasting",
      value: 123000,
      percentage: 22,
      unit: "predictions",
      color: "#10B981",
      trend: "+22%",
    },
    {
      name: "Dashboard Generation",
      value: 47790662,
      percentage: 27,
      unit: "views",
      color: "#8B5CF6",
      trend: "+27%",
    },
    {
      name: "Data Consolidation",
      value: 89420,
      percentage: 19,
      unit: "merges",
      color: "#F59E0B",
      trend: "+19%",
    },
    {
      name: "NLP Queries",
      value: 34567,
      percentage: 15,
      unit: "questions",
      color: "#EF4444",
      trend: "+15%",
    },
    {
      name: "Anomaly Detection",
      value: 8934,
      percentage: 12,
      unit: "alerts",
      color: "#06B6D4",
      trend: "+12%",
    },
  ];

  // Company Outreach Data
  const outreachData = [
    { month: "Jan", engagement: 520, reach: 12400, posts: 28 },
    { month: "Feb", engagement: 780, reach: 18200, posts: 34 },
    { month: "Mar", engagement: 1250, reach: 24800, posts: 42 },
    { month: "Apr", engagement: 980, reach: 19600, posts: 38 },
    { month: "May", engagement: 1560, reach: 31200, posts: 48 },
    { month: "Jun", engagement: 1340, reach: 28900, posts: 45 },
    { month: "Jul", engagement: 1890, reach: 35600, posts: 52 },
    { month: "Aug", engagement: 2140, reach: 42300, posts: 58 },
    { month: "Sep", engagement: 1720, reach: 33400, posts: 49 },
    { month: "Oct", engagement: 2350, reach: 47200, posts: 62 },
    { month: "Nov", engagement: 2680, reach: 52800, posts: 68 },
    { month: "Dec", engagement: 2950, reach: 58900, posts: 74 },
  ];

  // Auto-switch between sections every 8 seconds
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 2);
    }, 8000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-brand-900 via-brand-800 to-teal-900 overflow-hidden"
    >
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
          ( PERFORMANCE INSIGHTS, REAL-TIME ANALYTICS )
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Platform
        </motion.h2>
        <motion.h3
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Statistics
        </motion.h3>
      </motion.div>

      {/* Section Navigation */}
      <motion.div
        className="flex justify-center gap-6 mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {[
          {
            icon: Brain,
            title: "AI Features Usage",
            subtitle: "Most Popular Tools",
          },
          {
            icon: TrendingUp,
            title: "Company Outreach",
            subtitle: "Social Engagement",
          },
        ].map((section, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveSection(index)}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ${
              activeSection === index
                ? "bg-white/10 shadow-2xl scale-105 border border-white/20"
                : "bg-white/5 hover:bg-white/10 hover:scale-102 border border-white/10"
            }`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl transition-all duration-300 ${
                  activeSection === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                }`}
              >
                <section.icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4
                  className={`font-bold text-lg transition-colors duration-300 ${
                    activeSection === index ? "text-white" : "text-white/80"
                  }`}
                >
                  {section.title}
                </h4>
                <p className="text-sm text-white/60">{section.subtitle}</p>
              </div>
            </div>

            {/* Progress indicator */}
            {activeSection === index && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          {activeSection === 0 ? (
            <AIUsageSection key="ai-usage" data={aiUsageData} />
          ) : (
            <OutreachSection key="outreach" data={outreachData} />
          )}
        </AnimatePresence>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

// AI Usage Section Component
const AIUsageSection = ({ data }: { data: any[] }) => {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-3 gap-8"
    >
      {data.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.02 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
            <motion.div
              className="px-3 py-1 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: `${item.color}20`,
                color: item.color,
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {item.trend}
            </motion.div>
          </div>

          {/* Main Value */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {item.value.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">{item.unit}</div>
            <div className="text-sm text-gray-400 mt-1">from 2024</div>
          </motion.div>

          {/* Progress Bar */}
          <div className="space-y-3">
            {[2024, 2023, 2022, 2021, 2020].map((year, yearIndex) => {
              const yearValue = Math.max(
                item.value * (0.6 + yearIndex * 0.1),
                item.value * 0.3,
              );
              const percentage = (yearValue / maxValue) * 100;

              return (
                <motion.div
                  key={year}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 + yearIndex * 0.05 }}
                >
                  <span className="text-sm font-medium text-gray-700 w-12">
                    {year}
                  </span>
                  <div className="flex-1 mx-4">
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.7 + index * 0.1 + yearIndex * 0.1,
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 w-20 text-right">
                    {yearValue.toLocaleString()}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Outreach Section Component
const OutreachSection = ({ data }: { data: any[] }) => {
  const maxEngagement = Math.max(...data.map((item) => item.engagement));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Social Engagement Analytics
        </h2>
        <p className="text-white/70">
          Company outreach performance and social media metrics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <motion.div
          className="text-center p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">2.4M</div>
          <div className="text-sm text-white/70">Total Reach</div>
        </motion.div>

        <motion.div
          className="text-center p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Heart className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">18.2K</div>
          <div className="text-sm text-white/70">Avg Engagement</div>
        </motion.div>

        <motion.div
          className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Share2 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">592</div>
          <div className="text-sm text-white/70">Total Posts</div>
        </motion.div>

        <motion.div
          className="text-center p-4 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">+47%</div>
          <div className="text-sm text-white/70">Growth Rate</div>
        </motion.div>
      </div>

      {/* Chart Area */}
      <div className="relative h-80 bg-white/5 rounded-2xl p-6 border border-white/10">
        <div className="text-center mb-4">
          <span className="text-sm text-white/70">
            Monthly Engagement Analytics - 2024 Performance
          </span>
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-12 bottom-12 flex flex-col justify-between text-xs text-white/60">
          {[3000, 2000, 1000, 0].map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>

        {/* Chart bars */}
        <div className="ml-8 h-64 flex items-end justify-between gap-2">
          {data.map((item, index) => {
            const height = (item.engagement / maxEngagement) * 100;

            return (
              <div
                key={item.month}
                className="flex flex-col items-center group"
              >
                <motion.div
                  className="relative w-12 bg-gradient-to-t from-red-400 to-red-500 rounded-t-lg group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300"
                  style={{ height: `${height}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {/* Value tooltip */}
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {item.engagement.toLocaleString()}
                  </motion.div>
                </motion.div>

                <span className="text-xs text-gray-600 mt-2 font-medium">
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>

        {/* Target lines */}
        <div className="absolute inset-6 pointer-events-none">
          <motion.div
            className="absolute w-full border-t-2 border-dashed border-gray-300"
            style={{ top: "25%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="absolute -right-16 -top-3 text-xs text-gray-500 bg-white px-2">
              Target 2025
            </span>
          </motion.div>

          <motion.div
            className="absolute w-full border-t-2 border-dashed border-gray-400"
            style={{ top: "50%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <span className="absolute -right-16 -top-3 text-xs text-gray-500 bg-white px-2">
              Target 2024
            </span>
          </motion.div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-red-500 rounded"></div>
          <span className="text-sm text-gray-600">Monthly Engagement</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 border-t-2 border-dashed border-gray-300"></div>
          <span className="text-sm text-gray-600">Growth Targets</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
