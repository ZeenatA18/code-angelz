let add_score = 0;


let scoreElement = document.querySelector('.add_score');
let nameHolderElement = document.querySelector('.name_holder');


// console.log(scoreElement)
// scoreElement.innerText = add_score;
// console.log(score_count)

// const score_box = document.querySelector('.score_box');

// let btn_play = document.querySelector('.play_btn')

// var audio = new Audio("./css/Head__Shoulders__Knees_&_Toes_with_Lyrics_♫_Kids_Learning_Songs_♫_Camp_Song_&_Brain_Breaks_for_Kids.mp3");

// btn_play.addEventListener('click', function(){
//   audio.play()
// })  

var levels = document.getElementById('id_levels');

window.onclick = function (event) {


    if (event.target == levels) {
        register.style.display = "none";
    }
    // else if (event.target == modal) {
    //     modal.style.display = "none";
    // } else if (event.target == admin) {
    //     admin.style.display = "none";
    // }
}


function addUser() {
    // const event = window.event;
    // event.preventDefault();

    // read the username from the textbox

    const name_holder = nameHolderElement.value
    console.log(name_holder);
    if (name_holder) {

        axios.post('/api/register', {
            name_holder        
        }).then(function() {
    
            document.getElementById('id_levels').style.display = 'block';
        })
        .catch(function(err){
            console.log(err);
        });
    } else {
        alert("Enter name!")
    }
    // alert("add user!");

    // return false;
    // action="/api/register"
}

// const data1 = document.querySelector('.data');


// axios
// .get('/api/register')
// .then((result) =>{
//     result.data.forEach(levels => {
// data1.innerHTML += `<li>${levels.level}</li>`
//     });
// })