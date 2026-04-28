import Link from 'next/link'

export default function HomePage() {
  const articles = [
    {
      id: 'page1',
      title: 'Leidt AI-slop tot de dood van sociale media?',
      preview: 'Sociale media slibben angstwekkend snel dicht met video’s van mensen die niet bestaan en gebeurtenissen die nooit hebben plaatsgevonden...',
      tag: 'De Technocraat',
      color: 'text-blue-600'
    },
    {
      id: 'page2',
      title: 'Vibecoding: je eigen apps bouwen met AI',
      preview: 'Met de nieuwste versies van Claude en ChatGPT kun je zonder noemenswaardige voorkennis in enkele minuten je eigen games en apps maken...',
      tag: 'De Helpdesk',
      color: 'text-green-600'
    },
    {
      id: 'page3',
      title: 'De opkomst van de AI-moeheid',
      preview: 'Na drie jaar constante hype rapporteren gebruikers vaker een gevoel van digitale leegte bij het consumeren van AI-content. We snakken naar menselijkheid...',
      tag: 'Opinie & Trends',
      color: 'text-red-600'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Welkomstsectie */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Welkom bij Mijn Artikelen
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ontdek de laatste inzichten over technologie, AI en de toekomst van onze digitale wereld.
        </p>
      </div>

      {/* Artikelen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link 
            key={article.id} 
            href={`/${article.id}`}
            className="group block p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <span className={`text-xs font-bold uppercase tracking-widest ${article.color}`}>
              {article.tag}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-3 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-600 mt-4 line-clamp-3 leading-relaxed">
              {article.preview}
            </p>
            <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm">
              Lees volledige artikel 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}