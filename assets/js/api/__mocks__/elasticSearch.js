/* eslint-disable sonarjs/no-duplicate-string */
import { SOFTWARE_OPEN } from '../../utils/constants.js';

// eslint-disable-next-line max-lines-per-function
export const querySoftware = jest.fn(({ type }) => {
  if (type === SOFTWARE_OPEN) {
    return [
      [
        {
          _index: 'publiccodes',
          _type: '_doc',
          _id: '3f58426d5729a9353962f782411737ec7fb9b220',
          _score: 1,
          _source: {
            fileRawURL: 'https://raw.githubusercontent.com/FastReports/FastReport/master/publiccode.yml',
            id: '3f58426d5729a9353962f782411737ec7fb9b220',
            crawltime: '2021-01-29T00:07:47Z',
            'it-riuso-codiceIPA-label': '',
            slug: 'FastReports-FastReport-3f5842',
            publiccode: {
              applicationSuite: 'Report generator',
              categories: [
                'application-development',
                'business-intelligence',
                'data-visualization',
                'accounting',
                'financial-reporting',
              ],
              description: {
                en: {
                  documentation: 'https://github.com/FastReports/FastReport.Documentation',
                  features: [
                    'generate report',
                    'export to PDF, html, image, etc.',
                    '13 types of bands available',
                    'text, picture, line, shape, barcode, matrix, table, checkbox',
                    'Reports can consist of several design pages',
                    'Aggregate functions are also available',
                    'Matrix object that can be used to print pivot tables',
                    'Report inheritance',
                    'Data from XML, CSV, Json, MS SQL, MySql, Oracle, Postgres, MongoDB, Couchbase, RavenDB, SQLite',
                    'Data from business objects of IEnumerable type',
                    'Built-in script engine that supports two .NET languages, C# and VB.NET',
                    'Export in HTML, BMP, PNG, JPEG, GIF, TIFF, EMF. PDF Export is available as a plugin.',
                  ],
                  genericName: 'Report generator',
                  localisedName: 'FastReport',
                  longDescription:
                    'FastReport provides open source report generator for .NET Core/.NET Framework. You can use the FastReport in MVC, Web API applications. FastReport is written in C# and it is compatible with .NET Standard 2.0 and higher. Extendable FastReport architecture allows creating your own objects, export filters, wizards and DB engines. You can get data from XML, CSV, Json, MS SQL, MySql, Oracle, Postgres, MongoDB, Couchbase, RavenDB, SQLite. FastReport has a built-in script engine that supports two .NET languages, C# and VB.NET. You can use all of the .NET power in your reports to perform complex data handling and much more. You can make a report template in several ways:creating report from code, developing report template as XML file, using the FastReport Online Designer, using the FastReport Designer Community Edition (freeware). FastReport Open Source can save documents in HTML, BMP, PNG, JPEG, GIF, TIFF, EMF. PDF Export is available as a plugin.',
                  screenshots: [
                    'https://raw.githubusercontent.com/FastReports/FastReport/master/assets/images/FastReport-screenshot2.png',
                    'https://raw.githubusercontent.com/FastReports/FastReport/master/assets/images/FastReport-screenshot1.png',
                    'https://raw.githubusercontent.com/FastReports/FastReport/master/assets/images/FastReport-screenshot3.png',
                  ],
                  shortDescription:
                    'FastReport provides open source report generator for .NET Core/.NET Framework. You can use the FastReport in MVC, Web API applications.',
                  videos: ['https://youtu.be/Js78gl_xAOU'],
                },
                it: {
                  documentation: 'https://github.com/FastReports/FastReport.Documentation',
                  features: [
                    '13 types of bands available',
                    'text, picture, line, shape, barcode, matrix, table, checkbox',
                    'Reports can consist of several design pages',
                    'Aggregate functions are also available',
                    'Matrix object that can be used to print pivot tables',
                    'Report inheritance',
                    'Data from XML, CSV, Json, MS SQL, MySql, Oracle, Postgres, MongoDB, Couchbase, RavenDB, SQLite',
                    'Data from business objects of IEnumerable type',
                    'Built-in script engine that supports two .NET languages, C# and VB.NET',
                    'Export in HTML, BMP, PNG, JPEG, GIF, TIFF, EMF. PDF Export is available as a plugin.',
                    'generate report',
                    'export to PDF, html, image, etc.',
                  ],
                  genericName: 'Generatore di report',
                  localisedName: 'FastReport',
                  longDescription:
                    "FastReport fornisce un generatore di report open source per .NET Core/.NET Framework. È possibile utilizzare FastReport in MVC, applicazioni API Web. FastReport è scritto in C# ed è compatibile con .NET Standard 2.0 e versioni successive. L'architettura FastReport estendibile consente di creare oggetti, filtri di esportazione, procedure guidate e motori DB personalizzati. È possibile ottenere dati da XML, CSV, Json, MS SQL, MySql, Oracle, Postgres, MongoDB, Couchbase, RavenDB, SQLite. FastReport ha un motore di script integrato che supporta due lingue .NET, C# e VB.NET. È possibile utilizzare tutta la potenza di .NET nei report per eseguire complesse operazioni di gestione dei dati e molto altro. È possibile creare un modello di report in diversi modi:creazione di report da codice, sviluppo di template di report come file XML, utilizzando FastReport Online Designer, utilizzando FastReport Designer Community Edition (freeware). FastReport Open Source può salvare documenti in HTML, BMP, PNG, JPEG, GIF, TIFF, EMF. L'esportazione PDF è disponibile come plug-in. FASTREPORT Open Source è un programma per la creazione di report con specifica gestione di sezioni visualmente distinte. Queste comprendono:titolo del report, riassunto, titolo principale, sottotitolo, testata della colonna, nota in calce della colonna, testata dei dati, dati, nota in calce dei dati, testata di gruppo, nota in calce del gruppo, figli, overlay. Inoltre è possibile l’uso di sottoreport, che sono totalmente gestiti dal programma. L’ampia gamma di campi permette la creazione di qualsiasi tipo di report:liste, master-detail, gruppi, colonne multiple, master-detail-detail e molti altri.",
                  screenshots: [
                    'https://raw.githubusercontent.com/FastReports/FastReport/master/assets/images/FastReport-screenshot2.png',
                    'https://raw.githubusercontent.com/FastReports/FastReport/master/assets/images/FastReport-screenshot1.png',
                    'https://raw.githubusercontent.com/FastReports/FastReport/master/assets/images/FastReport-screenshot3.png',
                  ],
                  shortDescription: 'FastReport Open Source - generatore di report per .NET CORE',
                  videos: ['https://youtu.be/Js78gl_xAOU'],
                },
              },
              developmentStatus: 'stable',
              intendedAudience: {
                scope: [
                  'agriculture',
                  'culture',
                  'defence',
                  'education',
                  'emergency-services',
                  'employment',
                  'energy',
                  'finance-and-economic-development',
                  'environment',
                  'foreign-affairs',
                  'infrastructures',
                  'justice',
                  'local-authorities',
                  'healthcare',
                  'manufacturing',
                  'research',
                  'government',
                  'science-and-technology',
                  'society',
                  'sport',
                  'tourism',
                  'transportation',
                  'welfare',
                  'security',
                ],
              },
              it: {
                conforme: {
                  gdpr: false,
                  lineeGuidaDesign: false,
                  misureMinimeSicurezza: false,
                  modelloInteroperabilita: false,
                },
                countryExtensionVersion: '0.2',
                piattaforme: {
                  anpr: false,
                  cie: false,
                  pagopa: false,
                  spid: false,
                },
                riuso: {},
              },
              landingURL: 'https://github.com/FastReports/FastReport',
              legal: {
                license: 'MIT',
                mainCopyrightOwner: 'Fast Reports Inc.',
                repoOwner: 'https://github.com/FastReports',
              },
              localisation: {
                availableLanguages: ['en'],
                localisationReady: false,
              },
              logo: 'https://raw.githubusercontent.com/FastReports/FastReport/master/assets/images/FR-open-source.svg',
              maintenance: {
                contacts: [
                  {
                    affiliation: 'Fast Reports Inc.',
                    email: 'michael@fast-report.com',
                    name: 'Michael Philippenko',
                    phone: '800-985-8986',
                  },
                ],
                type: 'community',
              },
              name: 'FastReport',
              platforms: ['web', 'windows', 'mac', 'linux'],
              publiccodeYmlVersion: '0.2',
              releaseDate: '2020-09-07',
              roadmap: 'https://github.com/FastReports/FastReport/issues/79',
              softwareType: 'library',
              softwareVersion: '2020.4.0',
              url: 'https://github.com/FastReports/FastReport.git',
              usedBy: ['Fast Reports Inc.'],
            },
            vitalityScore: 81,
            vitalityDataChart: [
              81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,
              81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 100, 93, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 91,
              81, 81, 77, 77, 77, 77, 77, 77,
            ],
            oEmbedHTML: {
              'https://youtu.be/Js78gl_xAOU':
                '<iframe width="200" height="113" src="https://www.youtube.com/embed/Js78gl_xAOU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            },
            type: 'software',
          },
        },
      ],
      169,
    ];
  }

  return [
    [
      {
        _index: 'publiccodes',
        _id: '008bc17bec6f4b2feeca186d740183be7cfe6baf',
        _type: '_doc',
        _score: 2,
        _source: {
          fileRawURL:
            'https://raw.githubusercontent.com/RegioneBasilicata/SistemaInformaticoConsolidamento/master/publiccode.yml',
          id: '008bc17bec6f4b2feeca186d740183be7cfe6baf',
          crawltime: '2021-01-29T00:08:14Z',
          'it-riuso-codiceIPA-label': 'Regione Basilicata',
          slug: 'r_basili-RegioneBasilicata-SistemaInformaticoConsolidamento',
          publiccode: {
            categories: ['accounting', 'financial-reporting', 'office'],
            description: {
              it: {
                features: [
                  'Definizione e gestione Gruppo Amministrazione Pubblica (GAP)',
                  'Gestione anagrafiche',
                  'Gestione dettagli partecipazione/controllo (importo, %, ecc.).',
                  'Importazione dati contabili',
                  'Import bilanci',
                  'Import partite infragruppo',
                  'Gestione Infragruppo',
                  'Immissione manuale partite infragruppo',
                  'Gestione rettifiche partite Infragruppo',
                  'Gestione Rettifiche di coerenza e di consolidamento',
                  'Inserimento e gestione rettifiche di coerenza',
                  'Rilevamento automatico differenze di consolidamento',
                  'inserimento automatico rettifiche di consolidamento',
                  'Verifica quadrature rettifiche',
                  'Funzione di generazione Bilancio Aggregato (pre Consolidamento)',
                  'Funzione di generazione Bilancio Consolidamento',
                  'Report Interattivi per analisi aggregate e di dettaglio',
                  'Reportistica ufficiale',
                  'Generazione Tabelle da allagare alla Nota Integrativa',
                  'Generazione file in formato xbrl per invio Banca Dati Amministrazioni Pubbliche (BDAP)',
                ],
                genericName: 'SInC',
                longDescription:
                  "Il sistema consente il consolidamento dei Bilanci  dell’Ente capogruppo con partecipate,  controllate ed enti strumentali dal caricamento  dei dati di bilancio e delle partite infragruppo  da file esterni (fogli elettronici strutturati).  Il sistema è rilasciato in ambiente Web. Ed è utilizzabile con il semplice  utilizzo di un browser (compatibile con tutti i più diffusi browser). Il Sistema può essere configurato per l'accesso di ogni singolo componente del GAP che sara' abilitato ad inserire: - dati di bilancio - dati infragruppo - documentazione Ciascun componente potrà verificare le proprie partita infragruppo con quelle risultanti dagli altri componenti interessati.  Sono presenti tutte le funzionalità per gestire in automatico: - le scritture di rettifica pre consolidamento - la determinazione delle Quote di Pertinenza di Terzi  - la rilevazione delle Differenze di Consolidamento. Il Sistema genera in automatico le seguenti tipoligie di bilancio: - Aggregato - Aggregato Rettificato - Aggregato, Rettificato e Nettizzato - Consolidato finale Viene generato in automatico anche il file con estensione xbrl per l'invio  alla Banca Dati Amministrazioni Pubbliche (BDAP)\n",
                shortDescription:
                  "E' un sistema per la gestione del processo  di Consolidamento dei Bilanci  realizzato dalla Cooperativa EDP La Traccia per la Regione Basilicata.",
              },
            },
            developmentStatus: 'stable',
            intendedAudience: {
              scope: ['government'],
            },
            it: {
              conforme: {
                gdpr: true,
                lineeGuidaDesign: false,
                misureMinimeSicurezza: true,
                modelloInteroperabilita: true,
              },
              countryExtensionVersion: '0.2',
              piattaforme: {
                anpr: false,
                cie: false,
                pagopa: false,
                spid: true,
              },
              riuso: {
                codiceIPA: 'r_basili',
              },
            },
            legal: {
              license: 'EUPL-1.2',
              mainCopyrightOwner: 'Regione Basilicata',
              repoOwner: 'Regione Basilicata',
            },
            localisation: {
              availableLanguages: ['it'],
              localisationReady: false,
            },
            maintenance: {
              contacts: [
                {
                  email: 'fferrante@latraccia.it',
                  name: 'Francesco Ferrante',
                  phone: '+390835336836',
                },
              ],
              contractors: [
                {
                  name: 'Cooperativa EDP La Traccia',
                  until: '2021-04-16',
                },
              ],
              type: 'contract',
            },
            name: 'Sistema Informatico di Consolidamento',
            platforms: ['web'],
            publiccodeYmlVersion: '0.2',
            releaseDate: '2017-01-01',
            softwareType: 'standalone/web',
            softwareVersion: '1.0',
            url: 'https://github.com/RegioneBasilicata/SistemaInformaticoConsolidamento',
            usedBy: ['Regione Basilicata'],
          },
          vitalityScore: 60,
          vitalityDataChart: [
            60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
            60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
            60, 60, 60, 60, 60, 60,
          ],
          oEmbedHTML: {},
          type: 'software',
        },
      },
    ],
    169,
  ];
});

export const queryAllSite = jest.fn(() => [
  [
    {
      _index: 'jekyll-20210129060509',
      _type: '_doc',
      _id: 'l72-THcB1AD1KRLs1zR8',
      _score: 1.5479652,
      _source: {
        id: '/it/news/2017/05/25/pubblicata-roadmap-spid',
        url: '/it/news/2017/05/25/pubblicata-roadmap-spid',
        text: ' Pubblicata la roadmap di SPID Esce la prima roadmap di progetto di Developers Italia, per seguire il progetto e partecipare allo sviluppo Giovanni Bajo May 25, 2017 condividi su Twitter Con molto piacere, questo è il link alla prima roadmap progettuale di Developers Italia: la roadmap di SPID. La abbiamo preparata in forma di bacheca di Trello. Contiamo di aggiornarla regolarmente via via che gli sviluppi procedono. Ovviamente le card che non sono già assegnate a qualcuno sono… libere :) Per le card in corso, pubblichiamo direttamente il link al repository GitHub dove si svolge lo sviluppo del task, in modo che chi vuole può dare un’occhiata e contribuire. Inoltre, a breve vorrei catalogare per ciascun repository le issue che sono più facili da svolgere per chi si avvicina al progetto, e filtrarle e pubblicarle live sul sito principale (developers.italia.it). La roadmap è lo strumento principe che ci consente di dichiarare apertamente quali sono i piani di sviluppo del progetto e quali sono le componenti dell’ecosistema software che pensiamo essere importanti. Ovviamente la roadmap è aperta a commenti e proposte da parte di tutti che valuteremo se accogliere nel piano ufficiale di sviluppo, cercando di canalizzare così le contribuzioni (fermo restando che se volete realizzare qualcosa anche fuori roadmap, non saremo certo noi a bloccarvi!). Penso sia la prima software roadmap della pubblica amministrazione in Italia, e tutti i viaggi cominciano con piccoli passi. Spero che ci sarà molto da camminare insieme :) argomenti roadmap progetti ',
        draft: false,
        categories: ['news'],
        permalink: 'it/news/:year/:month/:day/:title',
        lang: 'it',
        type: 'news',
        layout: 'post',
        title: 'Pubblicata la roadmap di SPID',
        subtitle:
          'Esce la prima roadmap di progetto di Developers Italia, per seguire il progetto e partecipare allo sviluppo',
        date: '2017-05-25 16:00:00 +0000',
        tags: ['roadmap', 'progetti'],
        author: 'Giovanni Bajo',
        image: '/assets/icons/logo-it.png',
        locale: 'it',
        redirect_from: ['/roadmap/progetti/2017/05/25/pubblicata-roadmap-spid.html'],
        slug: 'pubblicata-roadmap-spid',
        ext: '.md',
        excerpt:
          '<p>Con molto piacere, questo è il link alla prima roadmap progettuale di Developers Italia: la <a href="https://trello.com/b/PHF0ErvK/spid-roadmap">roadmap di SPID</a>. La abbiamo preparata in forma di bacheca di Trello.</p>\n',
      },
    },
  ],
  169,
]);

export const queryAdministration = jest.fn(() => [
  [
    {
      _index: 'administrations',
      _type: '_doc',
      _id: 'arpa',
      _score: 1,
      _source: {
        'it-riuso-codiceIPA-label': "Agenzia Regionale per la Prevenzione, l'Ambiente e l'Energia dell'Emilia Romagna",
        'it-riuso-codiceIPA': 'arpa',
        type: 'administration',
      },
    },
  ],
  160,
]);

export const queryApi = jest.fn(() => [
  [
    {
      _index: 'jekyll-20210129060509',
      _type: '_doc',
      _id: 'djy-THcBQbdPK8qB5_Lp',
      _score: 0,
      _source: {
        id: '/it/api/muoversi-in-lombardia.html',
        url: '/it/api/muoversi-in-lombardia.html',
        text: '',
        layout: 'default',
        lang: 'it',
        title: 'Muoversi in Lombardia',
        type: 'api',
        openapi:
          'https://raw.githubusercontent.com/teamdigitale/api-openapi-samples/master/external-apis/muoversi2015.e015.servizirl.it.yaml',
        abstract: 'Soluzione di viaggio intermodale utilizzando il trasporto pubblico in Lombardia.',
        contact: {
          name: 'Regione Lombardia',
          logo: 'https://raw.githubusercontent.com/teamdigitale/api-openapi-samples/master/external-apis/img/muoversi2015.e015.servizirl.it.png',
        },
        tags: [],
        language: ['it'],
        slug: 'muoversi-in-lombardia',
      },
    },
  ],
  150,
]);

// eslint-disable-next-line max-lines-per-function
export const queryPlatform = jest.fn(() => [
  [
    {
      _index: 'jekyll-20210129060509',
      _type: '_doc',
      _id: '_FK-THcB1A35Nb5M3m2V',
      _score: 3.2055624,
      _source: {
        id: '/it/spid',
        url: '/it/spid/',
        text: '',
        draft: false,
        categories: [],
        toc: true,
        layout: 'platform',
        type: 'platform',
        title: 'SPID',
        subtitle: 'Sistema Pubblico di Identità Digitale',
        logo: '/assets/images/logo-spid@2x.png',
        payoff: 'Sistema Pubblico di Identità Digitale',
        description:
          'Lo SPID è una credenziale unica di accesso, con identità verificata, integrabile da siti pubblici e privati.\n',
        lang: 'it',
        ref: {
          en: '/en/spid',
        },
        order: 2,
        highlight: true,
        comingsoon: false,
        abilitante: true,
        github_team: 'spid',
        socials: [
          {
            name: 'facebook',
            icon: 'facebook',
            link: 'https://www.facebook.com/groups/agid.spid/',
          },
        ],
        owners: [
          {
            name: "Agenzia per l'Italia Digitale",
            url: 'https://www.agid.gov.it/',
          },
        ],
        resources: [
          {
            Documentazione: [
              {
                title: 'Regole Tecniche consolidate',
                url: 'https://docs.italia.it/italia/spid/spid-regole-tecniche/it/stabile/',
                icon: 'file',
                desc: 'Le regole tecniche di SPID con applicati tutti gli avvisi e le correzioni ai refusi, consultabili comodamente su Docs Italia',
              },
              {
                title: 'Roadmap SDK',
                url: 'https://trello.com/b/PHF0ErvK/spid-roadmap',
                icon: 'file',
                desc: "Quadro d'insieme delle SDK per SPID sviluppate e mantenute dalla community di Developers Italia",
              },
              {
                title: 'Metadata degli Identity Provider',
                url: 'https://github.com/italia/spid-registry-idp',
                icon: 'github',
                desc: 'Metadata degli Identity Provider, che i Service Provider devono mantenere aggiornati',
              },
              {
                title: 'Modulistica, circolari e deliberazioni',
                url: 'https://www.agid.gov.it/it/piattaforme/spid',
                icon: 'file',
                desc: 'Sito di AGID contenente la modulistica, i listini, le convenzioni e le deliberazioni che riguardano SPID',
              },
            ],
          },
          {
            SDK: [
              {
                title: 'SDK per .NET',
                icon: 'github',
                url: 'https://github.com/italia/spid-dotnet-sdk',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni .NET",
              },
              {
                title: 'SDK per Django',
                icon: 'github',
                url: 'https://github.com/italia/spid-django',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Django (Python)",
              },
              {
                title: 'SDK per Express.js',
                icon: 'github',
                url: 'https://github.com/italia/spid-express',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Node/Passport (Javascript)",
              },
              {
                title: 'SDK per Spring',
                icon: 'github',
                url: 'https://github.com/italia/spid-spring',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Java Spring",
              },
              {
                title: 'SDK per Ruby',
                icon: 'github',
                url: 'https://github.com/italia/spid-ruby',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Ruby",
              },
              {
                title: 'SDK per Ruby on Rails',
                icon: 'github',
                url: 'https://github.com/italia/spid-rails',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Ruby on Rails",
              },
              {
                title: 'SDK per Sinatra',
                icon: 'github',
                url: 'https://github.com/italia/spid-sinatra',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Sinatra (Ruby)",
              },
              {
                title: 'SDK per Android',
                icon: 'github',
                url: 'https://github.com/italia/spid-android-sdk',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni mobile Android (Java)",
              },
              {
                title: 'SDK per iOS',
                icon: 'github',
                url: 'https://github.com/italia/spid-ios-sdk',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni mobile iOS",
              },
              {
                title: 'SDK per PHP',
                icon: 'github',
                url: 'https://github.com/italia/spid-php-lib',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni PHP",
              },
              {
                title: 'SDK per Wordpress',
                icon: 'github',
                url: 'https://github.com/italia/spid-wordpress',
                desc: "Plugin nativo per l'integrazione del login con SPID in siti Wordpress (PHP)",
              },
              {
                title: 'SDK per Laravel',
                icon: 'github',
                url: 'https://github.com/italia/spid-laravel',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Laravel (PHP)",
              },
              {
                title: 'SDK per Symfony',
                icon: 'github',
                url: 'https://github.com/italia/spid-symfony-bundle',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Symfony (PHP)",
              },
              {
                title: 'SDK per Drupal',
                icon: 'github',
                url: 'https://github.com/italia/spid-drupal-module',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Drupal (PHP)",
              },
              {
                title: 'SDK per concrete5',
                icon: 'github',
                url: 'https://github.com/italia/spid-concrete5',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni concrete5 (PHP)",
              },
              {
                title: 'SDK per PHP (basata su SimpleSAMLphp)',
                icon: 'github',
                url: 'https://github.com/italia/spid-php',
                desc: "Script per l'integrazione di SPID in applicazioni PHP attraverso l'installazione guidata di SimpleSAMLphp",
              },
              {
                title: 'SDK per Perl',
                icon: 'github',
                url: 'https://github.com/italia/spid-perl',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Perl",
              },
              {
                title: 'SDK per Dancer2',
                icon: 'github',
                url: 'https://github.com/italia/spid-perl-dancer2',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Dancer2 (Perl)",
              },
              {
                title: 'SDK per Go',
                icon: 'github',
                url: 'https://github.com/italia/spid-go',
                desc: "Libreria nativa per l'integrazione di SPID in applicazioni Golang",
              },
              {
                title: 'Plugin per Limesurvey',
                icon: 'github',
                url: 'https://github.com/italia/spid-limesurvey-plugin',
                desc: "Plugin nativo per l'integrazione di SPID in Limesurvey",
              },
              {
                title: 'Proxy con Shibboleth',
                icon: 'github',
                url: 'https://github.com/italia/spid-shibboleth-proxy-docker',
                desc: 'Immagine Docker per creare un proxy basato su Apache2 e Shibboleth',
              },
              {
                title: 'Esempio di configurazione di Shibboleth con Nginx tramite un playbook Ansible',
                url: 'https://github.com/italia/spid-ansible-shibboleth-example',
                icon: 'github',
              },
              {
                title: 'IAM in Python',
                url: 'https://github.com/italia/spid-sp-sapspid',
                icon: 'github',
                desc: 'Applicativo di Identity Access Management compatibile con SPID sviluppato in Python',
              },
            ],
          },
          {
            'Risorse grafiche': [
              {
                title: 'Bottone "Entra con SPID"',
                icon: 'github',
                url: 'https://github.com/italia/spid-sp-access-button',
                desc: "Il bottone da inserire nel sito del Service Provider, con integrata la scelta dell'Identity Provider",
              },
              {
                title: 'Interfacce grafiche per Identity Provider',
                icon: 'github',
                url: 'https://github.com/italia/spid-idp-login-layout',
                desc: 'Modelli in HTML statico per le interfacce degli Identity Provider',
              },
              {
                title: 'Icone, loghi e materiali grafici',
                icon: 'github',
                url: 'https://github.com/italia/spid-graphics',
                desc: 'Questo repository contiene il logo di SPID, i loghi degli Identity Provider ed altri materiali grafici',
              },
              {
                title: 'Bottone "Entra con SPID" (versione smart)',
                icon: 'github',
                url: 'https://github.com/italia/spid-smart-button',
                desc: 'Nuova versione (non ancora ufficiale) del bottone "Entra con SPID", con integrata la scelta dell\'Identity Provider',
              },
            ],
          },
          {
            Tool: [
              {
                title: 'Identity Provider di test',
                url: 'https://github.com/italia/spid-testenv2',
                icon: 'github',
                desc: 'Ambiente di test per verificare la rispondenza di un Service Provider alle regole tecniche, eseguibile anche in locale',
              },
            ],
          },
        ],
        slug: 'spid',
        ext: '.md',
        tags: [],
        excerpt: '<h2 id="intro">Intro</h2>\n',
        date: '2021-01-29 06:05:08 +0000',
      },
    },
  ],
  140,
]);
