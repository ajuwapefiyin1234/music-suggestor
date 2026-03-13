const songs = [
    {
        title: "Mystical Magical",
        artist: "Benson Boone",
        mood: "pop",
        link: "https://open.spotify.com/search/Mystical%20Magical%20Benson%20Boone"
    },
    {
        title: "Manchild",
        artist: "Sabrina Carpenter",
        mood: "pop",
        link: "https://open.spotify.com/search/Manchild%20Sabrina%20Carpenter"
    },
    {
        title: "Daisies",
        artist: "Justin Bieber",
        mood: "pop",
        link: "https://open.spotify.com/search/Daisies%20Justin%20Bieber"
    },
    {
        title: "All of Me",
        artist: "John Legend",
        mood: "pop",
        link: "https://open.spotify.com/search/All%20of%20Me%20John%20Legend"
    },
    {
        title: "Fate of Ophelia",
        artist: "Taylor Swift",
        mood: "pop",
        link: "https://open.spotify.com/search/Fate%20of%20Ophelia%20Taylor%20Swift"
    },
    {
        title: "Take My Breath",
        artist: "The Weeknd",
        mood: "pop",
        link: "https://open.spotify.com/search/Take%20My%20Breath%20The%20Weeknd"
    },
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        mood: "pop",
        link: "https://open.spotify.com/search/Blinding%20Lights%20The%20Weeknd"
    },
    {
        title: "Rich Girl",
        artist: "Gwen Stefani feat. Eve",
        mood: "pop",
        link: "https://open.spotify.com/search/Rich%20Girl%20Gwen%20Stefani%20Eve"
    },
    {
        title: "Anxiety",
        artist: "Doechii",
        mood: "pop",
        link: "https://open.spotify.com/search/Anxiety%20Doechii"
    },
    {
        title: "Sports car",
        artist: "Tate McRae",
        mood: "pop",
        link: "https://open.spotify.com/search/Sports%20car%20Tate%20McRae"
    },
    {
        title: "Where Is My Husband?",
        artist: "RAYE",
        mood: "pop",
        link: "https://open.spotify.com/search/Where%20Is%20My%20Husband%20RAYE"
    },
    {
        title: "Lush Life",
        artist: "Zara Larsson",
        mood: "pop",
        link: "https://open.spotify.com/search/Lush%20Life%20Zara%20Larsson"
    },
    {
        title: "Youngblood",
        artist: "5 Seconds of Summer",
        mood: "pop",
        link: "https://open.spotify.com/search/Youngblood%205%20Seconds%20of%20Summer"
    },
    {
        title: "Too Sweet",
        artist: "Hozier",
        mood: "pop",
        link: "https://open.spotify.com/search/Too%20Sweet%20Hozier"
    },
    {
        title: "Boss",
        artist: "Fifth Harmony",
        mood: "pop",
        link: "https://open.spotify.com/search/Boss%20Fifth%20Harmony"
    },
    {
        title: "Power",
        artist: "Little Mix",
        mood: "pop",
        link: "https://open.spotify.com/search/Power%20Little%20Mix"
    },
    {
        title: "Diet Pepsi",
        artist: "Addison Rae",
        mood: "pop",
        link: "https://open.spotify.com/search/Diet%20Pepsi%20Addison%20Rae"
    },
    {
        title: "Fame Is a Gun",
        artist: "Addison Rae",
        mood: "pop",
        link: "https://open.spotify.com/search/Fame%20Is%20a%20Gun%20Addison%20Rae"
    },
    {
        title: "Espresso",
        artist: "Sabrina Carpenter",
        mood: "pop",
        link: "https://open.spotify.com/search/Espresso%20Sabrina%20Carpenter"
    },
    {
        title: "Please Please Please",
        artist: "Sabrina Carpenter",
        mood: "pop",
        link: "https://open.spotify.com/search/Please%20Please%20Please%20Sabrina%20Carpenter"
    },
    {
        title: "As It Was",
        artist: "Harry Styles",
        mood: "pop",
        link: "https://open.spotify.com/search/As%20It%20Was%20Harry%20Styles"
    },
    {
        title: "vampire",
        artist: "Olivia Rodrigo",
        mood: "pop",
        link: "https://open.spotify.com/search/vampire%20Olivia%20Rodrigo"
    },
    {
        title: "greedy",
        artist: "Tate McRae",
        mood: "pop",
        link: "https://open.spotify.com/search/greedy%20Tate%20McRae"
    },
    {
        title: "Birds of a Feather",
        artist: "Billie Eilish",
        mood: "pop",
        link: "https://open.spotify.com/search/Birds%20of%20a%20Feather%20Billie%20Eilish"
    },

    {
        title: "Sunny Day",
        artist: "beabadoobee",
        mood: "indie",
        link: "https://open.spotify.com/search/Sunny%20Day%20beabadoobee"
    },
    {
        title: "Lovesong",
        artist: "beabadoobee",
        mood: "indie",
        link: "https://open.spotify.com/search/Lovesong%20beabadoobee"
    },
    {
        title: "Real Man",
        artist: "beabadoobee",
        mood: "indie",
        link: "https://open.spotify.com/search/Real%20Man%20beabadoobee"
    },
    {
        title: "Apple Cider",
        artist: "beabadoobee",
        mood: "indie",
        link: "https://open.spotify.com/search/Apple%20Cider%20beabadoobee"
    },
    {
        title: "This Is How It Went",
        artist: "beabadoobee",
        mood: "indie",
        link: "https://open.spotify.com/search/This%20Is%20How%20It%20Went%20beabadoobee"
    },
    {
        title: "The Moon Song",
        artist: "beabadoobee",
        mood: "indie",
        link: "https://open.spotify.com/search/The%20Moon%20Song%20beabadoobee"
    },
    {
        title: "Juna",
        artist: "Clairo",
        mood: "chill",
        link: "https://open.spotify.com/search/Juna%20Clairo"
    },
    {
        title: "4EVER",
        artist: "Clairo",
        mood: "chill",
        link: "https://open.spotify.com/search/4EVER%20Clairo"
    },
    {
        title: "Heaven",
        artist: "Clairo",
        mood: "chill",
        link: "https://open.spotify.com/search/Heaven%20Clairo"
    },
    {
        title: "Pretty Girl",
        artist: "Clairo",
        mood: "chill",
        link: "https://open.spotify.com/search/Pretty%20Girl%20Clairo"
    },
    {
        title: "Sinking",
        artist: "Clairo",
        mood: "chill",
        link: "https://open.spotify.com/search/Sinking%20Clairo"
    },
    {
        title: "Alley Rose",
        artist: "Conan Gray",
        mood: "indie",
        link: "https://open.spotify.com/search/Alley%20Rose%20Conan%20Gray"
    },
    {
        title: "People Watching",
        artist: "Conan Gray",
        mood: "indie",
        link: "https://open.spotify.com/search/People%20Watching%20Conan%20Gray"
    },
    {
        title: "Affluenza",
        artist: "Conan Gray",
        mood: "indie",
        link: "https://open.spotify.com/search/Affluenza%20Conan%20Gray"
    },
    {
        title: "Wish You Were Sober",
        artist: "Conan Gray",
        mood: "indie",
        link: "https://open.spotify.com/search/Wish%20You%20Were%20Sober%20Conan%20Gray"
    },
    {
        title: "Who Knows",
        artist: "Daniel Caesar",
        mood: "chill",
        link: "https://open.spotify.com/search/Who%20Knows%20Daniel%20Caesar"
    },
    {
        title: "We Find Love",
        artist: "Daniel Caesar",
        mood: "chill",
        link: "https://open.spotify.com/search/We%20Find%20Love%20Daniel%20Caesar"
    },
    {
        title: "Get You",
        artist: "Daniel Caesar",
        mood: "chill",
        link: "https://open.spotify.com/search/Get%20You%20Daniel%20Caesar"
    },
    {
        title: "Best Part",
        artist: "Daniel Caesar feat. H.E.R.",
        mood: "chill",
        link: "https://open.spotify.com/search/Best%20Part%20Daniel%20Caesar%20HER"
    },
    {
        title: "Call Me",
        artist: "Daniel Caesar",
        mood: "indie",
        link: "https://open.spotify.com/search/Call%20Me%20Daniel%20Caesar"
    },
    {
        title: "Out of Bounds",
        artist: "Malcolm Todd",
        mood: "indie",
        link: "https://open.spotify.com/search/Out%20of%20Bounds%20Malcolm%20Todd"
    },
    {
        title: "Mr. Incorrect",
        artist: "Malcolm Todd",
        mood: "indie",
        link: "https://open.spotify.com/search/Mr%20Incorrect%20Malcolm%20Todd"
    },
    {
        title: "Morning Coffee",
        artist: "Chevy",
        mood: "chill",
        link: "https://open.spotify.com/search/Morning%20Coffee%20Chevy"
    },
    {
        title: "If I Could Ride a Bike",
        artist: "Chevy",
        mood: "chill",
        link: "https://open.spotify.com/search/If%20I%20Could%20Ride%20a%20Bike%20Chevy"
    },
    {
        title: "Like the Movies",
        artist: "Laufey",
        mood: "study",
        link: "https://open.spotify.com/search/Like%20the%20Movies%20Laufey"
    },
    {
        title: "Tough Luck",
        artist: "Laufey",
        mood: "indie",
        link: "https://open.spotify.com/search/Tough%20Luck%20Laufey"
    },
    {
        title: "Valentine",
        artist: "Laufey",
        mood: "study",
        link: "https://open.spotify.com/search/Valentine%20Laufey"
    },
    {
        title: "Falling Behind",
        artist: "Laufey",
        mood: "study",
        link: "https://open.spotify.com/search/Falling%20Behind%20Laufey"
    },
    {
        title: "From The Start",
        artist: "Laufey",
        mood: "study",
        link: "https://open.spotify.com/search/From%20The%20Start%20Laufey"
    },
    {
        title: "Kingston",
        artist: "Faye Webster",
        mood: "chill",
        link: "https://open.spotify.com/search/Kingston%20Faye%20Webster"
    },
    {
        title: "A Dream With a Baseball Player",
        artist: "Faye Webster",
        mood: "chill",
        link: "https://open.spotify.com/search/A%20Dream%20With%20a%20Baseball%20Player%20Faye%20Webster"
    },
    {
        title: "Tumblr Girls",
        artist: "G-Eazy",
        mood: "indie",
        link: "https://open.spotify.com/search/Tumblr%20Girls%20G-Eazy"
    },
    {
        title: "Me, Myself & I",
        artist: "G-Eazy",
        mood: "indie",
        link: "https://open.spotify.com/search/Me%20Myself%20and%20I%20G-Eazy"
    },
    {
        title: "Clementine",
        artist: "grentperez",
        mood: "indie",
        link: "https://open.spotify.com/search/Clementine%20grentperez"
    },
    {
        title: "Absence of You",
        artist: "grentperez",
        mood: "indie",
        link: "https://open.spotify.com/search/Absence%20of%20You%20grentperez"
    },
    {
        title: "Cherry Wine",
        artist: "grentperez",
        mood: "indie",
        link: "https://open.spotify.com/search/Cherry%20Wine%20grentperez"
    },
    {
        title: "Stuck on You",
        artist: "grentperez",
        mood: "indie",
        link: "https://open.spotify.com/search/Stuck%20on%20You%20grentperez"
    },
    {
        title: "Sunny Days",
        artist: "wave to earth",
        mood: "chill",
        link: "https://open.spotify.com/search/Sunny%20Days%20wave%20to%20earth"
    },
    {
        title: "beck.",
        artist: "wave to earth",
        mood: "chill",
        link: "https://open.spotify.com/search/beck.%20wave%20to%20earth"
    },
    {
        title: "homesick",
        artist: "wave to earth",
        mood: "chill",
        link: "https://open.spotify.com/search/homesick%20wave%20to%20earth"
    },
    {
        title: "seasons",
        artist: "wave to earth",
        mood: "chill",
        link: "https://open.spotify.com/search/seasons%20wave%20to%20earth"
    },
    {
        title: "bad",
        artist: "wave to earth",
        mood: "chill",
        link: "https://open.spotify.com/search/bad%20wave%20to%20earth"
    },
    {
        title: "blue",
        artist: "yung kai",
        mood: "chill",
        link: "https://open.spotify.com/search/blue%20yung%20kai"
    },
    {
        title: "wildflower",
        artist: "yung kai",
        mood: "chill",
        link: "https://open.spotify.com/search/wildflower%20yung%20kai"
    },
    {
        title: "Do You Think You Could Love Me",
        artist: "yung kai",
        mood: "chill",
        link: "https://open.spotify.com/search/Do%20You%20Think%20You%20Could%20Love%20Me%20yung%20kai"
    },
    {
        title: "Knee Socks",
        artist: "Arctic Monkeys",
        mood: "indie",
        link: "https://open.spotify.com/search/Knee%20Socks%20Arctic%20Monkeys"
    },
    {
        title: "Arabella",
        artist: "Arctic Monkeys",
        mood: "indie",
        link: "https://open.spotify.com/search/Arabella%20Arctic%20Monkeys"
    },
    {
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        mood: "indie",
        link: "https://open.spotify.com/search/I%20Wanna%20Be%20Yours%20Arctic%20Monkeys"
    },
    {
        title: "Snap Out of It",
        artist: "Arctic Monkeys",
        mood: "indie",
        link: "https://open.spotify.com/search/Snap%20Out%20of%20It%20Arctic%20Monkeys"
    },
    {
        title: "UFO",
        artist: "GEMINI",
        mood: "indie",
        link: "https://open.spotify.com/search/UFO%20GEMINI"
    },
    {
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        mood: "indie",
        link: "https://open.spotify.com/search/Sweater%20Weather%20The%20Neighbourhood"
    },
    {
        title: "Daddy Issues",
        artist: "The Neighbourhood",
        mood: "indie",
        link: "https://open.spotify.com/search/Daddy%20Issues%20The%20Neighbourhood"
    },
    {
        title: "Someday I'll Get It",
        artist: "Alek Olsen",
        mood: "indie",
        link: "https://open.spotify.com/search/Someday%20Ill%20Get%20It%20Alek%20Olsen"
    },
    {
        title: "Don't Miss Me",
        artist: "Claire Rosinkranz",
        mood: "indie",
        link: "https://open.spotify.com/search/Don%27t%20Miss%20Me%20Claire%20Rosinkranz"
    },
    {
        title: "Backyard Boy",
        artist: "Claire Rosinkranz",
        mood: "indie",
        link: "https://open.spotify.com/search/Backyard%20Boy%20Claire%20Rosinkranz"
    },
    {
        title: "Frankenstein",
        artist: "Claire Rosinkranz",
        mood: "indie",
        link: "https://open.spotify.com/search/Frankenstein%20Claire%20Rosinkranz"
    },
    {
        title: "12 to 12",
        artist: "sombr",
        mood: "indie",
        link: "https://open.spotify.com/search/12%20to%2012%20sombr"
    },
    {
        title: "undressed",
        artist: "sombr",
        mood: "indie",
        link: "https://open.spotify.com/search/undressed%20sombr"
    },
    {
        title: "homewrecker",
        artist: "sombr",
        mood: "indie",
        link: "https://open.spotify.com/search/homewrecker%20sombr"
    },
    {
        title: "i wish i knew how to quit you",
        artist: "sombr",
        mood: "indie",
        link: "https://open.spotify.com/search/i%20wish%20i%20knew%20how%20to%20quit%20you%20sombr"
    },
    {
        title: "back to friends",
        artist: "sombr",
        mood: "indie",
        link: "https://open.spotify.com/search/back%20to%20friends%20sombr"
    },

    {
        title: "Midnight Fiction",
        artist: "ILLIT",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Midnight%20Fiction%20ILLIT"
    },
    {
        title: "Magnetic",
        artist: "ILLIT",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Magnetic%20ILLIT"
    },
    {
        title: "Lucky Girl Syndrome",
        artist: "ILLIT",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Lucky%20Girl%20Syndrome%20ILLIT"
    },
    {
        title: "My World",
        artist: "ILLIT",
        mood: "Kpop",
        link: "https://open.spotify.com/search/My%20World%20ILLIT"
    },
    {
        title: "Like",
        artist: "BTS",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Like%20BTS"
    },
    {
        title: "Go Go",
        artist: "BTS",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Go%20Go%20BTS"
    },
    {
        title: "Black Swan",
        artist: "BTS",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Black%20Swan%20BTS"
    },
    {
        title: "Mikrokosmos",
        artist: "BTS",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Mikrokosmos%20BTS"
    },
    {
        title: "Plot Twist",
        artist: "TWS",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Plot%20Twist%20TWS"
    },
    {
        title: "If I'm S, Can You Be My N?",
        artist: "TWS",
        mood: "Kpop",
        link: "https://open.spotify.com/search/If%20I%27m%20S%20Can%20You%20Be%20My%20N%20TWS"
    },
    {
        title: "Fatal Trouble",
        artist: "ENHYPEN",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Fatal%20Trouble%20ENHYPEN"
    },
    {
        title: "Polaroid Love",
        artist: "ENHYPEN",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Polaroid%20Love%20ENHYPEN"
    },
    {
        title: "S-Class",
        artist: "Stray Kids",
        mood: "Kpop",
        link: "https://open.spotify.com/search/S-Class%20Stray%20Kids"
    },
    {
        title: "God's Menu",
        artist: "Stray Kids",
        mood: "Kpop",
        link: "https://open.spotify.com/search/God%27s%20Menu%20Stray%20Kids"
    },
    {
        title: "Queencard",
        artist: "i-dle",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Queencard%20GIDLE"
    },
    {
        title: "Wife",
        artist: "i-dle",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Wife%20GIDLE"
    },
    {
        title: "TOMBOY",
        artist: "i-dle",
        mood: "Kpop",
        link: "https://open.spotify.com/search/TOMBOY%20GIDLE"
    },
    {
        title: "Nxde",
        artist: "i-dle",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Nxde%20GIDLE"
    },
    {
        title: "Super Lady",
        artist: "i-dle",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Super%20Lady%20GIDLE"
    },
    {
        title: "404 (New Era)",
        artist: "KIIKII",
        mood: "Kpop",
        link: "https://open.spotify.com/search/404%20New%20Era%20KIIKII"
    },
    {
        title: "Style",
        artist: "HEARTS2HEARTS",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Style%20HEARTS2HEARTS"
    },
    {
        title: "Earth, Wind & Fire",
        artist: "BOYNEXTDOOR",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Earth%20Wind%20and%20Fire%20BOYNEXTDOOR"
    },
    {
        title: "Drama",
        artist: "aespa",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Drama%20aespa"
    },
    {
        title: "SHEESH",
        artist: "BABYMONSTER",
        mood: "Kpop",
        link: "https://open.spotify.com/search/SHEESH%20BABYMONSTER"
    },
    {
        title: "Pink Venom",
        artist: "BLACKPINK",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Pink%20Venom%20BLACKPINK"
    },
    {
        title: "Super",
        artist: "SEVENTEEN",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Super%20SEVENTEEN"
    },
    {
        title: "HOT",
        artist: "SEVENTEEN",
        mood: "Kpop",
        link: "https://open.spotify.com/search/HOT%20SEVENTEEN"
    },
    {
        title: "Talk that Talk",
        artist: "TWICE",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Talk%20that%20Talk%20TWICE"
    },
    {
        title: "Dash",
        artist: "NMIXX",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Dash%20NMIXX"
    },
    {
        title: "Maniac",
        artist: "VIVIZ",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Maniac%20VIVIZ"
    },
    {
        title: "BOP BOP!",
        artist: "VIVIZ",
        mood: "Kpop",
        link: "https://open.spotify.com/search/BOP%20BOP%20VIVIZ"
    },
    {
        title: "Run BTS",
        artist: "BTS",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Run%20BTS%20BTS"
    },
    {
        title: "Eve, Psyche & The Bluebeard's wife",
        artist: "LE SSERAFIM",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Eve%20Psyche%20and%20The%20Bluebeards%20wife%20LE%20SSERAFIM"
    },
    {
        title: "EASY",
        artist: "LE SSERAFIM",
        mood: "Kpop",
        link: "https://open.spotify.com/search/EASY%20LE%20SSERAFIM"
    },
    {
        title: "Supernova",
        artist: "aespa",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Supernova%20aespa"
    },
    {
        title: "Armageddon",
        artist: "aespa",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Armageddon%20aespa"
    },
    {
        title: "BATTER UP",
        artist: "BABYMONSTER",
        mood: "Kpop",
        link: "https://open.spotify.com/search/BATTER%20UP%20BABYMONSTER"
    },
    {
        title: "Shut Down",
        artist: "BLACKPINK",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Shut%20Down%20BLACKPINK"
    },
    {
        title: "FEEL SPECIAL",
        artist: "TWICE",
        mood: "Kpop",
        link: "https://open.spotify.com/search/FEEL%20SPECIAL%20TWICE"
    },
    {
        title: "Love Me Like This",
        artist: "NMIXX",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Love%20Me%20Like%20This%20NMIXX"
    },
    {
        title: "UNFORGIVEN",
        artist: "LE SSERAFIM",
        mood: "Kpop",
        link: "https://open.spotify.com/search/UNFORGIVEN%20LE%20SSERAFIM"
    },
    {
        title: "ANTIFRAGILE",
        artist: "LE SSERAFIM",
        mood: "Kpop",
        link: "https://open.spotify.com/search/ANTIFRAGILE%20LE%20SSERAFIM"
    },
    {
        title: "Perfect Night",
        artist: "LE SSERAFIM",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Perfect%20Night%20LE%20SSERAFIM"
    },
    {
        title: "Longshot",
        artist: "Longshot",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Longshot%20Kpop"
    },
    {
        title: "Cortis",
        artist: "Cortis",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Cortis%20Kpop"
    },
    {
        title: "Ghosting",
        artist: "TXT",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Ghosting%20TXT"
    },
    {
        title: "Tinnitus (Wanna be a rock)",
        artist: "TXT",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Tinnitus%20TXT"
    },
    {
        title: "Chaconne",
        artist: "ENHYPEN",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Chaconne%20ENHYPEN"
    },
    {
        title: "Bills",
        artist: "ENHYPEN",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Bills%20ENHYPEN"
    },
    {
        title: "Serenade",
        artist: "BOYNEXTDOOR",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Serenade%20BOYNEXTDOOR"
    },
    {
        title: "DON QUIXOTE",
        artist: "SEVENTEEN",
        mood: "Kpop",
        link: "https://open.spotify.com/search/DON%20QUIXOTE%20SEVENTEEN"
    },
    {
        title: "Charmer",
        artist: "Stray Kids",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Charmer%20Stray%20Kids"
    },
    {
        title: "Prism",
        artist: "SHINee",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Prism%20SHINee"
    },
    {
        title: "Blue Flame",
        artist: "LE SSERAFIM",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Blue%20Flame%20LE%20SSERAFIM"
    },
    {
        title: "Lucid Dream",
        artist: "aespa",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Lucid%20Dream%20aespa"
    },
    {
        title: "Like That",
        artist: "BABYMONSTER",
        mood: "Kpop",
        link: "https://open.spotify.com/search/Like%20That%20BABYMONSTER"
    },
    {
        title: "The Happiest Girl",
        artist: "BLACKPINK",
        mood: "Kpop",
        link: "https://open.spotify.com/search/The%20Happiest%20Girl%20BLACKPINK"
    },

    {
        title: "Thankful",
        artist: "Forrest Frank",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Thankful%20Forrest%20Frank"
    },
    {
        title: "Your Way's Better",
        artist: "Forrest Frank",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Your%20Way%27s%20Better%20Forrest%20Frank"
    },
    {
        title: "Lemonade",
        artist: "Forrest Frank",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Lemonade%20Forrest%20Frank"
    },
    {
        title: "Celebration",
        artist: "Forrest Frank",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Celebration%20Forrest%20Frank"
    },
    {
        title: "Nothing Else",
        artist: "Forrest Frank",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Nothing%20Else%20Forrest%20Frank"
    },
    {
        title: "Dusty Bibles",
        artist: "Josiah Queen",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Dusty%20Bibles%20Josiah%20Queen"
    },
    {
        title: "The Prodigal",
        artist: "Josiah Queen",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/The%20Prodigal%20Josiah%20Queen"
    },
    {
        title: "Demons",
        artist: "Josiah Queen",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Demons%20Josiah%20Queen"
    },
    {
        title: "Jesus Can",
        artist: "Austin French",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Jesus%20Can%20Austin%20French"
    },
    {
        title: "Omemma",
        artist: "Chandler Moore",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Omemma%20Chandler%20Moore"
    },
    {
        title: "Breakthrough",
        artist: "Chibike",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Breakthrough%20Chibike"
    },
    {
        title: "Reckless Love",
        artist: "Cory Asbury",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Reckless%20Love%20Cory%20Asbury"
    },
    {
        title: "Isi Gini",
        artist: "Bidemi Olaoba",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Isi%20Gini%20Bidemi%20Olaoba"
    },
    {
        title: "More Than Gold",
        artist: "Judikay",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/More%20Than%20Gold%20Judikay"
    },
    {
        title: "Witchcraft Pt. 2",
        artist: "Kieran The Light",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Witchcraft%20Pt%202%20Kieran%20The%20Light"
    },
    {
        title: "Intentional",
        artist: "Travis Greene",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Intentional%20Travis%20Greene"
    },
    {
        title: "Cloud 9 (Christian Rewrite)",
        artist: "Josh Thomas",
        mood: "Christian Music",
        link: "https://open.spotify.com/search/Cloud%209%20Christian%20Rewrite%20Josh%20Thomas"
    },

    {
        title: "MUTT",
        artist: "Leon Thomas",
        mood: "R&B",
        link: "https://open.spotify.com/search/MUTT%20Leon%20Thomas"
    },
    {
        title: "Breakin' Dishes",
        artist: "Rihanna",
        mood: "R&B",
        link: "https://open.spotify.com/search/Breakin%27%20Dishes%20Rihanna"
    },
    {
        title: "If It's Lovin' That You Want",
        artist: "Rihanna",
        mood: "R&B",
        link: "https://open.spotify.com/search/If%20It%27s%20Lovin%27%20That%20You%20Want%20Rihanna"
    },
    {
        title: "911",
        artist: "Wyclef Jean feat. Mary J. Blige",
        mood: "R&B",
        link: "https://open.spotify.com/search/911%20Wyclef%20Jean%20Mary%20J%20Blige"
    },
    {
        title: "U Got It Bad",
        artist: "Usher",
        mood: "R&B",
        link: "https://open.spotify.com/search/U%20Got%20It%20Bad%20Usher"
    },
    {
        title: "Burn",
        artist: "Usher",
        mood: "R&B",
        link: "https://open.spotify.com/search/Burn%20Usher"
    },
    {
        title: "Billie Jean",
        artist: "Michael Jackson",
        mood: "R&B",
        link: "https://open.spotify.com/search/Billie%20Jean%20Michael%20Jackson"
    },
    {
        title: "Smooth Criminal",
        artist: "Michael Jackson",
        mood: "R&B",
        link: "https://open.spotify.com/search/Smooth%20Criminal%20Michael%20Jackson"
    },
    {
        title: "Don't Stop 'Til You Get Enough",
        artist: "Michael Jackson",
        mood: "R&B",
        link: "https://open.spotify.com/search/Dont%20Stop%20Til%20You%20Get%20Enough%20Michael%20Jackson"
    },
    {
        title: "Man in the Mirror",
        artist: "Michael Jackson",
        mood: "R&B",
        link: "https://open.spotify.com/search/Man%20in%20the%20Mirror%20Michael%20Jackson"
    },
    {
        title: "Not Gon' Cry",
        artist: "Mary J. Blige",
        mood: "R&B",
        link: "https://open.spotify.com/search/Not%20Gon%20Cry%20Mary%20J%20Blige"
    },
    {
        title: "No Scrubs",
        artist: "TLC",
        mood: "R&B",
        link: "https://open.spotify.com/search/No%20Scrubs%20TLC"
    },
    {
        title: "Love On Top",
        artist: "Beyonce",
        mood: "R&B",
        link: "https://open.spotify.com/search/Love%20On%20Top%20Beyonce"
    },
    {
        title: "Snooze",
        artist: "SZA",
        mood: "R&B",
        link: "https://open.spotify.com/search/Snooze%20SZA"
    },
    {
        title: "Good Days",
        artist: "SZA",
        mood: "R&B",
        link: "https://open.spotify.com/search/Good%20Days%20SZA"
    },
    {
        title: "Best Part",
        artist: "Daniel Caesar feat. H.E.R.",
        mood: "R&B",
        link: "https://open.spotify.com/search/Best%20Part%20Daniel%20Caesar%20HER"
    },
    {
        title: "Get You",
        artist: "Daniel Caesar feat. Kali Uchis",
        mood: "R&B",
        link: "https://open.spotify.com/search/Get%20You%20Daniel%20Caesar%20Kali%20Uchis"
    },
    {
        title: "Can We Talk",
        artist: "Tevin Campbell",
        mood: "R&B",
        link: "https://open.spotify.com/search/Can%20We%20Talk%20Tevin%20Campbell"
    },
    {
        title: "We Belong Together",
        artist: "Mariah Carey",
        mood: "R&B",
        link: "https://open.spotify.com/search/We%20Belong%20Together%20Mariah%20Carey"
    },
    {
        title: "Doo Wop (That Thing)",
        artist: "Lauryn Hill",
        mood: "R&B",
        link: "https://open.spotify.com/search/Doo%20Wop%20That%20Thing%20Lauryn%20Hill"
    },
    {
        title: "Say My Name",
        artist: "Destiny's Child",
        mood: "R&B",
        link: "https://open.spotify.com/search/Say%20My%20Name%20Destinys%20Child"
    },

    {
        title: "Keep Up",
        artist: "Odetari",
        mood: "hype",
        link: "https://open.spotify.com/search/Keep%20Up%20Odetari"
    },
    {
        title: "Moves Like Jagger",
        artist: "Maroon 5",
        mood: "hype",
        link: "https://open.spotify.com/search/Moves%20Like%20Jagger%20Maroon%205"
    },
    {
        title: "Mamushi",
        artist: "Megan Thee Stallion",
        mood: "hype",
        link: "https://open.spotify.com/search/Mamushi%20Megan%20Thee%20Stallion"
    },
    {
        title: "N95",
        artist: "Kendrick Lamar",
        mood: "hype",
        link: "https://open.spotify.com/search/N95%20Kendrick%20Lamar"
    },
    {
        title: "Till I Collapse",
        artist: "Eminem",
        mood: "hype",
        link: "https://open.spotify.com/search/Till%20I%20Collapse%20Eminem"
    },
    {
        title: "Can't Hold Us",
        artist: "Macklemore & Ryan Lewis",
        mood: "hype",
        link: "https://open.spotify.com/search/Can%27t%20Hold%20Us%20Macklemore%20Ryan%20Lewis"
    },
    {
        title: "POWER",
        artist: "Kanye West",
        mood: "hype",
        link: "https://open.spotify.com/search/POWER%20Kanye%20West"
    },
    {
        title: "Believer",
        artist: "Imagine Dragons",
        mood: "hype",
        link: "https://open.spotify.com/search/Believer%20Imagine%20Dragons"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        mood: "hype",
        link: "https://open.spotify.com/search/Levitating%20Dua%20Lipa"
    },
    {
        title: "FE!N",
        artist: "Travis Scott",
        mood: "hype",
        link: "https://open.spotify.com/search/FEIN%20Travis%20Scott"
    },
    {
        title: "Greedy",
        artist: "Tate McRae",
        mood: "hype",
        link: "https://open.spotify.com/search/Greedy%20Tate%20McRae"
    },

    {
        title: "Only in My Dreams",
        artist: "The Marias",
        mood: "chill",
        link: "https://open.spotify.com/search/Only%20in%20My%20Dreams%20The%20Marias"
    },
    {
        title: "Coffee Breath",
        artist: "Sofia Mills",
        mood: "chill",
        link: "https://open.spotify.com/search/Coffee%20Breath%20Sofia%20Mills"
    },
    {
        title: "Snooze",
        artist: "SZA",
        mood: "chill",
        link: "https://open.spotify.com/search/Snooze%20SZA"
    },

    {
        title: "Kiss Me More",
        artist: "Doja Cat",
        mood: "indie",
        link: "https://open.spotify.com/search/Kiss%20Me%20More%20Doja%20Cat"
    },
    {
        title: "French Exit",
        artist: "Dua Saleh",
        mood: "indie",
        link: "https://open.spotify.com/search/French%20Exit%20Dua%20Saleh"
    },
    {
        title: "505",
        artist: "Arctic Monkeys",
        mood: "indie",
        link: "https://open.spotify.com/search/505%20Arctic%20Monkeys"
    },

    {
        title: "golden hour",
        artist: "JVKE",
        mood: "study",
        link: "https://open.spotify.com/search/golden%20hour%20JVKE"
    },
    {
        title: "River Flows In You",
        artist: "Yiruma",
        mood: "study",
        link: "https://open.spotify.com/search/River%20Flows%20In%20You%20Yiruma"
    },
    {
        title: "Nuvole Bianche",
        artist: "Ludovico Einaudi",
        mood: "study",
        link: "https://open.spotify.com/search/Nuvole%20Bianche%20Ludovico%20Einaudi"
    },
    {
        title: "Weightless",
        artist: "Marconi Union",
        mood: "study",
        link: "https://open.spotify.com/search/Weightless%20Marconi%20Union"
    },
    {
        title: "Experience",
        artist: "Ludovico Einaudi",
        mood: "study",
        link: "https://open.spotify.com/search/Experience%20Ludovico%20Einaudi"
    },
    {
        title: "Comptine d'un autre ete",
        artist: "Yann Tiersen",
        mood: "study",
        link: "https://open.spotify.com/search/Comptine%20d%27un%20autre%20ete%20Yann%20Tiersen"
    },
    {
        title: "Clair de Lune",
        artist: "Claude Debussy",
        mood: "study",
        link: "https://open.spotify.com/search/Clair%20de%20Lune%20Debussy"
    },
    {
        title: "Snowfall",
        artist: "Oneheart & reidenshi",
        mood: "study",
        link: "https://open.spotify.com/search/Snowfall%20Oneheart%20reidenshi"
    },
    {
        title: "Time",
        artist: "Hans Zimmer",
        mood: "study",
        link: "https://open.spotify.com/search/Time%20Hans%20Zimmer"
    },
    {
        title: "Gymnopedie No. 1",
        artist: "Erik Satie",
        mood: "study",
        link: "https://open.spotify.com/search/Gymnopedie%20No%201%20Erik%20Satie"
    }
];

const songContainer = document.getElementById("song-container");
const filterButtons = document.querySelectorAll(".filters button");
const shuffleBtn = document.getElementById("shuffle-btn");
const pageBody = document.body;
let currentMood = "pop";

function moodIcon(mood) {
    const icons = {
        "Kpop": "GL",
        "pop": "SP",
        "indie": "IN",
        "Christian Music": "HM",
        "hype": "UP",
        "study": "RD",
        "R&B": "RB",
        "chill": "CL"
    };

    return icons[mood] || "MU";
}

function displaySongs(songList) {
    if (!songContainer) return;

    songContainer.innerHTML = "";

    songList.forEach((song) => {
        const artistName = song.artist && song.artist.trim() !== "" ? song.artist : "Unknown Artist";

        const card = document.createElement("div");
        card.className = "song-card";
        card.innerHTML = `
            <div class="song-top">
                <div class="song-orb">${moodIcon(song.mood)}</div>
                <span class="song-mood">${song.mood}</span>
            </div>
            <h3>${song.title}</h3>
            <p>${artistName}</p>
            <a href="${song.link}" target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
        `;

        songContainer.appendChild(card);
    });
}

function setActiveButton(mood) {
    filterButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.mood === mood);
    });
}

function moodThemeKey(mood) {
    const normalized = mood.toLowerCase();
    if (normalized === "kpop") return "kpop";
    if (normalized === "christian music") return "christian";
    if (normalized === "r&b") return "rb";
    if (normalized === "hype") return "hype";
    if (normalized === "study") return "study";
    if (normalized === "chill") return "chill";
    if (normalized === "indie") return "indie";
    return "pop";
}

function shuffleSongs(songList) {
    const copy = [...songList];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function filterSongs(mood) {
    currentMood = mood;
    const filtered = songs.filter((song) => song.mood.toLowerCase() === mood.toLowerCase());
    displaySongs(filtered);
    setActiveButton(mood);
    if (pageBody.classList.contains("music-page")) {
        pageBody.setAttribute("data-theme", moodThemeKey(mood));
    }
}

if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
        const filtered = songs.filter((song) => song.mood.toLowerCase() === currentMood.toLowerCase());
        displaySongs(shuffleSongs(filtered));
    });
}

if (songContainer) {
    filterSongs("pop");
}


