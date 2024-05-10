//pour faire disparaitre le sidebar
document.getElementById('toggle-sidebar').addEventListener('click', function() {
  document.querySelector('.container').classList.toggle('hiddenSidebar');
});

// pour faire appaitre le formulaire dans le content
document.getElementById('create-contact').addEventListener('click', function() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
  <form id="contactForm" class="contact-form">
    <label for="prenom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
    </svg></label>
    <input type="text" id="prenom" placeholder="Prénom" name="prenom"><br><br>
    <label for="nom"></label>
    <input type="text" id="nom" name="nom" placeholder="Nom"><br><br>
    <label for="entreprise"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
    </svg></label>
    <input type="text" id="entreprise" name="entreprise" placeholder="Entreprise"><br><br>
    <label for="fonction"></label>
    <input type="text" id="fonction" name="fonction" placeholder="Fonction"><br><br>
    <label for="telephone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
    </svg></label>
    <input type="tel" id="telephone" name="telephone" pattern="^\+\d{1,3}\s?\(\d{1,3}\)\s?\d{3,4}\s?-?\d{2,3}\s?-?\d{2,3}$
    " required /> <br><br>
    <label for="email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
    </svg></label>
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
function addContact(prenom,nom,entreprise,fonction, telephone,email) {
  contacts.push({prenom,nom,entreprise,fonction, telephone,email});
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
                        <td>${contact.telephone}</td>
                        <td>${contact.fonction} ${contact.entreprise}</td>
                        <td>${contact.email}</td>
                      </tr>`;
              });
              html += '</tbody></table>';
  contentDiv.innerHTML = html;
}

