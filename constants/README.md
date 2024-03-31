## Reseptit (./Recipes)

### Yleistä
constants-kansiossa reseptit ovat JSON-objekteja (aaltosulkeilla) javascript-arrayssa (hakasulkeilla). Lisää uusi resepti yksinkertaisesti viimeisen JSON objektin perään ennen ulointa hakasulkua.

Jokaisella reseptillä on seuraavat kentät:

(kaksoispisteen jälkeen attribuutin tyyppi)

- title : String
    - Reseptin nimi
- imagePath : katso Kuvat-osio alhaalta
    - reseptin kuvatiedoston nimi
- id : Number
    - reseptin uniikki id-attribuutti, kahdella resptillä tässä tiedostossa ei saa olla samaa.
- status : Number
    - kuvaa reseptin statusta applikaation näkökulmasta, alustusvaiheessa eli tässä tiedostossa aseta aina 0
- rating : Number
    - tähtiluokitus, väliltä kokonaisluvut 1-5
- serves: Number
    - annosten määrä
- allergens : Array[String]
    allergeenit, vaihtoehtoja tällä hetkellä laktoositon, maidoton, gluteeniton, pähkinätön, kananmunaton. Ei isoja kirjaimia.
- diet : Array[String]
    - ruokavaliotyyppi, vaihtoehtoja tällä hetkellä vegaani, pescovegetaristi, kasvis (sekasyöjä on vain tyhjä Array). Ei isoja kirjaimia.
- tags : Array[String]
    - muita satunnaisia tageja, esim. noi terveellinen, nopea, pasta, kana. Ei isoja kirjaimia.
- ingredients : Array[String]
    - reseptiin tarvittavat ainekset, määrä + mittayksikkö + ainesosa vaan sama String for now. Ei isoja kirjaimia.
- steps : Array[String]
    - reseptin vaiheet, yksi vaihe per String arrayssa

Kenttien järjestyksellä ei varsinaisesti ole väliä, mutta luettavuuden parantamiseksi mieluiten tässä järjestyksessä.

Esimerkki reseptistä JSON muodossa:

    {
        title: Pestopasta,
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
    }

P.S. Muista aina pilkut elementtien välillä Arrayssa (ja attribuuttien välillä objekteissa)!!

### Kuvat

Kuvat lisätään /assets/images-kansioon jpg-muodossa. Sen jälkeen kuva täytyy yhdistää reseptiin Recipes-tiedostossa, eli reseptin imagePath-attribuutiksi asetetaan

    require("../assets/images/[reseptin kuvatiedoston nimi].jpg")


#### Huomio 31.3.

Voin ite muuttaa noi olemassaolevat tohon uuteen muotoon (tai toki joku muukin voi jos jaksaa). Ja tosiaan mitä enemmän reseptejä sitä parempi, mut tos menee nyt yheski jonku aikaa et älkää liikaa aikaa käyttäkö :D 10-20 reseptii riittää tätä protoo varten jo hienosti. Ois ihan hyvä tietenki myös valita niitä sillee et kaikil filttereil/allergeeneil/ruokavalioil löytyy jotain.