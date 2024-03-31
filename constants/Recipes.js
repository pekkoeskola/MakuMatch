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
        status: 0
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
        status: 0
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
