export default function ArtikelPagina() {
  return (
    <article className="max-w-3xl mx-auto py-10 px-4 sm:px-6">
      {/* Categorie en Titel */}
      <div className="mb-8">
        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
          De Technocraat
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
          Leidt AI-slop tot de dood van sociale media?
        </h1>
      </div>

      {/* Auteur en Datum */}
      <div className="flex items-center space-x-3 mb-8 border-y py-4 border-gray-100">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dominique" 
            alt="Dominique Deckmyn" 
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Dominique Deckmyn</p>
          <p className="text-xs text-gray-500">2 januari 2026 om 23:59</p>
        </div>
      </div>

      {/* Hoofdafbeelding */}
      <figure className="mb-10">
        <img 
          src="/images/ai-cat.jpg" 
          alt="AI gegenereerde kat op driewieler" 
          className="w-full rounded-xl shadow-md"
        />
        <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
          Schattige katten, gegenereerd door AI. © youtube
        </figcaption>
      </figure>

      {/* Introductie */}
      <p className="text-xl font-semibold text-gray-800 leading-relaxed mb-6">
        Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop: 
        video’s met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan. 
        Blijven we daar in 2026 naar kijken?
      </p>

      {/* Content blokken */}
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>
          De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen, 
          zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een 
          realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is: 
          willen we daarnaar blijven kijken?
        </p>

        <p>
          Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de 
          enorme toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes 
          die bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus. Als je op 
          Youtube een nieuwe account aanmaakt, dan is 20 procent van de video's die je worden 
          aangeboden van AI afkomstig.
        </p>

        {/* Kaaitheater afbeelding tussendoor */}
        <div className="my-10 bg-gray-50 p-4 rounded-lg flex justify-center">
            <img src="/images/kaaitheater.png" alt="Kaaitheater advertentie" className="max-w-sm shadow-sm" />
        </div>

        <p>
          Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent 
          een nieuw tijdperk in sociale media. "Tijdens het eerste tijdperk deelden we ons eigen 
          leven op Facebook en Instagram," zei hij. Maar al snel bleek dat we ons liever vergapen aan 
          de levens van celebrity's en influencers – tijdperk twee. En nu komt er een stortvloed van 
          AI-video's aan.
        </p>

        <p>
          Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel 
          wezen: hoe meer AI in onze feed, hoe minder video's we bekijken van professionele 
          makers en van onze eigen vrienden. Nochtans hadden sociale media echt wel een 
          bestaansreden, namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen. 
          Zijn we in 2026 dan zo veranderd?
        </p>

        <p>
          Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes die 
          ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar zonder 
          enige beperking eindeloos meer van kunnen genereren. Nog meer kattenvideo's, 
          onmogelijke stunts, spectaculaire taarten of gewelddadige pranks.
        </p>

        <p className="italic border-l-4 border-gray-300 pl-4 py-2 text-gray-600">
          "De beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd. Maar 
          Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo's, u krijgt 
          kattenvideo's die nog veel schattiger zijn dan in het echt."
        </p>

        <p>
          Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voor 
          AI-slop: vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik 
          'm weg. Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de 
          voornaamste auteur was.
        </p>

        <p>
          Maar horen ze thuis op Instagram en Facebook? Dat waren toch 'sociale' media, nietwaar? 
          Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een 
          computer gegenereerde video’s, aanbevolen door een algoritme? In die zin zien we nu de 
          dood van sociale media. Al lijkt Zuckerberg daar niet echt van wakker te liggen.
        </p>

        <div className="mt-8 pt-6 border-t text-sm text-gray-500 italic">
          Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast 'Bits & atomen'.
        </div>
      </div>

      {/* Footer Tags */}
      <div className="mt-12 flex flex-wrap gap-2">
        {["Cultuur en media", "De Technocraat", "Artificiële intelligentie", "Mark Zuckerberg"].map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}