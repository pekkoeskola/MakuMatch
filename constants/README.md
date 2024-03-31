## Reseptit (./Recipes)

### Yleistä
constants-kansiossa reseptit ovat JSON objekteja (aaltosulkeilla) javascript-arrayssa (hakasulkeilla). Lisää uusi resepti yksinkertaisesti viimeisen JSON objektin perään ennen ulointa hakasulkua.

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
    allergeenit, vaihtoehtoja tällä hetkellä laktoositon, maidoton, gluteeniton, pähkinä, kananmuna, kala. Ei isoja kirjaimia.
- diet : Array[String]
    - ruokavaliotyyppi, vaihtoehtoja tällä hetkellä vegaani, pesco-vegetaristi, kasvis (sekasyöjä on vain tyhjä Array). Ei isoja kirjaimia.
- tags : Array[String]
    - muita satunnaisia tageja, esim. noi terveellinen, nopea, vegaani, kasvis, pasta, kana. Ei isoja kirjaimia.
- ingredients : Array[String]
    - reseptiin tarvittavat ainekset, määrä + mittayksikkö + ainesosa vaan sama String for now. Ei isoja kirjaimia.
- steps : Array[String]
    - reseptin vaiheet, yksi vaihe per String arrayssa

Kenttien järjestyksellä ei varsinaisesti ole väliä, mutta luettavuuden parantamiseksi mieluiten tässä järjestyksessä.

### Kuvat

Kuvat lisätään /assets/images-kansioon jpg-muodossa. Sen jälkeen kuva täytyy yhdistää reseptiin Recipes-tiedostossa, eli reseptin imagePath-attribuuttiiksi asetetaan

    require("../assets/images/[reseptin kuvatiedoston nimi].jpg")