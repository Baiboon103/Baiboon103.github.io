
const questiontext = document.querySelector ("#C")

const  oc = document.querySelector ("#q")

const  bc =document.querySelector ("#b")

let questioncounter = 0
let currentQuestion=""
let availableQuestions = []
let p = 0
// push the questions into availableQuestions Array
function setAvailableQuestions() {
 const totalquestions =   quiz.length
 for (let i=0; i<totalquestions; i++) {
   //console.log (i,quiz[i])     
   availableQuestions.push(quiz[i])
}
console.log (availableQuestions) 
}

// set question number and question and options
function getNewQuestion() {
console.log ('hello')    
// set question text
    // get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    console.log(questionIndex)
    currentQuestion = questionIndex
    questiontext.innerHTML = currentQuestion.q
    //get  the position of "question index"from available question list
    const index1 = availableQuestions.indexOf(questionIndex)
    //remove the 'question index'available question list so the question does not repeat itself
    availableQuestions.splice(index1,1)
    //getoption
    oc.innerHTML=""
    for (let i = 0; i <4;i++) {
        const option = document.createElement ('div')
        option.innerHTML = currentQuestion.o [i] 
        option.id = i
        option.className = "O"  
        option.setAttribute("onclick","getresult(this)")
        oc.appendChild (option) }
    questioncounter++
    console.log (availableQuestions)
}           
function getresult(optionelement){
    const id = parseInt (optionelement.id)
if (id === currentQuestion.a) {
    optionelement.classList.add("c")
    window.alert ("correct!!!") 
    p++
    next()
} else {   
    optionelement.classList.add("ic")
    window.alert ("incorrect!!!!")
    p--
    next()
}

} 

function next()  {
if (questioncounter ===quiz.length) {
window.alert ('you finished!') 
window.alert("Your Score =" +p)


} else {
getNewQuestion()

}

}

window.onload = function() {
    // first we will set all questionss in avialableQuestions Array
    setAvailableQuestions();

    // second we will call getNewQuestion(); function
    getNewQuestion();
}







