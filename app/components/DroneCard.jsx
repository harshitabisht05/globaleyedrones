// An Fleet Page component for showcasing drone fleet
// Drone Cards Layout: Each card should include:
// 📸 Image of the Drone
// 📛 Drone Name
// 🧠 Key Features (Battery life, camera resolution, flight range, sensor type, etc.)
// ✉️ "Enquire" Button leading to a contact/booking form
export default function DroneCard({ name, features, image }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 hover:border-blue-500 border border-transparent">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-4 rounded" />
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <ul className="text-left text-sm list-disc list-inside text-gray-700 dark:text-gray-300">
        {features.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
      <button className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded hover:scale-105 transition">
        Enquire
      </button>
    </div>
  );
}
