import flavorFusionPaper from '../assets/flavorFusionPaper.pdf';
import CapstoneDocument from '../assets/CapstoneDocument.pdf';
import CapstonePresentation from '../assets/CapstonePresentation.pdf';

export const projects = [
  {
    id: 1,
    slug: 'flavor-fusion',
    title: 'Flavor Fusion',
    github: 'https://github.com/AllisonDT/Flavor-Fusion',
    description:
      'A Swift app paired with a Bluetooth-enabled spice robot that allows real-time control over spice measurements and blends.',
    media: {
      videos: ['https://youtu.be/b5L8fDbYnfM?si=91D1Wk2kzx_nEFNP'],
      papers: [{ title: 'Flavor Fusion Paper', link: flavorFusionPaper }]
    },
    highlights: [
      'Built with Swift and Apple development tooling.',
      'Collaborated in an interdisciplinary engineering team.',
      'Won the Interdisciplinary Category during final pitch presentations.'
    ]
  },
  {
    id: 2,
    slug: 'music-practice-app',
    title: 'iPhone Music Practice App',
    description:
      'A mobile practice companion with tools musicians need daily: metronome, tuner, audio recording, and calendar-based note tracking.',
    github: 'https://gitlab.com/musiccapstone/music-capstone',
    media: {
      videos: [],
      papers: [
        { title: 'PracticePal Paper', link: CapstoneDocument },
        { title: 'PracticePal Presentation', link: CapstonePresentation }
      ]
    },
    highlights: [
      'Designed and implemented in Swift and Xcode.',
      'Focused on intuitive mobile workflows for musicians.',
      'Blended audio utility features with habit-building UX patterns.'
    ]
  },
  {
    id: 3,
    slug: 'vr-game',
    title: 'VR Game',
    description:
      'An immersive Oculus Quest game built in Unity with interaction systems, locomotion, and physics-driven mechanics.',
    media: {
      videos: [
        'https://youtu.be/REB3gUMN1i4?si=PF08G8QBSYAx00Ol',
        'https://youtu.be/bvbKNsoEvJ4?si=mDSzVEE-qlpMGHD6',
        'https://youtu.be/oJGq1w_jp2E?si=9MeD5MlLd7EPewSG',
        'https://youtu.be/Ikq_ZVLM65g?si=mCU60gcobNEm6_ZW'
      ]
    },
    highlights: [
      'Implemented object interactions and physical feedback loops.',
      'Developed user interface and world interaction systems.',
      'Tested for comfort, clarity, and interaction consistency in VR.'
    ]
  }
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
