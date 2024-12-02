// src/data/theories.ts
export const theoriesData = {
    wave: {
        id: 'wave',
        type: 'wave',
        title: 'Wave',
        children: [
            {
                id: 'grimaldi',
                name: 'Francesco Mari Grimaldi',
                year: 1665,
                title: 'Italian physicist',
                description: 'Discovered the phenomena of light diffraction and noticing how it resembled wave behaviour.',
                image: '/path/to/grimaldi.jpg'
            },
            {
                id: 'fresnel',
                name: 'Augustin-Jean Fresnel',
                year: 1815,
                title: 'French scientist',
                description: 'Claimed that light waves had an extremely short wavelength and mathematically demonstrated light interference.',
                details: [
                    'Devised physical laws for light reflection and refraction',
                    'Hypothesized that space is filled with an "ether" medium since waves require something to transmit them.'
                ],
                image: '/path/to/fresnel.jpg'
            },
            {
                id: 'huygens',
                name: 'Christian Huygens',
                year: 1678,
                title: 'Dutch physicist',
                description: 'Discovered the wave theory of light and introduced the Huygens-Fresnel principle.',
                details: ['Every point in a wavelength is the source of spherical wavelets.'],
                image: '/path/to/huygens.jpg'
            },
            {
                id: 'young',
                name: 'Thomas Young',
                year: 1817,
                title: 'English physicist',
                description: 'Calculated light\'s wavelength from an interference pattern.',
                note: 'During this point, the particle theory of light fell out of favour.',
                image: '/path/to/young.jpg'
            },
            {
                id: 'maxwell',
                name: 'James Clerk Maxwell',
                year: 1864,
                title: 'Scottish physicist',
                description: 'Predicted that light was a type of electromagnetic wave.',
                details: [
                    'In 1861, presented Maxwell\'s equations',
                    'Four equations for electromagnetic theory',
                    'Demonstrated the inextricable relationship between magnetic and electric fields'
                ],
                equations: [
                    '∇·E = ρ/ε₀',
                    '∇·B = 0',
                    '∇×E = -∂B/∂t',
                    '∇×B = μ₀J + μ₀ε₀∂E/∂t'
                ],
                image: '/path/to/maxwell.jpg'
            }
        ]
    },
    particle: {
        id: 'particle',
        type: 'particle',
        title: 'Particle',
        children: [
            {
                id: 'newton',
                name: 'Isaac Newton',
                year: 1700,
                title: 'Sir Isaac Newton',
                description: 'Proposed the theory after discovering that light possessed frequency like properties when he split sunlight into its component colours using a prism.',
                image: '/path/to/newton.jpg'
            },
            {
                id: 'compton',
                name: 'Arthur Compton',
                year: 1923,
                title: 'American physicist',
                description: 'Proved that light behaved as both a wave and a particle. He scattered protons off electrons to prove this notion.',
                details: [
                    'The Compton Effect occurs when a high-energy photon collides with a target, releasing loosely bonded electrons from the atom\'s outer shell.',
                    'The scattering of x-rays from electrons in a carbon target showed this in 1922.'
                ],
                image: '/path/to/compton.jpg'
            },
            {
                id: 'planck',
                name: 'Max Planck',
                year: 1900,
                title: 'German physicist',
                description: 'Discovered that energy is discrete and not continuous. Therefore, he found out that light is made of quanta (particle like property of light).',
                details: ['Famous for his discovery of the Planck\'s Constant.'],
                equations: ['h = 32πρK"A"c/O g₁'],
                image: '/path/to/planck.jpg'
            },
            {
                id: 'einstein',
                name: 'Albert Einstein',
                year: 1905,
                title: 'German physicist',
                description: 'Revived the concept that light is both a particle and a wave.',
                details: [
                    'The theory further evolved from electromagnetic into quantum mechanics.',
                    'Light, according to Einstein, is a particle or photon, and the flow of photons is a wave.',
                    'According to Einstein\'s light quantum theory, the energy is proportional to its oscillation frequency.'
                ],
                image: '/path/to/einstein.jpg'
            }
        ]
    }
};

export type TheoryType = 'wave' | 'particle';