let time = 0
const wave = []
let index
let frequency

function setup() {
  createCanvas(1150, 600)
  index = createSlider(1, 50, 1)
  frequency = createSlider(1, 20, 5)
}

function draw() {
  text("teste")
  configurationDisplay()

  let styleDisplay = false;

  displayWaveForIndexOfFourierSerie(index.value(), styleDisplay, frequency.value())

}

function configurationDisplay(){
  background(0)
  translate(200, 200)

  //stroke(255)
  //noFill()
  
}

