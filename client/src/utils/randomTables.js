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
        name: 'Avian',
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
        name: 'Lizardkin',
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
        debtholder: 'Associated Reanimators: You all died and were re-animated.You are fully functional, but carry a chemical odour.',
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
        debtholder: 'The Loot Office: Until you pay off the debt you have a Loot Bounty on your head, meaning you can be stolen from without any illegality.',
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
        debtholder: 'Koppler and Klanger High Risk Investments:Whenever you return after a significant length of time there is a 50/50 chance that your remaining debt has halved/doubled.',
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
        debtholder: 'The Cosmica Casino:Together you own a personalised roulette wheel.',
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
        debtholder: 'King Haffwun of Shambly Hole:You are all branded as property of this Deep Country King.',
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
        debtholder: 'The Backward Legion: They accept stolen items of modern technology for twice their value against your debt, but destroy them immediately.',
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
        debtholder: 'The Psycho-Pack: You are all mind-tethered together. If you focus really hard you can project one word per minute to your pack.',
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
        debtholder: 'White Apricot Cable Cars: You are technically banned from using any other form of public transit.',
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
        debtholder: 'Troffem Canal Diggers: You have been given a Chaperone Slug to carry around with you, feeding information back to your Debtholders. If the Toad is lost a £1k fee is added onto your Debt.',
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
        debtholder: 'Glassmount Day Spa: You have all recently received their top treatment and so your skin and fur is in excellent condition.',
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
        debtholder: 'The Elephant Reimbursement House: Reclaimed ivory goods pay double their value against your debt.',
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
        debtholder: 'The Augmentarium: You can each choose to have an artificial ear, nose, tongue, or eye.They have a control that can turn down sensitivity, but cannot go higher than normal human level.',
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
            plague, losing d6 STR every hour.The victim's touch immediately spreads the plague.There is no cure that
            you know of.`,
            5: `Jerk Sprite - A statuette of dried meat.Whatever eats this acts like an utter jerk for the next hour, even
            to their most loved ones.`,
            6: `Universal Pin - A hairpin that sticks into any surface, no matter the material. Causes no pain if stuck into
            flesh.`
        }
    },
    {
        title: 'Professional Gambler',
        desc: `You know how to play well and cheat even better.`,
        names: 'Bushka, Bagger, Virgo, Lemon',
        debtholder: `Rod & Pearl Sanctioned Looters: You can request a blueprint map of any building in Bastion, but it's likely to be outdated.`,
        gear: 'Slug-gun (d6, very short range), pack of gum (cedar).',
        careerLabel1: `WHAT'S YOUR GAME?`,
        careerLabel2: `WHAT DID YOU WIN? (THE OTHER PERSON STILL ISN'T HAPPY ABOUT THIS)`,
        coinTable: {
            1: `Street Snooker: Take a cue (d6) and waistcoat`,
            2: `One-Card Bluff: Take a pocket full of tiny mirrors that stick to any surface.`,
            3: `Gutter Dice:Take two pairs of dice: one rigged, one honest.`,
            4: `Conkers: Take competition conker-string and you know where all the best trees are.`,
            5: `Shoe-Throwing: You can throw shoe-like things really far with perfect accuracy.`,
            6: `Bird Darts: Take a set of darts (d4, +d8 against small flying things).`
        },
        hpTable: {
            1: `Master Monocle - Can move any object through telekinesis, but more than a coin's weight requires a
            CHA SAVE, or else the monocle shatters.`,
            2: `Ego-Mirror - A pocket mirror that reflects the most offensive version of whoever is looking in.`,
            3: `Anti-Matter Key - When placed in a keyhole, utterly annihilates the door and itself`,
            4: `Tiny Shield Generator - A rat-sized collar that creates a force-field (ARMOUR 3) around the tiny
            wearer.`,
            5: `Gamma Tube - If broken, fires a green beam that causes d6 STR gain.The target grows 50% in size, and
            their physical attacks receive +d10. If their STR would exceed 18 they can only act in rage. Any effects
            wear off when combat dies down. One use.`,
            6: `Terror Salts - Awakens any creature from sleep or unconsciousness, but they flail and scream in terror
            for a few seconds first.They have no memory of this afterwards.`
        }
    },
    {
        title: 'Integrated Alien',
        desc: `You came to Bastion a long time ago, almost passing for one of the Folk. Under a foreign star, reached by sea or Underground.`,
        names: 'Awax, Urrelin, Grese, Kraub',
        debtholder: `The Queuing Office: When you go back to pay your debt, the queue takes d4 x d4 hours. Every four hours, add
        d4 hours.There is a drinks trolley available at all times.`,
        gear: 'Weird gun, steel rope, vague accent',
        careerLabel1: `WHAT'S YOUR WEIRD GUN?`,
        careerLabel2: `WHAT'S YOUR BARELY-REMEMBERED HOME?`,
        coinTable: {
            1: `Fires Screaming Disks (d8, loud, BULKY).`,
            2: `Fires Maggot-Bullets (d8 against organic tissue only, BULKY).`,
            3: `Fires egg-like Explosive Pellets (d6 BLAST, BULKY).`,
            4: `Fires Purple Light (d6, ignore ARMOUR, BULKY).`,
            5: `FiresVibro-Wave (d8, no pain, but explosion on death, BULKY).`,
            6: `Fires Black Spike (d10, spike must be retrieved to fire again, BULKY).`
        },
        hpTable: {
            1: `Sunk - The Abyssal City. You have gills and can see in the dark.`,
            2: `Parasitica - The Slave Hive. You can sense any insect nearby and hate them.`,
            3: `Dar-Rag - The Crystal Mountains. Climb natural unworked stone as a spider.`,
            4: `Incineration - The Burning Hole. Fire does not harm you.`,
            5: `Fester - The Plague Fort. Leech disease out of others with a touch, infecting yourself with a minor version of that ailment.`,
            6: `Nebula - The Light of the Void. Glow in multicolour at will.`
        }
    },
    {
        title: 'Underwhaler',
        desc: `The biggest catches are deep in water and in ground. One catch makes a fortune for the captain, but you got a pittance.`,
        names: 'Scrimshaw, Dork, Langus, Goose',
        debtholder: `Doug &Wale Exhumauctions: Your clothes are slightly fancier than you'd expect, but all have the faint stench of death.`,
        gear: 'Speargun (d8, BULKY, spear must be retrieved), pack of gum (humpback whale).',
        careerLabel1: `HOW DID YOU COPE IN THE DARKNESS?`,
        careerLabel2: `WHAT UNDERWHALE PRODUCT DID YOU MANAGE TO POCKET?`,
        coinTable: {
            1: `Carrot Diet: You can see perfectly in the dark.`,
            2: `You Didn't: Take a dazzling but explosive lamp.`,
            3: `Music: You can whistle excellently, it's comforting`,
            4: `Lots of Smoking: Take a pack of cigars.`,
            5: `Lots of Alcohol: Take a bottle of naval gin.`,
            6: `Being Extremely Prepared: Take a whale-bomb (d8 BLAST, +d12 underwater).`
        },
        hpTable: {
            1: `Stinkincense - A pot of wax with a wick.When burned, sewage slowly drips over from the top of the jar.
            If left for an hour it burns out, but produces enough sewage to fill a large room.`,
            2: `Animation Oil -When rubbed onto an object, it springs to life for the next hour as your loyal
            servant. One dose.`,
            3: `Evacuation Syrup - Removes any ill effects the drinker is suffering from, including anything short of
            death, but flushes the body clean in every sense. One dose.`,
            4: `Genesis Molasses - A tin of deep green treacle that causes lush vegetation to grow within minutes, no
            matter where it is spread. If eaten, the victim loses d6 STR and begins coughing up moss. One use.`,
            5: `CocoonWax - Anything covered in this wax is sealed off in a cocoon. After 24 hours it bursts free as a
            winged, hostile version of its previous self. One use.`,
            6: `Agony-Tendon - Causes instant agony when touched by bare skin (you have gloves). 10m in length when
            uncoiled. Not very effective as an outright weapon (d6).`
        }
    },
    {
        title: 'Travelling Show-Person',
        desc: `Stunts and tricks are your game. You've got a final trick up your sleeve if you start to lose the crowd.`,
        names: 'Case, Olifanta, Archie, Wicket',
        debtholder: `Danger-Worker's Union: For each of you that comes back with a visible injury you reduce the debt by £500.`,
        gear: 'Hidden knife (d6), stage clothes.',
        careerLabel1: `WHAT'S YOUR ACT?`,
        careerLabel2: `WHAT'S YOUR SHOWSTOPPER?`,
        coinTable: {
            1: `Trick-Shooting: Take a long pistol (d6).`,
            2: `Knife-Throwing: Take throwing knives (d6).`,
            3: `Contortionism: You're double-jointed all over.`,
            4: `Gross-Out Body Horror:You do not feel pain.`,
            5: `Hypnotism: Take a pocket-watch. It's all a ruse, you always used stooges`,
            6: `Swallowing and Regurgitation: Eat anything you can plausibly swallow and regurgitate it at will. You're still bound by the physical limits of a normal stomach.`
        },
        hpTable: {
            1: `Space Folder - Create a gate between two flat surfaces that you can see.The gate closes if you pass
            through or break line of sight.`,
            2: `Spider Skin - Climb surfaces as if you were a spider.`,
            3: `Heat Ray - Useless as a conventional weapon, but can be focused on a stationary target to gradually
            increase its heat. One turn of focus warms, two turns burns/melts, and three turns reduces to ashes.`,
            4: `Mirror Engine - A perfect duplicate of you is formed. It acts independently, just like you, but cannot
            interact with anything physically. Lasts until dismissed or a new double is created.`,
            5: `Bone Magnet - Attract or repel a single target that has a skeleton, unless they pass a STR SAVE. No effect
            on cartilage.`,
            6: `Gallon-Syringe - A tiny syringe that can draw up to a bath-sized amount of liquid.`
        }
    },
    {
        title: 'Gang Enforcer',
        desc: `Internal threats can tear a gang apart. Enforcers keep things in order.`,
        names: 'Yurlick, Gannet, Bap, Sol',
        debtholder: `Specialist Individual's Grooming Lounge: You are all groomed in a way that looks fantastic today, but looks tired tomorrow unless you return for an appointment (£100 each).`,
        gear: 'Busted face.',
        careerLabel1: `WHO WERE YOUR GANG, BEFORE YOU ABANDONED THEM?`,
        careerLabel2: `WHAT HELPED YOU INSPIRE FEAR IN YOUR VICTIMS?`,
        coinTable: {
            1: `Junkyard Agenda:Take a dog rifle (d8, BULKY) and goggles.`,
            2: `Solid Nation:Take a sledgehammer (d6, BULKY) and silver face paint.`,
            3: `Gladiators of Toil:Take a trident (d6) and ridiculous headdress`,
            4: `Urban Grace:Take a rapier (d6) and ultra-lacy clothes.`,
            5: `Meat Hive:Take a huge sword (d8, BULKY) and lots of piercings.`,
            6: `Snail Crew:Take a pistol (d6) and pot of grease.`
        },
        hpTable: {
            1: `Mind Probe -The target must pass a CHA SAVE or you learn one of their innermost secrets.`,
            2: `Inferno Device - Cause an open flame you can see to explode (d8 BLAST, further d6 per round in the
                flames).`,
            3: `Ovality Bomb - Explodes in a cloud of beige dust, forming a 2m high egg around the BLAST area. Nothing
            inside can break out, but the outside is easily broken.The egg keeps its contents alive in a happy stasis until
            released. One use.`,
            4: `Piranha Bomb - Spawns a swarm of hungry piranhas (10HP, d6 devour).When no food is left they
            devour each other. Obviously ineffective out of water.`,
            5: `Proxy Chain -When two or more beings are in contact with the chain, any harmful effects that affect
            one of them affect all.`,
            6: `Banishment Stake - Can be used as a regular weapon (d6), but if stabbed into a living heart (CRITICAL
                DAMAGE) the victim is transported deep into the Underground without harm. If they get back to you they'll
                undoubtedly be changed.`
        }
    },
    {
        title: 'Deconstructor',
        desc: `Before the new can arise, the old must come down. Doesn't mean we can't enjoy it.`,
        names: 'Dommie, Kokey Winnie, Smiff',
        debtholder: `Redway Relief Fund:You share a survival pack containing star-water, a moon crystal, and some sacred dirt. They're all useless.`,
        gear: 'Sledgehammer (d6, BULKY), blowtorch.',
        careerLabel1: `WHAT'S YOUR BEST BIT OF SALVAGE?`,
        careerLabel2: `WHY DID YOUR COLLEAGUES MOCK YOU?`,
        coinTable: {
            1: `Slam Bomb - Causes all doors and windows in a large-room-sized BLAST to slam open or shut, even if secured. One use.`,
            2: `Sabotage Disc - A disc of metal that can be slipped into even the most tightly cased machine, causing it to immediately malfunction in the most serious way possible.`,
            3: `Time Bomb - Time slows down sixty times in a 10m sphere around the BLAST. Lasts for a minute outside
            the sphere, or one second inside. One use.`,
            4: `Pyrophone - A klaxon-like horn that repels fire away from it.`,
            5: `Sub-Flare - A one-shot pistol that launches a burning flare immediately skywards, burning through any
            substance in the way and leaving a fist-width hole.`,
            6: `Murder Lizard - A black and red terrier-sized lizard (5HP,ARMOUR 1, d6 venomous bite, paralysis on
                CRITICAL DAMAGE).
                If given a taste of any organic tissue it hunts down the source unerringly and murders it, before seeking out
                a new master nearby.`
        },
        hpTable: {
            1: `Your Annoying Sibling follows you everywhere (2d6 ABILITY SCORES, 1HP, d6 hammer).`,
            2: `Your Ratty Pet Critter (4HP, d6 bite) smells awful.`,
            3: `You're very protective of your Pet Mole Bug (1HP).`,
            4: `Your Metal Allergy (causes an unpleasant rash).Take a set of gloves.`,
            5: `You're secretly a Gifted Dancer.`,
            6: `Your Awful Dress Sense.Take a mustard jacket with a mauve shirt.`
        }
    },
    {
        title: 'Street Judge',
        desc: `Bastion has so many courts, the whole city is effectively legal ground. With questionable credentials, you dealt with street quarrels.`,
        names: 'Flinch, Todor, Bogey, Flare',
        debtholder: `Slerrence Tingeon-Larney: Offers d10 x 100 Coin for any item of sufficient curiosity and won't budge an inch. If you don't sell it to him, he sends thugs after you.`,
        gear: 'Martial-Gavel (d6), Book of Laws (incomplete)',
        careerLabel1: `WHY DO YOU NO LONGER PRACTICE?`,
        careerLabel2: `WHAT DO YOU ALWAYS HAVE WITH YOU?`,
        coinTable: {
            1: `Mushroom Binge: Take a bag of psychedelic mushrooms.`,
            2: `Notorious Drunk: Take a bottle of absinthe.`,
            3: `Took the Fall: A judge owes you a favour.`,
            4: `Disillusioned with the Law: Burn your Book of Laws and take a blunderbuss (d6 BLAST, short range).`,
            5: `Quietly Discharged: For filling up prisons too quickly.Take ceremonial judge armour (ARMOUR 1, BULKY).`,
            6: `Caught Taking Bribes: Other judges hate you, some just for getting caught.`
        },
        hpTable: {
            1: `A symbolic, but aggressive Raptoryx (3HP, d6 claws, Flies).`,
            2: `Your Loyal Scribe (1HP, STR 5, DEX 7, CHA 7, elderly, does nothing but scribe).`,
            3: `Pop-Up Gallows with noose and hood.`,
            4: `Smoke Bomb and a sense of showmanship`,
            5: `Prosthetic Leg with grasping talon.`,
            6: `Bad Reputation. Anyone on the wrong side of the law knows and dislikes you.`
        }
    },
    {
        title: 'Muddled Mixologist',
        desc: `One drink is too many. A thousand never enough.`,
        names: 'Murphy, Dervish, Swinburne, Lill',
        debtholder: `Red Devil Distilleries: You're technically banned from every pub, bar or drinking establishment owned by one of their many, many subsidiaries, and every drink you have in contravention of the ban adds to your tab.`,
        gear: 'Bottle of fancy spirit, bottle of rotgut, an excellent bow tie.',
        careerLabel1: `WHAT WAS YOUR BAR KNOWN FOR?`,
        careerLabel2: `WHAT DID YOU MANAGE TO BOTTLE? (TAKE ONE BOTTLE)`,
        coinTable: {
            1: `Flair:Take a reinforced throwing glass and a rubberised practice bottle.You know how to throw things; if really pushed, you can probably juggle.`,
            2: `Molecular Mixology:Take a set of tiny syringes and a specialised foamer.You know enough basic chemistry to make almost any liquid into jelly.`,
            3: `Classics:Take a copper jigger and a sturdy muddler (d4). If pressed, you can recount the history of the city's bars in a surprising amount of detail.`,
            4: `Tiki:Take an entire pineapple and a set of earthenware mugs. You can whittle a fancy animal garnish out of almost any fruit.`,
            5: `Obscure:Take a leather-wrapped assortment of tiny bottles of home-made bitters and shrubs.You can pickle, preserve, or infuse virtually anything, given enough time.`,
            6: `Highly Illegal:Take a small assortment of mostly food-safe powders wrapped in paper.You can pull favours to get drugs if you must - only the fun ones, not the hard ones.`
        },
        hpTable: {
            1: `Navigation: Black rum, lime, orange liqueur, cacao bitters.The drinker can always find their way home, no
            matter how drunk they get.`,
            2: `Flaneur:Whisky, red vermouth, amaro, bitters. Liquid elegance.`,
            3: `Golden Serpent: Cinnamon liqueur, gold leaf, fresh mint, apple juice, absinthe. Causes powerful
            hallucinations.`,
            4: `Red Fireball: Sweet aniseed liqueur with wild strawberry moonshine. Highly flammable (d6).`,
            5: `Corpse Reviver No. 23: Lemon, sweet wine, gin. Brings back the dead. Literally. One use.`,
            6: `Pregabalin: Smoky, sweet and lemony. Just a very, very good drink. Definitely not a nerve agent`
        }
    },
    {
        title: 'Void Blessed',
        desc: `You don't just worship the Stars in the Void. One of them has gifted you.`,
        names: 'Pollux, Vega, Rigella, Hamal',
        debtholder: `Baztuon Order of Vaultkeepers: You have shared ownership of a vault-buster bomb (d12, must be set in place).`,
        gear: 'Mace (d6), ceremonial headband.',
        careerLabel1: `WHAT WAS YOUR DUTY WITHIN THE VOID-BLESSED UNION?`,
        careerLabel2: `WHAT'S YOUR STAR GIFT?`,
        coinTable: {
            1: `Preacher: Take a Star Book.`,
            2: `Bell Ringer: You can climb ropes really fast.`,
            3: `Sacrificial Executioner: Swap your mace for an executioner bludgeon (d8, BULKY).`,
            4: `Observer: Take a telescope and flask of chicken broth.`,
            5: `Flagellant: Take a whip (d6) and lash marks.`,
            6: `Cook: Take a cleaver (d6) and mass-catering certificate.`
        },
        hpTable: {
            1: `Broken Basilisk Symbol - Two pieces of an eye-like symbol set in lead. Anyone holding the pieces
            together while looking at it loses d20 CHA.`,
            2: `Wild Tongue - You can talk with any living thing, but what they tell you might not make sense.`,
            3: `Noble Tumour - This visible growth absorbs the next harmful effect to enter your body, whether poison,
            parasite, curse, or otherwise, before dropping off and turning to dust.`,
            4: `Alien Bone - Looks like a wishbone, but if broken sends out a psychic wave of pain to all within 10m
            (d20 CHA loss).`,
            5: `Air-Sac - A membranous sac on your chest that you can inflate to 2m in diameter.Your lungs can draw
            on the air within, but remember the inflated sac floats.`,
            6: `Saucer Burn - Tingles in the presence of artificial light.You can will yourself to levitate slowly towards
            the light.`
        }
    },
    {
        title: 'Un-Revolutionary',
        desc: `Every day another revolution, another barricade. Civil flow design demands that somebody put things back in order.`,
        names: 'Gav, Apollo, Joy, Cuffwhack',
        debtholder: `The Pittance Society: Your debt can only be paid in loose change`,
        gear: 'Five-point hat, broom.',
        careerLabel1: `WHAT DID YOU BRING FROM HOME?`,
        careerLabel2: `WHAT HELPED YOU BREAK UP BARRICADES?`,
        coinTable: {
            1: `A bottle of Nectar Brew, bright yellow, lightly alcoholic, doubles as a medium-strength glue.`,
            2: `Tin of Dust Snuff, enough for three doses. Causes a sneeze violent enough to expel any harmful substance from your body.`,
            3: `A spoiled Pet Beetle (2HP).`,
            4: `Pack of Gum (smoke) with a comical dispenser.`,
            5: `A Bright Green Talking Hook Glider(3HP, Flies), knows a few anti-revolution phrases.`,
            6: `A Fantastic Sandwich in a ridiculously sturdy lunchbox`
        },
        hpTable: {
            1: `Flamethrower: d6, BULKY, BLAST.`,
            2: `Breaching Rifle: d6, +d10 against structures or massive targets, BULKY.`,
            3: `5 Proximity Mines: d8 BLAST, fails to detonate on a 1.`,
            4: `3 Toxic Smoke Bombs: d6 BLAST and smoke cloud. Ongoing DAMAGE each turn for anyone that stays
            within.`,
            5: `3 Spike Bombs: d8 BLAST. Only activates if it is spiked into place.Very short fuse.`,
            6: `3 Safety Firebombs: d6 DAMAGE each round until extinguished. Has no effect on living tissue.`
        }
    },
    {
        title: 'Folk Unionist',
        desc: `The world is full of strange and powerful things. None of them deserve our worship.`,
        names: 'Jerigiza, Clovik, Inogus, Tangetta',
        debtholder: `The Masterphagers: You have learned the technique to safely eat anything up to the size of your fist, but only food provides nourishment.`,
        gear: 'Tall hat and sash.',
        careerLabel1: `WHAT WAS YOUR DAY JOB?`,
        careerLabel2: `WHAT MADE YOU JOIN THE UNION?`,
        coinTable: {
            1: `Butcher: Take a cleaver (d6).`,
            2: `Schoolteacher: Take a cane (d6).`,
            3: `Baker: Take a breadknife (d6).`,
            4: `Private Investigator: Take a pistol (d6).`,
            5: `River Serpent Hunter:Take a bow (d6).`,
            6: `Steeplejack: Take climbing boots and a pick (d6).`
        },
        hpTable: {
            1: `You survived Cosmic Abduction.When otherworldly creatures speak another language, you get a tingly sense of what they're saying`,
            2: `You just Love Kin-kind and want to keep it pure.Take a firebomb (d6 DAMAGE each round until extinguished).`,
            3: `You were denied entry to the Dead-Blessed Union.Take a stolen dead-snake symbol.`,
            4: `Your Parents were high ranking members.You have some sway within the Union.`,
            5: `Mostly for Recreational reasons.Take a keg of beer.`,
            6: `Your home was destroyed in an Unexplained Explosion.Take some burnt skin.`
        }
    },
    {
        title: 'Liberal Engineer',
        desc: `We sit on the spear-tip of modernity. There's always the risk of blood.`,
        names: 'Ferrance, Piero, Racuse, Geobert',
        debtholder: `The Tin Soldiers:The first of you to die can be reproduced in living metal form (ARMOUR 2, but much slower than normal) if you wish.`,
        gear: 'Duck pistol (d6, BLAST, very short range), sack of ball bearings and screws.',
        careerLabel1: `WHAT DID YOU BUY IN PREPARATION FOR TODAY?`,
        careerLabel2: `WHAT'S YOUR MOST RECENT PROJECT? (IT WAS A FLUKE, YOU CAN'T RECREATE IT)`,
        coinTable: {
            1: `A bicycle.`,
            2: `A sturdy umbrella (d6).`,
            3: `A flask of goose soup.`,
            4: `A long scarf and very warm hat.`,
            5: `A tinned pie.`,
            6: `A can of beast repellent.`
        },
        hpTable: {
            1: `Minion-Maker - A copper headband that turns the wearer into a mindless automaton, obeying any
            command given to it.`,
            2: `Pawn Tube - A big golden funnel that can be spiked into the ground. Feed any item into it and a rock or
            gem worth half of its market value is shot out. If the same stone is returned to the funnel, the item is
            traded back.`,
            3: `Air-Mine - A floating sac of explosive gas (d10 BLAST). Far too sensitive once activated, so a 1 in 6 chance
            that it goes off prematurely`,
            4: `Crank Bomb - Turn a crank to power it up. Roll d6 for each turn you crank it, adding to the total
            DAMAGE that is released when you do throw it. If the charge exceeds 12 DAMAGE it blows up in your face.`,
            5: `Impact Claw - Causes d10 DAMAGE, but if you roll a 10 you hit yourself for the DAMAGE instead.`,
            6: `Primordial Slime - Can be rubbed onto skin, leaving it soft and jelly-like.You can now bend and squeeze
            as if you had no bones or internal organs, but you only benefit from RESTS while in water. If you spend a
            day out of water the effects wear off.`
        }
    },
    {
        title: 'Maked Horrorist',
        desc: `Horrors rise from the Underground. We must make a friend of fear, and scare them back down.`,
        names: 'Bota, Lombina, Volter, Sonny',
        debtholder: `The Populads: You can never remember the name or face of somebody in this Union, or what they really do, but you can always find a member when you need one.`,
        gear: 'Handcannon (d6, very loud), horrific mask.',
        careerLabel1: `WHAT'S YOUR MASK?`,
        careerLabel2: `WHAT ABOUT WHEN YOU TAKE THE MASK OFF?`,
        coinTable: {
            1: `The Famine Machine: You can eat metal in place of food.`,
            2: `The Red Beast: You have the enhanced scent and hearing of a dog.`,
            3: `The Horned Child: When you make a demand, those that refuse it feel an intense (but ultimately harmless) pain.`,
            4: `The Iron Snake: If you eat a living thing whole you learn all that it has seen.`,
            5: `The Blank Mask: You cause no sound and leave no footprints.`,
            6: `The Grey Man: All living things understand your speech, but are under no obligation to cooperate.`
        },
        hpTable: {
            1: `You can choose how your face appears each time you take it off.`,
            2: `Animals take a disliking to your face.`,
            3: `You had it surgically attached and can never take it off.`,
            4: `You need to wear glasses to see well, but the mask lets you see just fine.`,
            5: `You're mute when not wearing the mask.`,
            6: `Your face is disfigured underneath.`
        }
    },
    {
        title: 'Rollocker Club Alumni',
        desc: `Good times, fair play, school spirit!`,
        names: 'Willand, Gidiver, Feffle, Rocurd',
        debtholder: `Time Enforcer 2nd Regiment: You have synchronised watches.`,
        gear: 'Sports bat (d6, BULKY), club jacket.',
        careerLabel1: `WHAT DID YOU SUPPOSEDLY STUDY DURING YOUR TIME AS A STUDENT?`,
        careerLabel2: `WHAT DID YOU REALLY SPEND YOUR TIME DOING?`,
        coinTable: {
            1: `Take a set of unread Science textbooks.`,
            2: `Take a set of unread Fine Art textbooks.`,
            3: `Take a set of unread History textbooks.`,
            4: `Take a set of unread Engineering textbooks.`,
            5: `Take a set of unread Medicine textbooks.`,
            6: `Take a set of unread Bureaucracy textbooks.`
        },
        hpTable: {
            1: `Pratfalls: You can fall up to 20ft without any harm.`,
            2: `Pranking a Rival Club: Take a smokebomb, a stinkbomb, and a firebomb (d6 DAMAGE each round until
                extinguished).`,
            3: `Mixing Drinks: You know every cocktail recipe, and take a bottle of industrial rum.`,
            4: `You Don't Remember: Take a pigrat (4HP, d4 bite) dressed in club colours`,
            5: `Raiding Wine Cellars: Take a bottle of fortified wine and you can see in the dark.`,
            6: `Hazing Initiates: Take a bottle of ether.`
        }
    },
    {
        title: 'Backward Legionnaire',
        desc: `The future holds only darkness. BACKWARDS! NEVER FORWARDS!`,
        names: 'Monnier, Thelmy, Jerreth, Bramiah',
        debtholder: `The Fly Heralds: While you are in debt to them, swarming insects of any type do not bother you.`,
        gear: 'Un-modern clothes, firebomb (d6 DAMAGE each round until extinguished).',
        careerLabel1: `WHAT OBSOLETE WEAPON DO YOU CLING TO?`,
        careerLabel2: `WHAT'S THE MOST OBSOLETE THING YOU OWN?`,
        coinTable: {
            1: `A hickory longbow (d6).`,
            2: `3 javelins (d6), you've named them all.`,
            3: `Pole-club (d6, BULKY).`,
            4: `Blunted falx (d6, BULKY).`,
            5: `Morning star (d6).`,
            6: `Sling (d4) with antique stones.`
        },
        hpTable: {
            1: `A set of Chain Armour (ARMOUR 1, BULKY).`,
            2: `£10 in Stone Coins. Someone far out in Deep Country might take it.`,
            3: `A Lute. Nobody makes the right strings anymore.`,
            4: `Portable but heavy Sundial.`,
            5: `Carrying Pole with two buckets.`,
            6: `A Chariot (with nothing to draw it).`
        }
    },
    {
        title: 'Contract Castaway',
        desc: `Paid a petty fee to occupy a desolate rock, in place of a flag. The years have been dull, so you return to the mainland.`,
        names: 'Thargis, Grotter, Ferno, Abraman',
        debtholder: `The Holy Carcass-Sons: You bear their mark (a black hourglass). You feel no pain but your wounds never heal. The mark is lost when the debt is paid.`,
        gear: 'Walking stick (d6), net, pack of gum (parrot).',
        careerLabel1: `WHAT WAS YOUR FINAL PAYMENT FOR LONG SERVICE?`,
        careerLabel2: `WHAT DID YOU FIND ON THE ISLAND?`,
        coinTable: {
            1: `A tin Medal.`,
            2: `A big Chocolate Bar.`,
            3: `Lifetime supply of Pet Food, if you don't take advantage.`,
            4: `A small Painting of you on your island.`,
            5: `A Golden Ticket that gets you passage on any one voyage or trip leaving Bastion.`,
            6: `A smart set of Shoes.`
        },
        hpTable: {
            1: `Crystal Ball - Once per day it answers any question yes or no, as helpfully as it can. It knows everything.`,
            2: `Pack of Fat Beans - Eating one makes you unable to run or jump until you get a night's sleep.`,
            3: `Jar of Black Air - Releasing it plunges the room into darkness until fresh light it brought in. One use only`,
            4: `Jar of Unidentified Blood - If poured into a dead body, the body serves you in one task before vomiting up the blood and dying even more.`,
            5: `Star Atlas - Shows constellations that you do not recognise from the sky. Anyone harming the book is
            struck by lightning (d12, ignore ARMOUR).`,
            6: `Badly Stitched Doll - Terrifies children and animals.`
        }
    },
    {
        title: 'Repressed Psychic',
        desc: `It's inside your head. You can't hold it any longer.`,
        names: 'Ural, Marlake, Yorris, Franson',
        debtholder: `Under-Kin: Their office is far, far underground and they're very, very mutated.`,
        gear: 'Glass marbles.',
        careerLabel1: `HOW DID YOU TRY TO HIDE YOUR POWER?`,
        careerLabel2: `WHAT'S YOUR HIDDEN POWER?`,
        coinTable: {
            1: `Worked in a Distant Mine: Take a pick-axe (d6, BULKY).`,
            2: `You've Never Hidden: Take a pistol (d6).`,
            3: `Drifted Alone on a River Raft: Take a fishing spear (d6).`,
            4: `Mercenary Enlistment: Take a part-broken horse rifle (d8, BULKY, breaks forever on a1).`,
            5: `Spiritual Pilgrimage: Take a dagger (d6) and growing cynicism.`,
            6: `Blinding Yourself: Take a cane (d6).`
        },
        hpTable: {
            1: `Magnetism over unheld metal objects, with the force of your own hand.`,
            2: `Phase Throug hWalls or doors at will. If the wall is too thick, you don't phase into it at all.`,
            3: `You can Transfer your Consciousness into a fresh corpse. Each time you undertake a stressful situation
            in your new body you must pass a CHA SAVE or return to your own body`,
            4: `You can Perfectly Predict coin tosses that other people make.`,
            5: `You Appear Invisible to one person that you focus on.`,
            6: `You can Sense the Motives of anyone you touch.`
        }
    },
    {
        title: 'Amateur Amputator',
        desc: `Not trained in the finesse stuff. Major structural work only.`,
        names: 'Hullock, Jeig, Handel, Dent',
        debtholder: `Deb Worldkiller: You technically owe her money from a cult membership you don't remember agreeing to.`,
        gear: 'Bonesaw (d6), ether.',
        careerLabel1: `WHAT UNSETTLED YOUR PATIENTS?`,
        careerLabel2: `WHAT ELSE DID YOU BRING TO WORK?`,
        coinTable: {
            1: `Your Loud Cutting Machinery: Replace your bonesaw with a grinding saw (d8, BULKY).`,
            2: `Mistrust of Anaesthetic: Swap your ether for a healing-hand symbol.`,
            3: `Your Unhygienic Surroundings:Take a filthy ferret-snake (2HP, d4 bite, stinks).`,
            4: `Your Sense of Humour:Take a book of anatomy jokes.`,
            5: `Your Paranoia: Take a tiny pistol (d6) that you always keep one hand on.`,
            6: `Your Eyesight: Take very thick glasses (you cannot see well without them)`
        },
        hpTable: {
            1: `Universal Suture that perfectly conjoins two bits of organic matter, becoming one being. One use only`,
            2: `Tank of Laughing Gas.`,
            3: `Magnifying Lens with adjustable focus.`,
            4: `Heavily-used Forceps.`,
            5: `A Hook in place of your off-hand.`,
            6: `A bottle of Strong Perfume.`
        }
    },
    {
        title: 'Haunted North Bounty Hunter',
        desc: `The endless polar mists of the Haunted North are a great place to hide. You did your best to bring the lost home, one way or another.`,
        names: 'Podel, Vichler, Worfhand, Beegull',
        debtholder: `Fictioneers: In their office is a large, empty book with your names written on the front. If you're late paying your debt, the Fictioneers can make unpleasant things happen to you by writing them within.`,
        gear: 'Pole axe (d8, BULKY).',
        careerLabel1: `JUST HOW TOUGH ARE YOU?`,
        careerLabel2: `WHAT POWER DID THE MIST GRANT YOU?`,
        coinTable: {
            1: `Take an Arctic Wolf Spider (5HP, d6 bite, Terrifyingly Soft and Fuzzy) that follows your every command.`,
            2: `Take an Adoring Follower (1HP, club d6).`,
            3: `You can Whistle loud enough to cut through any noise, and over vast distances.`,
            4: `You're Immune to alcohol and other toxins.`,
            5: `If you can pick up a container, you can Break It Open with just your hands and teeth.`,
            6: `Take an Eyepatch and a captivating story about how you got it.`
        },
        hpTable: {
            1: `Fogwhisper: As long as you make eye contact with another, they can hear anything you whisper.`,
            2: `Snowblood: You suffer no harm from extreme cold.`,
            3: `Iceclap: You can extinguish small flames with a loud clap`,
            4: `Chillsight: You have white eyes, which people don't like.`,
            5: `Mistlung: You can always see your breath.`,
            6: `Seathirst: You can only survive on saltwater. Freshwater doesn't quench you.`
        },
    },
    {
        title: 'Necro-Engineer',
        desc: `Of all Bastion's industry, the city produces corpses faster than anything. Production on this scale calls for modern methods.`,
        names: 'Do, Jincey, Gognon, Zephryne',
        debtholder: `The Jolity Engine: A sentient, building-sized gambling machine.Whenever you visit it offers a spin of its wheels to halve the debt, or double in the case of a loss. Odds are 52% in favour of the Engine.`,
        gear: 'Sombre formal wear, shovel.',
        careerLabel1: `HOW DID YOU GET YOUR START IN THE CORPSE DISPOSAL INDUSTRY?`,
        careerLabel2: `WHAT WAS YOUR GREAT PROJECT? (YOU COULDN'T GET FUNDING)`,
        coinTable: {
            1: `Digging the Deepest Graves for Uncooperative Cadavers: Replace your shovel with a powered grave-burrower (d8, BULKY, extremely loud, tears through earth at an alarming rate).`,
            2: `Professional Grave Visitor: You have a lifetime supply of bouquets from a handful of Bastion's florists.`,
            3: `Silencing Birdsong: Take a pigeon-gun (d6, BULKY).`,
            4: `Widow Tender: Take an expandable umbrella.`,
            5: `You were Born in a Mausoleum: You can sense a corpse up to one room away.`,
            6: `Chasing Scavengers Away: One nearly feral hyena (5HP, d6 bite) stuck with you.`
        },
        hpTable: {
            1: `The Incineration Dome: Take a fire-proof protective suit that fits over your formal wear.`,
            2: `The Pyramid of Final Rest: You can tell the exact height and rough age of a building with a glance.`,
            3: `The Feasting Garden: Take a sack of carrion seed (irresistible to crows, vultures and other scavenging birds).`,
            4: `The Protein Reclamation Initiative: Take a jar of flavour-masking rub (makes anything palatable).`,
            5: `The Eternal Cruise: Take a morbidly decorated naval captain's hat.`,
            6: `The Star Burial: You feel that the Void is taunting your failure. If left alone under the night sky you are DEPRIVED.`
        },
    },
    {
        title: 'Alpha Tester',
        desc: `For safety, you had to push the button, flip the switch, taste the glue. Your contract was the only thing worse than your pay.`,
        names: 'Alfo, Bater, Gramme, Delter',
        debtholder: `The Stamp Appreciation Society: You owe back-dated subscription fees, but share ownership of a worthless postage stamp collection.`,
        gear: 'Telescopic rod (d6), protective suit (Armour 2 against explosions and fire only, BULKY).',
        careerLabel1: `WHAT WAS THE WORST THING TO HAPPEN TO YOU?`,
        careerLabel2: `WHICH UNSAFE DEVICE DID YOU MANAGE TO KEEP?`,
        coinTable: {
            1: `Lost All of your fur/scales/feathers in an acid eruption.`,
            2: `Lost a Leg riding an electric staircase.Take a low-quality prosthetic.`,
            3: `Your Heart Stopped after too long in a relaxation-booth.Take a mechanical heart.`,
            4: `Lost an Eye to an overly powerful toy crossbow.`,
            5: `Fur/scales/feathers Turned Green by experimental cosmetics.`,
            6: `Lost an Arm to a mechanical-caniform.Take a low-quality prosthetic.`
        },
        hpTable: {
            1: `3 Jolt Cans - A combination of drink and electric charge. When a can is consumed you require no sleep
            for 24 hours, and during that time you are never surprised, always alert.
            After 24 hours passes you are DEPRIVED until you sleep for a full 24 hours`,
            2: `Essence Projector - Project and inhabit a ghost version of yourself up to ten feet away. The ghost form is
            immaterial, can pass through walls, but any contact with fire or electricity deals d12 DAMAGE to your real
            body.`,
            3: `Chronophone - Can call any regular phone provided you are at least a few blocks away. Can either call an
            hour in the past, or an hour in the future.
            Any attempt to create a paradox disconnects the line and you take d12 DAMAGE as your conflicting
            timelines are forced into one.`,
            4: `Mechanical Caniform - 1HP,Armour 3, d6 bite.Only understands its own name, speak, sit, and kill.
            Otherwise just follows you clumsily`,
            5: `Blizzard Popper - Plastic tube with a string hanging from the bottom. Pulling the string has a 50/50
            chance of two effects. Recharges in 12 hours:
            Blizzard: After a celebratory chime, harmless fake snow blasts from the popper.
            Ash Storm:After an off-key chime, foul burning ash (d8 BLAST) is fired from the popper`,
            6: `Temperance Band - Speak one need such as “hunger” or “thirst” and snap the band around your wrist.
            While you wear the band you no longer have that need and cannot even partake willingly.
            When you remove the band all of the hunger or thirst catches up with you, and you die if you do not
            immediately sate the backed-up need.`
        },
    },
    {
        title: 'Failed Citizen',
        desc: `None of the Failed Cities could keep up with Bastion. You left your pathetic home for the real deal.`,
        names: 'Burnlum, Tunner, Longun, Fenson',
        debtholder: `Ruff & Collar Kennels: You have shared responsibility for a disobedient bramblemutt (3HP, d6 bite) for the duration of the Debt. If you lose the mutt, add £500 to your Debt.`,
        gear: 'Nail plank (d6, BULKY), barbed wire.',
        careerLabel1: `WHAT WAS THE FIRST THING YOU BOUGHT IN BASTION?`,
        careerLabel2: `WHAT'S THE ONLY THING YOU MISS FROM HOME?`,
        coinTable: {
            1: `A Modern Hat: It's recently out of fashion.`,
            2: `A Case of FancyWines: Well past their best.`,
            3: `A Dragonfly: (1HP) The seller insisted it could dance. It cannot.`,
            4: `Night Goggles: Only work very slightly.`,
            5: `A Guidebook: Outdated and full of adverts.`,
            6: `A Can of Gruel: You were told it is a delicacy`
        },
        hpTable: {
            1: `The Brass Bands: Take a trumpet.`,
            2: `The Salt-Boiled Humbugs: Take a pack of disgusting sweets.`,
            3: `The Lawn Games: Take a set of boules.`,
            4: `The Strider Hunts: Take an obsolete long-rifle (d6, BULKY).`,
            5: `The Moss-Pipe Cafés: Take a pipe and smoking moss`,
            6: `The Underground Living Quarters: You can always sense the most direct route to the surface.`
        },
    },
    {
        title: 'Urban Safarist',
        desc: `People watching makes for fascinating viewing. At least for those too rich to have worries.`,
        names: 'Saction, Rightly, Gourd, Croton',
        debtholder: `Baroness Joleen Mast of Rosevine: Rules from a distant Failed City, but has relatives in Bastion. Insists on payment in person.`,
        gear: 'Tall hat.',
        careerLabel1: `WHAT KEEPS YOU SAFE?`,
        careerLabel2: `WHAT GETS YOU INTO HIDDEN PLACES?`,
        coinTable: {
            1: `A Sword Cane (d6, easily concealable).`,
            2: `A Wooden Stake (d6, adorned with useless symbols).`,
            3: `A Machete (d6, with a fake jungle story).`,
            4: `A Scrap Launcher (d8, BLAST, BULKY, requires a REST to reload).`,
            5: `A Startle-Gun (fires loud but blank shots).`,
            6: `A Scary but Cowardly bramblemutt (6HP, d8 maul).`
        },
        hpTable: {
            1: `A knack for Picking Locks.`,
            2: `A collection of Fake Identification Documents.`,
            3: `You're the Exact Double of somebody very powerful and influential.`,
            4: `You know the Layout of Bastion perfectly, even as it changes.`,
            5: `You were Raised in the Underground and have weird family down there, but you look remarkably normal.`,
            6: `You have perfect Dark-Vision.`
        },
    },
    {
        title: 'Lockholder',
        desc: `Canal locks charge a toll, but nobody's certain who owns them. You held a lock for a while.`,
        names: 'Bingeen, Fourley, Boxton, Feau',
        debtholder: `Severin Sistern's Underground Cruises: You each have a poor quality imitation naval uniform in addition to your normal clothes.`,
        gear: 'Unused pistol (d6), smart uniform.',
        careerLabel1: `WHICH LOCK KEEPER'S UNION DID YOU BELONG TO?`,
        careerLabel2: `WHAT WENT WRONG?`,
        coinTable: {
            1: `The Wristwatchmen: Take a utility watch (d4 micro-shot) that has similar tools to a Swiss army knife.`,
            2: `The Very-Strong-Group: You can pull out somebody's heart if you cause CRITICAL DAMAGE with an unarmed attack.`,
            3: `TheWind Order: Replace your unused pistol with an unused marksman's rifle (d8, BULKY) and your uniform is extra-smart.`,
            4: `The New Sonic-Dogs: Take two sonic bombs (d6 BLAST and shatter all glass in the area).`,
            5: `Total Data: You have a machine-eye that automatically reads and remembers any text passed in front of it. You can recall this at will.`,
            6: `Worm Storm: Take worm tattoos.You can speak a language that worms understand, but they are not bound to obey you.`
        },
        hpTable: {
            1: `Urban Apes TookYour Lock, but a small chimp (5HP, d6 bite) decided to go with you.`,
            2: `The local council paid you off, but You Squandered The Money.Take a gold tooth (worth £500, not easy to remove) and bottle of expensive perfume..`,
            3: `After foiling a plot to blow up your lock for insurance purposes, YouWere Dismissed From Duty. Take a bomb (d10 BLAST).`,
            4: `Canal PiratesWiped OutYour Organisation.Take a bloody cutlass (d6).`,
            5: `You were sent on a supply run, and Came Back To A Ruined Lock. Take a pack beetle (4HP).`,
            6: `A water wraith Scared You All From The Lock.Take a flask of star-blessed water said to repel strange beings (is actually acid).`
        },
    },
    {
        title: 'Repurposed Augmental',
        desc: `Mechanically adapted for a purpose you were unable to fulfil. You found a job somewhere else.`,
        names: 'Ewes, Clarick, Ante, Casey',
        debtholder: `Drumm Personal Security: Weapons pay off this debt at twice their normal value.`,
        gear: 'Mallet (d6).',
        careerLabel1: `WHAT WAS YOUR JOB?`,
        careerLabel2: `HOW ARE YOU AUGMENTED?`,
        coinTable: {
            1: `Civic Planning: Take a nice jacket.`,
            2: `Electricity Station Labour: Take a set of rubberised tongs.`,
            3: `Private Security: Take a concealed pistol (d6).`,
            4: `Personal Errands: Take an umbrella.`,
            5: `Housekeeping: Take a telescopic brush.`,
            6: `Municipal Cleaning: Take a broom.`
        },
        hpTable: {
            1: `Part-Metal Body: You always have at least ARMOUR 1.`,
            2: `Bile Valve: You can spew acid spray (d6, BLAST, continues until washed off) once per day.`,
            3: `Chest Compartment: A barely visible seam in your chest can open up to discreetly store a fist-sized object.`,
            4: `Steel Jaw: You can bite through most anything you can fit in your mouth.`,
            5: `Detachable Arms: They still function as you wish if removed.`,
            6: `Remodelled Internals: You do not need to eat or breathe.`
        },
    },
    {
        title: 'Noble-In-Waiting',
        desc: `The chances of you actually inheriting your title are microscopic. You decided to take your fate into your own hands.`,
        names: 'Quith, Champ, Pursey, Frottescue',
        debtholder: `Stubb Prosthetics: You each have a rudimentary prosthetic, but it cannot be a limb.`,
        gear: 'Fire poker (d6), fur cloak.',
        careerLabel1: `WHAT TITLE ARE YOU DUE TO INHERIT?`,
        careerLabel2: `HOW MANY PEOPLE MUST DIE BEFORE YOU INHERIT?`,
        coinTable: {
            1: `Arch-Hellion of Jules:Take a set of ugly red ARMOUR (ARMOUR 1).`,
            2: `Metagon of Ram: Take an ancestral horn (curly and loud).`,
            3: `Inactor of Discave: Take a fancy spike-rod (d8, BULKY) that is also a periscope`,
            4: `Cryptor of Hyde: As a gift from your ancestors, you can ask any recently dead being one question, but they are only as cooperative as they were in life.`,
            5: `Faux-Reiner of Trave: Take a box of fancy cigars and bottle of brandy`,
            6: `Eminent-Raider of Ruther's Ford: Take a warmount (7HP, d8 trample).`
        },
        hpTable: {
            1: `Nobody Knows, so succession has turned into a bit of a free-for-all, and as such has drifted far from your family`,
            2: `Fourteen, and they're very far apart.`,
            3: `Twelve, but you aren't sure which twelve`,
            4: `Nine, and they're incredibly powerful and unified against you.`,
            5: `Eight, and their holdings are far from Bastion.`,
            6: `Nobody.You technically hold the title, but the lands were utterly obliterated before you inherited. It isn't
            on maps anymore.`
        },
    },
    {
        title: 'Vault Cracker',
        desc: `Most vaults are old enough that nobody can agree who owns them. You're just tidying up forgotten things.`,
        names: 'Garrun, Fatimax, Ruffy, Stanbar',
        debtholder: `Slumborn Sisterhood: Share £100 in Slum Vouchers, valid only in the worst boroughs.`,
        gear: 'Shovel (d6, BULKY)',
        careerLabel1: `WHAT GETS YOU IN?`,
        careerLabel2: `WHAT DID YOU FIND?`,
        coinTable: {
            1: `A Key Flute that has a 1-in-6 chance of opening any lock you play to. If it fails once, it never works on that lock.`,
            2: `Take a Crowbar (d6).`,
            3: `Take three Mining Charges (d10 BLAST, must be set in place and shot).`,
            4: `Take a Portable Ram.`,
            5: `Take a bent Coat Hanger.`,
            6: `Take a Breaching Rocket (d10 BLAST, one shot).`
        },
        hpTable: {
            1: `Macro-Telescope - Essentially infinite zoom`,
            2: `Portable Raft - Carries four people, compresses down to briefcase size`,
            3: `Brace of Fancy Pistols - d8 each, but won't fire if separated.`,
            4: `Case of Poisons - One dose each of ingested, injected, and inhaled poisons`,
            5: `Cursed Music Box - Sounds awful to you, everybody else hears their favourite tune.`,
            6: `Unlabelled Food Can - 50/50 chance of pet food (expired), or pressurised potato (explodes in a d8 BLAST when exposed to air).`
        },
    },
    {
        title: 'Revolutionary Duelist',
        desc: `You are the sword tip of change in Bastion. Sometimes change for its own sake.`,
        names: 'Eppay, Saybo, Foal, Geanne',
        debtholder: `Doctor Harold Pang,Archaeologist: Pays double the value for items still dusty from excavation.`,
        gear: 'Puffy clothes, mirror',
        careerLabel1: `WHAT'S YOUR WEAPON OF CHOICE?`,
        careerLabel2: `WHAT'S YOUR FLAIR?`,
        coinTable: {
            1: `Crow-Sword (d6, doubles as crowbar)`,
            2: `Military-Fork (d8, BULKY`,
            3: `Pointman's Duelling Pistol (d8, requires a REST to clean and reload).`,
            4: `Compound Bow (d6, silent).`,
            5: `Fixed-Rifle (Does not function as a gun, but with included bayonet is d6, BULKY, melee)`,
            6: `Claymore (d8, BULKY).`
        },
        hpTable: {
            1: `You attempt a Fancy Finishing Move with your signature weapon for +d10 DAMAGE, but if it doesn't cause CRITICAL DAMAGE then you take CRITICAL DAMAGE yourself.`,
            2: `Take a pocket of Blinding Powder (DEX SAVE or blinded for one turn. After use, you must visit your supplier for a free refill).`,
            3: `Take a pack of Tiny Smoke Bombs (Make enough smoke for you to quickly dash away. After use, you must visit your supplier for a free refill).`,
            4: `You can HurlYourWeapon for d8 DAMAGE. If you roll an 8 the weapon is broken.`,
            5: `You can Mimic Any Voice you hear, and use it mockingly`,
            6: `Take an Extra-Fancy Hat with a famous backstory`
        },
    },
    {
        title: 'Newspaper Intern',
        desc: `You were technically paid to write technically-non-lies. It never really got off the ground.`,
        names: 'Gurney, Dunker, Flindell, Shelina',
        debtholder: `Society for the Punishment of Wayward Students: Your debt is to pay for breakages you caused by some prank in your youth.You know a load of dumb code words that only you understand.`,
        gear: 'Notepad.',
        careerLabel1: `WHAT WAS THE WORST STORY YOU HAD TO COVER?`,
        careerLabel2: `WHAT DID YOU TAKE FROM THE PRESS OFFICE BEFORE YOUR INTERNSHIP ENDED?`,
        coinTable: {
            1: `Local Stag Beetle Races: Take a slow disowned stag beetle (2HP).`,
            2: `Escaped Daggerfly: Take a net.`,
            3: `Mine Collapse: Take a whistlemite in a cage.`,
            4: `Snooker Tournament: Take a flask of very strong coffee.`,
            5: `Collapse of Order at a Zoo: Take a sack of animal feed`,
            6: `Prison Riots: Take a pack of gum (bread) and a pair of handcuffs.`
        },
        hpTable: {
            1: `Paper-Boy that has nowhere else to go (DEX 15, 2HP) and blindly obeys you.`,
            2: `Snubbed Shotgun (d6, +d6 at point blank range) from the editor's office.`,
            3: `Sabre (d6) owned by some famous revolutionary.`,
            4: `Cricket Bat (d6, BULKY) signed by a disgraced general.`,
            5: `Letter Opener (d6) and a book of one-hour-delivery stamps.`,
            6: `Heavy Rod (d6, BULKY) from the printing press`
        },
    },
    {
        title: 'Rural Tax Collector',
        desc: `You've spent more time than you care on the roads of Deep Country. Squinting at obsolete currencies was your life.`,
        names: 'Pearl, Eyp, Dewie, Heritance',
        debtholder: `Bastiard Free Press Council: You have a shared subscription to a local newspaper, delivered daily to a personal box nearby`,
        gear: `Taxman's pistol (d6, extremely loud).`,
        careerLabel1: `WHAT DID THE TAX OFFICE PROVIDE YOU WITH?`,
        careerLabel2: `WHAT DO YOU HATE MOST ABOUT BASTION?`,
        coinTable: {
            1: `Can of Beast Repellent (enough for 3 uses, a Specialist refills it for free).`,
            2: `An Ornate Baton (d6, strikes fear into tax-dodgers).`,
            3: `A Shaggy Bramblemutt (4HP, d6 bite)`,
            4: `Ceremonial Armour (ARMOUR 1, BULKY).`,
            5: `An Automaton Ferret Snake (1HP, knows two songs).`,
            6: `A book of Simple Country Jokes`
        },
        hpTable: {
            1: `Unionised Workers: Take membership badge for the Anti-Union Coalition.`,
            2: `Bureaucracy:Take a portable shredder.`,
            3: `People in General: Take an enemies list.`,
            4: `Organised Religion: If you participate in a religious ceremony without complaining, you are DEPRIVED for the remainder of the day`,
            5: `Modern Clothes:You are DEPRIVED if you are fashionably dressed.`,
            6: `Pigeons:They hate you back.`
        },
    },
    {
        title: 'Academic Debater',
        desc: `Somebody must argue the positions that nobody cares about. You were that somebody.`,
        names: 'Stroman, Slipper, Huminum, Peel',
        debtholder: `Conglomerated Taxes: You are exempt from certain taxes, gaining an effective 50% discount on pets, hair products, and offal.`,
        gear: `Cane (d6), pocket-watch.`,
        careerLabel1: `WHAT CAN YOU DEBATE FOREVER?`,
        careerLabel2: `WHAT DID YOUR UNIVERSITY PROVIDE AS A LEAVING GIFT?`,
        coinTable: {
            1: `Public Transport: Choose a favourite type.`,
            2: `Libraries: Choose a heretical library opinion.`,
            3: `Taxation: Choose a favourite tax`,
            4: `Food History: Choose an ingredient that you can never resist.`,
            5: `FormalWear: Choose a favourite bodypart to clothe.`,
            6: `Types of Roof: Choose one thing you hate about modern roofs.`
        },
        hpTable: {
            1: `A box of Psychedelic Mushrooms (two doses, instant effect).`,
            2: `An extremely satisfying but dangerous Back-Scratcher (d6 DAMAGE)`,
            3: `A tiny mechanical Steel Butterfly (obeys any commands, but has all the limits and fragility of a normal butterfly).`,
            4: `A Wind Chime (somewhat relaxing)`,
            5: `A Novelty Umbrella (also a clarinet).`,
            6: `A Glass Bust of your Head (worth nothing to anyone else)`
        },
    },
    {
        title: 'Associated Burglar',
        desc: `You burgled only sanctioned properties. You don't fully understand the legality.`,
        names: 'Spit, Hucker, Loam, Parthia',
        debtholder: `Young Errant's University for Practical Studies:You share ownership of a set of basic engine repair tools.`,
        gear: `Bow-pistol (d6).`,
        careerLabel1: `WHAT'S YOUR CHOICE OF BURGLARY EQUIPMENT?`,
        careerLabel2: `WHICH TYPE OF BUILDING DID YOU TARGET?`,
        coinTable: {
            1: `Bottle of Ether with long-range spray attachment.`,
            2: `Sticky-Rope (sticks to metal and stone, supports one person).`,
            3: `Crowbar (d6, passes for a walking stick).`,
            4: `Portable Ram (folds down to pocket size).`,
            5: `3 Slumber Bombs (anybody in the BLAST who is already asleep cannot be woken by any means for an hour).`,
            6: `Burglar Shotgun (d6, +d6 at point blank range, silent).`
        },
        hpTable: {
            1: `Offices: Take a poison pen (d4, d12 DEX Loss on CRITICAL DAMAGE).`,
            2: `Alienist Temples: Take a handful of incense sticks`,
            3: `Barracks: Take a military uniform and medals.`,
            4: `Hospitals: Take a stethoscope.`,
            5: `Workhouses: Take a steam-whistle.`,
            6: `Orphanages: Take a broken doll.`
        },
    },
    {
        title: 'Retail Therapist',
        desc: `You helped people spend money you had no hope of ever earning. None of it rubbed off onto you.`,
        names: 'Sleffy, Debbum, Frozer, Bloom',
        debtholder: `Finbrake Re-burglary: They accept reclaimed stolen goods for twice their value.`,
        gear: `Self-defence shock-prod (d6, on a roll of 1 it requires recharging)`,
        careerLabel1: `WHAT WAS YOUR SPECIALITY?`,
        careerLabel2: `WHO WAS YOUR BEST CLIENT?`,
        coinTable: {
            1: `Clothes: You're always exquisitely dressed.`,
            2: `Drinks: You can claim a free drink in most bars`,
            3: `Offal: You can identify most organs.`,
            4: `Cigars: Smoke doesn't bother you.`,
            5: `Luxury Pets: Take a chameleon scuttlefish (1HP)`,
            6: `Jewellery: You recognise fakes right away.`
        },
        hpTable: {
            1: `A Military Officer: Take a prototype repeater-pistol (d6, BLAST, jams on a 1, requiring Specialist repair).`,
            2: `A Paranoid Vault-Keeper: Take a peeker-lens (place against metal doors to see what's on the other side in fuzzy vision).`,
            3: `A Deep Country Feral King: Take a clumsy but ornate sword (BULKY, d8).`,
            4: `A Wild Ocean Treasure Hunter: Take a returning knife (d6, flies back into your hand with a whistle).`,
            5: `A Washed-Up Stage Comedian: Take a water-squirting flower.`,
            6: `A Hygiene-Obsessed Millionaire: Take a bottle of universal cleaning fluid (cleans anything to a shine in no time at all).`
        },
    },
    {
        title: 'Apprentice Sweep',
        desc: `Your master died. They took your terrible career prospects along with them.`,
        names: 'Flo, Rod, Leek, Moley',
        debtholder: `Soddup Burials: The debt is for a parent's funeral. Whether through blood or not, you're all siblings to each other`,
        gear: `Chisel (d6), extendable brushes`,
        careerLabel1: `WHAT DID YOU SWEEP?`,
        careerLabel2: `WHAT DID YOU DREAM ABOUT AS YOU SWEPT?`,
        coinTable: {
            1: `Narrow Chimneys: You can get through any gap you can get your head into.`,
            2: `Sewers: You can see in the dark perfectly.`,
            3: `Railway Lines: You can sense the speed and direction of the nearest train or tram by touching the rail.`,
            4: `Bookshelves: Dust does not bother you.`,
            5: `Gruel-Chutes: You can only eat solid food.`,
            6: `Kennels: Houndlike creatures such as bramblemutts love you.`
        },
        hpTable: {
            1: `Being a Highwayman: Take a fake pistol (only fires blanks).`,
            2: `Visiting the Void: Take a spyglass.`,
            3: `Avenging your Master: Take a dose of powdered poison.`,
            4: `Being in High Society:Take a fashionable hat.`,
            5: `Being a Musician:Take a banjo.`,
            6: `Becoming a Master Sweep:Take a sweeper's tattoo that only impresses other sweeps.`
        },
    },
    {
        title: 'Sky Trooper',
        desc: `Your training was so intense that the academy closed after graduation. Now there is no mission, but you still have your gear.`,
        names: 'Teekay, Forth, Tooey, Wun',
        debtholder: `Titan Chimney Stacks: Take shared ownership of an extremely long chimney brush`,
        gear: `Cutlass (d6), glider-wings (decent for gliding, unsuitable for flight), uniform.`,
        careerLabel1: `HOW COOL IS YOUR UNIFORM?`,
        careerLabel2: `WHAT'S IN YOUR HIDDEN POUCH?`,
        coinTable: {
            1: `It has your Name in Rhinestones across the back.`,
            2: `It has Mirrored Panels.`,
            3: `It has ARMOUR (ARMOUR 1) and a masked helmet.`,
            4: `It has an Ultra-Fancy Belt Buckle`,
            5: `It has a Cape.`,
            6: `It has Tassels.`
        },
        hpTable: {
            1: `A Flash Bomb (dazzles anyone that doesn't avert their eyes for one turn).`,
            2: `Glow-Dust (spread over an item to cause it to glow brightly for an hour).`,
            3: `A Pen that can fire a single shot (d6).`,
            4: `A Poison Capsule.`,
            5: `1 metre roll of Unbreakable Wire`,
            6: `A Very Loud Whistle.`
        },
    },
    {
        title: 'Urbalist',
        desc: `The walls of Bastion have a language of their own. The right ones reveal secrets, with the help of your herbs.`,
        names: 'Risper, Zipra, Thior, Haloper',
        debtholder: `Lower-Offerbog Mercenary Regiment: You have a token to call in the regiment for one murder whenever you like.`,
        gear: `Sabre (d6), 3 doses of hallucinogenic herbs (£20 each to restock).`,
        careerLabel1: `WHAT DO THE WALLS TELL YOU WHEN YOU'RE HERBED UP?`,
        careerLabel2: `WHAT DO THE FLOORS TELL YOU WHEN YOU'RE HERBED UP?`,
        coinTable: {
            1: `Lick a wall to learn its Original Purpose`,
            2: `Listen closely to hear the name of the building's Legal Owner.`,
            3: `Stroke the walls to sense the Nearest Exit.`,
            4: `Smell the walls to know the Last Thing that was Cooked in here.`,
            5: `Eat a small part of the wall to know if there is a Hidden Door (but not where).`,
            6: `Push some fragments of the wall into your ear to know a Trivial Fact about a being that calls this place home (if any).`
        },
        hpTable: {
            1: `Observe a candle's shadow to learn the path of the Last Person toWalk By`,
            2: `Throw some dust to hear a few echoes from the most Recent Conversation here.`,
            3: `Splash some water to see the best Path to a Destination you're chanting`,
            4: `Spit on the floor to hear the name of the PersonWho Thinks They're in Charge.`,
            5: `Sleep on the floor to dream about the Most Interesting Thing to happen here.`,
            6: `Follow a trail of freshly spilled blood to find something that Doesn't Belong here`
        },
    },
    {
        title: 'Under-Laborer',
        desc: `Construction work on the Underground continues. Despite its lack of regard for time and space.`,
        names: 'Cutver, Trunch, Bore, Ducton',
        debtholder: `Camwick & Bodeyman Herbal Remedies: Each take a pack of all-purpose herbal tablets.`,
        gear: `Hammer (d6), drill, gum (coal).`,
        careerLabel1: `WHAT DO YOU KNOW ABOUT THE UNDERGROUND?`,
        careerLabel2: `WHY DON'T YOU LIKE THE SURFACE?`,
        coinTable: {
            1: `The Secret of Darkness: If you gaze into a dark passageway, you know what lies at the end of the darkness.`,
            2: `The Secret of Space: If a passageway leads to somewhere you have been before, you know immediately`,
            3: `The Secret of Time: When underground, you can look around and see roughly what's changed in the last hour.`,
            4: `The Secret of the Maze: You can sense a dead-end as soon as you enter a passageway that ends in one`,
            5: `The Secret of Connection: If there is a quicker underground route between two points than the one you have planned, you know it.`,
            6: `The Secret of Cruelty: You can make a whistling noise that causes discomfort to underground vermin.`
        },
        hpTable: {
            1: `You are Extremely Ugly.`,
            2: `You're Faintly Magnetic, and you're sick of showing it to people`,
            3: `You're Sensitive To Sunlight.Take some tinted goggles, and your attacks are IMPAIRED in daylight unless you wear them.`,
            4: `You Hate Warm Food, and cannot keep it down.`,
            5: `You can only Speak Gibberish, but understand everyone else just fine.`,
            6: `You have Severe Agoraphobia.You are DEPRIVED whenever outdoors.`
        },
    },
    {
        title: 'Science Mystic',
        desc: `The past was nothing but lies. There is hidden truth in these modern ways.`,
        names: 'Brunder, Loeb, Formosa, Lyonelle',
        debtholder: `Flex Restaurant: You are blacklisted from every reputable eatery in Bastion until you pay`,
        gear: `Ceramic staff (d6, BULKY, non-reactive to chemicals), glue, solvent`,
        careerLabel1: `WHERE IS THE TRUTH HIDDEN?`,
        careerLabel2: `WHAT HAVE YOU FORESEEN?`,
        coinTable: {
            1: `In the Electric Lamps:Take a multi-setting lamp.`,
            2: `In Ether-Induced Sleep: Take two doses of ether`,
            3: `In Patterns of Corrosion: Take two flasks of acid.`,
            4: `In Magnetism: Take a very strong magnet`,
            5: `In Hidden Sounds: Take a sound amplifier (handheld, allows you to hear very faint sounds).`,
            6: `In Tension Formulae: Take a variety of springs.`
        },
        hpTable: {
            1: `Our Bodies are Destined to be Cast Aside: Take a mechanical hand`,
            2: `The End is Nigh: Take a bottle of absinthe.`,
            3: `The Folk are not in Control of Bastion: Take an othergauge (syringe that glows when filled with non-Kin blood).`,
            4: `Our Eyes Cannot be Trusted: Take a blindfold.`,
            5: `The Void Men will Come for Us: Take a star symbol.`,
            6: `There is Power in Our Minds: Take a useless pink crystal.`
        },
    },
    {
        title: 'Front of House Host',
        desc: `You were the face of a company. Now you're a face without a company.`,
        names: 'Sixer, Lemmin, Tott, Chico',
        debtholder: `Slugburn Pest Control: Take a very large pack of slug pellets.`,
        gear: `Knife (d6), apple.`,
        careerLabel1: `WHO WAS YOUR EMPLOYER?`,
        careerLabel2: `WHAT MADE YOU MEMORABLE?`,
        coinTable: {
            1: `A Fighting Pit: Swap your knife for a heavy club (d8, BULKY).`,
            2: `A Taboo Restaurant: Take a tortoise shell.`,
            3: `A Day-Spa: Take a flattering mirror.`,
            4: `A Confectionery Factory: Take a bag of sherbet.`,
            5: `A Counterfeit Jeweller:Take a fake ruby (worth £1k to somebody unknowing).`,
            6: `A Floating Hotel: Take a portable buoy`
        },
        hpTable: {
            1: `You Know Anybody's Name just by looking at them.`,
            2: `You have a Photographic Memory`,
            3: `You know a few Street Magic Tricks but nothing truly magical.`,
            4: `You resemble a Local Celebrity Entertainer.`,
            5: `On your first day, you attempted a Unique Accent and got stuck with it.`,
            6: `A Ridiculous Haircut.`
        },
    },
    {
        title: 'Critter Catcher',
        desc: `Bastion's gutters and pipes are home to every beast you can imagine. You always wanted to study them all.`,
        names: 'Bronx, Foggy, Erik, Nicol',
        debtholder: `Glasshead Psychiatric Tonics: If you all agree to taking an experimental remedy you can remove £2500 from your Debt. The remedy lasts a week, during which time you are physically incapable of lying`,
        gear: `Net, animal book.`,
        careerLabel1: `WHAT WAS YOUR SPECIALITY?`,
        careerLabel2: `WHAT ELSE DID YOU BRING?`,
        coinTable: {
            1: `Bugs: Take a trained grasshopper (1HP) in a cage.`,
            2: `Flying animals: Identify any flyer by its call.`,
            3: `Small Reptiles: Take a trained gutter lizard (1HP, d4 bite).`,
            4: `Skitterers: Imitate the noise of any small vermin.`,
            5: `Stalkers: Even large predators won't attack you if you are behaving correctly`,
            6: `Biters: Take two vials of universal antivenom.`
        },
        hpTable: {
            1: `A Boomerang (d6, requires a DEX SAVE to catch when thrown).`,
            2: `An Old Halberd (d6, BULKY, blunt).`,
            3: `The Family Slug-Gun (d6, BULKY, rusty)`,
            4: `A surprisingly deadly Wooden Sword (d6).`,
            5: `A stolen set of Brass Knuckles (d6).`,
            6: `P A modified Farmer's Scythe (d8, BULKY).`
        },
    },
    {
        title: 'Practicing Chemist',
        desc: `A truly modern profession. And you're almost qualified to do it.`,
        names: 'Zastra, Kraber, Smix, Sungeon',
        debtholder: `Sweep's Union: You are strictly forbidden from going onto a rooftop until the debt is paid.They have eyes everywhere.`,
        gear: `Long knife (d6), big flask, test tube.`,
        careerLabel1: `WHAT'S IN THE BIG FLASK?`,
        careerLabel2: `WHAT'S IN THE TEST TUBE?
        `,
        coinTable: {
            1: `Metal-Eating-Acid - Has no effect on any other material.`,
            2: `Never-Melting Crushed Ice - Tastes faintly salty`,
            3: `Anti-Water - Indistinguishable from water in every way, but deadly if a full mouthful is consumed.`,
            4: `Endo-Fluid -White slime that extinguishes anything up to a house fire when splashed around.`,
            5: `Sonic Oil - Emits a loud squeal when trodden on. Enough to spread over the floor of a normal-sized room.`,
            6: `Spark Eel Soup - After drinking the whole flask, your body has enough charge to power small devices or release a jolt of electricity (d8, ignore ARMOUR).`
        },
        hpTable: {
            1: `Ultimate Solvent - Dissolves any matter it touches. Enough to dissolve a fist-sized amount`,
            2: `Cryo-Dust - Instantly freeze a bathtub-sized amount of water when poured in.`,
            3: `Seeker's Oil -When uncorked, seeps towards the nearest open flame (no matter the distance) and explodes upon touching it (d10 BLAST).`,
            4: `Absolute Adhesive - Permanently bonds any two surfaces together.`,
            5: `Truth Serum - One dose. For the next minute the subject cannot knowingly lie, but is under no obligation to speak the truth.`,
            6: `Fool's Transmute - Enough to coat a fist-sized object. Makes mineral objects appear as gold. If chipped or damaged, they return to normal.`
        },
    },
    {
        title: 'Roof Crawler',
        desc: `There's a lot of important work that goes on atop the roofs of Bastion. Yours is the more shadowy sort.`,
        names: 'Gambrel, Mansard, Skillion, Dush',
        debtholder: `Old Time Bastionian Printworks: You have a voucher for 1,000 units of anything you want printed.`,
        gear: `Padded shoes.`,
        careerLabel1: `WHAT DID YOU GET UP TO ON THE ROOF?`,
        careerLabel2: `WHY DO YOU SHUN THE STREETS?`,
        coinTable: {
            1: `Murder: Take a garotte (d6).`,
            2: `Tile Cracker: Take a hammer (d6).`,
            3: `Gutter Unclogger: Take a muck-scoop (d6, BULKY).`,
            4: `Chimney-Smoker: Take a skewer (d6) and a smoked pigeon.`,
            5: `Lookout: Take a pistol (d6).`,
            6: `Gargoyle Poacher: Take a crowbar (d6).`
        },
        hpTable: {
            1: `Nobody understands your Roof Dialect.`,
            2: `You hate the sound of Chewing.You are DEPRIVED if somebody is chewing gum nearby.`,
            3: `You had a catastrophic attempt at a Musical Career, and everybody remembers it.`,
            4: `You're Crowd-Phobic.You are DEPRIVED while in a crowd.`,
            5: `You are hiding from an Arranged Marriage.`,
            6: `You have Reverse Vertigo.You are DEPRIVED if you don't get to roof-height at least once a day.`
        },
    },
    {
        title: 'Petty Officer',
        desc: `You held a low office, but were moved to a special position. You kept your badge but don't get paid, and have no authority.`,
        names: 'Lolly, Pigeon, Jackdus, Coopard',
        debtholder: `Old Time Bastionian Printworks: You have a voucher for 1,000 units of anything you want printed.`,
        gear: `Whistle, pack of gum (brick).`,
        careerLabel1: `WHAT POSITION DID YOU HOLD?`,
        careerLabel2: `WHERE DID YOU BLOW YOUR LAST PAY PACKET?`,
        coinTable: {
            1: `Judicial Informer: Take binoculars and notepad.`,
            2: `Tardy Clocksman: Take a clock correcting arm (d6) and pocket-watch.`,
            3: `Sleeping Guard: Take civilian clothes and concealable pistol (d6, very short range).`,
            4: `Grit Spreader: Take a sack of grit and a shovel (d6).`,
            5: `Urchin Herder: Take a shin-stick (d6).`,
            6: `Moss-Cabinet Agent: Take a moss brush and magnifying glass.`
        },
        hpTable: {
            1: `Dranter & Chone's Bladder Emporium: Take a set of bagpipes.`,
            2: `The NightWatchman: Take a set of dark-vision goggles.`,
            3: `Louse & Zoot's Prank Shop: Take a finger trap`,
            4: `Wickerton's Aromas:Take a bread-scented candle`,
            5: `Hagar's Pantry:Take a novelty jelly mould and pack of gelatin.`,
            6: `New Bastion Hygiene Museum: Take a commemorative rubber duck.`
        },
    },
    {
        title: 'Bailed Prisoner',
        desc: `You just got out. Your sentence continues.`,
        names: 'Brek, Kellar, Scodd, Quaykee',
        debtholder: `Slab & Ruck Breakout Services: You weren't bailed as much as busted out. In addition, you're all wanted criminals.`,
        gear: `Fork (d6), gum (bread).`,
        careerLabel1: `WHAT DID YOU BRING OUT WITH YOU?`,
        careerLabel2: `WHAT WAS WAITING OUT HERE FOR YOU?`,
        coinTable: {
            1: `A Tiny Bomb (d8 BLAST, fits underneath your tongue).`,
            2: `Can of Gruel.`,
            3: `Pet Cockroach (highly loyal).`,
            4: `A set of Handcuffs`,
            5: `Juicy Information from a snitch.`,
            6: `An impressive array of Bawdy Jokes`
        },
        hpTable: {
            1: `A Very Old Bramblemutt (2HP, too old to bite, still sniffs well).`,
            2: `Your Prosthetic Hand (hook, d6).`,
            3: `Personalised Leather Jacket.`,
            4: `A Metal File in a cake.`,
            5: `An ornate but Deactivated Pistol.`,
            6: `Flask of Cold Stewed Tea.`
        },
    },
    {
        title: 'Street Performer',
        desc: `Adored by few. Loathed by many.`,
        names: 'Dabber, Eddien, Marstle, Muttonaro',
        debtholder: `Penelope Ush, Bureaucratic Law Clerk: Truly clearing the debt requires visiting Bureaucratic Offices in four different corners of Bastion.`,
        gear: `Staff (d6, BULKY), floppy cap.`,
        careerLabel1: `WHAT WAS YOUR ACT?`,
        careerLabel2: `WHAT'S YOUR CLAIM TO FAME?`,
        coinTable: {
            1: `Puppetry: Take a sad-looking puppet.`,
            2: `Dancing Dobraki: Take a disloyal dobraki (4HP, d4 bite).`,
            3: `Magic Tricks: Take a deck of marked cards.`,
            4: `Fire Dance: Take a firebomb (d6 DAMAGE each round until extinguished).`,
            5: `Stilt Acrobatics: Take a set of telescopic stilts.`,
            6: `Vocalisation: You can make very convincing animal noises.`
        },
        hpTable: {
            1: `You Imperessed a Senior Borough Official. you have a universal pardon for one minor crime.`,
            2: `A Distant Ancestor Invented This Act, so if you catch anyone else doing it they have to pay you £500`,
            3: `Your performance helped drum up support for a Political Movement. A band of revolutionaries owe you a favour.`,
            4: `Your performance only really Works When You're Drunk, so people ply you with drink to try and get you to perform.`,
            5: `Your act has a Shocking Finale that always makes children cry.`,
            6: `You're Officially Banned from one Borough (the next one you need to visit).`
        },
    },
    {
        title: 'Corpse Collector',
        desc: `More of a Corpse Transporter. But the other name made it easier for people to despise you.`,
        names: 'Davarse, Stob, Rigrette, Salice',
        debtholder: `Apocryphal Specimen Museum: Take shared ownership of a poorly-illustrated bestiary.`,
        gear: `Axe (d6), wheelbarrow.`,
        careerLabel1: `WHAT'S THE LAST THING YOU FOUND ON A CORPSE?`,
        careerLabel2: `WHAT WAS YOUR JOB ON THE SIDE?`,
        coinTable: {
            1: `CorpseWarts, now on your face.`,
            2: `A Crawling Hand (1HP) that follows basic instructions with something of a bad attitude.`,
            3: `An Explosive Cigar (d8)`,
            4: `A Beautiful Silk Scarf, the smell is mostly gone.`,
            5: `A one-shot Duelling Pistol (d8, needs a REST to reload).`,
            6: `A Repeating Doll (can record a single phrase, repeats when you tickle it).`
        },
        hpTable: {
            1: `Plumber:Take a set of spanners.`,
            2: `Window Cleaner:Take a collapsible ladder and bucket.`,
            3: `Bleacher:Take a bottle of bleach.`,
            4: `Paper Seller:Take a bike horn.`,
            5: `Unclogger: Soup dispensers clog up easily, so you fixed them.Take a plunger.`,
            6: `Tile Fixer:Take a tub of grout.`
        },
    },
    {
        title: 'Counterfeit Taxidermist',
        desc: `Fantastic specimens bought you a small amount of money. Now that's gone, and your name is ruined.`,
        names: 'Lyndeer, Clancy, Ongel, Esquid',
        debtholder: `Council for Tarts and Flans: You are blacklisted from all non-bakery food establishments in Bastion until the debt is cleared.`,
        gear: `Scissors, bag of stuffing, book of made-up beasts.`,
        careerLabel1: `WHAT TYPE OF ANIMAL DO YOU KNOW EVERYTHING ABOUT?`,
        careerLabel2: `HOW DID YOU GET FOUND OUT AS A FRAUD?`,
        coinTable: {
            1: `Flyers: Take a stuffed gorilla-owl.`,
            2: `Reptiles: Take a stuffed flying-crocodile.`,
            3: `Stalkers: Take a stuffed sea-cat.`,
            4: `Fish: Take a stuffed walking-trout`,
            5: `Cephalopods: Take a stuffed claw-squid.`,
            6: `Primates: Take a stuffed frog-monkey.`
        },
        hpTable: {
            1: `Exposed by an Apprentice:Take a beating rod (d6).`,
            2: `Confessed after Losing a Duel: Take a sabre (d6).`,
            3: `Debunked by a Deceased Rival: Take a pouch of poison dust.`,
            4: `Who Knows? You came back to find your workshop burnt to the ground.Take a bloody axe (d6).`,
            5: `You Spilled all of your Secrets while Drunk: Take a bottle of industrial rum.`,
            6: `Driven out by a Mob: Take a pitchfork (d6, BULKY).`
        },
    },
    {
        title: 'Pie-Smuggler',
        desc: `Recent studies claim 68% of smuggled goods have been pastry-encased. Business was good, but word has spread too far.`,
        names: 'Shorcrumb, Filou, Flake, Socray',
        debtholder: `Council for Disbanded Councils: You all have matching badges and wigs for a disbanded council.`,
        gear: `Pie tin, pie.`,
        careerLabel1: `WHAT'S IN YOUR PIE?`,
        careerLabel2: `WHAT WAS YOUR LAST BONUS FOR SMUGGLING?`,
        coinTable: {
            1: `Tiny Pistol (d6) and rhubarb.`,
            2: `Tiny Stiletto (d6) and onion`,
            3: `Garrote (d6, silent) and plum.`,
            4: `Tiny Bomb (d8 BLAST) and kidney.`,
            5: `Miniature Bottle of Coconut Rum and mackerel.`,
            6: `Single Deadly Mushroom (instant death if even partially eaten), and pigeon.`
        },
        hpTable: {
            1: `A Violent and Disobedient Bramblemutt (4HP, d8 bite)`,
            2: `A Steel Claw in place of a hand (d6, crushing).`,
            3: `Bag of Marbles.`,
            4: `Universal Ticket that gets you into any show in town (one use)`,
            5: `An elaborate Smoking Pipe.`,
            6: `A Fortune, now lost gambling.Take a set of dice.`
        },
    },
    {
        title: 'Council Runner',
        desc: `With so many councils, a runner is a position of some power. Now your time is finished.`,
        names: 'Shorcrumb, Filou, Flake, Socray',
        debtholder: `Mayor Impanzi, a Potoo Bird: A very serious local politician. Doesn't want to acknowledge being a Potoo Bird. For whatever reason, you donated to his campaign`,
        gear: `Running shoes, letter opener (d6).`,
        careerLabel1: `WHAT'S THE BEST THING YOU LEARNED DURING YOUR TIME AS A RUNNER?`,
        careerLabel2: `WHAT DID YOU STEAL?`,
        coinTable: {
            1: `The Secret to DrinkingWell.You can out-drink anyone.`,
            2: `The Quickest Way to the Underground from any point in Bastion.`,
            3: `Skip-Stride Technique. It looks ridiculous, but when you use it you can easily outrun the others in your group.`,
            4: `Courier-Throwing.You never miss a catch, or make a bad throw.`,
            5: `A few CodeWords that get you a free ride on roughly half of Bastion's transport enterprises.`,
            6: `The Intimate Nickname of a powerful local politician.`
        },
        hpTable: {
            1: `A very soft Feather Duster.`,
            2: `A turtle-shaped Cocktail Shaker.`,
            3: `A very loud Klaxon.`,
            4: `A fancy set of Cake Decorations.`,
            5: `An unconvincing Dummy Head.`,
            6: `A big, furry Caterpillar (harmless and stupid).`
        },
    },
    {
        title: 'Life Servant',
        desc: `Your masters died. You're free now.`,
        names: 'Centival, Stilton, Moorlidge, Laykee',
        debtholder: `The Gallows Theatre: In addition to your normal clothes, you all have stage costumes covered in fake blood.`,
        gear: `Smart clothes.`,
        careerLabel1: `WHAT WAS THE WORST PART OF THE JOB?`        ,
        careerLabel2: `WHAT WAS THE BEST PART OF THE JOB?`,
        coinTable: {
            1: `Seeing to Personal Itches: Take a backscratcher (d6).`,
            2: `Constant Gravedigging: Take a spade (d6, BULKY).`,
            3: `Walking the Grandmaster: Take a cane (d6)`,
            4: `Training the Hounds: Take a lashing stick (d6).`,
            5: `Chasing off Dobroki: Take a sling (d6).`,
            6: `Everything: Take a concealed dagger (d6).`
        },
        hpTable: {
            1: `Free Access to the Hedge Maze: If you've been somewhere, you know the way there.`,
            2: `Felling Gigantic Trees: Take a two-person saw (BULKY).`,
            3: `Breaking Open Family Vaults: Take a pneumatic ram (BULKY, useless as a weapon).`,
            4: `Indulging Master's Superstitions: Take a crystal ball.`,
            5: `Feeding the Whale Calf: Take a can of krill.`,
            6: `Baking a Fresh Birthday Cake Daily: Take a bag of flour.`
        },
    },
    {
        title: 'Amateur Dramatist',
        desc: `The whole world is a stage. But you're not good enough to get paid.`,
        names: 'Vivero, Nelbreen, Jutrey, Silvid',
        debtholder: `Porkee Sheddam, Owner of Paradiso Park Bastion: Take shared ownership of a very compliant show-pigrat (3HP).`,
        gear: `Wig and costume collection.`,
        careerLabel1: `WHAT WAS YOUR SPECIALITY?`,
        careerLabel2: `WHAT PROP DO YOU STILL HAVE?`,
        coinTable: {
            1: `Booming Presence: Your voice carries extremely far.`,
            2: `Crocodile Tears: You can cry on command.`,
            3: `Stunt Falling: You can make a safe fall look really bad.`,
            4: `Impersonations: You can mimic anyone you know.`,
            5: `Looking Good: You're extremely well-groomed and strikingly attractive to some.`,
            6: `Triple Threat: You can do it all, barely. Take a decent singing voice, passable dancing skill, and a trombone you can just about play.`
        },
        hpTable: {
            1: `A barely-trained Stage Blork (3HP, d4 bite).`,
            2: `A flask of Dry Ice.`,
            3: `A convincing Fake Ferret snake.`,
            4: `A Stage Rifle (fires blanks).`,
            5: `A Ventriloquist's Dummy.`,
            6: `A Fake Blood Pack.`
        },
    },
    {
        title: 'Wilderness Recluse',
        desc: `Modernity gets between us and our natural instincts. You're here begrudgingly after a lifetime in the wild of Deep Country.`,
        names: 'Benson, Looper, Match, Urbroil',
        debtholder: `Liongoat Ice and Rescue: Take combined ownership of a torso-sized block of ice and a push-barrow for transport.`,
        gear: `Ragged clothes.`,
        careerLabel1: `WHERE DID YOU GO?`,
        careerLabel2: `WHAT HELPED YOU SURVIVE?`,
        coinTable: {
            1: `The Woods: Take a bear trap (d8 if sprung).`,
            2: `The Islands: Take a portable raft (BULKY).`,
            3: `The Swamp: Take a peatbomb (d8 BLAST, smelly).`,
            4: `The Desert: Take a spyglass.`,
            5: `The Jungle: Take a vial of contact poison.`,
            6: `The Mountains: Take a jar of mountain air (smells great).`
        },
        hpTable: {
            1: `Your old Crossbow (d6, BULKY), stolen from bandits.`,
            2: `Your Sling (d6), which you used to kill a brushreaver.`,
            3: `Your Hunting Bow (d6), crafted by your mentor.`,
            4: `Your Machete (d6), made from meteoric metal.`,
            5: `An ornately carved Tree Branch (d6, BULKY).`,
            6: `Your Spear (d6, BULKY), with a dinosaur-tooth tip.`
        },
    },
    {
        title: 'Squidbagger',
        desc: `70% of Bastion's products contain cephalopod-derived parts. According to these studies, you keep the city running.`,
        names: 'Otto, Seffee, Krayker, Polpene',
        debtholder: `Mister Dick: A colossal mock-shark and loan shark (STR 18, 15HP,ARMOUR 2, d10 jaws). He attacks your ship if you go out to sea without paying your debt.`,
        gear: `Squid hook (d6, BULKY), bag`,
        careerLabel1: `WHAT ALWAYS ACCOMPANIED YOU TO SEA?`,
        careerLabel2: `WHAT DID YOU ALWAYS WANT TO DO INSTEAD?`,
        coinTable: {
            1: `A Cute but Violent Merkrid (4HP, d4 bite).`,
            2: `A Sea-Cricket (1HP, can croak a simple tune).`,
            3: `A Monkey-Crab (4HP, d6 claws, excellent climber).`,
            4: `A Salt-Serpent (2HP, d4 bite and paralysis on CRITICAL DAMAGE).`,
            5: `A Friend-Urchin (1HP, irritating but harmless spines, hums comfortingly).`,
            6: `A Large but Pacifist Sea-raptoryx (5HP).`
        },
        hpTable: {
            1: `You Live for Squidbagging: Replace your hook with a prototype cephalopole (d6, BULKY, +d8 against anything with tentacles)`,
            2: `Be a Boxer:Take skipping rope and gloves.`,
            3: `Be a Dentist: Take pliers and bottle of ether.`,
            4: `Be a Fortune Teller:Take a deck of cosmic tarot, but you don't really understand it.`,
            5: `Fight in theWar:Take a fake military uniform and rank.`,
            6: `Be a Poet: Take a book of bad sonnets.`
        },
    },
    {
        title: 'Exposed Impostor',
        desc: `You got yourself into quite a powerful position based on a lie. Then they found out.`,
        names: 'Dosser, Maxy, Leoger, Oacus',
        debtholder: `Flasherpoint Aviation: You all have aviation goggles and honorary pilot jackets.`,
        gear: `Concealed knife (d6).`,
        careerLabel1: `WHAT WAS YOUR FAKE POSITION?`,
        careerLabel2: `WHAT DID THEY DO WHEN THEY FOUND OUT?`,
        coinTable: {
            1: `Borough Mayor: Take imitation gold chain and cloak.`,
            2: `Naval Officer: Take a uniform and sabre (d6).`,
            3: `Factory Accountant: Take a set of fancy stationery.`,
            4: `Bishop Purifier: Take starry robes and impractical censer (d6, BULKY, exudes smoke).`,
            5: `Legendary Explorer: Take a boomerang (d6, doesn't return).`,
            6: `Future Oracle: Take a bag of useless crystals.`
        },
        hpTable: {
            1: `Wanted You Dead:Take a pistol (d6).`,
            2: `Cast you into the Sea:Take a breather-sponge (holds 5 minutes of air).`,
            3: `You Escaped Just in Time:Take a listening horn (allows for better hearing through doors).`,
            4: `Took an Eye: Take an eyepatch.`,
            5: `Nothing Yet: There's still a £1k bounty on your head.`,
            6: `Took a Hand: Take a prosthetic.`
        },
    },
    {
        title: 'Critic-In-Hiding',
        desc: `Everybody loves a scathing critique, except those under the lens. For safety, you've changed your name and got a new haircut.`,
        names: 'Janus, Gilren, Cample, Rowenner',
        debtholder: `Vortex Acquisitions: Share ownership of a portal bomb (one use, anything caught in the BLAST is transported back to an empty vault at Vortex HQ).`,
        gear: `Concealed club (d6), hidden pen.`,
        careerLabel1: `WHAT WAS YOUR AREA OF CRITIQUE?`,
        careerLabel2: `WHAT WENT WRONG?`,
        coinTable: {
            1: `Coffee Houses: Take a fancy cup.`,
            2: `Orphanages: Take a tape measure.`,
            3: `Chewing Gum: Take a bottle of palate-cleansing mouthwash.`,
            4: `Experimental Music: Take an electric viola.`,
            5: `Fine Art: Take a magnifying glass.`,
            6: `Revolutions: Take a signed antique musket (d8, BULKY, breaks forever on a 7+).`
        },
        hpTable: {
            1: `You Picked the Wrong Target: Any newspaper readers that discover your identity hate you`,
            2: `You Took a Feud Too Far: Take a firebomb (d6 DAMAGE each round until extinguished).`,
            3: `You were Floated out to Sea: Take a flare gun (2 Flares).`,
            4: `You were Taking Bribes: Take a favour token (worth one favour in your former area of critique).`,
            5: `You were Sent a Warning: Take a skull.`,
            6: `You Lost your Writing Hand: Take a hook (d6).`
        },
    },
    {
        title: 'Small Town Refugee',
        desc: `Your Deep Country home was awful. Finally, the railway came, and you headed to Bastion.`,
        names: 'Vorgel, Brassica, Pastina, Katskeen',
        debtholder: `Lucky Mascots Ltd: You have shared ownership of a well-groomed but stupid pack beetle (1HP). No refunds.`,
        gear: `Whittling knife (d6), outdated clothes, sandwich box.`,
        careerLabel1: `WHAT WAS SO BAD ABOUT YOUR TOWN?`,
        careerLabel2: `WHAT'S YOUR FAMILY HEIRLOOM?`,
        coinTable: {
            1: `Bird Smell: Giant avian creatures preyed on your people.You spent a year in their nest and nothing can get the scent out. All birds see you as food`,
            2: `Beetle Addict: They only ate pack beetles, but now you can't live without it. If you go a day without drinking beetle nectar or eating beetle meat, you are DEPRIVED.`,
            3: `Lost Dialect: It was just you and your immediate family, and you spoke your own dialect that's barely understandable by everyone else. Get good at hand gestures and repeating yourself.`,
            4: `Pigrat Soul: The village church insisted you follow the governance of the town's oldest pigrat. You can sort-of communicate with pigrats, but hold disdain for all other animals.`,
            5: `Yokel Magnet: Warriors riding twisted steeds drove your entire town to flee to Bastion. You'll keep bumping into other yokels from back home and they want to cling to you.`,
            6: `Cannibal Cattle: You spent your life sat in fields, eating happily, unaware that the local monks were fattening you up to be eaten. Take a can of gruel.`
        },
        hpTable: {
            1: `A Fighting Centipede (STR 5, 6HP, d4 claws).`,
            2: `Old Military Uniform.`,
            3: `Lucky Grasshopper (just a grasshopper).`,
            4: `Huge Marrow with wheelbarrow.`,
            5: `Competition-winning Conker.`,
            6: `Pumpkin carved into a very good likeness of a family member.`
        },
    },
    {
        title: 'Paid Fighter',
        desc: `You've been fighting for money. But not enough to get rich or especially tough.`,
        names: 'Frax, Koane, Maker, Lorke',
        debtholder: `Competitive Floristry Board: You each take a single flower of your choice to wear.`,
        gear: `A vicious nickname.`,
        careerLabel1: `WHAT TYPE OF FIGHTING EXACTLY?`,
        careerLabel2: `WHAT GOT YOU OUT OF THE GAME?`,
        coinTable: {
            1: `Brass Knuckle Boxing: Take brass knuckles (d6).`,
            2: `Brushreaver Fighting: Take a bristle suit (anyone trying to maul or grapple you takes d6 DAMAGE).`,
            3: `Serpent Duelling: Take a semi-trained attack serpent (d6 bite, causes d10 DEX loss on CRITICAL DAMAGE).`,
            4: `Ice Jousting: Take ice skates and mini-lance (d8 DAMAGE on charge only, otherwise useless).`,
            5: `Fake Martial Arts: Take an exotic outfit, and you know some fancy but ineffective moves (d6).`,
            6: `Power Saw Fencing: Take a power saw (d10, stutters on a roll of 1-2, requiring a REST to fix).`
        },
        hpTable: {
            1: `Faking Military Drafting: Take a black market rifle (d8, permanently breaks on a roll of 1).`,
            2: `You ShotYourWay Out: Take a Pistol (d6).`,
            3: `Aiding Some Revolutionaries: Take a bomb (d10, BLAST).`,
            4: `A Generous Benefactor: Take smart clothes.`,
            5: `You Snuck Away: Take a hooded cloak.`,
            6: `An Unappealing Injury: Your face is all messed up, and not in a cool way.`
        },
    },
    {
        title: 'Canal Nomad',
        desc: `Bastion's waterways are no joke. Something about rails and roads just seems wrong to you.`,
        names: 'Grunion, Fossdike, Sankey, Erwush',
        debtholder: `Great Xtenza: A hook-handed, red-masked maniac who can age or vivify objects with a touch. As former followers, you all get a red mask.`,
        gear: `Boat hook (d6, BULKY).`,
        careerLabel1: `WHAT'S THE MOST USEFUL TOOL FOR CANAL LIFE?`,
        careerLabel2: `WHAT BROUGHT YOU BACK ASHORE?`,
        coinTable: {
            1: `WaterWhistle (if blown underwater, this repels any marine life).`,
            2: `A Wonder-Towel (whip it to instantly dry).`,
            3: `Take a bottle of Scented Oil.`,
            4: `Take a Lifebuoy`,
            5: `Take a Spot Lamp with a range of coloured lenses.`,
            6: `Take a Bucket.`
        },
        hpTable: {
            1: `Your Crew Drowned: Take a bottle of rum.`,
            2: `Your Boat Burned Down: The insurance wouldn't pay out.Take a Firebomb (d6 DAMAGE each round until extinguished).`,
            3: `Leg Bitten off by Giant Water Serpent: Take a bad prosthetic.`,
            4: `Late Onset Sea Sickness: When you travel by water you always vomit.`,
            5: `A Risky Manoeuvre: You are blacklisted from all of Bastion's waterways.`,
            6: `You Cannot Swim: You finally came to your senses.`
        },
    },
    {
        title: 'Living Experiment',
        desc: `You were deemed a success by the Entity that modified you. There were some side effects.`,
        names: 'Fantza, Kit, Bobob, Lilbert',
        debtholder: `Froth & Murk Oyster Farms: Take shared ownership of a mollusc mood clamp (clamp it over any shelled mollusc to get a general indicator of its mood, displayed as a colour).`,
        gear: `Crutch (d6, BULKY).`,
        careerLabel1: `WHAT WAS THE EXPERIMENT?`,
        careerLabel2: `ANY SIDE EFFECTS?`,
        coinTable: {
            1: `They replaced your head with a functioning Metal Skull.`,
            2: `You can Breathe Black Fire (d8 BLAST) once between RESTS.`,
            3: `When you eat a piece of brain you Inherit a Memory.`,
            4: `Your saliva Burns Through Metal.`,
            5: `You have an Acute Sense of Smell, but have a disfigured unusual nose`,
            6: `You can Control your Severed Body Parts and reattach them at will.`
        },
        hpTable: {
            1: `You have a Mechanical Voice that glitches occasionally.`,
            2: `You cannot willingly Touch Metal.`,
            3: `If you do not Take your Tonic each morning, you drop dead. You have a stash to last a lifetime hidden somewhere safe.`,
            4: `Total Amnesia of before the experiment.`,
            5: `Brain is the only meat that you can eat.`,
            6: `If you take CRITICAL DAMAGE you can only be roused by a Jolt of Electricity.`
        },
    },
    {
        title: 'Fashionista',
        desc: `There are none more tragic than those that lack the Modern Look. SPECIAL:You are DEPRIVED if you dress without making a statement.`,
        names: 'Sensation, Remark, Wave, Mode',
        debtholder: `The Lion Council: A literal council of lions. They want interesting meat up to the value of your debt. A lioness already hunts you to seek payment.`,
        gear: `Your last good outfit.`,
        careerLabel1: `AFTER MUCH DELIBERATION, WHAT IMPRACTICAL WEAPON DID YOU SETTLE ON?`,
        careerLabel2: `WHAT'S THE CATCH WITH THIS OUTFIT?`,
        coinTable: {
            1: `Paired Hook-Swords (d4 individually, d6 each when wielded as a pair).`,
            2: `Petal-Gun (d6, misfires on a 1, requiring a REST to fix).`,
            3: `Martial Fan (d6, also works as a fan).`,
            4: `Hand Scorcher (d6, super-heating metal rod, requires a turn to heat up).`,
            5: `Black Cane (d6, reflects no light, shatters if an attack has its DAMAGE negated by ARMOUR).`,
            6: `Macro-Rifle (d8, BULKY, must be carried in two parts and takes a turn to assemble).`
        },
        hpTable: {
            1: `The head-gear means you must Duck Under Doorways.`,
            2: `It's all Extremely Flammable.`,
            3: `Water causes it to just Melt Away.`,
            4: `The Cloak Snags onto anything it can.`,
            5: `It Glows in the dark.`,
            6: `It makes a Lot of Noise when you move.`
        },
    },
    {
        title: 'Humanoid Flotsam',
        desc: `You weren't entirely raised by amphibians. But you're always slightly damp.`,
        names: 'Paddy, Marlin, Muel, Parrock',
        debtholder: `Civic Society of Polishers & Buffers: Mirrored or reflective objects pay off this debt at double the going rate.`,
        gear: `Brick in a sack (d6).`,
        careerLabel1: `WHERE WERE YOU BORN?`,
        careerLabel2: `WHAT STUCK WITH YOU?`,
        coinTable: {
            1: `An Industrial Waste Pool, to No Mother: Take a vial of filthy water.`,
            2: `Under a Bridge, Right into the Canal: Take an old bicycle wheel.`,
            3: `In a Ritual Birthing Pool: You're effectively cold-blooded.`,
            4: `Inside the Belly of a Whale to Privateer Parents: Take a tattered tricorne hat.`,
            5: `On a Sinking Ship: Take a lifebuoy.`,
            6: `In the Middle of a Swamp Festival: Take some coloured beads.`
        },
        hpTable: {
            1: `You Swim as fast as you run.`,
            2: `You can Breathe Underwater.`,
            3: `You can Squirt a mouthful of water with great range and accuracy, but not enough to cause DAMAGE.`,
            4: `You can Drink any Water without harm, no matter how filthy.`,
            5: `Your Pet Merkrid (1HP).`,
            6: `That Lovely Wet Feeling. You're DEPRIVED if you ever have to go a day without a soak.`
        },
    },
    {
        title: 'Master Blender',
        desc: `Some sensory gift allowed you to rapidly reach a lofty position. Prestigious within your trade, worth nothing outside.`,
        names: 'Beth, Walker, Grouze, Shulder',
        debtholder: `Javerna and Capur Imitation Gems: Take shared ownership of an obviously fake, head-sized ruby.`,
        gear: `Stirring oar (d6, BULKY).`,
        careerLabel1: `WHO DID YOU BLEND FOR?`,
        careerLabel2: `WHAT WENT WRONG?`,
        coinTable: {
            1: `The Jerkin & Gherkin Take a jar of pickle brine.`,
            2: `United Reclaimed Fats: Take a box of suet.`,
            3: `The Condimentary: Take a bottle of fish sauce.`,
            4: `Motherford's Still: Take a small barrel of factory rum.`,
            5: `Masticatory Sensations: Take a vial of gum flavouring.`,
            6: `Checkle's Choice: Take a tin of pet food.`
        },
        hpTable: {
            1: `The Factory Sank into the Underground: Take a head-lamp.`,
            2: `You Interrupted the Vat Cleaning Process: Take a curious padded stalker (5HP).`,
            3: `There were Irregularities with your Batch: Your product is poisoned.`,
            4: `Insects Overran your Factory: Take another container filled with angry wasps.`,
            5: `A Machine took your Job: Take a Folk Union member badge.`,
            6: `You fell into a Cooking Tank: Take serious burns and you always smell faintly of that substance.`
        },
    },
    {
        title: 'Public Nuisance',
        desc: `Something about you has always annoyed others. You can't imagine what it is.`,
        names: 'Harrick, Vasdene, Corley, Bagginton',
        debtholder: `Black Maze Security: Take shared ownership of a spark bomb (once activated, fires annoying sparks for d4 DAMAGE to everyone in the BLAST and continues to fire for ten minutes. Can be recharged).`,
        gear: `Long coat, newspaper.`,
        careerLabel1: `WHAT EXACTLY DO YOU DO?`,
        careerLabel2: `WHAT'S YOUR REDEEMING FEATURE?`,
        coinTable: {
            1: `Dump Scavenger: Take a pole-hook (d6, BULKY).`,
            2: `Etiquette Enthusiast: Take a stylish defence umbrella (d6, BULKY).`,
            3: `Tramspotter: Take a leaning stick (d6, BULKY).`,
            4: `Busybody: Take a dagger (d6), and a pair of binoculars.`,
            5: `Uncivil Agitator: Take a club (d6) and firebomb (d6 DAMAGE each round until extinguished).`,
            6: `Vermin Nurturer: Take a rod (d6), and a sack of vermin feed.`
        },
        hpTable: {
            1: `Animals Love You, except for reptiles.`,
            2: `You Know Somebody on every Borough Council.`,
            3: `You're a Mathematical Genius.`,
            4: `You dabble in Alien Languages (you know d6 key phrases).`,
            5: `You once Raised a Fortune for charity. You get some recognition, but other charities hound you.`,
            6: `Majestic Hair, but it takes some work each morning.`
        },
    },
    {
        title: 'Park Steward',
        desc: `Bastion's parks have grown out of hand. Yours was one of the worst.`,
        names: 'Harrick, Vasdene, Corley, Bagginton',
        debtholder: `Fallendine's Mechanical Heart Company: You all have at least partly mechanical hearts. If a strong magnet is placed near your chest you must pass a STR SAVE or die.`,
        gear: `Machete (d6) and overcoat.`,
        careerLabel1: `WHAT WAS THE DEAL WITH YOUR PARK?`,
        careerLabel2: `WHAT EQUIPMENT DID YOU BRING?`,
        coinTable: {
            1: `Overrun by Insect Swarms and you're Allergic: If you're ever stung by insect venom, lose d12 DEX.`,
            2: `Sank into the Underground: Take a very bright spot-lamp.`,
            3: `Descended into a War Zone: Take a coil of barbed wire.`,
            4: `Flooded by Industrial Chemicals: Take chemical-proof wading boots.`,
            5: `Caught Fire and Never Stopped: Take a fire extinguisher (foam).`,
            6: `Taken over by Wild Beasts: Take a pouch of predatory animal bait.`
        },
        hpTable: {
            1: `Your Crossbow (d6, BULKY).`,
            2: `A Bee Can (compressed bee-hive in a can, produces a small amount of honey or can be broken to release an angry swarm).`,
            3: `A Shield (+1 ARMOUR, BULKY) salvaged from an old statue.`,
            4: `A Flower Reference Book.`,
            5: `Your Lucky Shovel.`,
            6: `A sack of Compost (BULKY).`
        },
    },
    {
        title: 'Civic Butler',
        desc: `Maintaining the veil of order. All of Bastion's chaos beneath.`,
        names: 'Aloyus, Pworth, Purrel, Shamberer',
        debtholder: `Wunspit Spiritual Evictions: You replace your lights with spook lamps.They're identical but have a green tint and cast distracting shadows.`,
        gear: `A good suit.`,
        careerLabel1: `WHAT WAS YOUR MORNING JOB?`,
        careerLabel2: `WHAT WAS YOUR EVENING JOB?`,
        coinTable: {
            1: `Wake-Up-Caller: Take a collapsible morning-pole with knocking-end.`,
            2: `Crossword Consultant: You have an excellent vocabulary.`,
            3: `Clock-Hander: Take collapsible adjustment-pole with grabbing-end.`,
            4: `Paper Prepper: Take a writing set and excellent handwriting.`,
            5: `Breakfast-Snail Gatherer: Take a snail prising tool.`,
            6: `Coiffeur: Take a can of hairspray.`
        },
        hpTable: {
            1: `Bird Repeller: Take a pigeon gun (d6 BLAST, BULKY).`,
            2: `Hound Calmer: Take a beating stick (d6).`,
            3: `Stalker Tender: Take a whip (d6).`,
            4: `Vagrant Dislodger: Take a pike (d8, BULKY).`,
            5: `Intruder Watcher: Take a tiny pistol (d4).`,
            6: `Underling Reprimander: Take a rollocking cane (d6).`
        },
    },
    {
        title: 'Estate Squire',
        desc: `Remnants of aristocracy linger between Bastion and Deep Country. History's long shadow, and you were born into their service.`,
        names: 'Ferruca, Moale, Callas, Lipoma',
        debtholder: `The Voice of the Hogs: If you consume a pigrat product or harm any pig-like being, the Voice of the Hogs knows and adds £500 to your debt.`,
        gear: `Blunt spear (d6, BULKY), pack-animal brush.`,
        careerLabel1: `WHY WERE YOU SENT TO BASTION?`,
        careerLabel2: `WHAT'S WEIRD ABOUT YOUR MASTER?`,
        coinTable: {
            1: `To Bring Down the City (you probably won't): Take a barrow-bomb (d12 BLAST, must be set in place and has a very long fuse, comes with built-in barrow).`,
            2: `To Fight in a Tournament that Didn't Really Exist: Take a set of Crude Armour (ARMOUR 1, BULKY).`,
            3: `For an Arranged Marriage: Take fancy wedding clothes.`,
            4: `To Learn about Modern Society: Take a bicycle.`,
            5: `To get the Sinning out of your System: Take a bottle of brandy.`,
            6: `To Spread Word of your Master's Greatness: Take a bugle and flattering painting of Master.`
        },
        hpTable: {
            1: `Technically your Liege is a Pack-Beetle: You can understand the general meaning of beetle noises.`,
            2: `They Died, but still Haunt the Grounds: Once a day you can ask them a question and get a faint response that only you can hear.`,
            3: `You've Never Actually Met Them: You get all orders remotely. Take a pocket radio.`,
            4: `Their Lands were Flooded: Take a back-raft (BULKY, carries one person, can be carried as a backpack).`,
            5: `They Live Suspended in a Water Tank: You can understand people talking underwater, even if it's just bubbly gibberish.`,
            6: `You've Never Seen them Sober: But you know how to handle them. Drunk people like talking to you.`
        },
    },
    {
        title: 'Magitech Whisperer',
        desc: `Industrial Aethertech sometimes needs a mallet, sometimes a whisper. You carry both.`,
        names: 'Gram, Elgie, Royce, Jannifer',
        debtholder: `Cracknuggle Marbles and Jacks: Each of you choose to have either a bag of marbles, jacks, or a yo-yo.`,
        gear: `Mallet (d6), set of screwdrivers and spanners.`,
        careerLabel1: `WHAT GAVE YOU YOUR LOVE OF MACHINES?`,
        careerLabel2: `WHAT'S YOUR PARTICULAR APPROACH?`,
        coinTable: {
            1: `Cheating Vending Machines out of Gum: Take a pack of gum (anchovy).`,
            2: `You were a Gear-Monkey in a Sweatshop: You're still double-jointed from squeezing into gaps.`,
            3: `You Hate Machinery, but it's your Only Talent: Take a book of sad poetry.`,
            4: `You were Raised by Clock-Makers: Take a broken pocket-watch.`,
            5: `An Industrial Accident Killed your Cruel Family: Take a can of aged gruel.`,
            6: `You Just Don't Like People: Take a bottle of poison.`
        },
        hpTable: {
            1: `By touching your palm to a piece of machinery you can Sense its Purpose and any ailments it is suffering from.`,
            2: `You Delegated Everything to a brilliant but spineless colleague who still follows you (2HP, toolkit).`,
            3: `Lack of Subtlety. Swap your mallet for a powered-hammer (d8, BULKY, takes a turn to power up, very loud).`,
            4: `Oils and Mysticism.Take three bottles of machine oil and some incense sticks.`,
            5: `Thorough Checking of every option.You can fix any machine but it takes d20 hours.`,
            6: `You Know Next-to-Nothing about machines, just more than your employer. It got you paid for a while. Take a particularly shiny tool set.`
        },
    },
    {
        title: 'Agricultural Saboteur',
        desc: `You carried out dirty jobs for malicious farmers. Now you see Bastion is even more ruthless.`,
        names: 'Urmer, Ibley, Dayall, Ani',
        debtholder: `Take shared ownership of a football-sized Void-bird egg (unfertilised).`,
        gear: `Pitchfork (d6, BULKY).`,
        careerLabel1: `WHO WAS YOUR LAST EMPLOYER?`,
        careerLabel2: `WHAT'S THE LAST SCRAP OF YOUR LIFE AS A SABOTEUR?`,
        coinTable: {
            1: `Apiary Acreage: Take a big jar of honey.`,
            2: `Curious Creameries: Take a big urn of strange milk.`,
            3: `Fromarge & Fray Farms: Take a big wheel of cheese.`,
            4: `Homestead Heights: Take a pipe and weed.`,
            5: `Gammon Grange: Take a whole ham.`,
            6: `Haystacks House: Take a scarecrow's head.`
        },
        hpTable: {
            1: `A Flamethrower (d6, BLAST, BULKY).`,
            2: `A Haywire Bomb (crackling explosion that does no harm, but disables anything electric in the BLAST).`,
            3: `One last Firebomb (d6 DAMAGE each round until extinguished).`,
            4: `A Sack of Machine-Scrap (1-in-6 chance of any machine part you need being in there).`,
            5: `Rust Wax (Enough to spread over a hand-sized patch of metal, causing it to rust in seconds).`,
            6: `Anti-Plant Bomb (d6 BLAST, destroys plant life and +d12 DAMAGE against plant-creatures).`
        },
    },
    {
        title: 'Eldritch Vassal',
        desc: `You are property of an Eldritch Patron, but crave a normal life. You know better than to displease your liege.`,
        names: 'Sapp, Minnred, Homis, Wammel',
        debtholder: `The Standards Unification Office: You are bound by oath to use an obscure time system rather than more popular standards. None of you can read a normal clock or calendar.`,
        gear: `Dagger (d6, decorated to suit your patron), ridiculous garment marking you as property of an animal.`,
        careerLabel1: `WHICH ELDRITCH PATRON DID YOU SERVE?`,
        careerLabel2: `WHAT ERRAND HAVE YOU ABANDONED?`,
        coinTable: {
            1: `The Brushreaver Parliament: Seemingly no intelligence beyond normal brushreavers, but they know that they own you.`,
            2: `A Mummified Platypus: Can communicate telepathically. Mostly desires food that it cannot eat.`,
            3: `A Big Old Evil Serpent: Talks very slowly and weaves complex plots that never amount to anything.`,
            4: `A Tentacled Octopoid: Stuck in a tank somewhere. Speaks through a child translator.`,
            5: `A Talking Mantis: Eloquent but stupid. Always carries their insubordination rod (d8).`,
            6: `Giant Groundwurm: Delivers typed instructions, then burrows back underground.`
        },
        hpTable: {
            1: `Capturing a Deserter: Take a blowgun and 3 tranquiliser darts (DEX SAVE to avoid sedation).`,
            2: `Hunting Down Somebody Known for Eating your Patron's Species: Take a pistol (d6).`,
            3: `Retrieving a Specialist Food that they Love: Take one piece of fine food suitable for your patron.`,
            4: `Buying Fine Clothes for your Patron: Take a formal suit to fit them.`,
            5: `Delivering a Declaration of War to an Old Rival: Take a ceremonial bugle.`,
            6: `Punitive Pilgrimage to Repent for a Past Mistake: You are missing one eye.`
        },
    },
    {
        title: 'Massifist of Massifcountry',
        desc: `Everything is big in Massifcountry. You stopped growing just below the ceiling.`,
        names: 'Throngon, Paximart, Ulvulca, Jeckeride',
        debtholder: `Doggarly Artful Latturs: Share ownership of a set of foot-tall capital letters.There are plenty of each letter but no Es or Ns.`,
        gear: `Huge fists (d6 each when unarmed), huge body (swap your highest ABILITY SCORE into STR).`,
        careerLabel1: `WHAT BIG THING DO YOU HAVE?`,
        careerLabel2: `HOW HAVE YOU FITTED IN TO LIFE AMONGST THE SMALL?`,
        coinTable: {
            1: `Big Cauldron (BULKY).`,
            2: `Big Crossbow (d8, BULKY).`,
            3: `Big Armour (ARMOUR 1, BULKY).`,
            4: `Big Spoon (d8, BULKY).`,
            5: `Big Bramblemutt (6HP, d8 bite).`,
            6: `Big Hammer (d8, BULKY).`
        },
        hpTable: {
            1: `Unerringly Careful: You move in complete silence.`,
            2: `Food and Medicine Tester: Ignore the effect of any toxins or poisons.`,
            3: `Gravestone Carver: Take a chisel and brush.`,
            4: `Wind Prodigy: You can play wind instruments without stopping for breath. Take an oversized clarinet.`,
            5: `Clerk at Large: You know the fundamentals of bureaucracy. Take an oversized pen.`,
            6: `Experimental Vocal Softening: Now you can only speak in a whisper.`
        },
    },
    {
        title: 'Divine Prodigy',
        desc: `Raised in a cult retreat for a single purpose, which didn't work out. Now cast out into the world.`,
        names: 'Baztum, Lontanchene, Romecca, Shalutahen',
        debtholder: `Walken Civic Spider Studies: You have a Civic Spider chaperone (5HP, d8 maul). It is highly civilised and obedient, but never violent and still bound by the limits of being a giant spider. If it returns to your Debtholder having learned something about the world your Debt is halved. If it is lost, your Debt is doubled.`,
        gear: `Fancy silk robes, ornate sceptre (d6).`,
        careerLabel1: `WHAT WAS YOUR PURPOSE?`,
        careerLabel2: `WHAT WENT WRONG?`,
        coinTable: {
            1: `To Sing the Song of the Old Stars: It sounds awful.`,
            2: `To Birth/Sire the Voidchild: You have a chastity belt welded on.`,
            3: `The First Meal of the Cosmic Swarm: You were bathed in honey since birth.You always attract bugs.`,
            4: `To Speak only Truth: You have no tongue.`,
            5: `To Remain Pure: Your ears have been blocked up with lead, but you can just about hear if people shout.`,
            6: `To Become a Truth Oracle: You can never lie, but you can refuse to answer a question.`
        },
        hpTable: {
            1: `You got Too Old: Take reading glasses, you cannot read without them.`,
            2: `The Temple Burned Down: Take a jar of holy ashes.`,
            3: `The Cult was Absorbed into a Faith Conglomerate: Take a “non-messianic” brand on your arm.`,
            4: `Ascension Day Came and Nothing Happened: Take a cheap pocket-watch given as compensation for your time.`,
            5: `You Lost a Cult War: Lose an arm.`,
            6: `You Snuck Away: The cult are still looking for you.`
        },
    },
    {
        title: 'Exotic Food Supplier',
        desc: `When people tire of sundry dishes, you step in with new delicacies.`,
        names: 'Ravenor, Mimsy, Calcobrina, Mox',
        debtholder: `Corbin Cortez the Zoo Keeper: A fearsome hunter who collected most of the animals that are displayed in his zoo. Assisted by a spider butler and a mocking bird.`,
        gear: `Large bucket of the appropriate food, long-handled fork (d6).`,
        careerLabel1: `WHAT IS THE EXOTIC FOOD THAT YOU PROCURED?`,
        careerLabel2: `WHO DID YOU SELL TO?`,
        coinTable: {
            1: `Sausage Maker: Take a sausage maker's cloak.While you are wearing it and loudly declaring that you are a sausage maker, Bastiards pay no attention to casual murder on their streets, as long as it is followed by swift dismemberment and removal of the body.`,
            2: `Gigantic Pumpkin Merchant:Take an acupuncture needle of prodigious growth. Any living organism pricked doubles in size over a minute. Effects doubled on vegetables. Effects doubled on orange things.`,
            3: `Pickled Eggler: Take a pickling jar. Currently full of delicious dolphin eggs. Anything you put in it becomes both edible and preserved.`,
            4: `Jellyfish Farmer: Popular among those who have no time for lunch. Gain a jelly serving tube in your sleeve, capable of discreetly serving jellyfish at pistol-range.`,
            5: `Pigeon Hunter: You collect their tongues for candy. Gain a reciprocating bird-caller, capable of imitating any bird call with absolute perfection.`,
            6: `Calf Suplexer: You make the most tender veal. Gain an acoustic beast-scaring device.`
        },
        hpTable: {
            1: `The Hungry Hole: Take one of the intelligent, loyal skeletal companions (1HP) that the Hungry Hole occasionally burps out as payment.`,
            2: `Lady Skeletonhands: Take three of the Lady's prank incinerators, used to incinerate food after 'giving' it to a homeless person.Ten seconds after being inserted into a small object, the object catches fire. Looks like a cocktail olive on a toothpick.`,
            3: `The Slobbermen: Take a jar of digestive acid.`,
            4: `The Starvation Artists: Take an incredibly lifelike fake leg with a secret compartment inside, normally used to smuggle food.`,
            5: `The Lords of Aluminium and Lumber: Take a powerful rotary saw (d8, BULKY, can cut metal, but slowly and loudly).`,
            6: `The Rubber Barons:Take a rubber jumpsuit.`
        },
    },
    {
        title: 'Worthless Graduate',
        desc: `You've spent a long time in colleges, arguing about words. Your career prospects are poor.`,
        names: 'Tolly, Langelle, Befloma, Tut',
        debtholder: `Forssa Hook and Anchor: Share ownership of a small rowboat (with wheels and handles for pushing on land).`,
        gear: `Worthless certificate.`,
        careerLabel1: `WHAT WAS YOUR SUBJECT?`,
        careerLabel2: `WHAT WAS YOUR FAVOURITE EXTRA-CURRICULAR ACTIVITY?`,
        coinTable: {
            1: `Theoretical Economics: Bankers hate you.`,
            2: `Occult Medicine: You can “order off-menu” when you visit a surgeon.`,
            3: `Urban Philosophy: You can justify anything weird in Bastion.`,
            4: `Animal Ethics: You know animals' true feelings by watching their behaviour.`,
            5: `Emulsification Studies: You know what will happen when any two liquids are mixed.`,
            6: `Technological Arts: You can see the beauty in any piece of machinery.`
        },
        hpTable: {
            1: `Chopping Logs: Take a long axe (d8, BULKY).`,
            2: `Target Shooting: Take a rifle (d8, BULKY).`,
            3: `Rock Climbing: Take two climbing picks (d6 each).`,
            4: `Whittling: Take a knife (d6).`,
            5: `Merkrid Hunting: Take a hand-spear (d6).`,
            6: `Canal Punting: Take a pole (d6, BULKY).`
        },
    },
    {
        title: 'Alternative Groomer',
        desc: `You make things pretty and nice-smelling. But not people.`,
        names: 'Laurel, Fanten, Tresser, Newtrog',
        debtholder: `Zonar Municipal Acoustics: You each get an experimental electronic musical instrument, temperamental enough to be worthless.`,
        gear: `Perfume spritzer.`,
        careerLabel1: `WHAT WAS YOUR SPECIALITY?`,
        careerLabel2: `WHAT WENT WRONG?`,
        coinTable: {
            1: `Overgrown Trees: Take a pole-saw (d6, BULKY).`,
            2: `Transport Crawlers: Take a scratching pole (d6, BULKY).`,
            3: `Long-Hair Livestock: Take a pair of shears (d6).`,
            4: `Pet Lizards: Take a scale-scraper (d6).`,
            5: `Celebrity Skulls: Take a brain hook (d6).`,
            6: `Forgotten Statues: Take a pick-axe (d6, BULKY).`
        },
        hpTable: {
            1: `You Smell so Bad that Nobody Wanted to HireYou: Upgrade your perfume to extra-strong.`,
            2: `Filthy Rumours: Take a wig and glasses to disguise yourself.`,
            3: `Your Style was just Too Radical: Take a weird haircut.`,
            4: `You Slipped and took off your own Nose: Take a prosthetic nose.`,
            5: `You were Ruined by a Rival, but got Revenge: Take a half-full bucket of tar and sack of feathers.`,
            6: `You Slipped and Murdered a Client: Take a £1k bounty on your head.`
        },
    },
    {
        title: 'Avant Guardsman',
        desc: `Not all militias are conventional. Yours was quite interesting before it collapsed.`,
        names: 'Hatta, Moglithe, Katsey, Glum',
        debtholder: `Small Aethertech Board: Share ownership of a bag full of tangled wires and blown fuses.`,
        gear: `Flashy uniform, knife (d6).`,
        careerLabel1: `WHAT MADE YOUR UNIT DIFFERENT?`,
        careerLabel2: `WHAT ELSE?`,
        coinTable: {
            1: `Strangling was the only permitted method of combat. Strangle for d6 DAMAGE when using both hands.`,
            2: `You have a somewhat-trained Attack Brushreaver (7HP, d8 bite).`,
            3: `You used Prototype Electric Swords (d6, ignores ARMOUR, rolls of 1 cause DAMAGE to you instead).`,
            4: `You were focused purely on Pest Control. Take a bug bomb (d10 BLAST, only affects insects).`,
            5: `You Replaced your Hand with a repeating pistol (d6).`,
            6: `Your voice box was replaced with a Mechanical Voice, which can focus a deadly soundbeam (d6).`
        },
        hpTable: {
            1: `You Served a Machine: Take a mechanical eye (limited zoom function).`,
            2: `You Served under the Void: 1-in-3 chance that you speak a little of any Alien language.`,
            3: `You have Unreliable Grav-Boots: You can land from any height with a DEX SAVE, otherwise you hit the ground as normal.`,
            4: `You Swore an Oath Against Pack Animals: You are DEPRIVED for the remainder of the day if you have to ride or serve a pack animal.`,
            5: `You were Stitched into your Uniform: It can only be removed by destroying it.`,
            6: `You would only Fight Drunk: Take a bottle of brandy and you're DEPRIVED when sober.`
        },
    },
    {
        title: 'Factory Retainer',
        desc: `Your family left you to the factory. Your time in there is done, so you've ended up on the street.`,
        names: 'Kaywither, Ganning, Unger, Sofskey',
        debtholder: `Allied Birdwatchers and Snoops: Share ownership of a huge encyclopaedia of birds and other flying creatures, with eye-holes poked out of the back.`,
        gear: `Flat cap, industrial pole (d6, BULKY).`,
        careerLabel1: `WHAT HAVE YOU SPENT YOUR ENTIRE LIFE STARING AT THROUGH MACHINERY?`,
        careerLabel2: `WHAT DID YOU GET TO PREPARE YOU FOR THIS?`,
        coinTable: {
            1: `Eggs: Take a dozen.`,
            2: `Biscuits: Take a box of broken shortbread.`,
            3: `Bullets: Take a small pouch of gunpowder.`,
            4: `Coffins: Take a hammer (d6) and nails.`,
            5: `Boxes: Take an unassembled box big enough to fit you inside.`,
            6: `Coal: Take a shovel.`
        },
        hpTable: {
            1: `A broken compass.`,
            2: `A broken radio.`,
            3: `An empty paint can.`,
            4: `A broken pistol.`,
            5: `A fake coin (unconvincing).`,
            6: `An empty brandy bottle.`
        },
    },
    {
        title: 'Grief Diplomat',
        desc: `A life of carrying bad messages and managing expectations. You appreciated their patience.`,
        names: 'Hamidal, Berrast, Augoner, Rudlamp',
        debtholder: `Alligator Yul: A crime lord with a terrible alligator gimmick. If anybody laughs at him he adds £500 to their Debt.`,
        gear: `Cane (d6).`,
        careerLabel1: `WHAT WAS YOUR SPECIALITY?`,
        careerLabel2: `WHAT WENT WRONG?`,
        coinTable: {
            1: `Informing Relatives of the Dead: Take a bottle of cheap whisky.`,
            2: `Down-Scaling Poorhouses: Take a pocket shock prod (d6, non-lethal).`,
            3: `Deep Country Liaison: Take a shotgun (d6, +d6 at point blank).`,
            4: `Comforting Survivors: Take a council joke book.`,
            5: `Reclaiming Erroneous Tax Rebates: Take a crowbar.`,
            6: `Spelling Correction: Take a dictionary.`
        },
        hpTable: {
            1: `Your Tongue is Too Big for your Mouth, so people don't always understand you first time.`,
            2: `You were Too Empathetic.Take a locket with portrait (worthless).`,
            3: `You Developed a Limp.You can move quickly enough but it looks silly and you can't hide it.`,
            4: `You have Bugspots, a harmless but hideous disease that has a 50% chance to be transmitted with any contact.`,
            5: `You were Used as a Scapegoat for a gross scandal.The public hate you, but you've earned some favours in the Borough Council.`,
            6: `You got Too Involved in a Revolt. Replace one hand with a hook.`
        },
    },
    {
        title: 'Lone Stargazer',
        desc: `You're not watching for clues, you're watching for incoming threats. Alone in your observatory for too long, your shift is over.`,
        names: 'Asti, Wulf, Oberto, Len',
        debtholder: `Future Foods: Share ownership of three unmarked tins of prototype tinned meals (jellied bird, ice-cream pie, full cooked breakfast).`,
        gear: `Pocket telescope, cuff-pistol (d4).`,
        careerLabel1: `WHAT'S THE BEST THING YOU'VE SEEN?`,
        careerLabel2: `WHAT HAS ALL THAT TIME ALONE DONE TO YOU?`,
        coinTable: {
            1: `A Rift into an Undersea Nightmare: All sea creatures hate you.`,
            2: `A Vision of your Death, Falling into a Pit: If you face this situation, you automatically fail any SAVES to avoid it.`,
            3: `A Cosmic Swarm Approaching: You are DEPRIVED if you are in a room with bugs of any sort.`,
            4: `A Vision of your Death, Being Eaten by a Huge Bird: If you face this situation, you automatically fail any SAVES to avoid it.`,
            5: `A Bright Reflection of Bastion, where all Conflict is Solved: Swap your cuff-pistol for a book of optimistic poetry.`,
            6: `A Vision of your Death, Being Burned Alive: If you face this situation, you automatically fail any SAVES to avoid it.`
        },
        hpTable: {
            1: `Your body Rejects Non-Processed Food.`,
            2: `You've Emotionally Bonded with your Woolly Hat.You are DEPRIVED unless wearing it, or one exactly like it.`,
            3: `You Learned Every Solitaire Card Game.Take a worn deck of cards.`,
            4: `The eye that you close when peering into your telescope has Completely Fused Shut.`,
            5: `You've Forgotten How to Talk.`,
            6: `You Hate the Sun.You are DEPRIVED in direct sunlight.`
        },
    },
    {
        title: 'Tunnel Stray',
        desc: `You wandered dark places for too long, tormented by Underground entities. You came out less than human.`,
        names: 'Veyron, Jeene, Ox, Mara',
        debtholder: `Captain Rumtutty's Maritime Experience: You all have matching, poorly drawn, naval-themed tattoos.`,
        gear: `Pasty skin or fur, flask of gear-oil, dagger (d6).`,
        careerLabel1: `WHAT'S WRONG WITH YOU?`,
        careerLabel2: `SERIOUSLY, WHAT ELSE IS WRONG WITH YOU?`,
        coinTable: {
            1: `Feral Appetite: Cooked food is poison to you.`,
            2: `Ear-Splitter: Your voice is awful, everybody hates it.`,
            3: `Tar-Blooded: Your blood has turned black, sticky, and foul smelling.`,
            4: `Night Terrors: You always scream in your sleep.`,
            5: `Slug-Skin: You secrete a thin layer of slime across your whole body.`,
            6: `Atonal: You are DEPRIVED in the presence of tuneful music.`
        },
        hpTable: {
            1: `Weird things in the Underground Just Let You Pass, if you don't cause any fuss.`,
            2: `You're Double-Jointed in a disgusting way.`,
            3: `Your saliva is Mildly Acidic, enough to dissolve paper.`,
            4: `Food Goes Bad if you possess it for more than a few minutes.`,
            5: `Your Bones make a Cracking Sound when you walk.`,
            6: `You've had your Teeth Pulled Out.`
        },
    },
    {
        title: 'Body Jockey',
        desc: `You have a fantastic body, but it is simply your vehicle. Keep your fragile self hidden.`,
        names: 'Tubett, Cyrel, Snive, Squill',
        debtholder: `The Machine Shop: Take shared ownership of a pair of broken typewriters.`,
        gear: `Complete control of a fake body (which has the ABILITY SCORES you rolled). Your true form rides on top.`,
        careerLabel1: `WHAT'S UP WITH YOUR FAKE BODY?`,
        careerLabel2: `WHAT'S YOUR TRUE FORM?`,
        coinTable: {
            1: `It's a Man-Machine. It has ARMOUR 1.`,
            2: `It's a Regular Person, but with an utterly blank mind.`,
            3: `It's a Mock Person. Children love it, adults find it creepy.`,
            4: `It's a Re-Animated Person. It can lash out (d8) like a wild animal.`,
            5: `It's a Man-Ape, it can leap and climb accordingly.`,
            6: `It's a Heap of White Slime that happens to take a humanoid form.`
        },
        hpTable: {
            1: `Small Sentient Lobstrosity (2d6 for all ABILITY SCORES, 4HP).`,
            2: `Tiny Clay Person (d10 for all ABILITY SCORES, 3HP).`,
            3: `Smoke-Being (Immaterial, but if your fake body dies then you die, 2HP).`,
            4: `Mechanical Raptoryx (d8 for all ABILITY SCORES, 2HP, clumsy flight).`,
            5: `Parasitic Fungus (d6 for all ABILITY SCORES, 1HP).`,
            6: `Brain Slug (d4 for all ABILITY SCORES, 1HP).`
        },
    },
    {
        title: 'Underground Weirdo',
        desc: `Born and raised in the Underground, below space and time. You've always been odd, and have gotten much worse.`,
        names: 'Eater, Scram, Pattie, Proutnay',
        debtholder: `Seapress Aquatic Pest Control: Take shared ownership of a Salt-Unsalt-Bomb.Throwing it into a pond-sized body of water turns saltwater fresh or freshwater salted.`,
        gear: `Club (d6).`,
        careerLabel1: `WHAT MAKES YOU APPEAR UNNATURAL?`,
        careerLabel2: `WHAT KEEPS YOU A PERSON?`,
        coinTable: {
            1: `Five Eyes (Your eyes can see all around you).`,
            2: `Shaggy Translucent Fur All Over (With some fleas).`,
            3: `No Bones (Supported by cartilage).`,
            4: `Fly Wings (Clumsy flight).`,
            5: `Stubby Metallic Horns (+d6 when you charge).`,
            6: `Tiny Second Head (Roll a separate d12 for CHA and give them a name).`
        },
        hpTable: {
            1: `Your Pet: Take a misshapen dog-thing (2HP, d4 bite).`,
            2: `Your Appreciation for Science: Take a lens and biology book.`,
            3: `Your Love of the Theatre: Take a costume that helps you pass for a normal person.`,
            4: `Your Music: Take a rusty glockenspiel.`,
            5: `Your Paperwork: Take a set of “Certified Person” papers.`,
            6: `Your Love of Fine Wine: You can identify practically any alcoholic drink blind.`
        },
    },
    {
        title: 'Inseparable Twins',
        desc: `There are two of you, identical in most ways. SPECIAL: Divide ABILITY SCORES and HP equally, remainders to the eldest.`,
        names: 'Mucka/Macka, Toiler/Tol, Scraph/Scon, Aben/Abid',
        debtholder: `Helping Gland Organ Surrogates: Take shared ownership of a heart in a box. It's well preserved if it is kept sealed.`,
        gear: `Matching sabres (d6), matching clothes.`,
        careerLabel1: `WHAT DOES THE ELDER TWIN GET?`,
        careerLabel2: `WHAT DOES THE YOUNGER TWIN GET?`,
        coinTable: {
            1: `The Family Hunting Rifle (d8, BULKY).`,
            2: `All of the Athletic Prowess. Gain 7 STR.`,
            3: `A Shield (BULKY, +1 ARMOUR) with the family crest.`,
            4: `All of the Grace and Subtlety. Gain 7 DEX.`,
            5: `Significantly Nicer Clothes.`,
            6: `Beautiful Hair and Voice. Gain 7 CHA.`
        },
        hpTable: {
            1: `Yes indeed you have 0HP. You're alive, just Ultra-Sickly.You never gain more HP, and always face the worst consequences for exposure to disease or toxins.`,
            2: `A Messed-Up Face.`,
            3: `A Home-Made Bomb (d8, BLAST).`,
            4: `A Missing Ear.`,
            5: `A Gum Addiction (DEPRIVED if you go a day without a stick).`,
            6: `One Useless Arm.`
        },
    },
]