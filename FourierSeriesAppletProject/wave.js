function displayWaveForIndexOfFourierSerie(c, styleDisplay, frequency){

    let x = 0 
    let y = 0

    for(let i = 0; i < c; i++){
        
        let prevx = x
        let prevy = y
        let n = i*2+1
        let radius = 60 * (4 / (n * PI)) 
        x += radius * cos(n * time)
        y += radius * sin(n * time)

        stroke(255, 100)
        noFill()
        ellipse(prevx, prevy, radius * 2)

        if(styleDisplay){
            line(prevx, prevy, x, y)
            fill(255)
            ellipse(x, y, 5)
        }
        else{
            stroke(255)
            line(prevx, prevy, x, y)
        }
        
}
    
    wave.unshift(y)

    translate(200, 0)
    line(x-200 , y , 0 ,wave[0])  //Linha que liga a onda ao circulo

    drawWave()
  
    time += (frequency*0.01)                  //Frequência
  
    if(wave.length > 700){
      wave.pop()
    }
  }


function drawWave(){   
    beginShape()
    noFill()
    for(let i = 0; i < wave.length; i++){
        vertex(i, wave[i])
    }
    endShape()
}