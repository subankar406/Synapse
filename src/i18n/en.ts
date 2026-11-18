import type { PhysioCopy, TitleParts } from './types';

/**
 * English copy. This file defines the shape every other locale must follow
 * (see `Dictionary` below). Strings in `[brackets]` are placeholders the
 * clinic still needs to confirm.
 */
export const en = {
  meta: {
    title: 'Synapse — Home',
    description: 'Physiotherapy clinic in Paris 10.',
  },

  common: {
    book: 'Book an appointment',
    bookArrow: 'Book an appointment →',
    seeMore: 'See more',
    close: 'Close',
    officialSite: 'official website',
    homeLabel: 'Synapse — home',
    chooseLanguage: 'Choose language',
    menu: 'Menu',
  },

  nav: {
    label: 'Main navigation',
    items: {
      cabinet: 'The clinic',
      equipe: 'Team',
      expertises: 'Expertises',
      vision: 'Vision',
      infos: 'Practical info',
      faq: 'FAQ',
    },
  },

  info: {
    addressLabel: 'Address',
    metroLabel: 'Metro',
    hoursLabel: 'Opening hours',
    hoursShort: 'Mon – Fri [8am – 8pm] · Sat [9am – 1pm]',
    sessions: '1-hour assessment · 30-min follow-up sessions',
    phone: '[Clinic phone]',
    email: '[Clinic email]',
  },

  hero: {
    title: [
      { text: 'Understand,', tone: 'primary' },
      ' ',
      { text: 'feel,', tone: 'secondary' },
      ' move.',
    ] as TitleParts,
    tagline: 'Physiotherapy clinic in Paris 10.',
    meetTeam: 'Meet the team',
    imageAlt: 'The Synapse training area: a patient guided by his physio, another patient training',
  },

  clinic: {
    title: ['A welcoming place, made for ', { text: 'care and listening.', tone: 'secondary' }] as TitleParts,
    gallery: {
      reception: 'Reception: burgundy ceramic desk, green bench and wood',
      room: 'A private treatment room with wood panelling and treatment table',
      entrance: 'The entrance, looking towards the training area',
      training: 'The training area, with rack, rower and sprint track',
    },
    featuresLeft: [
      'An air-conditioned space bathed in natural light, under a glass roof',
      '3 private treatment rooms',
      'Waiting room and changing rooms with showers',
    ],
    featuresRight: [
      '<strong>40 m² training area</strong>: squat rack, treadmill, bike, rower, SkiErg, dumbbells, kettlebells, leg press, Olympic barbells, yoga mats',
      '<strong>Our tools</strong>: manual therapy, dry needling, force plate, Pack Voltra, shockwave therapy, electrostimulation &amp; biofeedback',
    ],
  },

  team: {
    title: ['Meet ', { text: 'your physios.', tone: 'primary' }] as TitleParts,
    role: 'State-registered physiotherapist (France)',
    portraitPlaceholder: 'Portrait',
  },

  expertises: {
    title: ['Our areas of expertise'] as TitleParts,
    trackLabel: 'Areas of expertise, horizontal scroll',
    prev: 'Previous area',
    next: 'Next area',
    items: [
      {
        title: 'Musculoskeletal conditions',
        text: 'Shoulder, spine, upper limbs, hip, knee, ankle, lower limbs.',
        alt: 'Gloved hands of a physiotherapist mobilising a patient’s ankle and foot',
      },
      {
        title: 'Orthopaedics and trauma',
        text: 'Fractures, sprains, post-operative rehab.',
        alt: 'A physiotherapist’s hands mobilising a patient’s bent knee',
      },
      {
        title: 'Sports injuries and prevention',
        text: 'IT band syndrome, shin splints, tendinopathy, sprains, ACL, muscle injuries.',
        alt: 'A physiotherapist’s hands massaging an athlete’s calf',
      },
      {
        title: 'Rheumatology',
        text: 'Osteoarthritis, back and neck pain, chronic pain.',
        alt: 'A physiotherapist’s hands treating a patient’s neck',
      },
      {
        title: 'Women’s pelvic health',
        text: 'Urinary incontinence, pelvic organ prolapse, pre- and postnatal pelvic floor and abdominal rehab.',
        alt: '',
      },
      {
        title: 'Return to sport',
        text: 'Support to get back to sport or take your practice further.',
        alt: '',
      },
    ],
  },

  vision: {
    title: ['Understand, feel, move.'] as TitleParts,
    lede: 'Between the boom in working out and increasingly sedentary lifestyles, the body is often put to the test without its needs, limits and signals being well understood. This lack of understanding can lead to injuries and pain, and make them last.',
    highlight: 'Physiotherapy helps you understand your pain, reconnect with your body and learn how to use it better.',
    more: 'Learn more',
    less: 'Show less',
    details: [
      'At Synapse, our approach is built on understanding pain and reclaiming your body. <strong>The one-hour assessment</strong> identifies the anatomical structures involved, explains how the injury happened and links it to your symptoms. Together, we define the treatment levers and your short-, medium- and long-term rehab goals.',
      '<strong>Follow-up sessions</strong> are 30-minute one-to-one sessions with a physiotherapist, working on the deficits, limitations and compensations identified in the initial assessment through targeted, progressive exercises.',
      'Pedagogy and body awareness are at the heart of every session: understanding your injury, learning to listen to and read your body’s signals, and adapting your activities to your capacities. The aim is to make every patient an active player in their rehab, with the keys to better prevent pain and injury, in sport and in daily life.',
    ],
    closing:
      'In neurology, a synapse is where information passes from one neuron to the next. At Synapse, we build that link <strong>between your body and your brain</strong>, <strong>between you and your physio</strong> and <strong>between us and your doctors</strong>.',
  },

  pricing: {
    title: ['Our ', { text: 'prices', tone: 'secondary' }] as TitleParts,
    caption: 'Session prices',
    items: {
      assessment: 'Assessment · first session',
      followUp: 'Follow-up session',
      coachingLong: 'Sports coaching',
      coachingShort: 'Sports coaching',
      dryNeedling: 'Dry needling',
    },
  },

  practical: {
    title: ['In the heart ', { text: 'of the 10th.', tone: 'primary' }] as TitleParts,
    contactTitle: 'Address & contact',
    hoursTitle: 'Opening hours',
    hoursLines: ['Monday – Friday · [8am – 8pm]', 'Saturday · [9am – 1pm]'],
  },

  map: {
    label:
      'Map of the neighbourhood around the clinic, 24 boulevard de Magenta: République and Jacques Bonsergent metro stations, bakeries, gyms and radiology centre',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    recenter: 'Recenter on the clinic',
    openInMaps: 'Open in Google Maps',
    clinicPin: 'Synapse, 24 boulevard de Magenta',
    shortAddress: '24 bd de Magenta · 75010',
    legend: {
      metro: 'Metro',
      cafe: 'Cafés & bakeries',
      restaurant: 'Restaurants',
      sport: 'Sport & wellness',
      health: 'Health',
    },
  },

  faq: {
    title: ['Your questions, ', { text: 'our answers.', tone: 'secondary' }] as TitleParts,
    items: [
      {
        q: 'What happens at the first session?',
        a: 'Please bring your prescription, your carte Vitale and comfortable clothes you can move in. Your physiotherapist opens your file, then carries out a one-hour assessment. Together, you set short-, medium- and long-term goals tailored to your needs, and you leave with your first exercises so you can start rehab right away.',
      },
      {
        q: 'Do I need a prescription?',
        a: 'For physiotherapy sessions to be covered and reimbursed by French national health insurance, you need a prescription. For an urgent session, you can come without one. Sports coaching and dry needling sessions do not require a prescription.',
      },
      {
        q: 'How much does a session cost?',
        a: '1-hour assessment: €96. 30-minute follow-up: €48. All prices are listed in the “Our prices” section.',
      },
      {
        q: 'What should I bring?',
        a: 'Your prescription, your carte Vitale, any scans or reports (X-ray, MRI, surgical report) and clothes you can move comfortably in.',
      },
      {
        q: 'Do you work with my doctor?',
        a: 'Yes. We liaise with prescribing doctors, surgeons and other health professionals whenever it helps your care.',
      },
      {
        q: 'How do I cancel an appointment?',
        a: 'Directly on Doctolib, at least [48] hours in advance, so another patient can use the slot.',
      },
    ],
  },

  cta: {
    title: ['Ready to reconnect ', { text: 'with your body?', tone: 'primary' }] as TitleParts,
  },

  footer: {
    tagline: 'Physiotherapy clinic in Paris 10.',
    locationTitle: 'Synapse Paris 10',
    contactTitle: 'Contact',
    sitemapTitle: 'The clinic',
    sitemapLabel: 'Site map',
    copyright: '© 2026 Synapse Physiotherapy',
    rpps: 'RPPS · L. May [XXXXXXXXXXX] · L. Neyret [XXXXXXXXXXX]',
    order: 'French Order of Physiotherapists',
    legal: 'Legal notice',
    privacy: 'Privacy',
  },

  booking: {
    title: 'Book an appointment',
    intro: 'Choose your physio. Booking is done on Doctolib.',
  },

  physio: {
    rppsSuffix: ' · RPPS [XXXXXXXXXXX]',
    degreeTitle: 'Degree',
    trainingsTitle: 'Formations',
    lena: {
      title: 'State-registered physiotherapist (France)',
      portraitAlt: 'Portrait of Lena May, physiotherapist',
      intro: [
        'A partner physiotherapist at Synapse, I specialise in sports injuries, musculoskeletal and orthopaedic conditions, and women’s pelvic health.',
        'I also support women through pre-, peri- and postnatal rehabilitation, with care tailored to each woman’s needs.',
        'Bilingual in French and English, I offer care designed for English speakers and expats in Paris. Assessments and rehab sessions can be held entirely in English, so you can share how you feel, what you need and what you aim for without a language barrier, and approach your rehab with confidence.',
      ],
      subheading: 'Movement at the heart of my practice',
      body: [
        'Passionate about movement and body awareness, I have practised kitesurfing, strength training, running, yoga and dance for many years. These disciplines feed my understanding of the body, its capacities, its needs and the way it adapts.',
        'I believe that understanding your body better helps you take better care of it, so listening, pedagogy and movement awareness are central to my practice.',
        'My goal is to help you better understand your body, so you regain confidence in your abilities, become more independent and move with ease in daily life and sport.',
      ],
      experienceTitle: 'Experience',
      degree: [{ date: '2021', text: 'French State Diploma in physiotherapy, École Boris Dolto (EFOM), Paris' }],
      experience: [{ date: '2021 – 2026', text: 'Physiotherapist in private practice, Paris' }],
      trainings: [
        { date: '2026', text: 'Women’s pelvic floor health, fundamentals · IPPP' },
        { date: '2025', text: 'Manual therapy and trigger-point dry needling · Kpten-Formation' },
        { date: '2024', text: 'Mastering strength training · Agence EBP' },
        { date: '2023', text: 'The shoulder: using scientific evidence to improve outcomes · Agence EBP' },
        { date: '2022', text: 'Bronchiolitis: paediatric respiratory physiotherapy · ARB Formation' },
      ],
      bookLabel: 'Book with Lena',
    } satisfies PhysioCopy,
    louis: {
      title: 'State-registered physiotherapist (France)',
      portraitAlt: 'Portrait of Louis Neyret, physiotherapist',
      intro: [
        'A partner physiotherapist at Synapse, I am passionate about sport, movement and understanding the human body.',
        'My work with the Saint-Germain Hockey Club and Paris Football Club has given me solid experience in treating sports injuries, prevention and supporting the return to sport.',
      ],
      subheading: 'Sport at the heart of my practice',
      body: [
        'Trained in sports physiotherapy, dry needling and neuromotor reprogramming, I have a particular interest in running and running-related conditions. I favour an active, personalised approach combining manual therapy, therapeutic exercise and strength training.',
        'I believe effective rehab starts with listening to and understanding each person, so I pay close attention to your goals, whether that is getting through daily life without pain, returning to your sport or improving your performance.',
        'My goal is simple: to guide you towards a lasting recovery and give you the keys to move freely and with confidence.',
      ],
      experienceTitle: 'Experience',
      degree: [{ date: '2020', text: 'French State Diploma in physiotherapy, IFMK, Université Claude Bernard Lyon 1' }],
      experience: [
        { date: 'Since 2025', text: 'Sports physiotherapist, Paris FC' },
        { date: '2021 – 2025', text: 'First-team physiotherapist, Saint Germain Hockey Club (top-division field hockey)' },
        { date: 'Since 2021', text: 'Sports physiotherapist in private practice, Paris 9' },
        { date: '2025', text: 'Physiotherapist at the Paris-Versailles race' },
        { date: '2020 – 2021', text: 'Physiotherapist, Pôle santé du Valvert (Écully)' },
      ],
      trainings: [
        { date: '2024', text: 'Dry needling · KPTEN' },
        { date: '2023', text: 'Neuromotor reprogramming for athletes (Pro-FTS) · KLYF' },
        { date: '2021', text: 'Sports physiotherapy “Kiné Pro Sport” · KLYF' },
      ],
      bookLabel: 'Book with Louis',
    } satisfies PhysioCopy,
  },
};

export type Dictionary = typeof en;
