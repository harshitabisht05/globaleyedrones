"use client";
import DroneCard from "../components/DroneCard";
import Footer from "../components/Footer"; // <== make sure this file exists
import { motion } from "framer-motion";

const drones = [
  {
    name: "Falcon X1",
    features: [
      "Range: 10 km",
      "Battery: 90 mins",
      "Sensors: IR, LIDAR, Night Vision",
    ],
    image: "/images/drones/falconx1.jpg",
  },
  {
    name: "Hawk Pro",
    features: [
      "Range: 15 km",
      "Battery: 120 mins",
      "Sensors: Thermal, Ultrasonic",
    ],
    image: "/images/drones/hawkpro.jpg",
  },
  {
    name: "SkyRanger",
    features: [
      "Range: 8 km",
      "Battery: 75 mins",
      "Sensors: Multi-Cam, GPS, LIDAR",
    ],
    image: "/images/drones/skyranger.jpg",
  },
  {
    name: "AgriScout Z7",
    features: [
      "Range: 12 km",
      "Battery: 100 mins",
      "Sensors: NDVI, Crop Health Imaging",
    ],
    image: "/images/drones/agriscout.jpg",
  },
  {
    name: "Sentinel One",
    features: [
      "Range: 20 km",
      "Battery: 150 mins",
      "Sensors: 4K Cam, Radar, Heat Signature",
    ],
    image: "/images/drones/sentinelone.jpg",
  },
  {
    name: "AeroSwift Micro",
    features: [
      "Range: 5 km",
      "Battery: 60 mins",
      "Sensors: Micro LIDAR, Compact GPS",
    ],
    image: "/images/drones/aeroswift.jpg",
  },
];

export default function FleetPage() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white bg-gradient-to-br from-white via-blue-100 to-blue-300 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center" >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Drone Fleet
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Engineered for innovation, precision, and unmatched aerial intelligence.
          </motion.p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {drones.map((drone, index) => (
              <DroneCard
                key={index}
                name={drone.name}
                features={drone.features}
                image={drone.image}
              />
            ))}
          </div>
        </div>
      </main>

    </>
  );
}
