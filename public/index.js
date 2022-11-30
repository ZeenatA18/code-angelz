let add_score = 0;


let scoreElement = document.querySelector('.add_score');
// console.log(scoreElement)
scoreElement.innerText = add_score;
// console.log(score_count)

const score_box = document.querySelector('.score_box');

let btn_play = document.querySelector('.play_btn')

var audio = new Audio("./css/Head__Shoulders__Knees_&_Toes_with_Lyrics_♫_Kids_Learning_Songs_♫_Camp_Song_&_Brain_Breaks_for_Kids.mp3");

btn_play.addEventListener('click', function(){
  audio.play()
})  