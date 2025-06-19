import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { MessageCircle, FileText, Send } from "lucide-react";
import { useEffect } from "react";

interface DashboardPopupProps {
  type: "reports" | "forecasts" | "dashboards" | "consolidations" | null;
  isVisible: boolean;
  onClose?: () => void;
}

const DashboardPopup = ({ type, isVisible }: DashboardPopupProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const getPopupContent = () => {
    switch (type) {
      case "reports":
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -150, y: 50, rotate: -10 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  delay: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: -75,
                y: 25,
                rotate: -5,
                transition: { duration: 0.3 },
              }}
              className="absolute top-20 left-8 bg-white rounded-xl shadow-2xl p-6 w-80 border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.3 },
                }}
                className="mb-4"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  Business overview report
                </h3>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.5, duration: 0.3 },
                    }}
                    className="text-xs text-gray-500 mb-2"
                  >
                    ORG LOGO
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.6, duration: 0.4 },
                    }}
                    className="h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded mb-3 flex items-center justify-center"
                  >
                    <span className="text-gray-400 text-sm">
                      Sydney Opera House
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        );

      case "forecasts":
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 150, y: -50, rotate: 10 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  delay: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 75,
                y: -25,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
              className="absolute top-20 right-8 bg-white rounded-xl shadow-2xl p-6 w-96 border border-gray-100"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3, duration: 0.4 },
                  }}
                  className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Total Income</span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.5, duration: 0.3 },
                      }}
                      className="text-xs text-red-500"
                    >
                      ↗ 36.5%
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4, duration: 0.3 },
                    }}
                    className="text-lg font-semibold"
                  >
                    $426.8K
                  </motion.div>
                  <div className="text-xs text-gray-400">
                    $372.8K total last year
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5, duration: 0.4 },
                  }}
                  className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
                >
                  <div className="text-sm text-gray-600 mb-3">Cash Flow</div>
                  <div className="h-24 bg-blue-50 rounded flex items-end justify-center space-x-1">
                    {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{
                            height: `${height}%`,
                            transition: {
                              delay: 0.7 + i * 0.05,
                              duration: 0.4,
                              type: "spring",
                            },
                          }}
                          className="bg-blue-500 w-4 rounded-t"
                        />
                      ),
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.7, duration: 0.4 },
                  }}
                  className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cash</span>
                    <span className="text-xs text-green-500">↗ 300.5%</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { delay: 0.9, duration: 0.4 },
                    }}
                    className="text-2xl font-bold"
                  >
                    $288,721
                  </motion.div>
                  <div className="text-xs text-gray-400">$86,589</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        );

      case "dashboards":
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0"
          >
            {/* Expenses pie chart - bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: -150, y: 100, rotate: -15 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 200,
                  delay: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                x: -75,
                y: 50,
                rotate: -8,
                transition: { duration: 0.3 },
              }}
              className="absolute bottom-32 left-12 bg-white rounded-xl shadow-2xl p-4 w-64 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Expenses</span>
                <span className="text-xs text-gray-500">$64.5K</span>
              </div>
              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251"
                    initial={{ strokeDashoffset: 251 }}
                    animate={{
                      strokeDashoffset: 75,
                      transition: {
                        delay: 0.6,
                        duration: 1.2,
                        ease: "easeOut",
                      },
                    }}
                  />
                </svg>
              </div>
              <div className="space-y-2 mt-3">
                {["Utilities", "Marketing", "Fixed Expenses"].map((item, i) => {
                  const colors = [
                    "bg-blue-500",
                    "bg-green-500",
                    "bg-yellow-500",
                  ];
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.8 + i * 0.1, duration: 0.3 },
                      }}
                      className="flex items-center text-xs"
                    >
                      <div
                        className={`w-3 h-3 ${colors[i]} rounded-full mr-2`}
                      ></div>
                      <span>{item}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Message popup - top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 200, y: -80, rotate: 12 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  damping: 18,
                  stiffness: 250,
                  delay: 0.4,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 100,
                y: -40,
                rotate: 6,
                transition: { duration: 0.3 },
              }}
              className="absolute top-16 right-16 bg-white rounded-xl shadow-2xl p-4 w-80 border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.7, duration: 0.3 },
                }}
                className="flex items-center justify-between mb-2"
              >
                <MessageCircle className="w-4 h-4 text-red-500" />
                <div className="text-xs text-gray-500">...</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.3 },
                }}
                className="text-sm font-medium mb-1"
              >
                Mark Brenman
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.9, duration: 0.3 },
                }}
                className="text-xs text-gray-600 mb-3"
              >
                @Morgan let's talk about a strategy to improve these metrics.
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1, duration: 0.3 },
                }}
                className="flex items-center justify-between"
              >
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <button className="text-xs text-blue-500 font-medium hover:text-blue-600 transition-colors">
                  Reply
                </button>
              </motion.div>
            </motion.div>

            {/* Share popup - center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 80 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  delay: 0.6,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                y: 40,
                transition: { duration: 0.3 },
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-4 w-72 border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.9, duration: 0.3 },
                }}
                className="flex items-center justify-between mb-3"
              >
                <Send className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">Send to</span>
              </motion.div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  {
                    icon: FileText,
                    color: "text-red-500",
                    name: "PDF",
                    bg: null,
                  },
                  {
                    icon: null,
                    color: null,
                    name: "WhatsApp",
                    bg: "bg-green-500",
                  },
                  { icon: null, color: null, name: "Word", bg: "bg-blue-500" },
                  {
                    icon: null,
                    color: null,
                    name: "Slack",
                    bg: "bg-purple-500",
                  },
                  {
                    icon: null,
                    color: null,
                    name: "Excel",
                    bg: "bg-green-600",
                  },
                  { icon: null, color: null, name: "Teams", bg: "bg-blue-600" },
                  { icon: null, color: null, name: "Email", bg: "bg-gray-500" },
                  {
                    icon: null,
                    color: null,
                    name: "Shared URL",
                    bg: "bg-orange-500",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: i % 2 === 0 ? -15 : 15,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: { delay: 1.1 + i * 0.05, duration: 0.3 },
                    }}
                    className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded cursor-pointer transition-all duration-200 hover:scale-105"
                  >
                    {item.icon ? (
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    ) : (
                      <div
                        className={`w-4 h-4 ${item.bg} rounded shadow-sm`}
                      ></div>
                    )}
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Health score - bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 120, y: 100 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  delay: 0.8,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                x: 60,
                y: 50,
                transition: { duration: 0.3 },
              }}
              className="absolute bottom-20 right-20 bg-white rounded-xl shadow-2xl p-3 w-64 border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.1, duration: 0.3 },
                }}
                className="flex items-center space-x-2"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: { delay: 1.2, duration: 0.5, type: "spring" },
                  }}
                  className="w-8 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm"
                >
                  <span className="text-white text-xs font-bold">✓</span>
                </motion.div>
                <span className="text-sm font-medium">
                  90% Financial Health Score
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        );

      case "consolidations":
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0"
          >
            {/* Main table - top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -200, y: -50, rotate: -8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                  delay: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: -100,
                y: -25,
                rotate: -4,
                transition: { duration: 0.3 },
              }}
              className="absolute top-20 left-8 bg-white rounded-xl shadow-2xl p-6 w-96 border border-gray-100"
            >
              <table className="w-full text-xs">
                <motion.thead
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.3 },
                  }}
                >
                  <tr className="border-b">
                    <th className="text-left py-2">Account</th>
                    <th className="text-right py-2">Amount</th>
                    <th className="text-right py-2">Period</th>
                    <th className="text-right py-2">Variance</th>
                    <th className="text-right py-2">Forecast</th>
                  </tr>
                </motion.thead>
                <tbody className="space-y-1">
                  {[
                    [
                      "Sales Revenue",
                      "$1.2M",
                      "Jan",
                      "+5.2%",
                      "$1.3M",
                      "text-green-500",
                    ],
                    [
                      "Operating Expenses",
                      "$840K",
                      "Jan",
                      "-2.1%",
                      "$820K",
                      "text-red-500",
                    ],
                  ].map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.5 + i * 0.2, duration: 0.4 },
                      }}
                    >
                      <td className="py-1">{row[0]}</td>
                      <td className="text-right">{row[1]}</td>
                      <td className="text-right">{row[2]}</td>
                      <td className={`text-right ${row[5]}`}>{row[3]}</td>
                      <td className="text-right">{row[4]}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Metric cards positioned around the screen */}
            {[
              {
                label: "Today",
                value: "$3.29K",
                color: "",
                position: "top-32 right-20",
                direction: { x: 150, y: -80 },
              },
              {
                label: "This month",
                value: "$700,548",
                color: "",
                position: "top-48 right-8",
                direction: { x: 200, y: -20 },
              },
              {
                label: "Cash revenue",
                value: "$380K",
                color: "text-green-600",
                position: "bottom-32 right-16",
                direction: { x: 150, y: 120 },
              },
              {
                label: "Overdue",
                value: "$1.46M",
                color: "text-red-600",
                position: "bottom-16 right-40",
                direction: { x: 180, y: 80 },
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  x: item.direction.x,
                  y: item.direction.y,
                  rotate: Math.random() * 20 - 10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    damping: 18,
                    stiffness: 200,
                    delay: 0.3 + i * 0.15,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.7,
                  x: item.direction.x / 2,
                  y: item.direction.y / 2,
                  transition: { duration: 0.3 },
                }}
                className={`absolute ${item.position} bg-white rounded-xl shadow-2xl p-4 w-48 border border-gray-100`}
              >
                <div className="text-xs text-gray-600 mb-2">{item.label}</div>
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { delay: 0.5 + i * 0.15, duration: 0.4 },
                  }}
                  className={`text-lg font-bold ${item.color}`}
                >
                  {item.value}
                </motion.div>
              </motion.div>
            ))}

            {/* Integration partners - bottom center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 200 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 250,
                  delay: 0.9,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 100,
                transition: { duration: 0.3 },
              }}
              className="absolute bottom-40 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 w-80 border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.1, duration: 0.3 },
                }}
                className="text-sm font-medium mb-3"
              >
                Integration Partners
              </motion.div>
              <div className="flex items-center justify-center space-x-3">
                {[
                  { name: "quickbooks", bg: "bg-green-500" },
                  { name: "Xero", bg: "bg-blue-500" },
                  { name: "Sage", bg: "bg-green-600" },
                ].map((partner, i) => (
                  <motion.div key={partner.name} className="flex items-center">
                    {i > 0 && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: 1.3 + i * 0.2, duration: 0.3 },
                        }}
                        className="text-gray-400 mr-3"
                      >
                        +
                      </motion.span>
                    )}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.4,
                        y: 30,
                        rotate: Math.random() * 20 - 10,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        rotate: 0,
                        transition: {
                          delay: 1.3 + i * 0.2,
                          duration: 0.5,
                          type: "spring",
                          damping: 15,
                        },
                      }}
                      className={`${partner.bg} text-white px-3 py-1 rounded text-xs font-bold shadow-lg`}
                    >
                      {partner.name}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Regional cards - left side */}
            <div className="absolute left-8 bottom-16 space-y-2">
              {["Global Finance", "US Reports", "AUS Reports"].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -120, scale: 0.8, rotate: -15 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                        delay: 1.5 + i * 0.1,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -60,
                      scale: 0.8,
                      rotate: -8,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-white rounded-xl shadow-2xl p-3 w-32 border border-gray-100"
                  >
                    <div className="text-xs text-gray-600">{item}</div>
                  </motion.div>
                ),
              )}

              <div className="flex space-x-2 mt-2">
                {[
                  { primary: "UK", secondary: "Texas" },
                  { primary: "AU", secondary: "California" },
                ].map((item, i) => (
                  <motion.div
                    key={item.primary}
                    initial={{ opacity: 0, y: 50, scale: 0.7, rotate: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                        delay: 1.8 + i * 0.1,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: 25,
                      scale: 0.7,
                      rotate: 10,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-white rounded-xl shadow-2xl p-3 w-20 border border-gray-100"
                  >
                    <div className="text-xs text-gray-600">{item.primary}</div>
                    <div className="text-xs text-gray-600">
                      {item.secondary}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chart - bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, x: 180, y: 150, rotate: 15 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 250,
                  delay: 2,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.6,
                x: 90,
                y: 75,
                rotate: 8,
                transition: { duration: 0.3 },
              }}
              className="absolute bottom-16 right-16 bg-white rounded-xl shadow-2xl p-4 w-64 border border-gray-100"
            >
              <div className="h-32 bg-gradient-to-b from-blue-100 to-blue-50 rounded flex items-end justify-around p-2">
                {[60, 80, 45, 90, 70, 95, 85, 75, 65, 88].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, scale: 0.8 }}
                    animate={{
                      height: `${height}%`,
                      scale: 1,
                      transition: {
                        delay: 2.2 + i * 0.05,
                        duration: 0.5,
                        type: "spring",
                      },
                    }}
                    className={`w-3 rounded-t ${i % 2 === 0 ? "bg-blue-500" : "bg-red-400"} shadow-sm`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none"
        >
          {getPopupContent()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DashboardPopup;
