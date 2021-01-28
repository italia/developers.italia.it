import { ALL_CATALOGUE } from '../../utils/constants.js';

export const search = jest.fn(async (type) => {
  if (type === ALL_CATALOGUE) {
    return [
      [
        {
          category: 'software_open',
          description: 'Suite open source completa per la moderna Business Analytics',
          icon: 'it-open-source',
          logo:
            'https://raw.githubusercontent.com/KnowageLabs/Knowage-Server/master/screenshots/knowage-covid-italy-regional.png',
          name: 'Knowage Server',
          url: '/it/software/knowagelabs-knowage-server-94e418',
          id: '94e418c53fa8d232faa34945b804c2a42f59204e',
        },
        {
          category: 'software_reuse',
          description: "IO è l'app dei servizi pubblici",
          icon: 'it-software',
          logo: '/assets/images/cover_softwareriuso.png',
          name: 'IO',
          url: '/it/software/pcm-pagopa-io-app',
          id: 'fcf648cecc13b59b84915e7cace32504634d00e6',
        },
        {
          category: 'software_reuse',
          description:
            'Software di Sala Operativa (in fase di reingegnerizzazione) del Corpo Nazionale dei Vigili del Fuoco...',
          icon: 'it-software',
          logo: 'https://raw.githubusercontent.com/vvfosprojects/sovvf/master/doc/images/dashboard.jpg',
          name: 'Sala Operativa VVF',
          url: '/it/software/m_it-vvfosprojects-sovvf',
          id: '2ed8e07469a5b9dcdb6ff83dd01c415b6a0cd4be',
        },
      ],
      169,
    ];
  }
});
