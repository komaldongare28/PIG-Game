function question (question,answer,correct){
    this.question=question;
    this.answer=answer;
    this.correct=correct;
}

var q1=new question("Is JavaScript coolest language?",["Yes","No"],0);
var q2=new question("What is the name of course tutor\'s teacher?",["Jonas","komal","TD"],0);
var q3=new question("What does best describes coding?",["Boring","hard","Fun"],2);

question.prototype.DisplayQueue()=function(){
    console.log(this.question);
    for(vari=0;i<this.answer.length;i++){
console.log(i+": " + this.answer[i]);
    }
}

alert("Check");
var questions=[q1,q2,q3];
var n=Math.random()*questions.length;
questions[n].DisplayQueue();

