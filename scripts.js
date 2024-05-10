//pour faire disparaitre le sidebar
document.getElementById('toggle-sidebar').addEventListener('click', function() {
  document.querySelector('.container').classList.toggle('hiddenSidebar');
});

// pour faire appaitre le formulaire dans le content
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
    <label for="telephone">Icone Tel</label>
    <input type="tel" id="telephone" name="telephone" pattern="^\+\d{1,3}\s?\(\d{1,3}\)\s?\d{3,4}\s?-?\d{2,3}\s?-?\d{2,3}$
    " required /> <br><br>
    <label for="email">Icone Email</label>
    <input type="email" id="email" name="email" placeholder="E-mail" patter="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
    "><br><br>
    <button type="submit" class="save-button">Enregistrer</button>

  </form>

  `;
});

//déclencher un evenement à chaque fois qu'un formulaire est soumis sur la page
document.addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  if (form.id === 'contactForm') {
    const prenom = form.querySelector('#prenom').value;
    const nom = form.querySelector('#nom').value;
    const entreprise = form.querySelector('#entreprise').value;
    const fonction = form.querySelector('#fonction').value;
    const telephone = form.querySelector('#telephone').value;
    const email = form.querySelector('#email').value;
    addContact(prenom,nom,entreprise,fonction, telephone,email);
  }
});


let contacts = [];
//ajouter un nouveau contact au tableau 
function addContact(prenom,nom,entreprise,fonction, email) {
  contacts.push({prenom,nom,entreprise,fonction, email});
  displayContacts(); //pour mettre à jour l'affichage de la liste des contacts.
}


function displayContacts() {
  const contentDiv = document.getElementById('content');
  let html = `<h3>Contacts</h3>
            <table>
              <thead>
                <tr>
                  <td>Titre</td>
                  <td>E-mail</td>
                  <td>Numéro de téléphone</td>
                  <td>Fonction et entreprise</td>
                  <td>Libéllés</td>
                </tr>
              </thead>
              <tbody>`;
              // Ajoutez une ligne pour chaque contact dans le tableau
              contacts.forEach(contact => {
              html += `<tr>
                        <td>${contact.prenom} ${contact.nom}</td>
                        <td>${contact.email}</td>
                        <td>${contact.fonction} ${contact.entreprise}</td>
                        <td>${contact.fonction}</td>
                        <td>${contact.email}</td>
                      </tr>`;
              });
              html += '</tbody></table>';
  contentDiv.innerHTML = html;
}

