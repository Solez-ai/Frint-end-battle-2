import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Star,
  Quote,
  Building2,
  User,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const TestimonialsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Data Analyst",
      company: "TechFlow Industries",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The AI forecasting has completely transformed how we predict market trends. What used to take our team weeks now happens in real-time with incredible accuracy.",
      type: "individual",
      featured: false,
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "DataVantage Corp",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Since implementing this platform, our reporting efficiency increased by 400%. The automated insights have saved us countless hours and helped identify opportunities we never would have found manually.",
      type: "company",
      featured: true,
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Financial Director",
      company: "GreenTech Solutions",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The dashboard generation feature is phenomenal. Our stakeholders finally have real-time visibility into performance metrics that matter.",
      type: "individual",
      featured: false,
    },
    {
      id: 4,
      name: "James Mitchell",
      role: "CTO",
      company: "Innovate Systems",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "We've been able to consolidate data from 15 different sources seamlessly. The AI-powered consolidation handles complex mappings that would take months to set up manually.",
      type: "company",
      featured: false,
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Business Intelligence Manager",
      company: "Nexus Analytics",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The natural language queries are a game-changer. I can ask complex questions in plain English and get detailed analytics instantly.",
      type: "individual",
      featured: false,
    },
    {
      id: 6,
      name: "David Kumar",
      role: "Operations Director",
      company: "Future Dynamics",
      avatar:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This platform has become the backbone of our decision-making process. The anomaly detection caught a critical issue last month that saved us over $2M in potential losses.",
      type: "company",
      featured: true,
    },
    {
      id: 7,
      name: "Rachel Turner",
      role: "Marketing Analytics Lead",
      company: "BrandForward",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Finally, an analytics platform that speaks our language. The AI insights have helped us optimize campaigns in ways we never imagined possible.",
      type: "individual",
      featured: false,
    },
    {
      id: 8,
      name: "Michael Foster",
      role: "CFO",
      company: "Quantum Finance",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The advanced forecasting models have given us unprecedented visibility into future cash flows. We can now make strategic decisions with confidence.",
      type: "company",
      featured: false,
    },
    {
      id: 9,
      name: "Amanda Clark",
      role: "Product Manager",
      company: "StreamlineOps",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The user experience is intuitive and powerful. Even our non-technical team members can create sophisticated reports effortlessly.",
      type: "individual",
      featured: false,
    },
    {
      id: 10,
      name: "Thomas Anderson",
      role: "VP of Strategy",
      company: "Matrix Enterprises",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This platform has transformed our entire analytics workflow. The AI-driven insights provide clarity in complex data scenarios, and the white-label solution perfectly matches our brand.",
      type: "company",
      featured: true,
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
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
          ( TRUSTED BY INDUSTRY LEADERS )
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          What Our
        </motion.h2>
        <motion.h3
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Users Say
        </motion.h3>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-white/60 text-sm">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-white/60 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/60 text-sm">Satisfaction Rate</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group cursor-pointer h-80"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                type: "spring",
                bounce: 0.4,
              }}
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Featured Badge */}
              {testimonial.featured && (
                <motion.div
                  className="absolute -top-2 -right-2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2 shadow-lg">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`relative h-full rounded-2xl p-6 transition-all duration-500 backdrop-blur-md border ${
                  hoveredCard === testimonial.id
                    ? "bg-white/15 border-white/30 shadow-2xl"
                    : "bg-white/10 border-white/20 shadow-xl"
                }`}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{
                          delay: 1 + index * 0.1 + i * 0.05,
                          type: "spring",
                        }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white/90 text-sm leading-relaxed flex-1 mb-4">
                    "{testimonial.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                        {testimonial.type === "company" ? (
                          <Building2 className="w-3 h-3 text-white" />
                        ) : (
                          <User className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-white/60 text-xs truncate">
                        {testimonial.role}
                      </div>
                      <div className="text-white/50 text-xs truncate">
                        {testimonial.company}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        x: hoveredCard === testimonial.id ? [0, 5, 0] : 0,
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-white/60" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="relative z-10 text-center mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of businesses transforming their analytics with
          AI-powered insights
        </p>

        <motion.button
          className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-500 hover:shadow-2xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative flex items-center gap-2">
            Start Your Success Story
            <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
