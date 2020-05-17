var placingInfect = true

var middle = [11,12,13,14,15,16,17,20,21,22,23,24,25,26,29,30,31,32,33,34,35,38,39,40,41,42,43,44,47,48,49,50,51,52,53,56,57,58,59,60,61,62,65,66,67,68,69,70,71,]
var left = [10,19,28,37,46,55,64]
var right = [18,27,36,45,54,63,72]
var top1 = [2,3,4,5,6,7,8]
var bottom1 = [74,75,76,77,78,79,80]
var topleft = [1]
var bottomleft = [73]
var bottomright = [81]
var topright = [9]
var infected = []
var imune = []



function add(num) {
  if (placingInfect == true && !infected.includes(num)) {
    document.getElementById(num).style.backgroundColor = "#ff0015";
    infected.push(num)
  }
}

function start(){
  var i = 0
  while(i < infected.length){
      if (middle.includes(infected[i])) {
        document.getElementById(infected[i]-9).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]-1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+9).style.backgroundColor = "#ff0015";
      }
      if (left.includes(infected[i])) {
        document.getElementById(infected[i]-9).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+9).style.backgroundColor = "#ff0015";
      }
      if (right.includes(infected[i])) {
        document.getElementById(infected[i]-9).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]-1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+9).style.backgroundColor = "#ff0015";
      }
      if (top1.includes(infected[i])) {
        document.getElementById(infected[i]-1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+9).style.backgroundColor = "#ff0015";
      }
      if (bottom1.includes(infected[i])) {
        document.getElementById(infected[i]-9).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]-1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+1).style.backgroundColor = "#ff0015";
      }
      if (topleft.includes(infected[i])) {
        document.getElementById(infected[i]+1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+9).style.backgroundColor = "#ff0015";
      }
      if (bottomleft.includes(infected[i])) {
        document.getElementById(infected[i]-9).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+1).style.backgroundColor = "#ff0015";
      }
      if (bottomright.includes(infected[i])) {
        document.getElementById(infected[i]-9).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]-1).style.backgroundColor = "#ff0015";
      }
      if (topright.includes(infected[i])) {
        document.getElementById(infected[i]-1).style.backgroundColor = "#ff0015";
        document.getElementById(infected[i]+9).style.backgroundColor = "#ff0015";
      }
      i++
  }
  var newlyAdded = []
  var l = 0
  while (l < infected.length) {
    if (!newlyAdded.includes(infected[0])) {
      if (middle.includes(infected[0])) {
        newlyAdded.push(infected[0]-9,infected[0]-1,infected[0]+1,infected[0]+9)
        infected.push(infected[0]-9,infected[0]-1,infected[0]+1,infected[0]+9)
        infected.splice(0,1)
        }
      if (left.includes(infected[0])) {
        newlyAdded.push(infected[0]-9,infected[0]+1,infected[0]+9)
        infected.push(infected[0]-9,infected[0]+1,infected[0]+9)
        infected.splice(0,1)
      }
      if (right.includes(infected[0])) {
        newlyAdded.push(infected[0]-9,infected[0]-1,infected[0]+9)
        infected.push(infected[0]-9,infected[0]-1,infected[0]+9)
        infected.splice(0,1)
      }
      if (top1.includes(infected[0])) {
        newlyAdded.push(infected[0]-1,infected[0]+1,infected[0]+9)
        infected.push(infected[0]-1,infected[0]+1,infected[0]+9)
        infected.splice(0,1)
      }
      if (bottom1.includes(infected[0])) {
        newlyAdded.push(infected[0]-9,infected[0]-1,infected[0]+1)
        infected.push(infected[0]-9,infected[0]-1,infected[0]+1)
        infected.splice(0,1)
      }
      if (topleft.includes(infected[0])) {
        newlyAdded.push(infected[0]+1,infected[0]+9)
        infected.push(infected[0]+1,infected[0]+9)
        infected.splice(0,1)
      }
      if (bottomleft.includes(infected[0])) {
        newlyAdded.push(infected[0]-9,infected[0]+1)
        infected.push(infected[0]-9,infected[0]+1)
        infected.splice(0,1)
      }
      if (bottomright.includes(infected[0])) {
        newlyAdded.push(infected[0]-1,infected[0]-9)
        infected.push(infected[0]-1,infected[0]-9)
        infected.splice(0,1)
      }
      if (topright.includes(infected[0])) {
        newlyAdded.push(infected[0]-1,infected[0]+9)
        infected.push(infected[0]-1,infected[0]+9)
        infected.splice(0,1)
      }
    }
    l++
  }
}
