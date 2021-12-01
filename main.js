score = 0;

function check()
{
  y1 = document.getElementById('Y1').checked
  n1 = document.getElementById('N1').checked
  console.log(y1)
  if(y1 == true){
    score = score + 1;
    document.getElementById('E1').innerHTML = ""
  }
  else if(y1 == false && n1 == false){
    document.getElementById('E1').innerHTML = '*select an answer for this question'
  }
  else{
    document.getElementById('E1').innerHTML = ""
  }


  y2 = document.getElementById('Y2').checked
  n2 = document.getElementById('N2').checked
  console.log(y2)
  if(y2 == true){
    score = score + 1;
    document.getElementById('E2').innerHTML = ""
  }
  else if(y2 == false && n2 == false){
    document.getElementById('E2').innerHTML = '*select an answer for this question'
  }
  else{
    document.getElementById('E2').innerHTML = ""
  }


  y3 = document.getElementById('Y3').checked
  n3 = document.getElementById('N3').checked
  console.log(y3)
  if(y3 == true){
    score = score + 1;
    document.getElementById('E3').innerHTML = ""
  }
  else if(y3 == false && n3 == false){
    document.getElementById('E3').innerHTML = '*select an answer for this question'
  }
  else{
    document.getElementById('E3').innerHTML = ""
  }


  y4 = document.getElementById('Y4').checked
  n4 = document.getElementById('N4').checked
  console.log(y4)
  if(y4 == true){
    score = score + 1;
    document.getElementById('E4').innerHTML = ""
  }
  else if(y4 == false && n4 == false){
    document.getElementById('E4').innerHTML = '*select an answer for this question'
  }
  else{
    document.getElementById('E4').innerHTML = ""
  }


  y4 = document.getElementById('Y4').checked
  n4 = document.getElementById('N4').checked
  console.log(y4)
  if(y4 == true){
    score = score + 1;
    document.getElementById('E4').innerHTML = ""
  }
  else if(y4 == false && n4 == false){
    document.getElementById('E4').innerHTML = '*select an answer for this question'
  }
  else{
    document.getElementById('E4').innerHTML = ""
  }


  y5 = document.getElementById('Y5').checked
  n5 = document.getElementById('N5').checked
  console.log(y5)
  if(y5 == true){
    score = score + 1;
    document.getElementById('E5').innerHTML = ""
  }
  else if(y5 == false && n5 == false){
    document.getElementById('E5').innerHTML = '*select an answer for this question'
  }
  else{
    document.getElementById('E5').innerHTML = ""
  }


  y6 = document.getElementById('Y6').checked
  n6 = document.getElementById('N6').checked
  console.log(y6)
  if(y6 == true){
    score = score + 1;
    document.getElementById('E6').innerHTML = ""
  }
  else if(y6 == false && n6 == false){
    document.getElementById('E6').innerHTML = '*select an answer for this question'
  }
  else{
    document.getElementById('E6').innerHTML = ""
  }


  y7 = document.getElementById('Y7').checked
  n7 = document.getElementById('N7').checked
  console.log(y7)
  if(y7 == true){
    score = score + 1;
    document.getElementById('E7').innerHTML = ""
  }
  else if(y7 == false && n7 == false){
    document.getElementById('E7').innerHTML = '*select an answer for this question'
  }
  else{
    document.getElementById('E7').innerHTML = ""
  }

  if((y1 == true || n1 == true) && (y2 == true || n2 == true) && (y3 == true || n3 == true) && (y4 == true || n4 == true) && (y5 == true || n5 == true) && (y6 == true || n6 == true) && (y7 == true || n7 == true))
  {
    if(score <= 2){
      document.getElementById('result').innerHTML = "You have no risk to COVID-19 DISCLAIMER: This test is not 100% accurate."
    }
    else if(score > 2 && score < 6){
      document.getElementById('result').innerHTML = "You have slight risk to COVID-19 DISCLAIMER: This test is not 100% accurate."
    }
    else{
      document.getElementById('result').innerHTML = "You have risk to COVID-19 DISCLAIMER: This test is not 100% accurate."
    }
  }
  else{
    scrollup()
    document.getElementById('result').innerHTML = ""
  }

  score = 0
}

function reset(){
  scrollup()
  y1 = false
  n1 = false
  y2 = false
  n2 = false
  y3 = false
  n3 = false
  y4 = false
  n4 = false
  y5 = false
  n5 = false
  y6 = false
  n6 = false
  y7 = false
  n7 = false
}

function scrollup(){
  window.scrollTo(0,0)
}