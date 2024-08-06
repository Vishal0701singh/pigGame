const dice = document.querySelector(".dice");
const hold = document.querySelector(".hold");
const image = document.querySelector("#image");
const player_1 = document.querySelector(".player_1");
const player_2 = document.querySelector(".player_2");
const score0 = document.querySelector(".score0");
const score1 = document.querySelector(".score1");
const tScore0 = document.querySelector(".tScore0");
const tScore1 = document.querySelector(".tScore1");
const player1score = document.querySelector(".player1score");
const player2score = document.querySelector(".player2score");
const newgame = document.querySelector(".newgame");
const card = document.querySelector(".card")
const img = document.querySelector(".img")
const btnclass = document.querySelector(".btnclass")

const totalScore1 = document.querySelector(".totalScore1");

let score = 0;
let play = true;
img.classList.add('display');

dice.addEventListener('click', function () {
    if (play) {
        let number = Math.trunc(Math.random() * 6) + 1;
        // console.log(typeof(score0.textContent));
        image.src = `face${number}.png`;
        img.classList.remove('display');
        if (player_1.classList.contains('active')) {
            if (number === 1) {
                score0.textContent = 0;
                score = 0;
                player_1.classList.remove('active');
                player_2.classList.add("active");
            }
            else {
                score = score + number;
                score0.textContent = score;
            }
        }
        else {
            if (number === 1) {
                score1.textContent = 0;
                score = 0;
                player_2.classList.remove('active');
                player_1.classList.add("active");
            }
            else {
                score = score + number;
                score1.textContent = score;
            }

        }
    }

})
// for hold button ******************


let tscore0 = 0;
let tscore1 = 0;
hold.addEventListener('click', function () {

    if (play) {
        if (player_1.classList.contains('active')) {

            player_1.classList.remove('active');
            player_2.classList.add("active");
            tscore0 += score;
            tScore0.textContent = tscore0;
            score0.textContent = 0;
            score = 0;


        } else {
            player_2.classList.remove('active');
            player_1.classList.add("active");
            tscore1 += score;
            tScore1.textContent = tscore1;
            score1.textContent = 0;
            score = 0;
        }
        if (tscore0 >= 20) {
            play = false;
            player_1.classList.add('win');
            player1score.classList.add('display');
            // card.classList.add('display');
            tScore0.textContent = "YOU WON🏆";
            tScore0.classList.add('winbox');
            img.classList.add('display');
            btnclass.classList.add('display');
            tscore0 = 0;
            tscore1 = 0;

        } if (tscore1 >= 20) {
            play = false;
            player_2.classList.add('win');
            player2score.classList.add('display');
            // totalScore1.classList.add('display');
            tScore1.textContent = "YOU WON🏆";
            tScore1.classList.add('winbox');
            img.classList.add('display');
            btnclass.classList.add('display');
            tscore1 = 0;
            tscore0 = 0;
        }
    }

})


//////for new game***************************
newgame.addEventListener('click', function () {
    play = true;
    tScore0.textContent = 0;
    tScore1.textContent = 0;

    score0.textContent = 0;
    score1.textContent = 0;

    player_1.classList.add('active');
    player_2.classList.remove('active');

    player1score.classList.remove('display');
    // card.classList.remove('display');
    player2score.classList.remove('display');
    // totalScore1.classList.remove('display');

    player_1.classList.remove('win');

    img.classList.add('display');
    btnclass.classList.remove('display');

    player_2.classList.remove('win');



    tScore0.classList.remove('winbox');
    tScore1.classList.remove('winbox');

})


