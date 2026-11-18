import type { Dictionary } from './en';

/** French copy. Typed against the English dictionary, so a missing key fails the build. */
export const fr: Dictionary = {
  meta: {
    title: 'Synapse | Cabinet de kinésithérapie à Paris 10, République',
    description:
      'Cabinet de kiné à Paris 10, près de République. Blessures du sportif, orthopédie, pelvi-périnéologie. Bilan d’1 h, séances en anglais. RDV sur Doctolib.',
    ogImageAlt: 'Le plateau technique de Synapse à Paris 10 : un kinésithérapeute accompagne des patients à l’entraînement',
    ogLocale: 'fr_FR',
  },

  common: {
    book: 'Prendre RDV',
    bookLong: 'Prendre rendez-vous',
    seeMore: 'Voir plus',
    close: 'Fermer',
    officialSite: 'site officiel',
    homeLabel: 'Synapse — accueil',
    chooseLanguage: 'Choisir la langue',
    menu: 'Menu',
  },

  nav: {
    label: 'Navigation principale',
    items: {
      cabinet: 'Cabinet',
      equipe: 'Équipe',
      expertises: 'Expertises',
      vision: 'Vision',
      infos: 'Infos pratiques',
      faq: 'FAQ',
    },
  },

  info: {
    addressLabel: 'Adresse',
    metroLabel: 'Métro',
    hoursLabel: 'Horaires',
    hoursShort: 'Lun – ven [8h – 20h] · Sam [9h – 13h]',
    sessions: 'Bilan d’1 h · Séance de suivi de 30 min',
    phone: '[Téléphone du cabinet]',
    email: '[E-mail du cabinet]',
  },

  hero: {
    title: [
      { text: 'Comprendre,', tone: 'primary' },
      ' ',
      { text: 'ressentir,', tone: 'secondary' },
      ' bouger.',
    ],
    tagline: 'Cabinet de kinésithérapie à Paris 10.',
    meetTeam: 'Rencontrer l’équipe',
    imageAlt: 'Le plateau technique du cabinet Synapse : un patient guidé par son kiné, une patiente à l’entraînement',
  },

  clinic: {
    title: ['Un lieu accueillant, propice ', { text: 'au soin et à l’écoute.', tone: 'secondary' }],
    gallery: {
      reception: 'L’accueil du cabinet : comptoir en céramique bordeaux, banc vert et bois',
      room: 'Une salle de traitement individuelle, boiseries et table de soin',
      entrance: 'L’entrée du cabinet, vue vers le plateau technique',
      training: 'Le plateau technique, avec rack, rameur et piste de sprint',
    },
    featuresLeft: [
      'Un espace climatisé baigné de lumière naturelle, sous une verrière',
      '3 salles de traitement individuelles',
      'Salle d’attente et vestiaires avec douches',
    ],
    featuresRight: [
      '<strong>40 m² de plateau technique</strong> : rack à squats, tapis de course, vélo, rameur, SkiErg, haltères, kettlebells, presse, barres d’haltérophilie, tapis de yoga',
      '<strong>Nos outils</strong> : thérapie manuelle, dry needling, plateforme de force, Pack Voltra, ondes de choc, électrostimulation &amp; biofeedback',
    ],
  },

  lightbox: {
    label: 'Visionneuse d’images',
    open: 'Agrandir',
    prev: 'Image précédente',
    next: 'Image suivante',
  },

  team: {
    title: ['Rencontrez ', { text: 'vos kinés.', tone: 'primary' }],
    role: 'Masseur-kinésithérapeute D.E.',
    portraitPlaceholder: 'Portrait',
  },

  expertises: {
    title: ['Nos domaines d’expertise'],
    trackLabel: 'Domaines d’expertise, défilement horizontal',
    prev: 'Domaine précédent',
    next: 'Domaine suivant',
    items: [
      {
        title: 'Pathologies musculo-squelettiques',
        text: 'Épaule, rachis, membres supérieurs, hanche, genou, cheville, membres inférieurs.',
        alt: 'Mains gantées d’un kinésithérapeute mobilisant la cheville et le pied d’un patient',
      },
      {
        title: 'Orthopédie et traumatologie',
        text: 'Fractures, entorses, post-opératoire.',
        alt: 'Mains d’un kinésithérapeute mobilisant le genou fléchi d’un patient',
      },
      {
        title: 'Prévention et blessures du sportif',
        text: 'Syndrome de l’essuie-glace, périostite, tendinopathie, entorse, LCA, lésions musculaires.',
        alt: 'Mains d’un kinésithérapeute massant le mollet d’un sportif',
      },
      {
        title: 'Rhumatologie',
        text: 'Arthrose, rachialgies, douleurs chroniques.',
        alt: 'Mains d’un kinésithérapeute traitant la nuque d’un patient',
      },
      {
        title: 'Pelvi-périnéologie féminine',
        text: 'Incontinence urinaire, troubles de la statique pelvienne, rééducation périnéale et abdominale pré et post-partum.',
        alt: '',
      },
      {
        title: 'Réathlétisation',
        text: 'Accompagnement vers la reprise du sport ou le perfectionnement de la pratique.',
        alt: '',
      },
    ],
  },

  vision: {
    title: ['Comprendre, ressentir, bouger.'],
    lede: 'Entre la pratique sportive en plein essor et des modes de vie de plus en plus sédentaires, le corps est parfois mis à l’épreuve sans que ses besoins, ses limites et ses signaux soient bien compris. Ce manque de compréhension peut favoriser les blessures, les douleurs et leur persistance.',
    highlight: 'La kinésithérapie permet de comprendre sa douleur, de se reconnecter à son corps et d’apprendre à mieux le solliciter.',
    more: 'En savoir plus',
    less: 'Réduire',
    details: [
      'Chez Synapse, notre approche repose sur la compréhension de la douleur et la réappropriation du corps. <strong>Le bilan d’une heure</strong> permet d’identifier les structures anatomiques impliquées, d’expliquer les mécanismes lésionnels et de faire le lien entre la blessure et vos symptômes. Nous définissons ensemble les leviers thérapeutiques et les objectifs de rééducation à court, moyen et long terme.',
      '<strong>Les séances de suivi</strong> se déroulent en tête-à-tête avec un kinésithérapeute pendant 30 min, afin de travailler sur les déficits, limitations et compensations identifiés lors du bilan initial, grâce à des exercices ciblés et évolutifs.',
      'Pédagogie et conscience corporelle sont au cœur de chaque séance : comprendre sa blessure, apprendre à écouter et interpréter les signaux de son corps et adapter ses activités à ses capacités. L’enjeu est de rendre chaque patient acteur de sa rééducation et de lui donner les clés pour mieux prévenir les douleurs et les blessures, dans le sport comme au quotidien.',
    ],
    closing:
      'En neurologie, une synapse est le point où l’information passe d’un neurone à l’autre. Chez Synapse, nous créons ce lien <strong>entre votre corps et votre cerveau</strong>, <strong>entre vous et votre kiné</strong> et <strong>entre nous et vos médecins</strong>.',
  },

  pricing: {
    title: ['Nos ', { text: 'tarifs', tone: 'secondary' }],
    caption: 'Tarifs des séances',
    items: {
      assessment: 'Bilan · première séance',
      followUp: 'Séance de suivi',
      coachingLong: 'Coaching sportif',
      coachingShort: 'Coaching sportif',
      dryNeedling: 'Dry needling',
    },
  },

  practical: {
    title: ['Au cœur ', { text: 'du 10e.', tone: 'primary' }],
    contactTitle: 'Adresse & contact',
    hoursTitle: 'Horaires',
    hoursLines: ['Lundi – vendredi · [8h – 20h]', 'Samedi · [9h – 13h]'],
  },

  map: {
    title: 'Plan : 24 boulevard de Magenta, 75010 Paris',
    openInMaps: 'Ouvrir dans Google Maps',
  },

  faq: {
    title: ['Vos questions, ', { text: 'nos réponses.', tone: 'secondary' }],
    items: [
      {
        q: 'Comment se passe la première séance ?',
        a: 'Pensez à apporter votre ordonnance, votre carte Vitale et une tenue confortable pour bouger. Votre kinésithérapeute crée votre dossier, puis réalise un bilan d’une heure. Ensemble, vous fixez des objectifs à court, moyen et long terme, adaptés à vos besoins, et vous repartez avec vos premiers exercices pour commencer la rééducation sans attendre.',
      },
      {
        q: 'Faut-il une ordonnance ?',
        a: 'Pour que les séances de kinésithérapie soient prises en charge et remboursées par la Sécurité sociale, une ordonnance est nécessaire. Pour une séance en urgence, vous pouvez venir sans ordonnance. Pour les séances de coaching sportif ou de dry needling, une ordonnance n’est pas nécessaire.',
      },
      {
        q: 'Combien coûte une séance ?',
        a: 'Bilan d’1 h : 96 €. Séance de suivi de 30 min : 48 €. Tous les tarifs sont détaillés dans la rubrique « Nos tarifs ».',
      },
      {
        q: 'Que dois-je apporter ?',
        a: 'L’ordonnance, votre carte Vitale, vos examens (radio, IRM, compte rendu opératoire) et une tenue dans laquelle vous êtes à l’aise pour bouger.',
      },
      {
        q: 'Travaillez-vous avec mon médecin ?',
        a: 'Oui. Nous échangeons avec les médecins prescripteurs, chirurgiens et autres professionnels de santé quand c’est utile à votre prise en charge.',
      },
      {
        q: 'Comment annuler un rendez-vous ?',
        a: 'Directement sur Doctolib, au moins [48] heures avant, pour que le créneau profite à un autre patient.',
      },
    ],
  },

  cta: {
    title: ['Prêt(e) à vous reconnecter ', { text: 'à votre corps ?', tone: 'primary' }],
  },

  footer: {
    tagline: 'Cabinet de kinésithérapie à Paris 10.',
    locationTitle: 'Synapse Paris 10',
    contactTitle: 'Contact',
    sitemapTitle: 'Le cabinet',
    sitemapLabel: 'Plan du site',
    copyright: '© 2026 Synapse Kinésithérapie',
    rpps: 'RPPS · L. May [XXXXXXXXXXX] · L. Neyret [XXXXXXXXXXX]',
    order: 'Ordre des MK',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
  },

  booking: {
    title: 'Prendre rendez-vous',
    intro: 'Choisissez votre kiné. La réservation se fait sur Doctolib.',
  },

  physio: {
    rppsSuffix: ' · RPPS [XXXXXXXXXXX]',
    degreeTitle: 'Diplôme',
    trainingsTitle: 'Formations',
    lena: {
      title: 'Masseur-kinésithérapeute D.E.',
      portraitAlt: 'Portrait de Lena May, masseur-kinésithérapeute',
      intro: [
        'Kinésithérapeute titulaire au sein du cabinet Synapse, je suis spécialisée dans la prise en charge du sportif, des pathologies musculo-squelettiques et orthopédiques, ainsi qu’en pelvi-périnéologie féminine.',
        'J’accompagne également les femmes dans leur rééducation pré, péri et post-partum, en proposant une prise en charge adaptée aux besoins de chacune.',
        'Bilingue français-anglais, je développe une prise en charge spécifiquement adaptée à la population anglophone et expatriée parisienne. Je vous accueille pour des séances de bilan et de rééducation entièrement en anglais, afin que vous puissiez mieux partager vos ressentis, besoins et objectifs sans barrière linguistique et aborder votre rééducation en toute confiance.',
      ],
      subheading: 'Le mouvement au cœur de ma pratique',
      body: [
        'Passionnée par le mouvement et la conscience corporelle, je pratique depuis de nombreuses années le kitesurf, la musculation, la course à pied, le yoga et la danse. Ces disciplines nourrissent ma compréhension du corps, de ses capacités, de ses besoins et de ses mécanismes d’adaptation.',
        'Convaincue que mieux comprendre son corps permet de mieux en prendre soin, j’accorde une place importante à l’écoute, à la pédagogie et à la perception du mouvement dans ma pratique.',
        'Mon objectif est de vous accompagner vers une meilleure compréhension de votre schéma corporel, afin de vous aider à retrouver confiance en vos capacités, à gagner en autonomie et à évoluer sereinement dans vos activités quotidiennes et sportives.',
      ],
      experienceTitle: 'Expérience',
      degree: [{ date: '2021', text: 'Diplôme d’État de masseur-kinésithérapeute, École Boris Dolto (EFOM), Paris' }],
      experience: [{ date: '2021 – 2026', text: 'Masseur-kinésithérapeute en cabinet libéral, Paris' }],
      trainings: [
        { date: '2026', text: 'Pelvi-périnéologie féminine, Fondamentaux · IPPP' },
        { date: '2025', text: 'Thérapie manuelle et dry needling des points triggers · Kpten-Formation' },
        { date: '2024', text: 'Maîtrise du renforcement musculaire · Agence EBP' },
        { date: '2023', text: 'L’épaule : utiliser les données de la science pour optimiser nos résultats · Agence EBP' },
        { date: '2022', text: 'Traitement de la bronchiolite : kinésithérapie respiratoire pédiatrique · ARB Formation' },
      ],
      bookLabel: 'Prendre RDV avec Lena',
    },
    louis: {
      title: 'Masseur-kinésithérapeute D.E.',
      portraitAlt: 'Portrait de Louis Neyret, masseur-kinésithérapeute',
      intro: [
        'Kinésithérapeute titulaire au sein du cabinet Synapse, je suis passionné par le sport, le mouvement et la compréhension du corps humain.',
        'Mon expérience au sein du Saint-Germain Hockey Club et du Paris Football Club m’a permis de développer une solide expertise dans la prise en charge des blessures sportives, la prévention et l’accompagnement du retour au sport.',
      ],
      subheading: 'Le sport au cœur de ma pratique',
      body: [
        'Formé en kinésithérapie du sport, en dry needling et en reprogrammation neuromotrice, je porte également un intérêt particulier à la course à pied et à la prise en charge des pathologies qui lui sont associées. Je privilégie une approche active et personnalisée, associant thérapie manuelle, exercices thérapeutiques et renforcement musculaire.',
        'Convaincu qu’une rééducation efficace passe avant tout par l’écoute et la compréhension de chacun, j’accorde une importance particulière à vos objectifs, qu’il s’agisse de retrouver une activité quotidienne sans douleur, de reprendre votre sport ou d’améliorer vos performances.',
        'Mon objectif est simple : vous accompagner vers une récupération durable et vous donner les clés pour bouger librement et en confiance.',
      ],
      experienceTitle: 'Expériences',
      degree: [{ date: '2020', text: 'Diplôme d’État de masseur-kinésithérapeute, IFMK de l’Université Claude Bernard Lyon 1' }],
      experience: [
        { date: 'Depuis 2025', text: 'Kinésithérapeute du sport, Paris FC' },
        { date: '2021 – 2025', text: 'Kinésithérapeute de l’équipe première, Saint Germain Hockey Club (1re division de hockey sur gazon)' },
        { date: 'Depuis 2021', text: 'Kinésithérapeute du sport en cabinet libéral, Paris 9' },
        { date: '2025', text: 'Kinésithérapeute sur la course Paris-Versailles' },
        { date: '2020 – 2021', text: 'Masseur-kinésithérapeute, Pôle santé du Valvert (Écully)' },
      ],
      trainings: [
        { date: '2024', text: 'Dry needling · KPTEN' },
        { date: '2023', text: 'Reprogrammation neuromotrice du sportif (Pro-FTS) · KLYF' },
        { date: '2021', text: 'Kinésithérapie du sport « Kiné Pro Sport » · KLYF' },
      ],
      bookLabel: 'Prendre RDV avec Louis',
    },
  },
};
