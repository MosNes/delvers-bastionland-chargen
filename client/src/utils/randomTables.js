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
            1: `Weapons:Take a price guide.`,
            2: `Jewellery:Take a monocle.`,
            3: `Artworks:Take a dusting brush.`,
            4: `Desserts:Take a missing tooth.`,
            5: `Tabletop Games:Take some obscure dice.`,
            6: `Flowers:Take a ball of ribbon.`
        },
        hpTable: {
            1: `Mechanobirther - Heavy shoebox-sized machine. Has a slot where paper instructions can be inserted,
            with a coin slot for a £10 payment. After an hour of clinking it produces a rough approximation of the
            requested item, size permitting, and anything fancy is poorly made.`,
            2: `Maiming Claw - A grappling hook that latches onto living tissue with an unbreakable grip.You know the
            trick for getting it to release.`,
            3: `Fiend Collar - Any being wearing this collar begins to take on a monstrous appearance and loses d6
            MIND each day. At MIND 0 they lose their identity, claim a new identity in your service, but only follow
            instructions that cause harm to others.`,
            4: `Powder Sack - Any powder stored in this small pouch becomes essentially unlimited.Turning the pouch
            inside out empties the current contents, with no unusual effect. Currently contains salt.`,
            5: `Sanctuary Idol - Burning a candle in front of the idol causes it to melt into smoke, billowing out and
            reinforcing all doors, open passageways, and windows into the room. Nothing can enter through these if
            the candle lasts. Has no effect outdoors.`,
            6: `Mammoth Mask - Highly ornate with a prehensile trunk and tusks that can be used as a weapon (d6) at
            a push.`
        }
    },
    {
        title: 'Trench Conscript',
        desc: `You survived a trench battle with little to write home about. Except for that one thing you found in a strange tunnel.`,
        names: 'Kariana, Jops, Galea, Jools',
        debtor: 'Koppler and Klanger High Risk Investments:Whenever you return after a significant length of time there is a 50/50 chance that your remaining debt has halved/doubled.',
        gear: 'Trench gun (d8, BULKY, very short range), shovel, pack of gum (oxtail).',
        careerLabel1: 'WHAT WAS YOUR ROLE IN YOUR UNIT?',
        careerLabel2: "WHAT DID YOU FIND IN THAT TUNNEL?",
        coinTable: {
            1: `Engineer:Take three trench bombs (d8 BLAST) and wire cutters.`,
            2: `Recon:Take paints and portable canvas.`,
            3: `Heavy Section:Take lead vest and helmet (ARMOUR 1).`,
            4: `Chaplain:Take a bottle of military strength gin and a holy donkey symbol.`,
            5: `Breacher:Take a rocket (d10, one-shot).`,
            6: `Officer:Take a whistle and dress uniform.`
        },
        hpTable: {
            1: `Essence Extractor - Extract the consciousness of a pacified or willing being. It can be injected into a
            still-warm corpse. One use.`,
            2: `Duplicator - A shoe-sized box. Put one thing in, get two copies. Both copies are hugely inferior to the
            original, which is destroyed.`,
            3: `Hover Plate - Platter-sized tray that freezes in space if you whistle a specific tune around ten seconds
            long.There's a ten-second second tune to release it. It supports up to one person's weight and can be
            forcibly released with a BODY SAVE.`,
            4: `Bonding Dome - Any being that wears this head-device is bombarded with flashing images and emerges
            spluttering.They emotionally bond with the next being they see and dedicate their life to them until they
            next sleep.`,
            5: `Phase-Mole - A tiny mammal that can phase into any material without disturbing it. It can talk, but is
            extremely shy and only answers a question with one word before phasing into hiding in their master's
            body.`,
            6: `Haunted Egg - A stone egg that can be used as a crude weapon (d6).The last thing killed by the egg
            inhabits it as a ghostly voice, and answers questions to the best of its knowledge. It doesn't have any more
            knowledge than it did in life, but anyone can understand its words.`
        }
    },
    {
        title: 'Debt Squeezer',
        desc: `Someone paid you a pittance to look intimidating in dark alleyways. If needed, you shed some blood, but there's no extra pay.`,
        names: 'Hooper, Keyes, Doric, Pontiac',
        debtor: 'The Cosmica Casino:Together you own a personalised roulette wheel.',
        gear: 'Hammer (d6), scattergun (d6, BLAST, concealable).',
        careerLabel1: 'WHAT DO YOU DO TO UNWIND AFTER A HORRIBLE TASK?',
        careerLabel2: "WHAT'S THE BEST THING YOU'VE STOLEN FROM A DEBTOR?",
        coinTable: {
            1: `Chew: Take a pack of gum (sage).`,
            2: `Play Marbles: Take a bag of competition marbles.`,
            3: `Sing: You have a decent voice.`,
            4: `Do Impressions:You can make a good impersonation of someone after a long conversation with them.`,
            5: `Write your Memoirs: You have a pen-name, and some connections in the printing industry.`,
            6: `Stave off Nightmares.You cannot sleep without a nightlight.`
        },
        hpTable: {
            1: `Soul Siren - A tiny clockwork box lets out a booming drone when a being dies within 10ft.`,
            2: `Bear Jelly - A pot of jelly that reeks of animal musk. Scares off small creatures, but attracts large
            mammals.`,
            3: `Green Soil - Small pot of soil. Any plant that is planted into it grows a whole season's worth in one hour,
            but otherwise grows normally.`,
            4: `Gore Candle - Any injuries that happen in the presence of this candle's light are extra painful, messy, and
            harmful, doubling any BODY loss caused.`,
            5: `Hot Goggles - When switched on, stolen objects that the rightful owner is looking for glow.`,
            6: `Bank Pig - A clay pig with a coin slot. A penny causes an oinking sound. A £1 coin causes it to transform
            into a normal pig for an hour. A £100 note causes it to transform into a vicious boar (7HP, d6 gore) for an
            hour. If it dies in pig form, it never transforms back. Coins deposited are lost forever.`
        }
    },
    {
        title: 'Dead-Shoresman',
        desc: `You died, but found a way back from where you went. Nobody believes you, and everyone you once knew is long gone.`,
        names: 'Peker, Abbie, Serpina, Lars',
        debtor: 'King Haffwun of Shambly Hole:You are all branded as property of this Deep Country King.',
        gear: 'Flintpistol (d8, outdated and hard to repair), broken oar (d6), cold blood.',
        careerLabel1: 'WHAT DO YOU BARELY REMEMBER ABOUT YOUR BACKGROUND?',
        careerLabel2: "WHAT DID YOU BRING BACK FROM THE DEAD PLACE?",
        coinTable: {
            1: `Family Name: A powerful name in Bastion.`,
            2: `Streets of Bastion: You know your way around the entire city perfectly`,
            3: `The Divine Dream: 50% chance to know any language you encounter.`,
            4: `High Society: You were wealthy and schooled in etiquette.`,
            5: `Formerly Blind: You can echo-locate perfectly.`,
            6: `Only Nightmares: You have no need for sleep, and cannot even if you try.`
        },
        hpTable: {
            1: `Amnesia Flask - Anybody doused in the water loses a specific memory as defined by the douser.
            Anybody drinking the water as it falls absorbs the memories. Refills require a Specialist source.`,
            2: `Second-Chance Skull - If you die, your body disintegrates to ash and immediately regenerates from this
            skull in perfect health.`,
            3: `Spare Head - A completely different head that you can switch with your own. Both heads can survive
            just fine off your body, and generally dislike not being the main head. Roll a new MIND score for this head.`,
            4: `Hell Spice - Extremely concentrated powdered hot spice. Even a small dose causes stomach upset and
            mild hallucination.The whole pouch causes a day-long delirious trip.`,
            5: `Ghost Story - If you tell this story to somebody as they fall asleep, their ghostly skeleton leaves their
            body for the night, and may act as they wish in immaterial form. The story only works on a person the
            first time they hear it.`,
            6: `Tiny Phantasm - A floating mass of swirling colours the size of a penny. It follows your every command
            and leaves a multicolour trail across any surface it touches. Cannot physically interact in any other way.`
        }
    },
    {
        title: 'Criminal Bureaucrat',
        desc: `The laws of Bastion are written so every crime has a loophole. People paid you to perform crimes, legally.`,
        names: 'Ranulph, Morrison, Carrock, Nika',
        debtor: 'The Backward Legion: They accept stolen items of modern technology for twice their value against your debt, but destroy them immediately.',
        gear: 'Crowbar (d6), Book of Law.',
        careerLabel1: 'WHAT WAS YOUR SPECIALITY?',
        careerLabel2: "WHAT DID YOUR LAST CLIENT PAY YOU IN PLACE OF MONEY?",
        coinTable: {
            1: `Burglary: Take 3 smokebombs.`,
            2: `Extortion: 50% chance to know a secret about any figure of authority you encounter.`,
            3: `Libel: You have contacts in a printing press that will print any lie you want.`,
            4: `Intimidation: Take a pocket pistol (d6, concealable).`,
            5: `Arson: Take 3 firebombs (d6 DAMAGE each round until extinguished).`,
            6: `Murder: Take poison and a rifle (d8, BULKY).`
        },
        hpTable: {
            1: `Blank Contract - A contract with blank parts. Can be modified into any sort of deal you wish.The first
            party to break the contract is struck by a bolt from above (d12, ignore ARMOUR) and the contract
            explodes into confetti.`,
            2: `Truth Leaf - Smoking this hallucinogenic herb reveals a ridiculous truth and a ridiculous lie. One dose.`,
            3: `Helpful Bug - A metal replica of a beetle that can perform simple tasks.`,
            4: `Trick Coin - Looks like a penny, but has secret functions that you know how to use. First is a weak light.
            Second is a powerful magnet.Third is a bomb (d10, BLAST, destroys the coin).`,
            5: `Echojector - Hears up to ten seconds of sound and repeats it at vastly increased volume on command.`,
            6: `Homunculus Gum - Whoever chews this gum bonds with the substance, which begins to shape into a
            small gummy version of the chewer. It follows orders but has a bad attitude. Adding further gum increases
            its size but decreases its loyalty. If somebody new chews up the homunculus, the bond transfers to them.`
        }
    },
    {
        title: 'Sanctioned Executioner',
        desc: `You've done your time on firing squads. Now you're allowed to do a little freelance work.`,
        names: 'Helmut, Dina, Erich, Dalia',
        debtor: 'The Psycho-Pack: You are all mind-tethered together. If you focus really hard you can project one word per minute to your pack.',
        gear: 'Rifle (d8, BULKY), killing licence (one person per day, non-transferable).',
        careerLabel1: 'HOW DO YOU LIVE WITH YOURSELF?',
        careerLabel2: "WHAT WAS YOUR BONUS FOR GOOD SERVICE?",
        coinTable: {
            1: `Socialising: Take a bottle of gin.`,
            2: `Poetry: Take a book of angst prose.`,
            3: `Reminiscence: Take a locket with a picture of a loved one taken from you.`,
            4: `Numbness: Take an artificial heart in place of your own.`,
            5: `Music: Take a tortured violin.`,
            6: `Philanthropy: Charitable organisations know you as a generous donor.`
        },
        hpTable: {
            1: `Smart Arm - Your rifle is also intelligent, communicating psychically to whoever is holding it. It functions
            as a normal weapon and gives smart advice.
            Once per day it grants +d10 to an attack that particularly pleases it, but it can IMPAIR attacks that displease
            it any time it likes.
            Roll 1d6 to find its personality: 1: Honourable, 2:Ambitious, 3: Bloodthirsty, 4: Curious, 5: Pacifist, 6: Bored.`,
            2: `Rail-Lens - Any missile fired through this lens (breaking it) accelerates to impossible speeds, causing d12
            BLAST DAMAGE and tearing through structures.`,
            3: `Star-Beacon - A heavy tyre-sized metal beacon (requires two people to carry) with a matching pinbadge.
            Pushing the badge teleports the wearer back to the beacon.`,
            4: `Time Tonic - Sends you out of sync with reality for around ten seconds.You can act as normal, but when
            the tonic wears off, time snaps back to the point before you drank and all actions are undone. One use,
            even after snapping back in time.`,
            5: `Stick Eye - A glass eye on a stick that the holder can see through.`,
            6: `Threatening Stave - Has no function, but glows and vibrates in a way that suggests it could be used for
            distributing extreme pain.`
        }
    }, 
    {
        title: 'Fringe Investigator',
        desc: `Everything must be revealed. From petty crime to the secrets of the cosmos.`,
        names: 'Blanche, Leo, Mazarin, Bo',
        debtor: 'White Apricot Cable Cars: You are technically banned from using any other form of public transit.',
        gear: 'Collapsible gun (d6, concealable, requires a SPEED SAVE to unfold under pressure), pack of gum (snail).',
        careerLabel1: `WHAT'S YOUR OBSESSION? (INDULGING IN IT RESTORES YOUR MIND)`,
        careerLabel2: `WHAT'S UNDER YOUR COAT?`,
        coinTable: {
            1: `Fruit Pie: Specify a favourite.`,
            2: `Busting Someone: Especially for petty crime.`,
            3: `Good Deeds: Helping the elderly with their shopping etc.`,
            4: `Interrogation: Irrespective of the suspect's guilt.`,
            5: `Brooding: Ideally on rooftops at night (requires an hour of brooding).`,
            6: `Journaling: Writing all your secret thoughts in a diary.`
        },
        hpTable: {
            1: `Brain Jar - A jar of brine and wires that can sustain the brain of a freshly dead creature, allowing it to
            psychically project its thoughts.The brain must be fed blood or else it dies.`,
            2: `Reconstruction Silk - A handkerchief that repairs any object it is draped over for an hour.The object
            must be small enough to be covered.`,
            3: `Utility Orb - Any tool that could plausibly exist in a mundane pocket-knife has a 50% chance of existing
            in this orb. Keep a track of what tools it does and doesn't have.`,
            4: `Hunger Clamp - A small clamp that can be clipped onto loose skin, causing the victim to have a
            ceaseless hunger, which they'll do anything to sate.They suffer no ill effect from over-eating, but do not
            starve any faster than normal.`,
            5: `Pheromone Pack - One dose each of attraction, rage, and fear pheromones that work on any creature
            of animal intelligence.`,
            6: `Tin Buddy - A can that springs out to a 2ft tall automaton (2HP,ARMOUR 2). It is loud, annoying, and
            doesn't do a good job of whatever you request. Has no real means of fighting. Lasts about an hour before
            needing new proprietary batteries.`
        }
    },
    {
        title: 'Disinherited Socialite',
        desc: `Whatever happened between you and your family, you're off the will. You took what you could.`,
        names: 'Churl, Emile, Anno, Bronwill',
        debtor: 'Troffem Canal Diggers: You have been given a Chaperone Slug to carry around with you, feeding information back to your Debtholders. If the Toad is lost a £1k fee is added onto your Debt.',
        gear: 'Claymore (d8, BULKY), 3 bottles of fancy wine, frilly shirt.',
        careerLabel1: `WHAT DO YOU LEGALLY STILL HAVE FROM THE ESTATE?`,
        careerLabel2: `WHAT DID YOU SNEAK OUT OF THE VAULT? (THE FAMILY WANT IT BACK)`,
        coinTable: {
            1: `Loyal Butler: Has nowhere else to go (3HP).`,
            2: `Hunting Creature: Past their prime (4HP, d6 bite).`,
            3: `Raptoryx: Your mother's favourite (2HP, d6 claws, Flies).`,
            4: `Luxurious Clothes: A trunk-full.`,
            5: `Duelling Pistol: A sibling has the matching counterpart (d8).`,
            6: `Crude Armour: Ancestral plate suit (ARMOUR 1, BULKY).`
        },
        hpTable: {
            1: `Unstoppable Rod - When thrown, nothing stops the movement of this rod, including gravity. Eventually
            flies off into space regardless of its trajectory.`,
            2: `Curse Doll - Anything that affects the doll also affects you, beneficial or harmful.`,
            3: `Plasmic Converter - Drains a corpse of blood, creating a pill that grants single use of one special
            property the being had in life.`,
            4: `Companion Ball - A hollow ball that rolls behind you and never stops trying to follow you. Can pop
            open to store a head-sized object or smaller, protecting it perfectly.`,
            5: `Earth-Angel - A tiny clay figurine that can be smashed to cause an earthquake.Those nearby are thrown
            to the ground and all structures take d12 DAMAGE. One use.`,
            6: `Cosmic Ranker - A grey wand that can be asked to judge between two objects. Criteria must be spoken
            aloud, then the wand pulls towards the preferred object.`
        }
    },
    {
        title: 'Verminator',
        desc: `Every type of animal can be found in some corner of Bastion. When they were unwanted, you went to work.`,
        names: 'Jock, Malair, Rig, Eddey',
        debtor: 'Glassmount Day Spa: You have all recently received their top treatment and so your skin and fur is in excellent condition.',
        gear: 'Gas-gun (d6 BLAST, BULKY, only affects things that breathe), tox-mask (protects from airborne toxins).',
        careerLabel1: `WHAT SPECIALIST GEAR DO YOU HAVE?`,
        careerLabel2: `WHAT'S THE ONE CREATURE YOU COULDN'T KILL? (THEY NOW ACCOMPANY YOU)`,
        coinTable: {
            1: `Collapsible Ladder: Fits into your pocket.`,
            2: `Telescopic Pest-Hook: Comes with a range of attachments.`,
            3: `Sack of Mousetraps: Choose between humane or lethal.`,
            4: `Periscope: Rotates and extends.`,
            5: `Protective Suit: Only effective against small vermin.`,
            6: `Multi-Setting Bird Call: Can attract or repel.`
        },
        hpTable: {
            1: `Devourer - A football-sized bug that curls up in your backpack. Can be woken once per day to eat its
            own size in organic material, no matter how inedible.`,
            2: `Maggot Prince - A tiny maggot with a gold band marking. Flies and maggots vacate the area to make
            room for it, and anything that eats bugs is strongly drawn to try and eat it.`,
            3: `Nightmare Moth - Anyone but you sleeping in the same room as this moth suffers horrible nightmares.
            When they wake, the moth takes on the form of something from the nightmare.`,
            4: `Terrormite - A big termite, pinned down in its box.
            Once released it burrows into the nearest living creature it can find, causing intense pain.Within a minute
            the victim develops a tough outer skin (ARMOUR 1) and can spit acid (d6 ongoing).This lasts for an hour
            until the victim coughs out d6 Terrormite larva and returns to normal.`,
            5: `Snake-Cat - A cloth toy with a snake body and cat head.
            If you're confronted by a hostile snake, it transforms into a cat (4HP, d4 claws), If you're confronted by a
            hostile cat it transforms into a snake (4HP, d6 bite, d6 STR loss on CRITICAL DAMAGE).
            It fights the hostile creature and returns to cloth when it is defeated.`,
            6: `Large and Peaceful Five-Eyed Dog - The only animal you can tolerate (6HP, d6 bite in retaliation only).`
        }
    },
    {
        title: 'Lost Expeditioneer',
        desc: `You've been on a treasure-hunting expedition before. You were the only survivor.`,
        names: 'Ugo, Backara, Lillyhart, Bass',
        debtor: 'The Elephant Reimbursement House: Reclaimed ivory goods pay double their value against your debt.',
        gear: 'Pair of pistols (d6 each).',
        careerLabel1: `WHAT WAS YOUR POSITION ON THE CREW?`,
        careerLabel2: `WHAT DID YOU BRING BACK FROM THE EXPEDITION?`,
        coinTable: {
            1: `Archivist:Take a spyglass and writing set.`,
            2: `Counsellor:Take an aromatherapy kit.`,
            3: `Drake Tender:Take a small trained drake (5HP, d4 claws, Flies).`,
            4: `Metallurgist:Take a bomb (d10 BLAST).`,
            5: `Butcher:Take a cleaver (d6).`,
            6: `Saucier:Take a set of tiny saucepans.`
        },
        hpTable: {
            1: `Preserved Soul - A tiny shrivelled humanoid. Can be thrown into a fire to release a flailing Alien
            apparition (d8 eye-beams, immaterial, lashes out for 1d6 turns before vanishing in a flash of light).`,
            2: `Fetch-Pearl - When thrown into a body of water, this silvery pearl sinks to the bottom and clings to the
            first thing it touches. On a mental command it returns to the surface, dragging up whatever it attached to.`,
            3: `Dire Barnacle - A vicious little mollusc (1HP,ARMOUR 1) that taunts quietly and explodes as a bomb (d12
                BLAST) when it dies.`,
            4: `Savage Vine Berry - If eaten, vines erupt from the mouth (d6 STR loss) and grow into a sprawling mass,
            clinging to whatever surface they can. One use.`,
            5: `Ambrosia Seed - A bag of golden seed that no animal can resist if thrown.`,
            6: `Skeletal Dove - Carefully assembled. Can be crushed to unleash a cloud of confused doves.`
        }
    },
    {
        title: 'Wall-Born',
        desc: `Homes and businesses creep down the edges of the great pit, into the dark. You were both warden and resident.`,
        names: 'Corbel, Dog-Leg, Noggin, Plinth',
        debtor: 'The Augmentarium: You can each choose to have an artificial ear, nose, tongue, or eye.They have a control that can turn down sensitivity, but cannot go higher than normal human level.',
        gear: 'Baton (d6), grappling hook, pack of gum (rust).',
        careerLabel1: `WHAT WAS YOUR JOB ON THE PIT WALL?`,
        careerLabel2: `WHAT DID YOU FIND BEHIND A LOOSE BRICK?`,
        coinTable: {
            1: `Grouter : Take a trowel and bucket of grout.`,
            2: `Gutter Scraper: Take a scraping pole (d6).`,
            3: `Bird Scarer: Take a fake pistol (fires blanks only).`,
            4: `High Militia Guard: Take a fancy hat.`,
            5: `Nightwatch: Take a spot-lamp.`,
            6: `Militia Sergeant: Take a fancy hat with a feather, a loud yell, and a disgraced record.`
        },
        hpTable: {
            1: `Beastmode Formula - A liquid tonic that grants the drinker the properties of a specific animal for one
            minute. Examples are: eyes of a hawk, nose of a dog, strength of a bear. Three doses.`,
            2: `Orphan's Ruin - 6oz of milky drink. 1oz pacifies any unease, 2oz causes a deep sleep, 3oz eternal sleep.`,
            3: `Stem-Stone - Pebble that transforms into whatever non-living material it last touched. Currently the
            leather of your pouch.`,
            4: `Plague Wart - A carefully extracted wart sealed in a jar. Anyone that touches it contracts a disgusting
            plague, losing d6 STR every hour.The victim’s touch immediately spreads the plague.There is no cure that
            you know of.`,
            5: `Jerk Sprite - A statuette of dried meat.Whatever eats this acts like an utter jerk for the next hour, even
            to their most loved ones.`,
            6: `Universal Pin - A hairpin that sticks into any surface, no matter the material. Causes no pain if stuck into
            flesh.`
        }
    },
    {
        title: 'Wall-Born',
        desc: `Homes and businesses creep down the edges of the great pit, into the dark. You were both warden and resident.`,
        names: 'Corbel, Dog-Leg, Noggin, Plinth',
        debtor: 'The Augmentarium: You can each choose to have an artificial ear, nose, tongue, or eye.They have a control that can turn down sensitivity, but cannot go higher than normal human level.',
        gear: 'Baton (d6), grappling hook, pack of gum (rust).',
        careerLabel1: `WHAT WAS YOUR JOB ON THE PIT WALL?`,
        careerLabel2: `WHAT DID YOU FIND BEHIND A LOOSE BRICK?`,
        coinTable: {
            1: `Grouter : Take a trowel and bucket of grout.`,
            2: `Gutter Scraper: Take a scraping pole (d6).`,
            3: `Bird Scarer: Take a fake pistol (fires blanks only).`,
            4: `High Militia Guard: Take a fancy hat.`,
            5: `Nightwatch: Take a spot-lamp.`,
            6: `Militia Sergeant: Take a fancy hat with a feather, a loud yell, and a disgraced record.`
        },
        hpTable: {
            1: `Beastmode Formula - A liquid tonic that grants the drinker the properties of a specific animal for one
            minute. Examples are: eyes of a hawk, nose of a dog, strength of a bear. Three doses.`,
            2: `Orphan's Ruin - 6oz of milky drink. 1oz pacifies any unease, 2oz causes a deep sleep, 3oz eternal sleep.`,
            3: `Stem-Stone - Pebble that transforms into whatever non-living material it last touched. Currently the
            leather of your pouch.`,
            4: `Plague Wart - A carefully extracted wart sealed in a jar. Anyone that touches it contracts a disgusting
            plague, losing d6 STR every hour.The victim’s touch immediately spreads the plague.There is no cure that
            you know of.`,
            5: `Jerk Sprite - A statuette of dried meat.Whatever eats this acts like an utter jerk for the next hour, even
            to their most loved ones.`,
            6: `Universal Pin - A hairpin that sticks into any surface, no matter the material. Causes no pain if stuck into
            flesh.`
        }
    }
]