//pour faire disparaitre le sidebar
document.getElementById('toggle-sidebar').addEventListener('click', function() {
  document.querySelector('.container').classList.toggle('hiddenSidebar');
});

// pour faire appaitre le formulaire dans le content
document.getElementById('create-contact').addEventListener('click', function() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
  <form id="contactForm" class="contact-form">
    
    <img class="LrbNhc tUOMob" src="https://www.gstatic.com/identity/boq/profilepicturepicker/photo_silhouette_e02a5f5deb3ffc173119a01bc9575490.png" alt="Photo d'un contact." data-iml="25926.400000000373">  
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue" class="bi bi-plus-circle-fill" viewBox="0 0 16 16" >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
      </svg>
    
    <br>
    <br>
    <div>
      <label for="prenom">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
      </label>
      <input type="text" id="prenom" class="larg"placeholder="Prénom" name="prenom">
      <br>
      <label for="nom"></label>
      <input type="text" id="nom" class="larg" name="nom" placeholder="Nom">
      <br>
      <br>
    </div>
    <div>
      <label for="entreprise">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
        <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
      </svg>
      </label>
      <input type="text" id="entreprise" class="larg" name="entreprise" placeholder="Entreprise">
      <br>
      <label for="fonction"></label>
      <input type="text" id="fonction" class="larg" name="fonction" placeholder="Fonction">
      <br>
      <br>
    </div>
    <div>
      <label for="email">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
          </svg>
      </label>
      <input type="email" id="email" name="email" placeholder="E-mail" class="larg"patter="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
      <br>  <br> 
      <button type="submit" class="length">+ Ajouter Adresse email</button>
    </div>
    <br> 
    <label for="telephone">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
      </svg>
    </label> 
    <input type="tel" id="telephone" class="larg" name="telephone" pattern="^\+\d{1,3}\s?\(\d{1,3}\)\s?\d{3,4}\s?-?\d{2,3}\s?-?\d{2,3}$
    " required /> 
    <br>
    <br>
    

    <button type="submit" class="save-button" onclick="countElements()">Enregistrer</button>

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

//ajouter un nouveau contact au tableau 
function addContact(prenom,nom,entreprise,fonction, telephone,email) {
  contacts.push({prenom,nom,entreprise,fonction, telephone,email});
  displayContacts(); //pour mettre à jour l'affichage de la liste des contacts.
}


let contacts = [];
function displayContacts() {
  const contentDiv = document.getElementById('content');
  let html = `<h3 class="titre-content">Contacts <span>(0)</span></h3>
            <table id="myTable">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>E-mail</th>
                  <th>Numéro de téléphone</th>
                  <th>Fonction et entreprise</th>
                  <th>Libéllés</th>
                </tr>
                
              </thead>
              <tbody>`;
              // Ajoutez une ligne pour chaque contact dans le tableau
              contacts.forEach(contact => {
              html += `<hr>
                      <tr>
                        <td>${contact.prenom} ${contact.nom}</td>
                        <td>${contact.email}</td>
                        <td>${contact.telephone}</td>
                        <td>${contact.fonction} ${contact.entreprise}</td>
                        <td><button class="libbtn btnModifier">Modifier</button><button class="libbtn btnSupprimer">Supprimer</button></td>
                      </tr>`;
                      
              });
              html += '</tbody></table>';
  contentDiv.innerHTML = html;
}







// Pour  faire apparaitre la fenetre popup
document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("popup");
  var btn = document.getElementById("popupButton");
  var span = document.getElementsByClassName("close")[0];

  // Affiche la popup quand le bouton est cliqué
  btn.onclick = function() {
      popup.style.display = "block";
  }

  // Ferme la popup quand l'utilisateur clique sur <span> (x)
  span.onclick = function() {
      popup.style.display = "none";
  }

  // Ferme la popup quand l'utilisateur clique en dehors de la popup
  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = "none";
      }
  }
});


