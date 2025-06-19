import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  Crown,
  Diamond,
  Zap,
  Brain,
  BarChart3,
  TrendingUp,
  Layout,
  Merge,
  Users,
  Clock,
  Shield,
  Headphones,
  Sparkles,
} from "lucide-react";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const pricingPlans = [
    {
      id: "silver",
      name: "Silver",
      tagline: "Perfect for Small Teams",
      icon: Star,
      iconColor: "#94A3B8",
      gradient: "from-slate-400 via-gray-500 to-slate-600",
      borderGradient: "from-slate-400/50 via-gray-500/50 to-slate-600/50",
      bgGradient: "from-slate-500/10 via-gray-600/5 to-slate-700/10",
      monthly: 29,
      yearly: 25, // 15% discount
      popular: false,
      features: [
        {
          name: "Smart Reporting",
          included: true,
          limit: "Up to 100 reports/month",
        },
        {
          name: "Basic AI Forecasting",
          included: true,
          limit: "5 prediction models",
        },
        {
          name: "Dashboard Generation",
          included: true,
          limit: "3 custom dashboards",
        },
        { name: "Data Consolidation", included: true, limit: "5 data sources" },
        { name: "Email Support", included: true, limit: "24hr response time" },
        { name: "API Access", included: false, limit: "Not included" },
        { name: "Advanced Analytics", included: false, limit: "Not included" },
        { name: "White-label Options", included: false, limit: "Not included" },
      ],
      limits: {
        users: "Up to 5 users",
        storage: "50GB storage",
        reports: "100 reports/month",
        support: "Email support",
      },
    },
    {
      id: "gold",
      name: "Gold",
      tagline: "Most Popular Choice",
      icon: Crown,
      iconColor: "#F59E0B",
      gradient: "from-yellow-400 via-orange-500 to-yellow-600",
      borderGradient: "from-yellow-400/50 via-orange-500/50 to-yellow-600/50",
      bgGradient: "from-yellow-500/10 via-orange-600/5 to-yellow-700/10",
      monthly: 89,
      yearly: 76, // 15% discount
      popular: true,
      features: [
        { name: "Smart Reporting", included: true, limit: "Unlimited reports" },
        {
          name: "Advanced AI Forecasting",
          included: true,
          limit: "20 prediction models",
        },
        {
          name: "Dashboard Generation",
          included: true,
          limit: "Unlimited dashboards",
        },
        {
          name: "Data Consolidation",
          included: true,
          limit: "25 data sources",
        },
        {
          name: "Priority Support",
          included: true,
          limit: "4hr response time",
        },
        { name: "API Access", included: true, limit: "10,000 calls/month" },
        { name: "Advanced Analytics", included: true, limit: "Full suite" },
        { name: "White-label Options", included: false, limit: "Not included" },
      ],
      limits: {
        users: "Up to 25 users",
        storage: "500GB storage",
        reports: "Unlimited reports",
        support: "Priority support",
      },
    },
    {
      id: "diamond",
      name: "Diamond",
      tagline: "Enterprise Excellence",
      icon: Diamond,
      iconColor: "#8B5CF6",
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      borderGradient: "from-purple-400/50 via-violet-500/50 to-indigo-600/50",
      bgGradient: "from-purple-500/10 via-violet-600/5 to-indigo-700/10",
      monthly: 249,
      yearly: 212, // 15% discount
      popular: false,
      features: [
        {
          name: "Smart Reporting",
          included: true,
          limit: "Unlimited + Custom",
        },
        {
          name: "Enterprise AI Forecasting",
          included: true,
          limit: "Unlimited models",
        },
        {
          name: "Dashboard Generation",
          included: true,
          limit: "Unlimited + Custom",
        },
        {
          name: "Data Consolidation",
          included: true,
          limit: "Unlimited sources",
        },
        {
          name: "24/7 Dedicated Support",
          included: true,
          limit: "Instant response",
        },
        { name: "Full API Access", included: true, limit: "Unlimited calls" },
        {
          name: "Advanced Analytics",
          included: true,
          limit: "Full suite + Custom",
        },
        {
          name: "White-label Options",
          included: true,
          limit: "Full customization",
        },
      ],
      limits: {
        users: "Unlimited users",
        storage: "Unlimited storage",
        reports: "Unlimited everything",
        support: "24/7 dedicated support",
      },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-brand-900 via-brand-800 to-teal-900 overflow-hidden py-20"
    >
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

      {/* Header Section */}
      <motion.div
        className="relative z-10 text-center mb-16"
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
          ( CHOOSE YOUR PERFECT PLAN )
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Pricing
        </motion.h2>
        <motion.h3
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Plans
        </motion.h3>
      </motion.div>

      {/* Billing Toggle */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span
            className={`text-lg font-medium transition-colors duration-300 cursor-pointer ${
              billingCycle === "monthly" ? "text-white" : "text-white/60"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </span>

          <motion.button
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
            className="relative w-16 h-8 bg-white/20 rounded-full p-1 transition-all duration-300 hover:bg-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
              animate={{
                x: billingCycle === "yearly" ? 32 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </motion.button>

          <div className="flex items-center gap-2">
            <span
              className={`text-lg font-medium transition-colors duration-300 cursor-pointer ${
                billingCycle === "yearly" ? "text-white" : "text-white/60"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </span>
            <motion.div
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold"
              animate={{
                scale: billingCycle === "yearly" ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {billingCycle === "yearly" ? "Save $468/year" : "Save 15%"}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative group ${plan.popular ? "lg:scale-110 lg:-mt-8" : ""}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: plan.popular ? 1.1 : 1 }
                  : {}
              }
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              whileHover={{ y: -10, scale: plan.popular ? 1.12 : 1.02 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -20, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`relative overflow-hidden rounded-3xl p-8 h-full transition-all duration-500 ${
                  hoveredPlan === plan.id || plan.popular
                    ? "bg-white/10 shadow-2xl border-2"
                    : "bg-white/5 shadow-xl border"
                }`}
                style={{
                  borderImage: `linear-gradient(135deg, ${plan.borderGradient}) 1`,
                  background: `linear-gradient(135deg, ${plan.bgGradient})`,
                }}
                animate={{
                  boxShadow:
                    hoveredPlan === plan.id
                      ? `0 25px 50px rgba(${plan.iconColor === "#94A3B8" ? "148, 163, 184" : plan.iconColor === "#F59E0B" ? "245, 158, 11" : "139, 92, 246"}, 0.3)`
                      : "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${plan.gradient})`,
                  }}
                  animate={{
                    opacity: hoveredPlan === plan.id ? 0.3 : 0.1,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Header */}
                <div className="relative z-10 text-center mb-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${plan.gradient})`,
                    }}
                    animate={{
                      scale: hoveredPlan === plan.id ? [1, 1.1, 1] : 1,
                      rotate: hoveredPlan === plan.id ? [0, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/70 text-sm">{plan.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="relative z-10 text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold text-white">
                      ${billingCycle === "monthly" ? plan.monthly : plan.yearly}
                    </span>
                    <span className="text-white/60 text-lg">
                      /{billingCycle === "monthly" ? "month" : "month"}
                    </span>
                  </div>

                  {billingCycle === "yearly" && (
                    <motion.div
                      className="text-green-400 text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Billed annually (${plan.yearly * 12}/year)
                    </motion.div>
                  )}
                </div>

                {/* Key Limits */}
                <div className="relative z-10 mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-white/70 mx-auto mb-1" />
                      <div className="text-white/90 font-medium">
                        {plan.limits.users}
                      </div>
                    </div>
                    <div className="text-center">
                      <BarChart3 className="w-5 h-5 text-white/70 mx-auto mb-1" />
                      <div className="text-white/90 font-medium">
                        {plan.limits.reports}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="relative z-10 space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.name}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 1 + index * 0.1 + featureIndex * 0.05,
                      }}
                    >
                      <motion.div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          feature.included
                            ? "bg-green-500/20 border border-green-400/50"
                            : "bg-gray-500/20 border border-gray-500/50"
                        }`}
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            feature.included
                              ? "text-green-400"
                              : "text-gray-500"
                          }`}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <div
                          className={`font-medium ${
                            feature.included ? "text-white" : "text-white/50"
                          }`}
                        >
                          {feature.name}
                        </div>
                        <div className="text-xs text-white/60 mt-1">
                          {feature.limit}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`relative w-full py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden group ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: plan.popular
                      ? "0 10px 30px rgba(245, 158, 11, 0.4)"
                      : "0 5px 15px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredPlan === plan.id ? "100%" : "-100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Features */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <h4 className="text-2xl font-bold text-white mb-8">
          All plans include these powerful features
        </h4>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              text: "Enterprise Security",
              desc: "Bank-level encryption",
            },
            {
              icon: Clock,
              text: "99.9% Uptime",
              desc: "Guaranteed availability",
            },
            {
              icon: Headphones,
              text: "Expert Support",
              desc: "Get help when you need it",
            },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.7 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-3" />
              <h5 className="font-semibold text-white mb-2">{item.text}</h5>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
