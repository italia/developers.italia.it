import { ALL_SITE, ADMINISTRATION, SOFTWARE_REUSE, SOFTWARE_OPEN, API, PLATFORM } from '../utils/constants.js';
import { search } from './searchEngine.js';

jest.mock('../api/elasticSearch.js');
jest.mock('../utils/l10n.js');

describe('searchEngine', () => {
  it('correctly models news item', async () => {
    const news = {
      category: 'news',
      description:
        'Esce la prima roadmap di progetto di Developers Italia, per seguire il progetto e partecipare allo s...',
      icon: 'it-horn',
      logo: '/assets/icons/logo-it.png',
      fallback: '/assets/icons/logo-it.png',
      name: 'Pubblicata la roadmap di SPID',
      url: '/it/news/2017/05/25/pubblicata-roadmap-spid',
      id: 'l72-THcB1AD1KRLs1zR8',
    };
    const [items] = await search(ALL_SITE);
    expect(items[0]).toEqual(news);
  });
  it('correctly models administration item', async () => {
    const administration = {
      category: 'administration',
      description: '',
      icon: 'it-pa',
      logo: '/assets/images/cover_amministrazioni.png',
      fallback: '/assets/images/cover_amministrazioni.png',
      name: "Agenzia Regionale per la Prevenzione, l'Ambiente e l'Energia dell'Emilia Romagna",
      url: '/it/pa/arpa',
      id: 'arpa',
    };
    const [items] = await search(ADMINISTRATION);
    expect(items[0]).toEqual(administration);
  });
  it('correctly models api item', async () => {
    const api = {
      category: 'api',
      description: 'Soluzione di viaggio intermodale utilizzando il trasporto pubblico in Lombardia.',
      icon: 'it-settings',
      logo: 'https://raw.githubusercontent.com/teamdigitale/api-openapi-samples/master/external-apis/img/muoversi2015.e015.servizirl.it.png',
      fallback: '/assets/images/cover_api.png',
      name: 'Muoversi in Lombardia',
      url: '/it/api/muoversi-in-lombardia.html',
      id: 'djy-THcBQbdPK8qB5_Lp',
    };
    const [items] = await search(API);
    expect(items[0]).toEqual(api);
  });
  it('correctly models software open', async () => {
    const softwareOpen = {
      category: 'software_open',
      description: 'FastReport Open Source - generatore di report per .NET CORE',
      icon: 'it-open-source',
      logo: 'https://raw.githubusercontent.com/FastReports/FastReport/master/assets/images/FastReport-screenshot2.png',
      fallback: '/assets/images/cover_software_opensource.png',
      name: 'FastReport',
      url: '/it/software/fastreports-fastreport-3f5842',
      id: '3f58426d5729a9353962f782411737ec7fb9b220',
    };
    const [items] = await search(SOFTWARE_OPEN);
    expect(items[0]).toEqual(softwareOpen);
  });
  it('correctly models software reuse', async () => {
    const softwareReuse = {
      category: 'software_reuse',
      description:
        "E' un sistema per la gestione del processo  di Consolidamento dei Bilanci  realizzato dalla Cooperat...",
      icon: 'it-software',
      logo: '/assets/images/cover_softwareriuso.png',
      fallback: '/assets/images/cover_softwareriuso.png',
      name: 'Sistema Informatico di Consolidamento',
      url: '/it/software/r_basili-regionebasilicata-sistemainformaticoconsolidamento',
      id: '008bc17bec6f4b2feeca186d740183be7cfe6baf',
    };
    const [items] = await search(SOFTWARE_REUSE);
    expect(items[0]).toEqual(softwareReuse);
  });
  it('correctly models platform', async () => {
    const platform = {
      category: 'platform',
      description:
        'Lo SPID è una credenziale unica di accesso, con identità verificata, integrabile da siti pubblici e ...',
      icon: 'it-piattaforme',
      logo: '/assets/images/logo-spid@2x.png',
      fallback: '/assets/images/cover_piattaforme.png',
      name: 'SPID',
      url: '/it/spid/',
      id: '_FK-THcB1A35Nb5M3m2V',
    };
    const [items] = await search(PLATFORM);
    expect(items[0]).toEqual(platform);
  });
});
