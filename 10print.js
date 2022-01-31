/*
  one possible implemenation of the 10print.org algorithm written in JavaScript

  Code Modification:
  - unicode chars
  - colors
  - playing with the algorithm
  - Arrays


  Colors:
  black, red, green, yellow, blue, cyan, white

  COLOR CODE RANGES
  _________________
  foreground        :   30 -> 37
  foreground bright :   90 -> 97
  background        :   40 -> 47
  background bright :   100 -> 107

*/

//color forground variable declarations
const RESET = '\x1b[0m'
const BLINK = '\x1b[5m'

//working with changing the length of the line
let line_width = 0
let direction = 0 //0 is forward, 1 is back
const screen_width = process.stdout.columns

function draw () {
  setTimeout(draw, 1000 / 50) // divide by a number to make the generation faster

  //testing to see if we need to change the direction of the drawing
  if(line_width == screen_width)
  {
    direction = 1
  }
  else if(line_width == 1 && direction == 1)
  {
      direction = 0
  }



  if(direction == 0)
  {
    line_width++
  }
  else
  {
    line_width--
  }

  //setting possible arrays to be used
  const block = ['█', '░', '▒', '▓'] //4
  const corner = ['╠', '╣', '╦', '╩', '╬', '═', '║', '╔', '╗', '╚', '╝'] // 11

  let output = '\x1b[44m\x1b[37m'

  for (let i = 0; i < line_width; i++)
  {
    //working with random variable for character choice
    let rand_block = Math.round(Math.random() * (block.length - 1))
    let rand_corner = Math.round(Math.random() * (corner.length - 1))


    /*if (r > 0.5) {
       output += '╱' //output += '\x1b[31m' followed by the text to be printed
    } else {
      output += '╲'
    }*/


    output += corner[rand_corner] // WHY DO I GET UNDEFINED
    //output += block[rand_block]

    //QUESTION: How to get looking more connected... is there a way to modify
    //the terminal such that everything looks more cohesive

  }
  console.log(output)
}

draw()
