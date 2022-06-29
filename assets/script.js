var topicsString = "HTML, CSS, Git, JavaScript";

let topicsArray = ["HTML", "CSS", "Git", "JavaScript"];

function randomize (maxNbr){
    return (Math.floor(Math.random() * maxNbr)+1);
}

function listTopics(){
    for (i=0;i<topicsArray.length;i++){
        console.log(topicsArray[i]);
    }
}


function selectTopic(topic) {
  if (topic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topic === 'Git') {
    console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
var n = randomize(topicsArray.length)-1;
selectTopic(topicsArray[n]);