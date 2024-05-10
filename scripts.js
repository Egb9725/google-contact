document.getElementById('toggle-sidebar').addEventListener('click', function() {
  document.querySelector('.container').classList.toggle('hiddenSidebar');
});


document.getElementById('create-contact').addEventListener('click', function() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
  <form id="contactForm" class="contact-form">
    <label for="prenom">Icone Contact</label>
    <input type="text" id="prenom" placeholder="Prénom" name="prenom"><br><br>
    <label for="nom"></label>
    <input type="text" id="nom" name="nom" placeholder="Nom"><br><br>
    <label for="entreprise">Icone Entreprise</label>
    <input type="text" id="entreprise" name="entreprise" placeholder="Entreprise"><br><br>
    <label for="fonction">Icone Entreprise</label>
    <input type="text" id="fonction" name="fonction" placeholder="Fonction"><br><br>
    <label for="email">Icone Email</label>
    <input type="email" id="email" name="email" placeholder="E-mail"><br><br>
    <button type="submit" class="save-button">Enregistrer</button>
  </form>

  `;
});


document.addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  if (form.id === 'contactForm') {
    const prenom = form.querySelector('#prenom').value;
    const nom = form.querySelector('#nom').value;
    const entreprise = form.querySelector('#entreprise').value;
    const fonction = form.querySelector('#fonction').value;
    const email = form.querySelector('#email').value;
    addContact(prenom,nom,entreprise,fonction, email);
  }
});


let contacts = [];


function addContact(prenom,nom,entreprise,fonction, email) {
  contacts.push({prenom,nom,entreprise,fonction, email});
  displayContacts();
}


function displayContacts() {
const contentDiv = document.getElementById('content');
// Créez un tableau HTML avec un en-tête
let html = `<h2>Contacts</h2>
          <table>
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Entreprise</th>
                <th>Fonction</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>`;
// Ajoutez une ligne pour chaque contact dans le tableau
contacts.forEach(contact => {
html += `<tr>
           <td>${contact.prenom}</td>
           <td>${contact.nom}</td>
           <td>${contact.entreprise}</td>
           <td>${contact.fonction}</td>
           <td>${contact.email}</td>
         </tr>`;
});
html += '</tbody></table>';
contentDiv.innerHTML = html;
}

