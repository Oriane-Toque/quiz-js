let questions = [
    'Combien de joueurs jouent sur un terrain de football (en Ligue 1 par exemple) ?',
    'Combien font 6 x 12 ?',
    'L\'eau est composée de combien d\'atomes ?'
];

let responses = [
    22,
    72,
    3
];

function askQuestion(index)
{
    // je pose une question à l'utilisateur et je récupère sa réponse dans la variable answerUser
    // const answerUser = window.prompt(questions[0]);

    // je pose la question correspondant à l'index indiqué
    const answerUser = window.prompt(questions[index]);
    // j'affiche la réponse de l'utilisateur dans la console
    console.log(answerUser);

    return answerUser;
}

function checkAnswer(index, response)
{
// je vérifie que la réponse à la question correspond à la réponse stockée dans la variable responses
// étant donné que la valeur retour de answerUser est un string et que les valeurs dans responses sont des nombres
// j'ai besoin de convertir ma chaîne de caractères

    response = askQuestion(index);

    if (Number(response) === responses[index])
    {
        // si c'est la bonne réponse j'affiche dans ma console "CORRECT"
        console.log('CORRECT');
        return true;
    }
    else
    {
        // sinon j'affiche "faux"
        console.log('faux');
        return false;
    }
}

function addResponseToDom(index, isCorrect)
{
    isCorrect = checkAnswer(index, response)
    
    if (isCorrect === true)
    {
        // je récupère le noeud du DOM correspondant à l'id right et je le stocke dans ma variable rightAnswer
        const rightAnswer = document.querySelector('#right .responses');
        
        // puis avec textContent j'ajoute à mon noeud la question posée dont la réponse est vraie
        rightAnswer.textContent = questions[index];
    }
    else
    {
        // je récupère le noeud du DOM correspondant à l'id wrong et je le stocke dans ma variable wrongAnswer
        const wrongAnswer = document.querySelector('#wrong .responses');
        // puis avec textContent j'ajoute à mon noeud la question posée dont la réponse est fausse
        wrongAnswer.textContent = questions[index];
    }
}