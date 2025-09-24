

    // scores = { wins: 0, lose: 0, ties: 0 };
    let scores = JSON.parse(localStorage.getItem('scores')) || {
      wins: 0,
      lose: 0,
      ties: 0,
    }      ;

    // we can use or operator instead of if to initialize variables 
    /* if (!scores) {
       scores = {
         wins: 0,
         lose: 0,
         ties: 0,
       }
     }*/


    function PlayGame(PlayerPick) {

      let result = '';
      let computer_move = ''
      if (PlayerPick == 'rock') {
        computer_move = result1();

        if (computer_move === 'rock') {
          result = 'tie';
        } else if (computer_move === 'paper') {
          result = 'you win';
        } else {
          result = 'you loose';
        }

        // alert(`you picked rock and computer pick ${computer_move} , ${result} ,  wins : ${scores.wins} , lose : ${scores.lose} ,ties : ${scores.ties}`);

      }

      else if (PlayerPick == 'paper') {


        computer_move = result1();


        if (computer_move === 'rock') {
          result = 'you win';
        } else if (computer_move === 'paper') {
          result = 'tie';
        } else {
          result = 'you loose';
        }
        1
        // document.querySelector('.results').innerHTML = (`you picked paper and computer pick ${computer_move} , ${result} ,  wins : ${scores.wins} , lose : ${scores.lose} ,ties : ${scores.ties}`);
      }

      else {
        computer_move = result1();
        if (computer_move === 'rock') {
          result = 'you loose';
        } else if (computer_move === 'paper') {
          result = 'you win';
        } else {
          result = 'tie';
        }


        // alert(`you picked scissor and computer pick ${computer_move} , ${result}, wins : ${scores.wins} , lose : ${scores.lose} ,ties : ${scores.ties}`);


      }

      if (result === 'you loose') {
        scores.lose += 1;

      }
      if (result === 'you win') {

        scores.wins += 1;


      }

      if (result === 'tie') {
        scores.ties += 1;

      }

      updateScore();
      document.querySelector('.js-pick').innerHTML = ` you pick : <img src="images-of-game/${PlayerPick}-emoji.png "  class="move-button"> computer : <img
      src="images-of-game/${computer_move}-emoji.png"  class="move-button">`;

      document.querySelector('.js-result').innerHTML = ` ${result}`;

      // local storage is used ot store the value permanently of variables
      localStorage.setItem('scores', JSON.stringify(scores));

    }

    function result1() {

      let computer_move1 = '';
      let randum_num1 = Math.random();
      if (randum_num1 > 0 && randum_num1 < 0.3) {
        computer_move1 = 'rock'
      } else if (randum_num1 > 0.3 && randum_num1 < 0.6) {
        computer_move1 = 'paper'
      }

      else {
        computer_move1 = 'scissor';
      }
      console.log(computer_move1);
      return computer_move1;

    }


    function updateScore() {
      document.querySelector('.js-scores').innerHTML = `Wins: ${scores.wins} , Losses: ${scores.lose} , Ties: ${scores.ties}`
    }

    function resetGame() {
      scores = {
        wins: 0,
        lose: 0,
        ties: 0,
      }; localStorage.removeItem('scores');
      document.querySelector('.reset-value').innerHTML = '';
      updateScore();
      document.querySelectorAll('.reset-value').forEach(function (el) {
        el.innerHTML = '';
      });

    }