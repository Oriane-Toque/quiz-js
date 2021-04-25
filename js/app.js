// poser la 1ère question
/* const response = window.prompt(questions[0]);
console.log = response;

3ème étape - vérifier si la réponse donnée est juste ou fausse
4ème étape - puis je modifie le DOM en fonction de la réponse donnée

si la réponse est correct
  if (Number(response) === responses[0])
  {
    window.alert("CORRECT");
    document.querySelector('#right .responses li').textContent = questions[0];
  }
sinon c'est que la réponse est fausse
  else
  {
    window.alert("FAUX");
    document.querySelector('#wrong .responses').innerHTML = '<li>' + questions[0] + '</li>';
  } */

// 5ème étape - Créer trois fonctions
// Fonction 1 = afficher + récupérer réponse de l'utilisateur
// Fonction 2 = vérifier si la réponse est vrai ou faux
// Fonction 3 = modifier le DOM en fonction si la réponse est vraie ou fausse

// fonction 1
// on a besoin d'avoir accès à l'index de la question pour la poser
function askQuestion(index)
{
  // je pose la question à l'index correspondant
  const response = window.prompt(questions[index]);

  // j'affiche la réponse donnée
  window.alert(response);

  // appelle de la fonction checkResponse()
  checkResponse(index, response);
}

// fonction 2
// on a besoin d'avoir accès à l'index de la réponse
// et la réponse fournie par l'utilisateur
function checkResponse(index, responseUser)
{
  

  if (Number(responseUser) === responses[index])
  {
    // j'indique à l'utilisateur que sa réponse est juste
    window.alert("CORRECT");
    // je renvoie true dans ma variable checkCorrect
    // pour qu'ensuite ma fonction addResponseToDOM
    // sache quelle modification renvoyée
    checkCorrect = true;
    // je fais appel à ma fonction pour modification du DOM
    addResponseToDom(index, checkCorrect);
  }
  else
  {
    window.alert("FAUX");
    checkCorrect = false;
    addResponseToDom(index, checkCorrect);
  }
}

// fonction 3
// on a besoin de l'index et de la valeur retour de la
// fonction checkResponse en paramètres
function addResponseToDom(index, isCorrect)
{
  if (isCorrect === true)
  {
    document.querySelector('#right .responses').innerHTML += '<li>' + questions[index] + '</li>';
  }
  else
  {
    document.querySelector('#wrong .responses').innerHTML += '<li>' + questions[index] + '</li>';
  }
}

// 6ème étape : faire une fonction pour poser toutes les questions
// à l'utilisateur #playQuiz
function playQuiz()
{
  // yeah yeah j'ai besoin de récupérer toutes les questions de mon tableau
  // donc j'ai besoin de faire un boucle afin de parcourir mon tableau
  for(const index in questions)
  {
    // je vais faire appel à ma fonction qui affiche les question
    askQuestion(index);
  }
}
