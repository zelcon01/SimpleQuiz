
var quizButton = document.createElement("button");
quizButton.textContent = 'Click to start!';
document.body.appendChild(quizButton);

var questionOne = document.createElement('div'); 
questionOne.textContent = "What is your name?";
questionOne.style.display = 'none';

var q1o1 = document.createElement('button');
var q1o2 = document.createElement('button');
var q1o3 = document.createElement('button');
var q1o4 = document.createElement('button');
var q1o5 = document.createElement('button');

q1o1.textContent = 'Nick';
q1o2.textContent = 'Jason';
q1o3.textContent = 'Tony';
q1o4.textContent = 'Steven';
q1o5.textContent = 'Harry';

q1o1.style.display = 'none';
q1o2.style.display = 'none';
q1o3.style.display = 'none';
q1o4.style.display = 'none';
q1o5.style.display = 'none';

quizButton.addEventListener('click', function (){
   questionOne.style.display = 'block';
   q1o1.style.display = 'inline-block';
   q1o2.style.display = 'inline-block';
   q1o3.style.display = 'inline-block';
   q1o4.style.display = 'inline-block';
   q1o5.style.display = 'inline-block';
});

document.body.appendChild(questionOne);
document.body.appendChild(q1o1);
document.body.appendChild(q1o2);
document.body.appendChild(q1o3);
document.body.appendChild(q1o4);
document.body.appendChild(q1o5);


var questionTwo = "What is your quest?"

var questionThree = "What... is the air-speed velocity of an unladen swallow?"


