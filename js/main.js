// Consegna
// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// Completate i milestone nell'ordine assegnato, 
// non andate avanti finché non avete concluso con successo la milestone precedente.
// Chiudete almeno una commit per milestone.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
];

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// creo gli elementi del dom

const main = document.querySelector('main');
const wrapper = elementCreation('div', 'container');
const row = elementCreation('div', 'row');
row.classList.add('mb-5')
row.classList.add('col-10','offset-1', 'justify-content-center');

const headtitle = elementCreation('h1', 'text-center');
headtitle.classList.add('py-3', 'text-danger');
headtitle.innerHTML = 'Meet our Team!';

main.append(wrapper);
wrapper.append(headtitle, row);

// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// creiamo un for, essendo tanti, non un for in
for (let i = 0; i < ourTeam.length; i++) {

const domElements = elementCreation('div', 'card');

const teamPhotos = elementCreation('img', 'card-img-top');
const cardBody = elementCreation('div', 'card-body');
const cardInfo = elementCreation('p', 'card-text');
cardInfo.innerHTML = `<div>Nome: ${ourTeam[i].name}</div> <div>Ruolo: ${ourTeam[i].role}</div>`;

domElements.classList.add('m-1');


teamPhotos.setAttribute('src', './img/' + ourTeam[i].photo);
teamPhotos.setAttribute('alt', ourTeam[i].photo);

row.append(domElements);
domElements.append(teamPhotos);
domElements.append(cardBody);
cardBody.append(cardInfo);

}


function elementCreation(elementToCreate, classToAdd) {
    let element;
    element = document.createElement(elementToCreate);
    element.classList.add(classToAdd);

    return element;
}

// ! cosetta inutile
// for (let i = 0; i < ourTeam.length; i++) {

    // volessimo per qualche motivo estrarre una ad una le informazioni, anche delle key
    // bisogna chiamare in un for la i dell'array e semplicemente verranno estratti uno ad uno
    // e successivamente visualizzare la singola key
//     for (const key in ourTeam[i]){

//         console.log(`${key} = ${ourTeam[i][key]}`)

//     }
// }
