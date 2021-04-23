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

// je pose une question à l'utilisateur et je récupère sa réponse dans la variable answerUser
const answerUser = window.prompt(questions[0]);

// j'affiche la réponse de l'utilisateur dans la console
console.log(answerUser);

// je vérifie que la réponse à la question correspond à la réponse stockée dans la variable responses
// étant donné que la valeur retour de answerUser est un string et que les valeurs dans responses sont des nombres
// j'ai besoin de convertir ma chaîne de caractères

    if (Number(answerUser) === responses[0])
    {
        // si c'est la bonne réponse j'affiche dans ma console "CORRECT"
        console.log('CORRECT');
    }
    else
    {
        // sinon j'affiche "faux"
        console.log('faux');
    }

