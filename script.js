// Aggiungi un event listener per il click del bottone "Inizia"
document.getElementById("startButton").addEventListener("click", startQuiz);

let currentStep = 1;
let score = 0;

// Funzione per avviare il quiz
function startQuiz() {
    document.getElementById("banner").style.display = "none"; // Nasconde il banner iniziale
    document.getElementById("quizSection").style.display = "block"; // Mostra la sezione del quiz
    showQuestion(); // Mostra la prima domanda
}

// Funzione per mostrare le domande
function showQuestion() {
    const quizStep = document.getElementById("quizStep");
    if (currentStep === 1) {
        quizStep.innerHTML = 
            <h2>Step 1: Quante pecore puoi avere nella tua fattoria a livello 25?</h2>
            <button onclick="answerQuestion(20)">A) 10</button>
            <button onclick="answerQuestion(0)">B) 15</button>
            <button onclick="answerQuestion(0)">C) 20</button>
            <button onclick="answerQuestion(0)">D) 25</button>
        ;
    } else if (currentStep === 2) {
        quizStep.innerHTML = 
            <h2>Step 2: Quale coltura richiede più tempo per crescere?</h2>
            <button onclick="answerQuestion(20)">A) Grano</button>
            <button onclick="answerQuestion(0)">B) Mais</button>
            <button onclick="answerQuestion(0)">C) Soia</button>
            <button onclick="answerQuestion(0)">D) Canna da zucchero</button>
        ;
    } else if (currentStep === 3) {
        quizStep.innerHTML = 
            <h2>Step 3: Qual è il costo per aprire il secondo slot nella bottega di produzione del formaggio?</h2>
            <button onclick="answerQuestion(20)">A) 200 monete</button>
            <button onclick="answerQuestion(0)">B) 400 monete</button>
            <button onclick="answerQuestion(0)">C) 800 monete</button>
            <button onclick="answerQuestion(0)">D) 1.000 monete</button>
        ;
    }
    // Puoi aggiungere altre domande con else if per ogni step
}

// Funzione che gestisce la risposta e calcola il punteggio
function answerQuestion(points) {
    score += points; // Aggiungi i punti
    currentStep++; // Passa al passo successivo
    
    if (currentStep > 3) { // Modifica il numero 3 con il numero totale di step che hai
        endQuiz(); // Se hai finito il quiz, mostra il risultato
    } else {
        showQuestion(); // Se non hai finito, mostra la prossima domanda
    }
}

// Funzione che termina il quiz e mostra il punteggio finale
function endQuiz() {
    document.getElementById("quizSection").style.display = "none"; // Nasconde il quiz
    document.getElementById("finalSection").style.display = "block"; // Mostra il punteggio finale
    document.getElementById("totalScore").innerText = Il tuo punteggio totale è: ${score}; // Mostra il punteggio finale
}