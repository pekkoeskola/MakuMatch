const Recipes = [
    {
        title: "Pestopasta",
        imagePath: require("../assets/images/pestopasta.jpg"),
        id: 1,
        status: 0,
        rating: 4,
        serves: 4,
        allergens: [kananmunaton],
        diet: [kasvis, pescovegetaristi],
        tags: [pasta, nopea],
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
        allergens: [laktoositon, gluteeniton, pähkinätön, kananmunaton],
        diet: [kasvis, pescovegetaristi],
        tags: [terveellinen, nopea],
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
        allergens: [kananmunaton],
        diet: [],
        tags: [pasta],
        ingredients: ["1 pkt (170 g) pekonia", "1 iso sipuli", "2 valkosipulinkynttä", "2 (150 g) porkkanaa", "3 (100 g) sellerinvartta tai pala juuriselleriä", 
                      "400 g naudan jauhelihaa (17 %)", "1 tlk (500 g) tomaattimurskaa", "2 dl punaviiniä", "1 dl vettä", "1 tl suolaa", "1 tl oreganoa", 
                      "1/4 tl mustapippuria", "1/4 tl jauhettua muskottipähkinää", "400 g täysjyväspagettia", "Lisäksi, parmesaania"]
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
        status: 0
    },
    {
        title: "Tonnikalalasagne",
        imagePath: require("../assets/images/tonnikalalasagne.jpg"),
        id: 5,
        status: 0
    },
    {
        title: "Porkkana-linssikeitto",
        imagePath: require("../assets/images/porkkana-linssikeitto.jpg"),
        id: 6,
        status: 0
    }
]

//status codes: 0 = no signficance to user, 1 = liked, 2 = saved (to recipe book) 

export default Recipes
