export default function ArtikelPagina() {
  return (
    <article className="max-w-3xl mx-auto py-10 px-4 sm:px-6">
      {/* Categorie en Titel */}
      <div className="mb-8">
        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
          De Technocraat
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
          Was het verzet van Dario Amodei tegen
minister Hegseth het “Ik ben Spartacus!”
moment van Silicon Valley?
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
          <p className="text-xs text-gray-500">13 maart 2026 om 23:59</p>
        </div>
      </div>

      {/* Hoofdafbeelding */}
      <figure className="mb-10">
        <img 
          src="/images/artikel3.png" 
          alt="AI gegenereerde kat op driewieler" 
          className="w-full rounded-xl shadow-md"
        />
        <figcaption className="text-sm text-gray-500 mt-3 italic text-center">
          Dario Amodei neemt heel nadrukkelijk een ethisch standpunt in over AI.  © getty
        </figcaption>
      </figure>

      {/* Introductie */}
      <p className="text-xl font-semibold text-gray-800 leading-relaxed mb-6">
        Het verzet van Dario Amodei tegen minister van “Oorlog” Pete Hegseth,
en de rechtszaak waar dat nu op uitdraait, lijkt steeds meer op een
keerpunt. Al keert Silicon Valley nooit meer terug naar vroeger.
      </p>

      {/* Content blokken */}
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>
          Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en
tegendraadse oprichter van Anthropic die de confrontatie met Maga (Make America Great
Again) aandurft. Wie had dat zien aankomen? Ze doen dat weliswaar niet via grote
publieke verklaringen. En ze hoeden er zich voor om Trump frontaal aan te vallen. De
kritiek zit, in advocatentaal omzwachteld, in een aantal zogenoemde amicus briefs,
documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn juridische
strijd tegen het Pentagon.
        </p>

        <p>
          Toch staat er rake taal in. De strafmaatregel die minister van “Oorlog” Pete Hegseth
Anthropic oplegt, namelijk het uitroepen tot “risico voor de toeleveringsketen”, creëert
“een cultuur van dwang, medeplichtigheid en stilte waarbij het publiek begrijpt dat de
regering alle middelen waarover het beschikt zal gebruiken om te straffen wie het
aandurft het oneens te zijn”. En dat staat in een document dat – indirect – ondertekend is
door Amazon, Google en Apple (via de belangengroep Chamber of Progress).
        </p>


        <p>
          Is dit nu het “Ik ben Spartacus!’” moment van Silicon Valley? Nee, daarvoor is het allemaal
veel te voorzichtig. Chamber of Progress argumenteert vooral dat Anthropics recht op vrije
meningsuiting wordt geschonden. Het is Anthropics goed recht om ethische bezwaren te
formuleren, zeggen ze. Microsoft gaat, opmerkelijk, net iets verder: het spreekt zelfs
voorzichtige steun uit voor die ethische bezwaren, met heel wat mitsen en maren.
        </p>

        <p>
          Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de VS je nek niet te
ver uit. Trump en zijn Maga-beweging hebben van dat begrip natuurlijk wel een heel eigen
invulling: jaren hebben ze luid geklaagd dat big tech hun eigen meningsuiting beknot, nu
verdragen ze amper tegenspraak. Maar in wat bredere conservatieve kringen is er best nog
wel steun voor het idee dat iedereen zijn zegje mag hebben.
        </p>

        <p>
          Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel. Of dat is vanwege
het inspirerende voorbeeld van Amodei, of omdat ze voelen dat de politieke wind stilaan
van richting verandert: moeilijk te zeggen. Maar hoe dan ook: het wordt niet meer zoals
vroeger. We zullen van deze ceo’s de komende jaren waarschijnlijk weinig politieke
gevoelige uitspraken horen.
        </p>

        <p>
          Wanneer deze ceo’s zich in het verleden van hun progressiefste kant lieten zien, was dat
(zoveel is ondertussen duidelijk) zelden vanuit een diepe overtuiging. Het was eerder
omdat veel van hun waardevolste werknemers dat op prijs stellen. Zo kregen de
werknemers van Google het bedrijf ooit zo ver dat het een uiterst lucratief contract met
Defensie liet vallen.
        </p>

        <p>
          Tegenwoordig hebben de werknemers van Silicon Valley veel minder in de pap te brokken,
en dat merk je. Met één uitzondering, weliswaar: de paar honderd AI-experts die de meest
geavanceerde LLM’s kunnen bouwen. Die zijn zo in trek, en zo rijk, dat ze wél nog de luxe
hebben om volgens hun overtuiging te handelen.
        </p>

        <p>Daarom is het waarschijnlijk geen toeval dat de technologiebedrijven net nu en in deze
zaak beslissen hun rug te rechten: Amodei neemt heel nadrukkelijk en moedig een
ethisch standpunt in over AI. Dat is bij die topontwikkelaars erg goed ontvangen.</p>

      </div>

      {/* Footer Tags */}
      <div className="mt-12 flex flex-wrap gap-2">
        {["Cultuur en media", "De Technocraat", "Artificiële intelligentie"].map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}