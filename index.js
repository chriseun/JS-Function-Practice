// Your Code Here
// let answer  = window.prompt('Do you head left, or right?')

// let firstAnswer  = window.prompt('Do you head left, or right?')
// console.log(firstAnswer)

// let firstAnswer  = window.prompt('Do you head left, or right?')
// if(firstAnswer === 'left'){
//     let secondAnswer = window.prompt(`You come across a stray cat.
// It scampers off down a small hole, just large enough for you to crawl through.
// Do you follow it, or continue on your path?`)

// } else if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt(`You come across a snoring dragon.
// On the other side of him, you see a shiny chest of treasure. Another path would
// lead you away from the dragon all together. Which do you take?`)

// }left

function start() {
  let firstAnswer = window.prompt('Do you head left, or right?')
  if (firstAnswer === 'left') {
    goLeft()

  } else if (firstAnswer === 'right') {
    goRight()
  }
}

function goLeft() {
  let secondAnswer = window.prompt(`You come across a stray cat.
    It scampers off down a small hole, just large enough for you to crawl through.
    Do you follow it, or continue on your path?`)
  if (secondAnswer === 'back') {
    start()
  } else if (secondAnswer === 'follow') {
    follow()
  } else if (secondAnswer === 'continue') {
    continueE()
  }
}

function goRight() {
  let secondAnswer = window.prompt(`You come across a snoring dragon.
    On the other side of him, you see a shiny chest of treasure. Another path would
    lead you away from the dragon all together. Which do you take?`)
  if (secondAnswer === 'back') {
    start()
  } else if (secondAnswer === 'other') {
    otherSide()
  } else if (secondAnswer === 'away') {
    away()
  }
}

// ///////////////////////////////////////////////////////////LEFT ////////////////////////////////////////////////////////////
function follow() {
  let thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
  if (thirdAnswer === 'back') {
    start()
  } else if (thirdAnswer === 'stay') {
    stay()
  } else if (thirdAnswer === 'spread') {
    spread()
  }
}

function continueE() {
  let thirdAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?')
  if (thirdAnswer === 'back') {
    start()
  } else if (thirdAnswer === 'ladder') {
    ladder()
  } else if (thirdAnswer === 'staircase') {
    staircase()
  }
}


function stay() {
  let fourthAnswer = window.alert('You live happily amongst the cats for the rest of your days.')
  if (fourthAnswer === 'back') {
    start()
  }

}

function spread() {
  let fourthAnswer = window.alert('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')
  if (fourthAnswer === 'back') {
    start()
  }
}

function ladder() {
  let fourthAnswer = window.alert('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.')
  if (fourthAnswer === 'back') {
    start()
  }
}

function staircase() {
  let fourthAnswer = window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
  if (fourthAnswer === 'back') {
    start()
  }
}


/////////////////////////////////// RIGHT ////////////////////////////////////////
function otherSide() {
  let thirdAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run')
  if (thirdAnswer === 'back') {
    start()
  }
  else if (thirdAnswer === 'stay') {
    stayRight()
  } else if (thirdAnswer === 'run') {
    runRight()
  }

}

function away() {
  let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
  if (thirdAnswer === 'back') {
    start()
  } else if (thirdAnswer === 'draw') {
    draw()
  } else if (thirdAnswer === 'pick') {
    pick()
  }
}


function draw() {
  let fourthAnswer = window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.')
  if (fourthAnswer === 'back') {
    start()
  }
}

function pick() {
  let fourthAnswer = window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
  if (fourthAnswer === 'back') {
    start()
  }
}

function stayRight() {
  let fourthAnswer = window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
  if (fourthAnswer === 'back') {
    start()
  }
}

function runRight() {
  let fourthAnswer = window.alert('Quickly, you run back to the cave\'s entrance. Sheepish, you return home.')
    if (fourthAnswer === 'back') {
      start()
    }
  }


  start()
