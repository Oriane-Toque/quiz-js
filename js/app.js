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
  return window.prompt(questions[index]);
}

// fonction 2
// on a besoin d'avoir accès à l'index de la réponse
// et la réponse fournie par l'utilisateur
function checkResponse(index, responseUser)
{
  

  if (Number(responseUser) === responses[index])
  {
    // j'indique à l'utilisateur que sa réponse est juste
    console.log("CORRECT");
    scoreRight++;
    // je renvoie true dans ma variable checkCorrect
    // pour qu'ensuite ma fonction addResponseToDOM
    // sache quelle modification renvoyée
    return true;
  }
  else
  {
    console.log("FAUX");
    scoreWrong++;
    return false;
  }
}

// fonction 3
// on a besoin de l'index et de la valeur retour de la
// fonction checkResponse en paramètres
function addResponseToDom(index, isCorrect)
{
  if (isCorrect === true)
  {
    // je rajoute chaque question où la réponse était juste
    document.querySelector('#right .responses').innerHTML += '<li>' + questions[index] + '</li>';
  }
  else
  {
    document.querySelector('#wrong .responses').innerHTML += '<li>' + questions[index] + '</li>';
  }
}

// fonction 4
// affichage compteurs des bonnes et mauvaises réponses
function counterResponse()
{
  // on vérifie si un élément p a déjà été créé pour affichage des scores
  if (!document.querySelector('#right p') || !document.querySelector('#wrong p'))
  {
    // si non alors on crée un élément p
    let counterRight = document.createElement('p');
    // on attribut son contenu
    counterRight.textContent = scoreRight;
    // et on cible ou on veut le positionner et on l'affiche
    document.querySelector('#right h2').append(counterRight);

    let counterWrong = document.createElement('p');
    counterWrong.textContent = scoreWrong;
    document.querySelector('#wrong h2').append(counterWrong);
  }
  else
  // sinon dans le cas que l'élément p a déjà été créé
  {
    // on ecrase le contenu précédent pour les nouveaux scores
    document.querySelector('#right h2 p').textContent = scoreRight;
    document.querySelector('#wrong h2 p').textContent = scoreWrong;
  }
}

// fonction 5
// 6ème étape : faire une fonction pour poser toutes les questions
// à l'utilisateur #playQuiz
function playQuiz()
{
  // on réinitialise à chaque nouvelle soumission du quiz
  scoreRight = 0;
  scoreWrong = 0;
  document.querySelector('#right ul').textContent = "";
  document.querySelector('#wrong ul').textContent = "";
  // yeah yeah j'ai besoin de récupérer toutes les questions de mon tableau
  // donc j'ai besoin de faire un boucle afin de parcourir mon tableau
  for(const index in questions)
  {
    const QUESTION = askQuestion(index);
    const RESPONSE = checkResponse(index, QUESTION);
    addResponseToDom(index, RESPONSE);
  }
  // seule fonction qui ne nécessite pas de se retrouver dans la boucle
  // on veut le score totale et non une énumération du score
  // donc on sort de la boucle cette fonction
  counterResponse();
}
