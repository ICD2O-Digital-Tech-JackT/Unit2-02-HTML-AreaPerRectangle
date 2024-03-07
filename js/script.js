function DisplayArea(x){
  document.getElementById("Area").innerHTML=x
}


function CalculateArea(Length,Width){
  DisplayArea(Length*Width)
}

function DisplayPerimeter(x){
  document.getElementById("Perimeter").innerHTML=x
}


function CalculatePerimeter(Length,Width){
  DisplayPerimeter((2*Length)+(2*Width))
}
