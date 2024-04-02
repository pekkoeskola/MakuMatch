const Recipes = [
    {
        title: "Pestopasta",
        imagePath: require("../assets/images/pestopasta.jpg"),
        id: 1,
        status: 0,
        rating: 4,
        serves: 4,
        allergens: ["kananmunaton"],
        diet: ["kasvis", "pescovegetaristi"],
        tags: ["pasta", "nopea"],
        ingredients: ["5 dl basilikanlehtiä", "2 valkosipulinkynttä", "50g pinjansiemeniä", "50g parmesaanijuustoa raastettuna", "1,5 dl oliiviöljyä", "0,5 tl suolaa"],
        steps: [
        "Keitä 400 grammaa spagettia pakkauksen ohjeen mukaan kypsäksi. Valuta siivilässä.",
        "Pastan kiehuessa paahda 50 grammaa pinjansiemeniä pannulla. Siirrä syrjään jäähtymään. Kuori ja hienonna yhdestä kahteen valkosipulinkynttä",
        "Mittaa neljästä viiteen desilitraa basilikanlehtiä, valkosipulinkynnet, paahdetut pinjansiemenet, 50 grammaa raastettua parmesaaijuustoa, puoli teelusikallista suolaa monitoimikoneeseen tai tehosekoittimeen.",
        "Käynnistä kone ja valuta joukkoon ohuena nauhana yhteensä noin puolitoista desilitraa oliiviöljyä, kunnes kastike on juoksevan tahnamaista. Tarkista maku.",
        "Sekoita pesto keitetyn, valutetun pastan joukkoon ja tarjoa heti."
        ]
    },
    {
        title: "Papupaistos",
        imagePath: require("../assets/images/papupaistos.jpg"),
        id: 2,
        status: 0,
        rating: 4,
        serves: 4,
        allergens: ["laktoositon", "gluteeniton", "pähkinätön", "kananmunaton"],
        diet: ["kasvis", "pescovegetaristi"],
        tags: ["terveellinen", "nopea"],
        ingredients: ["1 sipuli",  "2 valkosipulinkynttä", "1 rkl oliiviöljyä", "1/2 tl chilihiutaleita", "1 1/2 rkl tomaattisosetta", "2 tlk (389 g/230 g) isoja valkoisia papuja suolaliemessä", 
                      "1 tlk (400 g) tomaattimurskaa", "1 rkl valkoviinietikkaa", "1/2 rkl juoksevaa hunajaa",  "1/2 tl suolaa", "1/2 tl pizzamaustetta (oregano, basilika, meirami)",
                      "1/2 tl mustapippuria", "1 dl persiljaa hienonnettuna",  "2 dl (n. 90 g) laktoositonta mozzarellajuustoraastetta"],
        steps: [
        "Kuori ja hienonna sipuli ja valkosipulinkynnet.", 
        "Kuullota sipulia, valkosipulia ja chilihiutaleita öljyssä uuninkestävässä (valurauta)pannussa. Lisää joukkoon tomaattisose ja kuullota vielä hetki.",
        "Kaada pannulle huuhdotut ja valutetut pavut sekä tomaattimurska. Sekoita.",
        "Mausta valkoviinietikalla, hunajalla, suolalla, pizzamausteella ja pippurilla.",
        "Lisää pannulle puolet persiljasta ja sekoita. Anna hautua noin 5 minuuttia.",
        "Lisää päälle tasaisesti mozzarellajuustoraaste. Paista 225-asteisen uunin ylätasolla noin 5 minuuttia. Viimeistele hienonnetulla persiljalla. Tarjoa leivän kanssa."
        ]
    },
    {
        title: "Pasta bolognese",
        imagePath: require("../assets/images/pasta_bolognese.jpg"),
        id: 3,
        status: 0,
        rating: 4,
        serves: 5,
        allergens: ["kananmunaton"],
        diet: [],
        tags: ["pasta"],
        ingredients: ["1 pkt (170 g) pekonia", "1 iso sipuli", "2 valkosipulinkynttä", "2 (150 g) porkkanaa", "3 (100 g) sellerinvartta tai pala juuriselleriä", 
                      "400 g naudan jauhelihaa (17 %)", "1 tlk (500 g) tomaattimurskaa", "2 dl punaviiniä", "1 dl vettä", "1 tl suolaa", "1 tl oreganoa", 
                      "1/4 tl mustapippuria", "1/4 tl jauhettua muskottipähkinää", "400 g täysjyväspagettia", "Lisäksi, parmesaania"],
        steps: [
            "Leikkaa pekoni ohuiksi suikaleiksi. Hienonna sipuli ja valkosipulinkynnet.", 
            "Leikkaa porkkanat ja sellerit hyvin pieniksi kuutioiksi.",
            "Levitä pekonisilppu isoon paistokasariin ja kuumenna hitaasti, jotta neste ja rasva irtoaa. Nosta lämpöä ja paista, kunnes pekoni on ruskistunut.",
            "Lisää jauheliha ja ruskista. Lisää myös sipuli, valkosipulit ja vihannekset. Kypsennä noin 5 minuuttia.",
            "Kaada kasariin tomaattimurska, viini ja vesi. Mausta suolalla, oreganolla, pippurilla ja muskottipähkinällä.",
            "Hauduta miedolla lämmöllä kannen alla noin 45 minuuttia. Sekoita välillä ja lisää tarvittaessa hiukan vettä.",
            "Keitä pasta runsaassa suolalla maustetussa vedessä pakkauksen ohjeen mukaan. Valuta pasta.",
            "Annostele pasta lautasille. Nosta päälle kastiketta ja ripottele pinnalle parmesaaniraastetta tai -lastuja."
            ]
    },
    {
        title: "Pasta carbonara",
        imagePath: require("../assets/images/pasta_carbonara.jpg"),
        id: 4,
        status: 0,
        rating: 3,
        serves: 4,
        allergens: ["laktoositon", "pähkinätön"],
        diet: [],
        tags: ["pasta", "nopea"],
        ingredients: ["300 g spagettia", "1 pkt (150 g) pekonia", "2 valkosipulinkynttä", "1 prk (2 dl) laktoositonta ruokakermaa (15 %)", "2 kananmunaa", 
                      "1 1/2 dl laktoositonta parmesaania raastettuna", "1/2 tl mustapippuria", "1/4 tl suolaa" ],
        steps: [
            "Keitä spagetti pakkauksen ohjeen mukaan ja valuta se.", 
            "Suikaloi pekoni ja hienonna valkosipulinkynnet.",
            "Ruskista pekonit pannulla. Lisää valkosipulinkynnet ja paista, kunnes ne ovat pehmenneet.",
            "Sekoita kulhossa ruokakerma, munat, parmesaani ja mausteet.",
            "Yhdistä pasta ja pekoniseos. Sekoita kerma-munaseos kuuman pastan joukkoon.",
            "Tarjoa pasta carbonara heti. Lisää halutessasi annosten pinnalle vielä parmesaaniraastetta sekä vastarouhittua mustapippuria."
            ]
    },
    {
        title: "Tonnikalalasagne",
        imagePath: require("../assets/images/tonnikalalasagne.jpg"),
        id: 5,
        status: 0,
        rating: 3,
        serves: 5,
        allergens: ["laktoositon", "kananmunaton", "pähkinätön"],
        diet: ["pescovegetaristi"],
        tags: ["pasta", "terveellinen"],
        ingredients: ["12 lasagnelevyä", "2 tlk (à 200 g/150 g) tonnikalapaloja öljyssä", "2 (150 g) sipulia", "2 valkosipulinkynttä", "1/2 rkl öljyä", 
                      "1 tlk (390 g) chilitomaattimurskaa", "1 dl vettä", "2 tlk (200 g) laktoositonta ruokakermaa (15 %)", "1 (200 g) punainen paprika", 
                      "1/2 dl basilikaa hienonnettuna tai 1–2 tl basilikaa", "1 tl suolaa", 
                      "ripaus mustapippuria", "1 ps (150 g) laktoositonta emmental-mozzarellajuustoraastetta" ],
        steps: [
            "Valuta tonnikalat.",
            "Hienonna kuoritut sipulit ja valkosipulinkynnet.",
            "Kuullota sipulia ja valkosipulia öljyssä.",
            "Lisää joukkoon tomaattimurska, vesi (huuhtaise vedellä ensin tomaattimurskapakkaus), ruokakerma, tonnikalat, hienonnettu paprika ja mausteet. Hauduta kannen alla 5–10 minuuttia.",
            "Lisää joukkoon noin 100 g (2/3 osaa) juustoraasteesta ja sekoita.",
            "Voitele lasagnevuoka.",
            "Kaada vuoan pohjalle tonnikalakastiketta ja levitä päälle lasagnelevyjä. Täytä näin muutama seuraavakin kerros. Viimeisen lasagnelevykerroksen päälle tulee vielä tonnikalakastiketta. Ripottele pinnalle loppu juustoraaste.",
            "Paista 175-asteisen uunin alatasolla noin 45 minuuttia. Anna lasagnen vetäytyä peitettynä noin 15 minuuttia ennen tarjoamista."
            ]
    },
    {
        title: "Porkkana-linssikeitto",
        imagePath: require("../assets/images/porkkana-linssikeitto.jpg"),
        id: 6,
        status: 0,
        rating: 4,
        serves: 4,
        allergens: ["laktoositon", "maidoton", "gluteeniton", "pähkinätön", "kananmunaton"],
        diet: ["kasvis", "pescovegetaristi", "vegaani"],
        tags: ["terveellinen", "nopea"],
        ingredients: ["500 g porkkanoita", "1 rkl rypsiöljyä", "200g sipulia kuutioina",  "1 valkosipulinkynsi hienonnettuna", "1 tl juustokuminaa", "5 dl vettä", 
                      "1 tlk (380 g/230 g) punaisia linssejä suolaliemessä", "1 1/2 rkl kasvisfondia", "1/2 tlk (à 400 ml) kookosmaitoa", "1/4 tl mustapippuria", "(1/2 -1 dl, vettä)"],
        steps: [
            "Kuori ja leikkaa pestyt porkkanat pieniksi paloiksi.",
            "Kuullota sipulikuutioita, valkosipulia ja juustokuminaa öljyssä kattilassa. Lisää porkkanat ja kuullota vielä hetki.",
            "Lisää vesi ja kasvisfondi. Kuumenna kiehuvaksi ja keitä kannen alla noin 15 minuuttia.",
            "Lisää huuhdotut, valutetut linssit ja keitä vielä noin 5 minuuttia, kunnes porkkanat ovat kypsiä.",
            "Lisää lopuksi kookosmaito ja mausta pippurilla. Soseuta keitto tehosekoittimessa sileäksi. Lisää tarvittaessa vettä, kunnes saat sopivan rakenteen.", 
            "Voit halutessasi lusikoida keittoannosten pinnalle rapeaa valkosipulia sekä koristella korianterilla."
            ]
    },
    {
        title: "Pinaattiletut",
        //imagePath: require("../assets/images/________.jpg"),
        id: 7,
        status: 0,
        rating: 3,
        serves: 5,
        allergens: ["laktoositon", "pähkinätön"],
        diet: ["kasvis", "pescovegetaristi"],
        tags: ["terveellinen", "nopea"],
        ingredients: ["1 ps (150 g) hienonnettua pinaattia", "1/2 l laktoositonta maitoa", "3 dl vehnäjauhoja", "2 kananmunaa", "1 tl suolaa", "1–2 tl sokeria", 
                      "ripaus mustapippuria", "1/4 dl juoksevaa margariinia tai öljyä", "paistamiseen, juoksevaa margariinia tai öljyä", "lisäksi: puolukkahilloa tai muuta lisuketta"],
        steps: [
            "Sulata pinaatti. Vatkaa keskenään maito, vehnäjauhot, munat, suola, sokeri ja pippuri.", 
            "Lisää öljy ja pinaatti. Anna taikinan turvota hetki.", 
            "Paista taikinasta rasvassa kuumalla pannulla ohuita lettuja. Tarjoa pinaattiletut puolukkahillon ja raejuuston kanssa."
            ]
    }
]

//status codes: 0 = no signficance to user, 1 = liked, 2 = saved (to recipe book) 

export default Recipes
