export const theoriesData = {
  wave: {
    id: 'wave',
    type: 'wave',
    title: 'Wave',
    children: [
      {
        id: 'grimaldi',
        name: 'Francesco Maria Grimaldi',
        year: 1665,
        title: 'Italian physicist',
        description:
          'Discovered the phenomenon of light diffraction, noting its wave-like behavior.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/ca/Francesco_Maria_Grimaldi.jpg',
      },
      {
        id: 'fresnel',
        name: 'Augustin-Jean Fresnel',
        year: 1815,
        title: 'French scientist',
        description:
          'Claimed that light waves had an extremely short wavelength and mathematically demonstrated light interference.',
        details: [
          'Devised physical laws for light reflection and refraction.',
          "Hypothesized that space is filled with an 'ether' medium since waves require something to transmit them.",
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/commons/0/02/Augustin_Fresnel.jpg',
      },
      {
        id: 'huygens',
        name: 'Christiaan Huygens',
        year: 1678,
        title: 'Dutch physicist',
        description:
          'Proposed the wave theory of light and introduced the Huygens-Fresnel principle.',
        details: [
          'Every point in a wavefront is the source of spherical wavelets.',
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Christiaan_Huygens-painting.jpeg/440px-Christiaan_Huygens-painting.jpeg',
      },
      {
        id: 'young',
        name: 'Thomas Young',
        year: 1801,
        title: 'English physicist',
        description:
          "Calculated light's wavelength from an interference pattern.",
        note: 'During this period, the particle theory of light fell out of favor.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/9f/Thomas_Young_%28scientist%29.jpg',
      },
      {
        id: 'maxwell',
        name: 'James Clerk Maxwell',
        year: 1864,
        title: 'Scottish physicist',
        description: 'Predicted that light was a type of electromagnetic wave.',
        details: [
          "In 1861, presented Maxwell's equations.",
          'Four equations for electromagnetic theory.',
          'Demonstrated the inextricable relationship between magnetic and electric fields.',
        ],
        equations: [
          '∇·E = ρ/ε₀',
          '∇·B = 0',
          '∇×E = -∂B/∂t',
          '∇×B = μ₀J + μ₀ε₀∂E/∂t',
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/James-Clerk-Maxwell-1831-1879.jpg/440px-James-Clerk-Maxwell-1831-1879.jpg',
      },
    ],
  },
  particle: {
    id: 'particle',
    type: 'particle',
    title: 'Particle',
    children: [
      {
        id: 'newton',
        name: 'Isaac Newton',
        year: 1704,
        title: 'Sir Isaac Newton',
        description:
          'Proposed the particle theory of light after discovering that light possessed frequency-like properties when he split sunlight into its component colors using a prism.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/440px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg',
      },
      {
        id: 'compton',
        name: 'Arthur Compton',
        year: 1923,
        title: 'American physicist',
        nobelPrize: 1927,
        description:
          'Proved that light behaved as both a wave and a particle through the Compton Effect.',
        details: [
          "The Compton Effect occurs when a high-energy photon collides with a target, releasing loosely bound electrons from the atom's outer shell.",
          'The scattering of X-rays from electrons in a carbon target demonstrated this in 1923.',
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/c0/Arthur_Compton_1927.jpg',
      },
      {
        id: 'planck',
        name: 'Max Planck',
        year: 1900,
        title: 'German physicist',
        nobelPrize: 1918,
        description:
          'Discovered that energy is quantized and not continuous, leading to the concept that light is made of quanta (particles).',
        details: ["Famous for his discovery of Planck's constant."],
        equations: ['E = hν'],
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Max_Planck_by_Hugo_Erfurth_1938cr_-_restoration1.jpg/440px-Max_Planck_by_Hugo_Erfurth_1938cr_-_restoration1.jpg',
      },
      {
        id: 'einstein',
        name: 'Albert Einstein',
        year: 1905,
        title: 'German physicist',
        nobelPrize: 1921,
        description:
          'Revived the concept that light exhibits both particle and wave properties.',
        details: [
          'This theory further evolved from electromagnetism into quantum mechanics.',
          'According to Einstein, light consists of particles called photons, and the flow of photons exhibits wave-like behavior.',
          "In Einstein's light quantum theory, the energy of a photon is proportional to its oscillation frequency.",
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1920px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      },
    ],
  },
};

export type TheoryType = 'wave' | 'particle';
