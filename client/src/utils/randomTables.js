export const speciesTable = [
    {
        name: 'Canid',
        description: 'Dogs, Wolves, Foxes, Jackals, Coyotes, etc.'
    },
    {
        name: 'Felid',
        description: 'Cats, Lions, Tigers, Leopards, etc.'
    },
    {
        name: 'Ursid',
        description: 'Bears, Pandas, etc.'
    },
    {
        name:'Avian',
        description: 'Songbirds, Waterfowl, Raptors, etc'
    },
    {
        name: 'Mousekin',
        description: 'Mice, Rats, small rodents, etc.'
    },
    {
        name: 'Lapine',
        description: 'Rabbits and Hares'
    },
    {
        name: 'Badgerkin',
        description: 'Badgers, Raccoons, Weasels, Ferrets, Otters, etc.'
    },
    {
        name:  'Lizardkin',
        description: 'Lizards, Snakes, Crocodiles, Turtles etc.'
    },
    {
        name: 'Xolotl',
        description: 'Salamanders, Frogs, Toads, etc'
    },
    {
        name: 'Chiroptid',
        description: 'Bats'
    },
    {
        name: 'Pilosan',
        description: 'Sloths, Anteaters, Pangolins, etc.'
    },
    {
        name: 'Loxodon',
        description: 'Elephants, Mammoths'
    },
    {
        name: 'Clovenhoof',
        description: 'Goats, Sheep, Deer, Cows, Pigs, Buffalo, Giraffes etc.'
    },
    {
        name: 'Solidhoof',
        description: 'Horses, Zebras, Rhinos, etc.'
    },
    {
        name: 'Pouchborn',
        description: 'Opossums, Kangaroos, Wombats, Koalas, Platypi, etc.'
    }
];

export const descriptorsTable = [
    'Charming',
    'Clever',
    'Graceful',
    'Intelligent',
    'Learned',
    'Mighty',
    'Mystical',
    'Mechanical',
    'Rugged',
    'Stealthy',
    'Strong-Willed',
    'Swift',
    'Tough',
    'Adaptable',
    'Articulate',
    'Beneficent',
    'Cheerful',
    'Civic',
    'Committed',
    'Confident',
    'Cultured',
    'Curious',
    'Earnest',
    'Empirical',
    'Exacting',
    'Forward Thinking',
    'Gregarious',
    'Heroic',
    'Imaginative',
    'Industrious',
    'Intimidating',
    'Intuitive',
    'Irrepressible',
    'Lawful',
    'Loyal',
    'Meddlesome',
    'Nurturing',
    'Obsessive',
    'Optimistic',
    'Organized',
    'Passionate',
    'Preserving',
    'Prepared',
    'Protective',
    'Relentless',
    'Risk Taking',
    'Serene',
    'Vicious',
    'Clumsy',
    'Cowardly',
    'Cruel',
    'Dishonorable',
    'Doomed',
    'Driven',
    'Empathetic',
    'Exiled',
    'Foolish',
    'Guarded',
    'Hardy',
    'Hideous',
    'Honorable',
    'Impulsive',
    'Inquisitive',
    'Mad',
    'Naive',
    'Noble',
    'Perceptive',
    'Resilient',
    'Tongue-Tied',
    'Vengeful',
    'Wealthy',
    'Weird'
];

export const careerTable = [
    {
        title: 'Gutter Minder',
        desc: "You're the bottom of the barrel. Bastion's crust.",
        names: 'Hopkin, Cork, Derrow, Jorgun',
        debtor: 'Associated Reanimators: You all died and were re-animated.You are fully functional, but carry a chemical odour.',
        gear: 'Stick-hook (d6, BULKY), rags.',
        careerLabel1: 'What Happened to you?',
        careerLabel2: 'What are you hiding under your rags?',
        coinTable: {
            1: 'You believed yourself to be some sort of Messiah.You are not.',
            2: "Invertebrate given sentience in a lab experiment.You can still speak with bugs and loosely understand other invertebrates.",
            3: 'You secretly have a wealthy family, and this lifestyle is your way of getting their attention.',
            4: 'You survived a street urchin upbringing, so you know everyone else in the gutter.',
            5: 'Former High Society Member, only survivor after a mob uprising.',
            6: 'Disgraced Professor of Oddity, expelled for controversial theories.'
        },
        hpTable: {
            1: `Wish Tonic - Three measures of liquor that each grant a wish.The wish only lasts as long as the bracing kick of the liquor (d6 turns).`,
            2: `Dehydrated Beasts - Three rubbery things resembling toy animals. If thrown into water, it expands to a Soggy Monstrosity (15HP, d10 Trample).When killed or there's nothing left to kill, the creature collapses into inert powder.`,
            3: `Berserker Gland - When you take ABILITY LOSS or suffer serious pain you fly into a rage.Your next melee attack is +d10 but you cannot make ranged attacks. Once the attack is out of your system you return to normal.`,
            4: `Parallel Shifter - A metal tin big enough to fit a pistol inside. If an object is placed inside and shaken, the object is replaced with a parallel version of itself from another reality. Roll d6. 1-2: Only ash remains. 3-4:The change is mainly cosmetic. 5-6:The new version is better than the old. Each item can only be shifted once.`,
            5: `Slaughter Brand - A three-pointed mark on your hand.When you kill a worthy opponent, one point turns darker. When all three points turn dark, your arm grows into an unnaturally strong, chitinous claw (d10 DAMAGE) for the next hour.When your arm returns, the brand resets.`,
            6: `Caged Biter - A bug-monkey creature (6HP, d6 bite) in a cage. Fights its designated target to the death, ignoring any other commands. If it wins, it eats some of its opponent before slinking back to its cage. If it loses, it becomes melancholy.`
        }
    },
    {
        title: 'Curisosity Compiler',
        desc: "An entire life spent looking at dusty things and squinting at books. It's time to get out there for yourself.",
        names: 'Coop, Hawk, Trebic, Salvation',
        debtor: 'The Loot Office: Until you pay off the debt you have a Loot Bounty on your head, meaning you can be stolen from without any illegality.',
        gear: 'Antique pistol (d6, permanently breaks on a roll of 6), magnifying glass, tweed jacket.',
        careerLabel1: 'WHAT DO YOU KNOW EVERYTHING ABOUT?',
        careerLabel2: "WHAT'S YOUR PRIZED ODDITY?",
        coinTable: {
            1: 'You believed yourself to be some sort of Messiah.You are not.',
            2: "Invertebrate given sentience in a lab experiment.You can still speak with bugs and loosely understand other invertebrates.",
            3: 'You secretly have a wealthy family, and this lifestyle is your way of getting their attention.',
            4: 'You survived a street urchin upbringing, so you know everyone else in the gutter.',
            5: 'Former High Society Member, only survivor after a mob uprising.',
            6: 'Disgraced Professor of Oddity, expelled for controversial theories.'
        },
        hpTable: {
            1: `Wish Tonic - Three measures of liquor that each grant a wish.The wish only lasts as long as the bracing kick of the liquor (d6 turns).`,
            2: `Dehydrated Beasts - Three rubbery things resembling toy animals. If thrown into water, it expands to a Soggy Monstrosity (15HP, d10 Trample).When killed or there's nothing left to kill, the creature collapses into inert powder.`,
            3: `Berserker Gland - When you take ABILITY LOSS or suffer serious pain you fly into a rage.Your next melee attack is +d10 but you cannot make ranged attacks. Once the attack is out of your system you return to normal.`,
            4: `Parallel Shifter - A metal tin big enough to fit a pistol inside. If an object is placed inside and shaken, the object is replaced with a parallel version of itself from another reality. Roll d6. 1-2: Only ash remains. 3-4:The change is mainly cosmetic. 5-6:The new version is better than the old. Each item can only be shifted once.`,
            5: `Slaughter Brand - A three-pointed mark on your hand.When you kill a worthy opponent, one point turns darker. When all three points turn dark, your arm grows into an unnaturally strong, chitinous claw (d10 DAMAGE) for the next hour.When your arm returns, the brand resets.`,
            6: `Caged Biter - A bug-monkey creature (6HP, d6 bite) in a cage. Fights its designated target to the death, ignoring any other commands. If it wins, it eats some of its opponent before slinking back to its cage. If it loses, it becomes melancholy.`
        }
    }
]