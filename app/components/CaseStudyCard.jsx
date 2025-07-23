import Link from 'next/link';

export default function CaseStudyCard({ id, title, industry, summary, image }) {
  return (
    <div className="group bg-gray-100 dark:bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="rounded-md mb-4 h-80 w-200 object-cover" />
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition" style={{ fontFamily: 'var(--font-heading)' }}>
        {title}
      </h3>
      <p className="text-l text-gray-500 dark:text-gray-400 mb-2"style={{fontFamily:'--font-body'}}>{industry}</p>
      <p className=" text-l text-gray-700 dark:text-gray-300 mb-4" style={{fontFamily:'--font-body'}}>{summary}</p>
      <Link href={`/case-studies/${id}`} className="text-blue-600 dark:text-cyan-400 font-medium hover:underline"style={{ fontFamily: 'var(--font-body)' }}>
        Read More →
      </Link>
    </div>
  );
}
