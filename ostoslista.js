/**
 * Luo tyhjä taulukko ostoslista.
 */
const ostoslista = [];

/**
 * Lisää tuotteen ja määrän taulukkoon.
 * @param {string} tuote 
 * @param {int} maara 
 */
const lisaaTuote = (tuote,maara) => {
    if(typeof tuote !== 'string') {
        console.log("Error: Lisättävän tuotteen pitää olla merkkijono");
        return;
    }
    tuote = tuote.toLocaleLowerCase().trim();
    if(tuote.length === 0) return;
    if(ostoslista.findIndex(x => x.tuote == tuote) !== -1) return;

    ostoslista.push(
        {
            'tuote': tuote, 
            'määrä': maara
        }
    )
}

/**
 * Poistaa tuotteen listalta.
 * @param {string} tuote 
 */
const poistaTuote = (tuote) => {
    tuote = tuote.toLocaleLowerCase().trim(); 
    let index = ostoslista.findIndex(x => x.tuote === tuote);
    if(index > -1) 
        ostoslista.splice(index, 1);
}
/**
 * Tulostaa kaikki listalla olevat tuotteet.
 */
const naytaLista = () => {
    ostoslista.forEach(element => {
        const kpl = element.määrä;
        console.log(`${element.tuote}: ${kpl} kpl\n`);
    })
}

/**
 * Päivittää tuotteen määrän.
 * @param {*} tuote 
 * @param {*} uusiMaara 
 */
const paivitaMaara = (tuote, uusiMaara) => {
    tuote = tuote.toLocaleLowerCase().trim();
    let index = ostoslista.findIndex(x => x.tuote == tuote);
    if(index === -1) return;
    ostoslista[index].määrä = uusiMaara;
}

//testailukoodi: 
lisaaTuote('Maito', 2);
lisaaTuote('Leipä', 1);
paivitaMaara('maito', 20);
naytaLista();
console.log("------------------------")
poistaTuote('leipä');
naytaLista();