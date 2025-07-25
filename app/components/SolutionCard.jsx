import Image from 'next/image';

export default function SolutionCard({ title, image, challenge, solution }) {
  return (
    <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform">
      <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <h3 className="text-xl font-bold text-[#0077b6] mb-2 text-center">{title}</h3>
      <p className="text-sm mb-1">
        <strong>Challenges:</strong> {challenge}
      </p>
      <p className="text-sm">
        <strong>GlobalEye Solution:</strong> {solution}
      </p>
    </div>
  );
}
