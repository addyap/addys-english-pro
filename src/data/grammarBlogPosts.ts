export interface GrammarBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  description: string;
  ogImage: string;
  relatedExerciseId?: string;
}

export const grammarBlogPosts: GrammarBlogPost[] = [
  {
    id: 'present-simple-vs-present-continuous',
    title: 'Present Simple vs Present Continuous : Quelle différence ?',
    excerpt: 'Comprendre quand utiliser le Present Simple et le Present Continuous est essentiel pour parler anglais correctement. Découvrez les règles et exemples pratiques.',
    content: `
      <p>La distinction entre le <strong>Present Simple</strong> et le <strong>Present Continuous</strong> est l'une des premières difficultés rencontrées par les francophones. Ces deux temps expriment le présent mais dans des contextes très différents.</p>

      <h2>Le Present Simple : habitudes et vérités générales</h2>
      <p>Le Present Simple s'utilise pour :</p>
      <ul>
        <li><strong>Les habitudes et routines</strong> : "I wake up at 7 AM every day"</li>
        <li><strong>Les vérités générales</strong> : "Water boils at 100°C"</li>
        <li><strong>Les situations permanentes</strong> : "She lives in Paris"</li>
      </ul>
      <p><strong>Mots-clés indicateurs :</strong> always, usually, often, sometimes, never, every day/week/month</p>

      <h2>Le Present Continuous : actions en cours</h2>
      <p>Le Present Continuous s'utilise pour :</p>
      <ul>
        <li><strong>Actions en cours</strong> : "I am reading a book right now"</li>
        <li><strong>Situations temporaires</strong> : "He is staying with us this week"</li>
        <li><strong>Arrangements futurs</strong> : "We are meeting tomorrow"</li>
      </ul>
      <p><strong>Mots-clés indicateurs :</strong> now, at the moment, currently, right now, today</p>

      <h2>Exemples comparatifs</h2>
      <ul>
        <li>"I <strong>work</strong> in a bank." (emploi permanent) vs "I <strong>am working</strong> on a project." (en ce moment)</li>
        <li>"She <strong>speaks</strong> three languages." (capacité permanente) vs "She <strong>is speaking</strong> to her boss right now." (action en cours)</li>
      </ul>

      <h2>Attention aux verbes d'état</h2>
      <p>Certains verbes ne s'utilisent généralement pas au Present Continuous : know, understand, believe, love, hate, want, need, prefer.</p>
      <p>❌ "I am understanding" → ✅ "I understand"</p>
    `,
    date: '2025-01-20',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '5 min',
    description: 'Maîtrisez la différence entre Present Simple et Present Continuous avec des explications claires et des exemples pratiques.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'present-simple-continuous'
  },
  {
    id: 'past-simple-vs-present-perfect',
    title: 'Past Simple vs Present Perfect : Comment choisir ?',
    excerpt: 'Le Past Simple et le Present Perfect sont souvent confondus par les francophones. Apprenez à les distinguer avec des règles simples.',
    content: `
      <p>La distinction entre <strong>Past Simple</strong> et <strong>Present Perfect</strong> est cruciale en anglais. Ces deux temps parlent du passé mais avec des perspectives différentes.</p>

      <h2>Le Past Simple : passé terminé et daté</h2>
      <p>Le Past Simple s'utilise pour :</p>
      <ul>
        <li><strong>Actions terminées à un moment précis</strong> : "I visited Paris in 2019"</li>
        <li><strong>Séquences d'événements</strong> : "I got up, had breakfast, and left"</li>
        <li><strong>Habitudes passées</strong> : "She always walked to school"</li>
      </ul>
      <p><strong>Mots-clés :</strong> yesterday, last week/month/year, in 2019, ago, when</p>

      <h2>Le Present Perfect : lien avec le présent</h2>
      <p>Le Present Perfect s'utilise pour :</p>
      <ul>
        <li><strong>Expériences de vie</strong> (sans moment précis) : "I have visited Paris"</li>
        <li><strong>Actions commencées dans le passé qui continuent</strong> : "I have lived here for 5 years"</li>
        <li><strong>Actions récentes avec impact présent</strong> : "I have just finished my work"</li>
      </ul>
      <p><strong>Mots-clés :</strong> ever, never, already, yet, just, since, for, recently</p>

      <h2>La clé : le moment est-il précisé ?</h2>
      <ul>
        <li>"I <strong>went</strong> to Rome last summer." (moment précis → Past Simple)</li>
        <li>"I <strong>have been</strong> to Rome." (expérience de vie → Present Perfect)</li>
        <li>"She <strong>worked</strong> here for 5 years." (elle n'y travaille plus)</li>
        <li>"She <strong>has worked</strong> here for 5 years." (elle y travaille encore)</li>
      </ul>
    `,
    date: '2025-01-19',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '6 min',
    description: 'Comprenez enfin la différence entre Past Simple et Present Perfect avec des règles claires et des exemples concrets.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'past-simple-present-perfect'
  },
  {
    id: 'past-simple-vs-past-continuous',
    title: 'Past Simple vs Past Continuous : Actions et contexte',
    excerpt: 'Découvrez comment utiliser le Past Simple et le Past Continuous pour raconter des histoires et décrire des situations passées.',
    content: `
      <p>Le <strong>Past Simple</strong> et le <strong>Past Continuous</strong> travaillent souvent ensemble pour raconter des histoires, créant un effet de "scène" et "action".</p>

      <h2>Le Past Simple : actions complètes</h2>
      <ul>
        <li><strong>Actions terminées</strong> : "I finished my work"</li>
        <li><strong>Actions courtes</strong> : "She opened the door"</li>
        <li><strong>Séquences</strong> : "He arrived, sat down, and ordered a coffee"</li>
      </ul>

      <h2>Le Past Continuous : actions en cours (décor)</h2>
      <ul>
        <li><strong>Actions en cours à un moment précis</strong> : "I was reading at 8 PM"</li>
        <li><strong>Actions interrompues</strong> : "I was cooking when he called"</li>
        <li><strong>Actions simultanées</strong> : "While I was reading, she was watching TV"</li>
      </ul>

      <h2>Le schéma classique : When + Past Simple + Past Continuous</h2>
      <p>L'action courte (Past Simple) interrompt l'action longue (Past Continuous) :</p>
      <ul>
        <li>"When the phone <strong>rang</strong>, I <strong>was having</strong> a shower."</li>
        <li>"I <strong>was walking</strong> home when I <strong>met</strong> John."</li>
        <li>"He <strong>fell</strong> asleep while he <strong>was watching</strong> the film."</li>
      </ul>

      <h2>Astuce visuelle</h2>
      <p>Imaginez une scène de film : le Past Continuous est le décor (ce qui se passe en arrière-plan), le Past Simple est l'action principale qui se produit.</p>
    `,
    date: '2025-01-18',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '5 min',
    description: 'Apprenez à combiner Past Simple et Past Continuous pour raconter des histoires en anglais de manière naturelle.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'past-simple-continuous'
  },
  {
    id: 'past-simple-vs-past-perfect',
    title: 'Past Simple vs Past Perfect : Le passé du passé',
    excerpt: 'Le Past Perfect permet de parler d\'une action antérieure à une autre action passée. Découvrez comment l\'utiliser correctement.',
    content: `
      <p>Le <strong>Past Perfect</strong> est le "passé du passé". Il permet de clarifier l'ordre chronologique de deux événements passés.</p>

      <h2>Quand utiliser le Past Perfect ?</h2>
      <p>Utilisez le Past Perfect pour une action qui s'est produite <strong>AVANT</strong> une autre action passée :</p>
      <ul>
        <li>"When I <strong>arrived</strong>, she <strong>had</strong> already <strong>left</strong>." (Elle est partie d'abord, puis je suis arrivé)</li>
        <li>"I didn't recognize him because he <strong>had changed</strong> so much."</li>
      </ul>

      <h2>Structure</h2>
      <p><strong>Had + participe passé</strong></p>
      <ul>
        <li>I had finished / She had gone / They had eaten</li>
      </ul>

      <h2>Mots-clés associés</h2>
      <p>after, before, when, by the time, already, just, never... before</p>
      <ul>
        <li>"<strong>After</strong> I <strong>had finished</strong> dinner, I watched TV."</li>
        <li>"<strong>By the time</strong> we got there, the film <strong>had started</strong>."</li>
        <li>"I <strong>had never seen</strong> such a beautiful sunset <strong>before</strong> that day."</li>
      </ul>

      <h2>Quand NE PAS l'utiliser</h2>
      <p>Si les événements sont racontés dans l'ordre chronologique, le Past Simple suffit :</p>
      <p>"I finished my homework and then watched TV." (ordre chronologique clair)</p>
    `,
    date: '2025-01-17',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '5 min',
    description: 'Maîtrisez le Past Perfect pour exprimer l\'antériorité dans le passé et raconter des événements dans le bon ordre.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'past-simple-perfect'
  },
  {
    id: 'past-perfect-continuous',
    title: 'Le Past Perfect Continuous expliqué simplement',
    excerpt: 'Le Past Perfect Continuous combine durée et antériorité. Apprenez à l\'utiliser pour décrire des actions continues avant un moment passé.',
    content: `
      <p>Le <strong>Past Perfect Continuous</strong> décrit une action qui était <strong>en cours pendant une durée</strong> avant un autre événement passé.</p>

      <h2>Structure</h2>
      <p><strong>Had been + verbe-ing</strong></p>
      <ul>
        <li>I had been waiting / She had been working / They had been studying</li>
      </ul>

      <h2>Utilisations principales</h2>
      <ul>
        <li><strong>Durée avant un événement passé</strong> : "I <strong>had been waiting</strong> for 2 hours when she finally arrived."</li>
        <li><strong>Cause d'une situation passée</strong> : "He was tired because he <strong>had been working</strong> all night."</li>
        <li><strong>Action récemment terminée avec effet visible</strong> : "Her eyes were red. She <strong>had been crying</strong>."</li>
      </ul>

      <h2>Mots-clés</h2>
      <p>for, since, all day/night/week, how long</p>

      <h2>Past Perfect Simple vs Continuous</h2>
      <ul>
        <li><strong>Simple</strong> (résultat) : "I <strong>had written</strong> three emails." (3 emails terminés)</li>
        <li><strong>Continuous</strong> (durée/processus) : "I <strong>had been writing</strong> emails all morning." (focus sur la durée)</li>
      </ul>
    `,
    date: '2025-01-16',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '4 min',
    description: 'Comprenez le Past Perfect Continuous pour exprimer la durée d\'une action avant un moment passé.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'past-perfect-continuous'
  },
  {
    id: 'future-continuous',
    title: 'Le Future Continuous : Actions en cours dans le futur',
    excerpt: 'Le Future Continuous permet de parler d\'actions qui seront en cours à un moment précis du futur.',
    content: `
      <p>Le <strong>Future Continuous</strong> décrit une action qui sera <strong>en cours</strong> à un moment spécifique dans le futur.</p>

      <h2>Structure</h2>
      <p><strong>Will be + verbe-ing</strong></p>
      <ul>
        <li>I will be working / She will be traveling / They will be sleeping</li>
      </ul>

      <h2>Utilisations</h2>
      <ul>
        <li><strong>Action en cours à un moment futur</strong> : "This time tomorrow, I <strong>will be flying</strong> to New York."</li>
        <li><strong>Événements prévus/normaux</strong> : "Don't call at 8 PM. I <strong>will be having</strong> dinner."</li>
        <li><strong>Questions polies sur les plans</strong> : "<strong>Will you be using</strong> the car tonight?"</li>
      </ul>

      <h2>Expressions temporelles</h2>
      <p>this time tomorrow, at 3 PM, in an hour, when you arrive, all day tomorrow</p>

      <h2>Future Simple vs Future Continuous</h2>
      <ul>
        <li><strong>Simple</strong> : "I <strong>will work</strong> tomorrow." (fait/décision)</li>
        <li><strong>Continuous</strong> : "I <strong>will be working</strong> at 9 AM tomorrow." (en cours à ce moment)</li>
      </ul>
    `,
    date: '2025-01-15',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '4 min',
    description: 'Apprenez à utiliser le Future Continuous pour décrire des actions en cours à un moment précis du futur.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'future-continuous'
  },
  {
    id: 'future-perfect-continuous',
    title: 'Le Future Perfect Continuous : Durée jusqu\'au futur',
    excerpt: 'Le Future Perfect Continuous exprime la durée d\'une action jusqu\'à un point dans le futur. Un temps avancé expliqué simplement.',
    content: `
      <p>Le <strong>Future Perfect Continuous</strong> décrit la <strong>durée</strong> d'une action qui sera en cours jusqu'à un moment futur.</p>

      <h2>Structure</h2>
      <p><strong>Will have been + verbe-ing</strong></p>

      <h2>Utilisation principale</h2>
      <p>Souligner <strong>combien de temps</strong> une action aura duré à un moment futur :</p>
      <ul>
        <li>"By December, I <strong>will have been working</strong> here <strong>for 10 years</strong>."</li>
        <li>"Next month, they <strong>will have been living</strong> in Paris <strong>for 5 years</strong>."</li>
      </ul>

      <h2>Future Perfect Simple vs Continuous</h2>
      <ul>
        <li><strong>Simple</strong> (résultat) : "By 6 PM, I <strong>will have finished</strong> the report." (terminé)</li>
        <li><strong>Continuous</strong> (durée) : "By 6 PM, I <strong>will have been working</strong> on this report for 8 hours." (focus sur le temps passé)</li>
      </ul>

      <h2>Expressions clés</h2>
      <p>by + moment futur, for + durée, when + événement futur</p>
    `,
    date: '2025-01-14',
    author: 'Antony Addy',
    category: 'Grammaire - Temps',
    readTime: '4 min',
    description: 'Maîtrisez le Future Perfect Continuous pour exprimer la durée d\'une action jusqu\'à un point futur.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'future-perfect-continuous'
  },
  {
    id: 'prepositions-de-lieu',
    title: 'Les prépositions de lieu en anglais : in, on, at, under...',
    excerpt: 'Maîtrisez les prépositions de lieu anglaises avec des règles claires et des exemples concrets pour ne plus jamais vous tromper.',
    content: `
      <p>Les <strong>prépositions de lieu</strong> indiquent la position d'une personne ou d'un objet. Voici les principales à maîtriser.</p>

      <h2>IN - à l'intérieur</h2>
      <ul>
        <li>in the box, in the room, in the car</li>
        <li>in Paris, in France (villes, pays)</li>
        <li>in the water, in the sky</li>
      </ul>

      <h2>ON - sur une surface</h2>
      <ul>
        <li>on the table, on the wall, on the floor</li>
        <li>on the bus/train/plane (transports publics)</li>
        <li>on the left/right, on the corner</li>
      </ul>

      <h2>AT - point précis</h2>
      <ul>
        <li>at the door, at the bus stop, at the corner</li>
        <li>at home, at work, at school</li>
        <li>at the top/bottom</li>
      </ul>

      <h2>Autres prépositions essentielles</h2>
      <ul>
        <li><strong>under</strong> : under the table (sous)</li>
        <li><strong>above/over</strong> : above the door (au-dessus)</li>
        <li><strong>between</strong> : between the two buildings (entre)</li>
        <li><strong>next to/beside</strong> : next to the bank (à côté de)</li>
        <li><strong>in front of/behind</strong> : in front of the house (devant/derrière)</li>
      </ul>
    `,
    date: '2025-01-13',
    author: 'Antony Addy',
    category: 'Grammaire - Prépositions',
    readTime: '5 min',
    description: 'Guide complet des prépositions de lieu en anglais : in, on, at, under, above et plus encore.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'prepositions-place'
  },
  {
    id: 'prepositions-de-temps',
    title: 'Les prépositions de temps : in, on, at - Quand les utiliser ?',
    excerpt: 'In, on, at pour le temps : découvrez les règles simples pour ne plus confondre ces prépositions temporelles.',
    content: `
      <p>Les prépositions <strong>in, on, at</strong> s'utilisent aussi pour le temps, avec des règles précises à connaître.</p>

      <h2>AT - moments précis</h2>
      <ul>
        <li><strong>Heures</strong> : at 3 o'clock, at noon, at midnight</li>
        <li><strong>Moments de la journée</strong> : at night, at lunchtime</li>
        <li><strong>Fêtes</strong> : at Christmas, at Easter</li>
        <li><strong>Expressions</strong> : at the moment, at the weekend (UK)</li>
      </ul>

      <h2>ON - jours et dates</h2>
      <ul>
        <li><strong>Jours</strong> : on Monday, on weekdays</li>
        <li><strong>Dates</strong> : on 15th January, on my birthday</li>
        <li><strong>Jours spéciaux</strong> : on Christmas Day, on New Year's Eve</li>
      </ul>

      <h2>IN - périodes plus longues</h2>
      <ul>
        <li><strong>Parties du jour</strong> : in the morning/afternoon/evening</li>
        <li><strong>Mois</strong> : in January, in December</li>
        <li><strong>Saisons</strong> : in summer, in winter</li>
        <li><strong>Années/siècles</strong> : in 2025, in the 21st century</li>
        <li><strong>Durée future</strong> : in 5 minutes, in 2 weeks</li>
      </ul>

      <h2>Astuce mnémotechnique</h2>
      <p>Du plus petit au plus grand : AT (point) → ON (jour) → IN (période)</p>
    `,
    date: '2025-01-12',
    author: 'Antony Addy',
    category: 'Grammaire - Prépositions',
    readTime: '5 min',
    description: 'Maîtrisez les prépositions de temps in, on, at avec des règles claires et des exemples pratiques.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'prepositions-time'
  },
  {
    id: 'comparatifs-en-anglais',
    title: 'Les comparatifs en anglais : more, -er, as...as',
    excerpt: 'Comment comparer deux éléments en anglais ? Découvrez les règles des comparatifs avec des exemples clairs.',
    content: `
      <p>Les <strong>comparatifs</strong> permettent de comparer deux éléments. La formation dépend de la longueur de l'adjectif.</p>

      <h2>Adjectifs courts (1 syllabe) : -er + than</h2>
      <ul>
        <li>tall → <strong>taller</strong> than : "He is taller than me."</li>
        <li>old → <strong>older</strong> than : "This car is older than that one."</li>
        <li>fast → <strong>faster</strong> than</li>
      </ul>

      <h2>Adjectifs longs (2+ syllabes) : more + adj + than</h2>
      <ul>
        <li>expensive → <strong>more expensive</strong> than</li>
        <li>interesting → <strong>more interesting</strong> than</li>
        <li>beautiful → <strong>more beautiful</strong> than</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li>Adjectifs en -y : happy → happ<strong>ier</strong>, easy → eas<strong>ier</strong></li>
        <li>Doublement de la consonne : big → bi<strong>gger</strong>, hot → ho<strong>tter</strong></li>
      </ul>

      <h2>Comparatifs irréguliers</h2>
      <ul>
        <li>good → <strong>better</strong> than</li>
        <li>bad → <strong>worse</strong> than</li>
        <li>far → <strong>farther/further</strong> than</li>
      </ul>

      <h2>Égalité : as...as</h2>
      <p>"She is <strong>as tall as</strong> her brother." (aussi grand que)</p>
      <p>"It's not <strong>as expensive as</strong> I thought." (pas aussi cher que)</p>
    `,
    date: '2025-01-11',
    author: 'Antony Addy',
    category: 'Grammaire - Adjectifs',
    readTime: '5 min',
    description: 'Guide complet des comparatifs en anglais : formation, exceptions et exemples pratiques.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'comparatives'
  },
  {
    id: 'superlatifs-en-anglais',
    title: 'Les superlatifs en anglais : the most, the -est',
    excerpt: 'Comment exprimer le plus haut degré en anglais ? Maîtrisez les superlatifs avec des règles simples.',
    content: `
      <p>Les <strong>superlatifs</strong> expriment le degré le plus élevé d'une qualité parmi trois éléments ou plus.</p>

      <h2>Adjectifs courts : the + -est</h2>
      <ul>
        <li>tall → <strong>the tallest</strong> : "He is the tallest in the class."</li>
        <li>old → <strong>the oldest</strong> : "This is the oldest building in town."</li>
        <li>fast → <strong>the fastest</strong></li>
      </ul>

      <h2>Adjectifs longs : the most + adj</h2>
      <ul>
        <li>expensive → <strong>the most expensive</strong></li>
        <li>interesting → <strong>the most interesting</strong></li>
        <li>beautiful → <strong>the most beautiful</strong></li>
      </ul>

      <h2>Superlatifs irréguliers</h2>
      <ul>
        <li>good → <strong>the best</strong></li>
        <li>bad → <strong>the worst</strong></li>
        <li>far → <strong>the farthest/furthest</strong></li>
      </ul>

      <h2>Structures courantes</h2>
      <ul>
        <li>"It's <strong>the best</strong> film I've ever seen."</li>
        <li>"She's <strong>one of the most talented</strong> singers in the world."</li>
        <li>"This is <strong>by far the most difficult</strong> exam."</li>
      </ul>
    `,
    date: '2025-01-10',
    author: 'Antony Addy',
    category: 'Grammaire - Adjectifs',
    readTime: '4 min',
    description: 'Maîtrisez les superlatifs en anglais : formation, irréguliers et expressions courantes.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'superlatives'
  },
  {
    id: 'countable-uncountable-nouns',
    title: 'Noms dénombrables et indénombrables en anglais',
    excerpt: 'Some ou any ? Much ou many ? Comprenez la différence entre noms dénombrables et indénombrables.',
    content: `
      <p>En anglais, les noms sont soit <strong>dénombrables</strong> (countable) soit <strong>indénombrables</strong> (uncountable). Cette distinction affecte le vocabulaire utilisé.</p>

      <h2>Noms dénombrables</h2>
      <p>On peut les compter : a book, two books, three books</p>
      <ul>
        <li>Singulier + pluriel : apple/apples, car/cars, idea/ideas</li>
        <li>Quantificateurs : many, few, a few, several, a number of</li>
      </ul>

      <h2>Noms indénombrables</h2>
      <p>On ne peut pas les compter directement : water, music, information</p>
      <ul>
        <li>Pas de pluriel : ❌ waters, musics, informations</li>
        <li>Quantificateurs : much, little, a little, a great deal of</li>
        <li>Pour quantifier : a piece of advice, a glass of water, a slice of bread</li>
      </ul>

      <h2>Catégories d'indénombrables</h2>
      <ul>
        <li><strong>Liquides</strong> : water, milk, coffee, wine</li>
        <li><strong>Matières</strong> : wood, gold, paper, glass</li>
        <li><strong>Concepts abstraits</strong> : advice, information, news, knowledge</li>
        <li><strong>Activités</strong> : homework, work, research</li>
      </ul>

      <h2>Some/Any - How much/How many</h2>
      <ul>
        <li>"<strong>How much</strong> water?" vs "<strong>How many</strong> bottles?"</li>
        <li>"There isn't <strong>much</strong> time." vs "There aren't <strong>many</strong> people."</li>
      </ul>
    `,
    date: '2025-01-09',
    author: 'Antony Addy',
    category: 'Grammaire - Noms',
    readTime: '6 min',
    description: 'Comprenez la différence entre noms dénombrables et indénombrables pour utiliser les bons quantificateurs.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'countable-uncountable'
  },
  {
    id: 'demonstratives-this-that-these-those',
    title: 'This, That, These, Those : Les démonstratifs expliqués',
    excerpt: 'Quand utiliser this, that, these ou those ? Maîtrisez les démonstratifs anglais avec des règles simples.',
    content: `
      <p>Les <strong>démonstratifs</strong> permettent de désigner des personnes ou des objets selon leur distance (proche ou éloigné) et leur nombre (singulier ou pluriel).</p>

      <h2>Tableau récapitulatif</h2>
      <table>
        <tr><th></th><th>Proche</th><th>Éloigné</th></tr>
        <tr><td><strong>Singulier</strong></td><td>this</td><td>that</td></tr>
        <tr><td><strong>Pluriel</strong></td><td>these</td><td>those</td></tr>
      </table>

      <h2>THIS / THESE - Proche</h2>
      <ul>
        <li>"<strong>This</strong> book is interesting." (ce livre-ci)</li>
        <li>"<strong>These</strong> shoes are comfortable." (ces chaussures-ci)</li>
        <li>Aussi pour : le présent, ce qui vient d'être mentionné, les présentations téléphoniques</li>
      </ul>

      <h2>THAT / THOSE - Éloigné</h2>
      <ul>
        <li>"<strong>That</strong> building is very old." (ce bâtiment là-bas)</li>
        <li>"<strong>Those</strong> people are waiting for the bus." (ces gens là-bas)</li>
        <li>Aussi pour : le passé, ce qui a été mentionné plus tôt</li>
      </ul>

      <h2>Usages particuliers</h2>
      <ul>
        <li><strong>Au téléphone</strong> : "Hello, <strong>this</strong> is John." (pas "I am")</li>
        <li><strong>Présentations</strong> : "<strong>This</strong> is my colleague, Sarah."</li>
        <li><strong>Référence au temps</strong> : "<strong>This</strong> morning" (aujourd'hui) vs "<strong>That</strong> morning" (ce jour-là, passé)</li>
      </ul>
    `,
    date: '2025-01-08',
    author: 'Antony Addy',
    category: 'Grammaire - Déterminants',
    readTime: '4 min',
    description: 'Guide complet des démonstratifs anglais : this, that, these, those avec exemples et règles.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'demonstratives'
  },
  {
    id: 'conditionals-zero-first-second-third',
    title: 'Les conditionnels en anglais : Zero, First, Second, Third',
    excerpt: 'Maîtrisez les quatre types de conditionnels anglais avec des explications claires et des exemples pratiques.',
    content: `
      <p>L'anglais possède plusieurs types de <strong>conditionnels</strong> selon le degré de probabilité ou de réalité de la situation.</p>

      <h2>Zero Conditional - Vérités générales</h2>
      <p><strong>If + present simple, present simple</strong></p>
      <p>"If you heat water to 100°C, it boils." (toujours vrai)</p>

      <h2>First Conditional - Situations réelles/probables</h2>
      <p><strong>If + present simple, will + infinitif</strong></p>
      <p>"If it rains tomorrow, I will stay home." (possible)</p>

      <h2>Second Conditional - Situations hypothétiques</h2>
      <p><strong>If + past simple, would + infinitif</strong></p>
      <p>"If I won the lottery, I would travel the world." (peu probable/imaginaire)</p>
      <p>Note : "If I <strong>were</strong> you..." (formel, pour les conseils)</p>

      <h2>Third Conditional - Passé irréel (regrets)</h2>
      <p><strong>If + past perfect, would have + participe passé</strong></p>
      <p>"If I had studied harder, I would have passed the exam." (mais je n'ai pas étudié)</p>

      <h2>Résumé visuel</h2>
      <ul>
        <li><strong>Zero</strong> : fait scientifique → présent + présent</li>
        <li><strong>First</strong> : futur probable → présent + will</li>
        <li><strong>Second</strong> : hypothèse présente → passé + would</li>
        <li><strong>Third</strong> : passé irréel → past perfect + would have</li>
      </ul>
    `,
    date: '2025-01-07',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '7 min',
    description: 'Guide complet des conditionnels anglais : Zero, First, Second et Third conditional expliqués.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'conditionals'
  },
  {
    id: 'passive-voice',
    title: 'La voix passive en anglais : Formation et usages',
    excerpt: 'Quand et comment utiliser la voix passive en anglais ? Découvrez les règles et transformez vos phrases actives.',
    content: `
      <p>La <strong>voix passive</strong> met l'accent sur l'action ou l'objet plutôt que sur l'auteur de l'action.</p>

      <h2>Formation</h2>
      <p><strong>Sujet + BE (conjugué) + participe passé (+ by + agent)</strong></p>
      <ul>
        <li>Active : "Someone stole my car."</li>
        <li>Passive : "My car <strong>was stolen</strong>."</li>
      </ul>

      <h2>À tous les temps</h2>
      <ul>
        <li>Present Simple : "The office <strong>is cleaned</strong> every day."</li>
        <li>Past Simple : "The letter <strong>was sent</strong> yesterday."</li>
        <li>Present Perfect : "The work <strong>has been completed</strong>."</li>
        <li>Future : "The results <strong>will be announced</strong> tomorrow."</li>
        <li>Modal : "This <strong>can be done</strong> easily."</li>
      </ul>

      <h2>Quand utiliser le passif ?</h2>
      <ul>
        <li><strong>L'auteur est inconnu</strong> : "My bike was stolen."</li>
        <li><strong>L'auteur n'est pas important</strong> : "English is spoken worldwide."</li>
        <li><strong>Contexte formel/scientifique</strong> : "The experiment was conducted..."</li>
        <li><strong>Pour éviter de blâmer</strong> : "Mistakes were made."</li>
      </ul>

      <h2>By + agent</h2>
      <p>On mentionne l'agent seulement s'il apporte une information importante :</p>
      <p>"The Mona Lisa was painted <strong>by Leonardo da Vinci</strong>."</p>
    `,
    date: '2025-01-06',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '6 min',
    description: 'Maîtrisez la voix passive anglaise : formation, usages et transformation de phrases actives.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'passive-voice'
  },
  {
    id: 'phrasal-verbs',
    title: 'Les Phrasal Verbs : Guide essentiel pour les maîtriser',
    excerpt: 'Les phrasal verbs sont incontournables en anglais. Découvrez comment ils fonctionnent et apprenez les plus courants.',
    content: `
      <p>Les <strong>phrasal verbs</strong> sont des verbes composés d'un verbe + une particule (préposition ou adverbe) qui change le sens du verbe.</p>

      <h2>Pourquoi sont-ils difficiles ?</h2>
      <p>Le sens n'est souvent pas déductible des éléments séparés :</p>
      <ul>
        <li>"give up" ≠ "donner vers le haut" → signifie "abandonner"</li>
        <li>"look after" ≠ "regarder après" → signifie "s'occuper de"</li>
      </ul>

      <h2>Séparables vs Inséparables</h2>
      <p><strong>Séparables</strong> - l'objet peut aller au milieu ou après :</p>
      <ul>
        <li>"Turn off the light" = "Turn the light off" ✓</li>
        <li>Avec pronom : "Turn <strong>it</strong> off" (obligatoire au milieu)</li>
      </ul>
      <p><strong>Inséparables</strong> - l'objet va toujours après :</p>
      <ul>
        <li>"Look after the children" ✓</li>
        <li>❌ "Look the children after"</li>
      </ul>

      <h2>Phrasal verbs courants</h2>
      <ul>
        <li><strong>get up</strong> : se lever</li>
        <li><strong>wake up</strong> : se réveiller</li>
        <li><strong>turn on/off</strong> : allumer/éteindre</li>
        <li><strong>look for</strong> : chercher</li>
        <li><strong>find out</strong> : découvrir</li>
        <li><strong>give up</strong> : abandonner</li>
        <li><strong>put off</strong> : reporter</li>
        <li><strong>carry on</strong> : continuer</li>
      </ul>
    `,
    date: '2025-01-05',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '6 min',
    description: 'Guide complet des phrasal verbs anglais : séparables, inséparables et les plus courants à connaître.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'phrasal-verbs'
  },
  {
    id: 'articles-a-an-the',
    title: 'Les articles en anglais : A, An, The ou rien ?',
    excerpt: 'Quand utiliser a, an, the ou pas d\'article ? Les règles essentielles pour ne plus hésiter.',
    content: `
      <p>Les <strong>articles</strong> sont l'une des difficultés majeures pour les francophones. Voici les règles essentielles.</p>

      <h2>A / AN - Articles indéfinis</h2>
      <p>Pour quelque chose de <strong>non spécifique</strong>, mentionné pour la première fois :</p>
      <ul>
        <li><strong>A</strong> devant consonne : a book, a house, a university (son "yu")</li>
        <li><strong>AN</strong> devant voyelle (son) : an apple, an hour (h muet), an MBA</li>
      </ul>

      <h2>THE - Article défini</h2>
      <p>Pour quelque chose de <strong>spécifique</strong>, déjà connu ou unique :</p>
      <ul>
        <li>"I saw <strong>a</strong> dog. <strong>The</strong> dog was brown." (déjà mentionné)</li>
        <li>"<strong>The</strong> sun, <strong>the</strong> moon, <strong>the</strong> president" (unique)</li>
        <li>"<strong>The</strong> book you lent me" (spécifié par contexte)</li>
      </ul>

      <h2>Pas d'article (Ø)</h2>
      <ul>
        <li><strong>Généralisations</strong> : "Ø Dogs are loyal." (les chiens en général)</li>
        <li><strong>Noms propres</strong> : Ø France, Ø London, Ø Mount Everest</li>
        <li><strong>Repas, sports, langues</strong> : Ø breakfast, Ø tennis, Ø English</li>
        <li><strong>Certaines expressions</strong> : at Ø work, at Ø home, go to Ø bed</li>
      </ul>

      <h2>Exceptions avec THE</h2>
      <p>the United States, the Netherlands, the Alps, the Pacific Ocean</p>
    `,
    date: '2025-01-04',
    author: 'Antony Addy',
    category: 'Grammaire - Déterminants',
    readTime: '6 min',
    description: 'Maîtrisez les articles anglais a, an, the et l\'article zéro avec des règles claires.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'articles'
  },
  {
    id: 'modal-verbs',
    title: 'Les verbes modaux : Can, Could, Must, Should...',
    excerpt: 'Les modaux expriment la capacité, l\'obligation, la probabilité et plus. Guide complet avec exemples.',
    content: `
      <p>Les <strong>verbes modaux</strong> sont des auxiliaires qui expriment la capacité, la permission, l'obligation, la probabilité, etc.</p>

      <h2>Caractéristiques des modaux</h2>
      <ul>
        <li>Pas de -s à la 3e personne : "He <strong>can</strong> swim" (pas "cans")</li>
        <li>Suivis de l'infinitif sans TO : "You <strong>must go</strong>" (pas "must to go")</li>
        <li>Questions par inversion : "<strong>Can</strong> you help me?"</li>
      </ul>

      <h2>CAN / COULD - Capacité et permission</h2>
      <ul>
        <li><strong>Can</strong> : capacité présente, permission → "I can swim."</li>
        <li><strong>Could</strong> : capacité passée, demande polie → "Could you help me?"</li>
      </ul>

      <h2>MUST / HAVE TO - Obligation</h2>
      <ul>
        <li><strong>Must</strong> : obligation forte/personnelle → "I must study tonight."</li>
        <li><strong>Have to</strong> : obligation externe → "I have to wear a uniform."</li>
        <li><strong>Mustn't</strong> : interdiction ≠ <strong>Don't have to</strong> : pas nécessaire</li>
      </ul>

      <h2>SHOULD / OUGHT TO - Conseil</h2>
      <p>"You <strong>should</strong> see a doctor." (conseil)</p>

      <h2>MAY / MIGHT - Probabilité</h2>
      <ul>
        <li><strong>May</strong> : possibilité (~50%) → "It may rain."</li>
        <li><strong>Might</strong> : possibilité plus faible → "It might rain."</li>
      </ul>

      <h2>WILL / WOULD</h2>
      <ul>
        <li><strong>Will</strong> : futur, volonté → "I will help you."</li>
        <li><strong>Would</strong> : conditionnel, demande polie → "Would you like some tea?"</li>
      </ul>
    `,
    date: '2025-01-03',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '7 min',
    description: 'Guide complet des verbes modaux anglais : can, could, must, should, may, might, will, would.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'modal-verbs'
  },
  {
    id: 'reported-speech',
    title: 'Le discours indirect (Reported Speech) en anglais',
    excerpt: 'Comment rapporter les paroles de quelqu\'un en anglais ? Les règles du discours indirect expliquées.',
    content: `
      <p>Le <strong>discours indirect</strong> (reported speech) permet de rapporter ce que quelqu'un a dit sans citer ses paroles exactes.</p>

      <h2>Changement de temps (backshift)</h2>
      <p>Quand le verbe introducteur est au passé, les temps reculent :</p>
      <ul>
        <li>Present Simple → Past Simple : "I <strong>am</strong> tired" → He said he <strong>was</strong> tired.</li>
        <li>Present Continuous → Past Continuous : "I <strong>am working</strong>" → She said she <strong>was working</strong>.</li>
        <li>Past Simple → Past Perfect : "I <strong>saw</strong> him" → He said he <strong>had seen</strong> him.</li>
        <li>Will → Would : "I <strong>will</strong> call" → She said she <strong>would</strong> call.</li>
      </ul>

      <h2>Changement de pronoms et références</h2>
      <ul>
        <li>I → he/she : "I am happy" → He said <strong>he</strong> was happy.</li>
        <li>today → that day</li>
        <li>tomorrow → the next day / the following day</li>
        <li>yesterday → the day before / the previous day</li>
        <li>here → there</li>
        <li>this → that</li>
      </ul>

      <h2>Verbes introducteurs</h2>
      <ul>
        <li><strong>say</strong> (sans objet) : He <strong>said</strong> (that) he was tired.</li>
        <li><strong>tell</strong> (+ objet) : He <strong>told me</strong> (that) he was tired.</li>
        <li><strong>ask</strong> (questions) : She <strong>asked</strong> if I was coming.</li>
      </ul>

      <h2>Questions indirectes</h2>
      <ul>
        <li>Yes/No : "Are you coming?" → She asked <strong>if/whether</strong> I was coming.</li>
        <li>Wh- : "Where do you live?" → He asked <strong>where</strong> I lived.</li>
      </ul>
    `,
    date: '2025-01-02',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '7 min',
    description: 'Maîtrisez le discours indirect en anglais : backshift, pronoms et verbes introducteurs.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'reported-speech'
  },
  {
    id: 'relative-clauses',
    title: 'Les propositions relatives : Who, Which, That, Whose',
    excerpt: 'Comment utiliser who, which, that, whose et where pour relier des phrases ? Guide complet des relatives.',
    content: `
      <p>Les <strong>propositions relatives</strong> donnent des informations supplémentaires sur un nom en utilisant un pronom relatif.</p>

      <h2>Les pronoms relatifs</h2>
      <ul>
        <li><strong>WHO</strong> : pour les personnes → "The man <strong>who</strong> called you..."</li>
        <li><strong>WHICH</strong> : pour les choses/animaux → "The book <strong>which</strong> I bought..."</li>
        <li><strong>THAT</strong> : pour les deux (informel) → "The woman <strong>that</strong> works here..."</li>
        <li><strong>WHOSE</strong> : possession → "The girl <strong>whose</strong> father is a doctor..."</li>
        <li><strong>WHERE</strong> : lieu → "The restaurant <strong>where</strong> we met..."</li>
        <li><strong>WHEN</strong> : temps → "The day <strong>when</strong> I arrived..."</li>
      </ul>

      <h2>Relatives définissantes vs non-définissantes</h2>
      <p><strong>Définissantes</strong> (essentielles, pas de virgules) :</p>
      <p>"The woman <strong>who lives next door</strong> is a doctor." (quelle femme ? celle qui habite à côté)</p>
      
      <p><strong>Non-définissantes</strong> (info supplémentaire, avec virgules) :</p>
      <p>"My mother<strong>, who is 65,</strong> still works." (info en plus, pas essentielle)</p>

      <h2>Omission du pronom relatif</h2>
      <p>On peut omettre who/which/that quand c'est l'<strong>objet</strong> de la relative :</p>
      <ul>
        <li>"The book (which/that) I read was great." ✓</li>
        <li>"The man (who/that) I met was nice." ✓</li>
      </ul>
      <p>Mais PAS quand c'est le sujet :</p>
      <p>"The man <strong>who</strong> called is here." (obligatoire)</p>
    `,
    date: '2025-01-01',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '6 min',
    description: 'Guide complet des propositions relatives en anglais : who, which, that, whose et quand les omettre.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'relative-clauses'
  },
  {
    id: 'gerunds-vs-infinitives',
    title: 'Gérondif ou Infinitif ? Le guide pour ne plus hésiter',
    excerpt: 'Quand utiliser -ing et quand utiliser to + verbe ? Les règles et listes de verbes à connaître.',
    content: `
      <p>Certains verbes sont suivis du <strong>gérondif</strong> (-ing), d'autres de l'<strong>infinitif</strong> (to + verbe). Comment s'y retrouver ?</p>

      <h2>Verbes + GÉRONDIF (-ing)</h2>
      <p>enjoy, finish, avoid, consider, deny, imagine, mind, practise, suggest, risk, keep, miss</p>
      <ul>
        <li>"I <strong>enjoy reading</strong>."</li>
        <li>"She <strong>finished working</strong> at 6 PM."</li>
        <li>"He <strong>avoids eating</strong> sugar."</li>
      </ul>

      <h2>Verbes + INFINITIF (to + verbe)</h2>
      <p>want, need, decide, hope, expect, plan, promise, refuse, seem, learn, agree, offer</p>
      <ul>
        <li>"I <strong>want to learn</strong> English."</li>
        <li>"She <strong>decided to leave</strong>."</li>
        <li>"He <strong>promised to help</strong>."</li>
      </ul>

      <h2>Verbes + les deux (avec changement de sens)</h2>
      <ul>
        <li><strong>STOP</strong> : "Stop smoking" (arrêter de fumer) vs "Stop to smoke" (s'arrêter pour fumer)</li>
        <li><strong>REMEMBER</strong> : "Remember locking" (se souvenir d'avoir fermé) vs "Remember to lock" (ne pas oublier de fermer)</li>
        <li><strong>TRY</strong> : "Try opening" (essayer comme solution) vs "Try to open" (faire un effort pour)</li>
      </ul>

      <h2>Après les prépositions : toujours -ING</h2>
      <ul>
        <li>"I'm interested <strong>in learning</strong>."</li>
        <li>"She's good <strong>at cooking</strong>."</li>
        <li>"I'm tired <strong>of waiting</strong>."</li>
      </ul>
    `,
    date: '2024-12-31',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '6 min',
    description: 'Maîtrisez le choix entre gérondif (-ing) et infinitif (to) après les verbes anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'gerunds-infinitives'
  },
  {
    id: 'question-tags',
    title: 'Les Question Tags : Comment les former correctement',
    excerpt: 'You speak English, don\'t you? Apprenez à former ces petites questions de confirmation en anglais.',
    content: `
      <p>Les <strong>question tags</strong> sont des mini-questions ajoutées en fin de phrase pour demander confirmation ou encourager une réponse.</p>

      <h2>Règle de base</h2>
      <p><strong>Phrase positive → tag négatif</strong> : "You speak English, <strong>don't you</strong>?"</p>
      <p><strong>Phrase négative → tag positif</strong> : "You don't speak French, <strong>do you</strong>?"</p>

      <h2>Formation</h2>
      <p>Reprendre l'auxiliaire de la phrase principale :</p>
      <ul>
        <li>BE : "She is French, <strong>isn't she</strong>?"</li>
        <li>HAVE (auxiliaire) : "You have finished, <strong>haven't you</strong>?"</li>
        <li>Modaux : "He can swim, <strong>can't he</strong>?"</li>
        <li>DO (si pas d'auxiliaire) : "You like coffee, <strong>don't you</strong>?"</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li><strong>I am</strong> → <strong>aren't I</strong> : "I'm late, aren't I?"</li>
        <li><strong>Let's</strong> → <strong>shall we</strong> : "Let's go, shall we?"</li>
        <li><strong>Impératif</strong> → <strong>will you / won't you</strong> : "Open the door, will you?"</li>
        <li><strong>There is</strong> → <strong>isn't there</strong> : "There's a problem, isn't there?"</li>
      </ul>

      <h2>Intonation</h2>
      <ul>
        <li><strong>Intonation descendante</strong> : on attend confirmation (on est sûr)</li>
        <li><strong>Intonation montante</strong> : vraie question (on n'est pas sûr)</li>
      </ul>
    `,
    date: '2024-12-30',
    author: 'Antony Addy',
    category: 'Grammaire - Questions',
    readTime: '5 min',
    description: 'Apprenez à former les question tags en anglais : règles, exceptions et intonation.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'question-tags'
  },
  {
    id: 'so-and-such',
    title: 'So vs Such : Quelle différence et comment les utiliser',
    excerpt: 'So ou such pour intensifier ? Découvrez les règles pour exprimer "tellement" en anglais.',
    content: `
      <p><strong>SO</strong> et <strong>SUCH</strong> servent tous deux à intensifier, mais avec des structures différentes.</p>

      <h2>SO + adjectif/adverbe</h2>
      <ul>
        <li>"It was <strong>so hot</strong>!" (tellement chaud)</li>
        <li>"She speaks <strong>so quickly</strong>!" (tellement vite)</li>
        <li>"I'm <strong>so tired</strong>!" (tellement fatigué)</li>
      </ul>

      <h2>SUCH + (a/an) + (adjectif) + nom</h2>
      <ul>
        <li>"It was <strong>such a hot day</strong>!" (une journée tellement chaude)</li>
        <li>"She is <strong>such a nice person</strong>!" (une personne tellement gentille)</li>
        <li>"They are <strong>such good friends</strong>!" (de tellement bons amis)</li>
      </ul>

      <h2>Structures de conséquence</h2>
      <ul>
        <li><strong>SO...THAT</strong> : "It was <strong>so</strong> hot <strong>that</strong> we stayed inside."</li>
        <li><strong>SUCH...THAT</strong> : "It was <strong>such</strong> a hot day <strong>that</strong> we stayed inside."</li>
      </ul>

      <h2>Cas particuliers</h2>
      <ul>
        <li><strong>SO + much/many/little/few</strong> : "There were <strong>so many</strong> people!"</li>
        <li><strong>SUCH + a lot of</strong> : "There was <strong>such a lot of</strong> noise!"</li>
      </ul>

      <h2>Résumé</h2>
      <p><strong>SO</strong> = seul avec adjectif/adverbe</p>
      <p><strong>SUCH</strong> = avec un nom (même modifié par un adjectif)</p>
    `,
    date: '2024-12-29',
    author: 'Antony Addy',
    category: 'Grammaire - Intensifieurs',
    readTime: '4 min',
    description: 'Maîtrisez la différence entre so et such pour exprimer l\'intensité en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'so-such'
  },
  {
    id: 'too-and-enough',
    title: 'Too et Enough : Exprimer l\'excès et la suffisance',
    excerpt: 'Too much ou enough ? Apprenez à exprimer ce qui est excessif ou suffisant en anglais.',
    content: `
      <p><strong>TOO</strong> exprime l'excès (trop), <strong>ENOUGH</strong> exprime la suffisance (assez).</p>

      <h2>TOO - Excès (négatif)</h2>
      <p><strong>TOO + adjectif/adverbe</strong> (avant) :</p>
      <ul>
        <li>"It's <strong>too hot</strong>." (trop chaud)</li>
        <li>"You're driving <strong>too fast</strong>." (trop vite)</li>
      </ul>
      <p><strong>TOO MUCH + nom indénombrable</strong> :</p>
      <ul><li>"There's <strong>too much</strong> sugar." (trop de sucre)</li></ul>
      <p><strong>TOO MANY + nom dénombrable pluriel</strong> :</p>
      <ul><li>"There are <strong>too many</strong> people." (trop de gens)</li></ul>

      <h2>ENOUGH - Suffisance</h2>
      <p><strong>Adjectif/adverbe + ENOUGH</strong> (après) :</p>
      <ul>
        <li>"It's warm <strong>enough</strong>." (assez chaud)</li>
        <li>"She speaks clearly <strong>enough</strong>." (assez clairement)</li>
      </ul>
      <p><strong>ENOUGH + nom</strong> (avant) :</p>
      <ul>
        <li>"We have <strong>enough</strong> time." (assez de temps)</li>
        <li>"There aren't <strong>enough</strong> chairs." (pas assez de chaises)</li>
      </ul>

      <h2>Structures avec TO + infinitif</h2>
      <ul>
        <li>"It's <strong>too cold to swim</strong>." (trop froid pour nager)</li>
        <li>"She's <strong>old enough to drive</strong>." (assez âgée pour conduire)</li>
        <li>"I don't have <strong>enough money to buy</strong> it." (pas assez d'argent pour acheter)</li>
      </ul>
    `,
    date: '2024-12-28',
    author: 'Antony Addy',
    category: 'Grammaire - Intensifieurs',
    readTime: '5 min',
    description: 'Apprenez à utiliser too et enough pour exprimer l\'excès et la suffisance en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'too-enough'
  },
  {
    id: 'some-and-any',
    title: 'Some ou Any ? Les règles pour ne plus se tromper',
    excerpt: 'Quand utiliser some et quand utiliser any ? Les règles essentielles avec exemples.',
    content: `
      <p><strong>SOME</strong> et <strong>ANY</strong> expriment une quantité indéfinie, mais s'utilisent dans des contextes différents.</p>

      <h2>SOME - Phrases affirmatives</h2>
      <ul>
        <li>"I have <strong>some</strong> money."</li>
        <li>"There are <strong>some</strong> apples in the fridge."</li>
        <li>"I need <strong>some</strong> help."</li>
      </ul>

      <h2>ANY - Questions et négations</h2>
      <ul>
        <li>"Do you have <strong>any</strong> money?"</li>
        <li>"I don't have <strong>any</strong> money."</li>
        <li>"Is there <strong>any</strong> milk left?"</li>
      </ul>

      <h2>Exceptions importantes</h2>
      <p><strong>SOME dans les questions</strong> quand on attend/espère OUI :</p>
      <ul>
        <li>Offres : "Would you like <strong>some</strong> coffee?" (offre polie)</li>
        <li>Demandes : "Can I have <strong>some</strong> water?" (demande polie)</li>
        <li>Suggestions : "Shall we buy <strong>some</strong> flowers?"</li>
      </ul>

      <p><strong>ANY dans les affirmatives</strong> = "n'importe quel" :</p>
      <ul>
        <li>"You can call me <strong>any</strong> time." (à n'importe quel moment)</li>
        <li>"<strong>Any</strong> doctor will tell you the same thing."</li>
      </ul>

      <h2>Composés</h2>
      <ul>
        <li>something/anything, someone/anyone, somewhere/anywhere</li>
        <li>Mêmes règles : "I saw <strong>something</strong>." / "Did you see <strong>anything</strong>?"</li>
      </ul>
    `,
    date: '2024-12-27',
    author: 'Antony Addy',
    category: 'Grammaire - Quantifieurs',
    readTime: '5 min',
    description: 'Maîtrisez l\'utilisation de some et any avec les règles et exceptions essentielles.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'some-any'
  },
  {
    id: 'wish-and-if-only',
    title: 'Wish et If Only : Exprimer les regrets et souhaits',
    excerpt: 'Comment exprimer des souhaits présents et des regrets passés avec wish et if only.',
    content: `
      <p><strong>WISH</strong> et <strong>IF ONLY</strong> expriment le regret ou le désir que quelque chose soit différent. "If only" est plus emphatique.</p>

      <h2>Souhaits présents (le présent serait différent)</h2>
      <p><strong>WISH/IF ONLY + prétérit</strong></p>
      <ul>
        <li>"I <strong>wish</strong> I <strong>had</strong> more money." (mais je n'en ai pas)</li>
        <li>"<strong>If only</strong> I <strong>were</strong> taller!" (mais je ne le suis pas)</li>
        <li>"I <strong>wish</strong> I <strong>could</strong> speak French." (mais je ne peux pas)</li>
      </ul>

      <h2>Regrets passés (le passé aurait été différent)</h2>
      <p><strong>WISH/IF ONLY + past perfect</strong></p>
      <ul>
        <li>"I <strong>wish</strong> I <strong>had studied</strong> harder." (mais je n'ai pas étudié)</li>
        <li>"<strong>If only</strong> I <strong>hadn't said</strong> that!" (mais je l'ai dit)</li>
      </ul>

      <h2>Habitudes agaçantes (pour les autres)</h2>
      <p><strong>WISH + would + infinitif</strong></p>
      <ul>
        <li>"I <strong>wish</strong> you <strong>would</strong> stop smoking."</li>
        <li>"I <strong>wish</strong> it <strong>would</strong> stop raining."</li>
      </ul>
      <p>⚠️ PAS : "I wish I would..." → utiliser "I wish I could"</p>

      <h2>Were vs Was</h2>
      <ul>
        <li>Formel : "I wish I <strong>were</strong>..."</li>
        <li>Informel : "I wish I <strong>was</strong>..."</li>
      </ul>
    `,
    date: '2024-12-26',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '5 min',
    description: 'Apprenez à exprimer les souhaits et regrets avec wish et if only en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'wish-if-only'
  },
  {
    id: 'make-vs-do',
    title: 'Make vs Do : Les règles pour ne plus confondre',
    excerpt: 'Make a decision ou do a decision ? Apprenez à distinguer make et do avec des listes pratiques.',
    content: `
      <p><strong>MAKE</strong> et <strong>DO</strong> signifient tous deux "faire" mais s'utilisent dans des contextes différents.</p>

      <h2>DO - Tâches et activités générales</h2>
      <ul>
        <li><strong>Tâches domestiques</strong> : do the housework, do the dishes, do the laundry</li>
        <li><strong>Travail/études</strong> : do homework, do a job, do research</li>
        <li><strong>Activités en -ing</strong> : do the shopping, do the cooking, do the cleaning</li>
        <li><strong>Soins personnels</strong> : do your hair, do your nails, do exercise</li>
        <li><strong>Expressions</strong> : do your best, do a favor, do business, do well/badly</li>
      </ul>

      <h2>MAKE - Création et résultats</h2>
      <ul>
        <li><strong>Créer/produire</strong> : make a cake, make coffee, make dinner</li>
        <li><strong>Causer</strong> : make a mistake, make noise, make someone happy</li>
        <li><strong>Plans/décisions</strong> : make a decision, make plans, make an appointment</li>
        <li><strong>Communication</strong> : make a phone call, make a speech, make a comment</li>
        <li><strong>Argent</strong> : make money, make a profit, make a fortune</li>
        <li><strong>Expressions</strong> : make friends, make progress, make an effort, make sense</li>
      </ul>

      <h2>Astuce</h2>
      <p><strong>DO</strong> = activité sans objet concret créé</p>
      <p><strong>MAKE</strong> = quelque chose est créé ou produit</p>
    `,
    date: '2024-12-25',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '5 min',
    description: 'Maîtrisez la différence entre make et do avec des listes d\'expressions courantes.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'make-vs-do'
  },
  {
    id: 'say-vs-tell',
    title: 'Say vs Tell : Comment choisir le bon verbe',
    excerpt: 'He said ou he told me ? Découvrez les règles pour utiliser say et tell correctement.',
    content: `
      <p><strong>SAY</strong> et <strong>TELL</strong> impliquent tous deux de communiquer avec des mots, mais avec des structures différentes.</p>

      <h2>SAY - Focus sur les mots</h2>
      <p>Say + ce qui est dit (pas de complément personne obligatoire)</p>
      <ul>
        <li>"He <strong>said</strong> (that) he was tired."</li>
        <li>"She <strong>said</strong> hello."</li>
        <li>"He <strong>said</strong> to me that..." (avec "to")</li>
      </ul>
      <p><strong>Expressions avec SAY</strong> : say hello/goodbye, say please/thank you, say sorry, say a prayer, say yes/no</p>

      <h2>TELL - Focus sur la personne</h2>
      <p>Tell + personne + ce qui est dit (complément personne obligatoire)</p>
      <ul>
        <li>"He <strong>told me</strong> (that) he was tired."</li>
        <li>"She <strong>told them</strong> to wait."</li>
        <li>"<strong>Tell me</strong> the truth."</li>
      </ul>
      <p><strong>Expressions avec TELL</strong> : tell the truth, tell a lie, tell a story, tell a joke, tell the time, tell the difference</p>

      <h2>Résumé</h2>
      <ul>
        <li><strong>SAY</strong> something (to someone)</li>
        <li><strong>TELL</strong> someone something</li>
      </ul>

      <h2>Erreurs courantes</h2>
      <ul>
        <li>❌ "He said me..." → ✅ "He <strong>told</strong> me..." ou "He <strong>said to</strong> me..."</li>
        <li>❌ "He told that..." → ✅ "He <strong>said</strong> that..."</li>
      </ul>
    `,
    date: '2024-12-24',
    author: 'Antony Addy',
    category: 'Grammaire - Verbes',
    readTime: '4 min',
    description: 'Apprenez à distinguer say et tell avec les règles et expressions essentielles.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'say-vs-tell'
  },
  {
    id: 'reflexive-pronouns',
    title: 'Les pronoms réfléchis : myself, yourself, himself...',
    excerpt: 'Quand utiliser myself, yourself, himself ? Guide complet des pronoms réfléchis anglais.',
    content: `
      <p>Les <strong>pronoms réfléchis</strong> se terminent en -self (singulier) ou -selves (pluriel) et renvoient au sujet.</p>

      <h2>Les formes</h2>
      <ul>
        <li>I → <strong>myself</strong></li>
        <li>you (singulier) → <strong>yourself</strong></li>
        <li>he → <strong>himself</strong></li>
        <li>she → <strong>herself</strong></li>
        <li>it → <strong>itself</strong></li>
        <li>we → <strong>ourselves</strong></li>
        <li>you (pluriel) → <strong>yourselves</strong></li>
        <li>they → <strong>themselves</strong></li>
      </ul>

      <h2>Utilisations</h2>
      <p><strong>1. Sujet et objet identiques</strong></p>
      <ul>
        <li>"I hurt <strong>myself</strong>." (je me suis blessé)</li>
        <li>"She taught <strong>herself</strong> to play piano."</li>
      </ul>

      <p><strong>2. Emphase (pronoms emphatiques)</strong></p>
      <ul>
        <li>"I'll do it <strong>myself</strong>!" (moi-même, pas quelqu'un d'autre)</li>
        <li>"The president <strong>himself</strong> came."</li>
      </ul>

      <p><strong>3. Avec "by" = seul</strong></p>
      <ul>
        <li>"He lives by <strong>himself</strong>." (seul)</li>
        <li>"Did you make this by <strong>yourself</strong>?" (tout seul)</li>
      </ul>

      <h2>Expressions courantes</h2>
      <p>enjoy yourself, behave yourself, help yourself, make yourself at home, introduce yourself</p>
    `,
    date: '2024-12-23',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '5 min',
    description: 'Guide complet des pronoms réfléchis en anglais : formes, utilisations et expressions.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'reflexive-pronouns'
  },
  {
    id: 'subject-object-pronouns',
    title: 'Pronoms sujets et compléments : I/me, he/him, she/her...',
    excerpt: 'Quand utiliser I ou me ? He ou him ? Maîtrisez les pronoms sujets et compléments.',
    content: `
      <p>Les <strong>pronoms sujets</strong> font l'action, les <strong>pronoms compléments</strong> reçoivent l'action.</p>

      <h2>Les formes</h2>
      <table>
        <tr><th>Sujet</th><th>Complément</th></tr>
        <tr><td>I</td><td>me</td></tr>
        <tr><td>you</td><td>you</td></tr>
        <tr><td>he</td><td>him</td></tr>
        <tr><td>she</td><td>her</td></tr>
        <tr><td>it</td><td>it</td></tr>
        <tr><td>we</td><td>us</td></tr>
        <tr><td>they</td><td>them</td></tr>
      </table>

      <h2>Pronoms sujets - AVANT le verbe</h2>
      <ul>
        <li>"<strong>I</strong> love chocolate."</li>
        <li>"<strong>She</strong> is my sister."</li>
        <li>"<strong>They</strong> work here."</li>
      </ul>

      <h2>Pronoms compléments - APRÈS le verbe ou préposition</h2>
      <ul>
        <li>"Call <strong>me</strong> later."</li>
        <li>"I saw <strong>him</strong> yesterday."</li>
        <li>"This is for <strong>you</strong>."</li>
      </ul>

      <h2>Erreurs courantes</h2>
      <ul>
        <li>❌ "Me and John went..." → ✅ "<strong>John and I</strong> went..."</li>
        <li>❌ "Between you and I" → ✅ "Between you and <strong>me</strong>"</li>
      </ul>

      <h2>Astuce</h2>
      <p>Pour "X and I" vs "X and me", enlevez "X and" et testez :</p>
      <p>"John and I/me went..." → "I went" ✓ / "Me went" ✗ → <strong>"John and I"</strong></p>
    `,
    date: '2024-12-22',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '5 min',
    description: 'Maîtrisez les pronoms sujets et compléments en anglais avec des règles claires.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'subject-object-pronouns'
  },
  {
    id: 'possessive-adjectives',
    title: 'Les adjectifs possessifs : my, your, his, her...',
    excerpt: 'My, your, his, her, its, our, their : maîtrisez les adjectifs possessifs anglais.',
    content: `
      <p>Les <strong>adjectifs possessifs</strong> indiquent la possession et viennent AVANT un nom.</p>

      <h2>Les formes</h2>
      <ul>
        <li>I → <strong>my</strong></li>
        <li>you → <strong>your</strong></li>
        <li>he → <strong>his</strong></li>
        <li>she → <strong>her</strong></li>
        <li>it → <strong>its</strong></li>
        <li>we → <strong>our</strong></li>
        <li>they → <strong>their</strong></li>
      </ul>

      <h2>Règles importantes</h2>
      <p><strong>1. Toujours suivis d'un nom</strong></p>
      <ul>
        <li>"This is <strong>my</strong> book." ✓</li>
        <li>"This is <strong>my</strong>." ✗ (utiliser "mine")</li>
      </ul>

      <p><strong>2. Invariables</strong></p>
      <p><strong>my</strong> book / <strong>my</strong> books (pas de changement singulier/pluriel)</p>

      <h2>Pièges courants</h2>
      <p><strong>ITS vs IT'S</strong></p>
      <ul>
        <li><strong>its</strong> = possessif : "The dog wagged <strong>its</strong> tail."</li>
        <li><strong>it's</strong> = it is/has : "<strong>It's</strong> raining."</li>
      </ul>

      <p><strong>THEIR vs THERE vs THEY'RE</strong></p>
      <ul>
        <li><strong>their</strong> = possessif : "<strong>Their</strong> house is big."</li>
        <li><strong>there</strong> = lieu : "over <strong>there</strong>"</li>
        <li><strong>they're</strong> = they are : "<strong>They're</strong> happy."</li>
      </ul>
    `,
    date: '2024-12-21',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '4 min',
    description: 'Guide complet des adjectifs possessifs en anglais : formes et pièges à éviter.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'possessive-adjectives'
  },
  {
    id: 'possessive-pronouns',
    title: 'Les pronoms possessifs : mine, yours, his, hers...',
    excerpt: 'Mine, yours, his, hers, ours, theirs : utilisez les pronoms possessifs sans nom.',
    content: `
      <p>Les <strong>pronoms possessifs</strong> remplacent "adjectif possessif + nom" et s'utilisent SEULS.</p>

      <h2>Les formes</h2>
      <ul>
        <li>my → <strong>mine</strong></li>
        <li>your → <strong>yours</strong></li>
        <li>his → <strong>his</strong> (même forme)</li>
        <li>her → <strong>hers</strong></li>
        <li>our → <strong>ours</strong></li>
        <li>their → <strong>theirs</strong></li>
      </ul>
      <p>Note : pas de pronom possessif pour "it".</p>

      <h2>Différence clé</h2>
      <ul>
        <li><strong>Adjectif + nom</strong> : "This is <strong>my</strong> book."</li>
        <li><strong>Pronom seul</strong> : "This book is <strong>mine</strong>."</li>
      </ul>

      <h2>Exemples</h2>
      <ul>
        <li>"Is this phone <strong>yours</strong>?" (= your phone)</li>
        <li>"Her car is red. <strong>Mine</strong> is blue." (= my car)</li>
        <li>"Their house is big, but <strong>ours</strong> is bigger." (= our house)</li>
      </ul>

      <h2>Structure "a friend of mine"</h2>
      <ul>
        <li>"A friend of <strong>mine</strong>" = un de mes amis</li>
        <li>"A colleague of <strong>his</strong>" = un de ses collègues</li>
      </ul>

      <h2>Questions courantes</h2>
      <ul>
        <li>"Whose is this?" - "It's <strong>mine</strong>."</li>
        <li>"Is this yours or hers?" - "It's <strong>hers</strong>."</li>
      </ul>
    `,
    date: '2024-12-20',
    author: 'Antony Addy',
    category: 'Grammaire - Pronoms',
    readTime: '4 min',
    description: 'Maîtrisez les pronoms possessifs anglais pour remplacer les groupes nominaux.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'possessive-pronouns'
  },
  {
    id: 'either-neither',
    title: 'Either et Neither : Exprimer le choix et la négation',
    excerpt: 'Either...or, neither...nor, me neither : maîtrisez ces structures de choix et d\'accord.',
    content: `
      <p><strong>EITHER</strong> et <strong>NEITHER</strong> s'utilisent pour parler de deux choses ou personnes.</p>

      <h2>EITHER - L'un ou l'autre</h2>
      <ul>
        <li>"<strong>Either</strong> answer is acceptable." (l'une ou l'autre)</li>
        <li>"Would you like tea or coffee?" - "<strong>Either</strong> is fine." (les deux me vont)</li>
      </ul>

      <h2>NEITHER - Ni l'un ni l'autre</h2>
      <ul>
        <li>"<strong>Neither</strong> of them speaks French." (aucun des deux)</li>
        <li>"Do you want tea or coffee?" - "<strong>Neither</strong>, thanks." (aucun)</li>
      </ul>

      <h2>Either...or / Neither...nor</h2>
      <ul>
        <li>"You can choose <strong>either</strong> the red one <strong>or</strong> the blue one."</li>
        <li>"<strong>Neither</strong> John <strong>nor</strong> Mary came to the party."</li>
      </ul>

      <h2>Expressions d'accord</h2>
      <p><strong>Pour les phrases positives :</strong></p>
      <ul>
        <li>"I love pizza." - "<strong>Me too</strong>!" / "<strong>So do I</strong>!"</li>
      </ul>
      <p><strong>Pour les phrases négatives :</strong></p>
      <ul>
        <li>"I don't like spiders." - "<strong>Me neither</strong>!" / "<strong>Neither do I</strong>!"</li>
        <li>"I can't swim." - "<strong>Neither can</strong> my brother."</li>
      </ul>

      <h2>Accord du verbe</h2>
      <p>Formellement, either/neither + of prend un verbe singulier :</p>
      <p>"<strong>Neither</strong> of them <strong>has</strong> arrived." (formel)</p>
    `,
    date: '2024-12-19',
    author: 'Antony Addy',
    category: 'Grammaire - Structures',
    readTime: '5 min',
    description: 'Maîtrisez either et neither pour exprimer le choix et l\'accord en anglais.',
    ogImage: '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
    relatedExerciseId: 'either-neither'
  }
];

// Get all grammar blog post IDs
export const grammarBlogPostIds = grammarBlogPosts.map(post => post.id);

// Get grammar blog posts as articles format for Blog.tsx
export const grammarArticles = grammarBlogPosts.map(post => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  author: post.author,
  category: post.category,
  readTime: post.readTime
}));
