import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Sun } from "lucide-react";

const HerbalInfo = () => {
  const herbs = [
    {
      name: "Lavender",
      benefits: "Calming, aids sleep, antiseptic properties",
      growing: "Full sun, well-drained soil",
      icon: Leaf,
    },
    {
      name: "Chamomile",
      benefits: "Promotes relaxation, aids digestion",
      growing: "Partial shade, moderate water",
      icon: Heart,
    },
    {
      name: "Mint",
      benefits: "Digestive aid, freshens breath",
      growing: "Partial to full sun, moist soil",
      icon: Sun,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">
        Herbal Knowledge
      </h2>
      <div className="space-y-6">
        {herbs.map((herb, index) => (
          <motion.div
            key={herb.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-l-4 border-emerald-500 pl-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <herb.icon className="text-emerald-600" size={20} />
              <h3 className="text-xl font-semibold text-emerald-700">
                {herb.name}
              </h3>
            </div>
            <p className="text-emerald-600 mb-1">
              <strong>Benefits:</strong> {herb.benefits}
            </p>
            <p className="text-emerald-600">
              <strong>Growing:</strong> {herb.growing}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HerbalInfo;
