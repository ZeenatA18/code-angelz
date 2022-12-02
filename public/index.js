let add_score = 0;


let scoreElement = document.querySelector('.add_score');
let nameHolderElement = document.querySelector('.name_holder');
type="text/javascript">window.setTimeout("document.querySelector('.error1').style.display='none';", 7000); 
   




// console.log(scoreElement)
// scoreElement.innerText = add_score;
// console.log(score_count)

// const score_box = document.querySelector('.score_box');

let btn_play = document.querySelector('.btn01')

var audio = new Audio("./css/sh.mp3");

btn_play.addEventListener('click', function(){
  audio.play()
}) 


let nextbtn_play = document.querySelector('.next_btn')

// var audio1 = new Audio("./css/sh.mp3");

nextbtn_play.addEventListener('click', function(){
  audio.play()
}) 

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

function addUsers() {
    document.getElementById('id_levels1').style.display = 'block';
}
