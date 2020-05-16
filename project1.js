var placingInfect = true
var infected = []



function add(num) {
  if (placingInfect == true && !infected.includes(num)) {
    document.getElementById(num).style.backgroundColor = "#ff0015";
    infected.push(num)
    console.log(infected)
  }
}

function start() {
  var findingNumber = true
  var movingNumber = []
  while (findingNumber == true) {
    var number = Math.floor(Math.random() * 81) + 1;

    if (movingNumber.includes(number)) {

    } else{
      movingNumber.push(number)
    }
    if (movingNumber.length == 2) {
      findingNumber = false
    }
  }
  var num1 = document.getElementById(movingNumber[0])
  var num2 = document.getElementById(movingNumber[1])
  var rect1 = num1.getBoundingClientRect();
  var rect2 = num2.getBoundingClientRect();

  var pos1ToMove = 800 - rect1.x
  var pos2ToMove = 680 - rect1.y

  var pos1 = 0
  var pos2 = 0

  var pos3ToMove = 800 - rect2.x
  var pos4ToMove = 680 - rect2.y

  var pos3 = 0
  var pos4 = 0

  var startMove = setInterval(move, 1)

  function move() {
    if(pos1 == pos1ToMove && pos2 == pos2ToMove && pos3 == pos3ToMove && pos4 == pos4ToMove){
      clearInterval(startMove)
      if (infected.includes(movingNumber[0])) {
        infected.push(movingNumber[1])
        document.getElementById(movingNumber[1]).style.backgroundColor = "#ff0015";
      }
      if (infected.includes(movingNumber[1])) {
        infected.push(movingNumber[0])
        document.getElementById(movingNumber[0]).style.backgroundColor = "#ff0015";
      }
      num1.style.left = 0 + 'px';
      num1.style.top = 0 + 'px';
      num2.style.left = 0 + 'px';
      num2.style.top = 0 + 'px';
    } else {
      if (pos1 < pos1ToMove) {pos1++}
      if (pos2 < pos2ToMove) {pos2++}

      if (pos3 < pos3ToMove) {pos3++}
      if (pos4 < pos4ToMove) {pos4++}
      num1.style.left = pos1 + 'px';
      num1.style.top = pos2 + 'px';
      num2.style.left = pos3 + 'px';
      num2.style.top = pos4 + 'px';
    }
  }
}
