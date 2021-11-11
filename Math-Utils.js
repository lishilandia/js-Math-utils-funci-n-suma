function suma(a, b) {
  console.log(a + b);
  return a + b
}

suma(10, 5)
suma(20, 7)
suma(35, 21)


function resta(c, d) {
  console.log(d - d);
  return c - d
}

resta(15, 5)
resta(28, 7)
resta(105, 21)

function multiplicacion(e,f) {
   console.log(e * f);
  return e * f
}

multiplicacion(2, 3)
multiplicacion(4, 37)
multiplicacion(76, 98)

function division(g, h) {
  console.log(g / h);
  return g/h
}

division(4, 2)
division(29, 7)
division(8762, 2018)

function numeroMayor(i, j) {
  
  if (i > j) {
    console.log("muestra " + i);
    return i
  } else if (j > i){
    console.log("muestra " + j);
    return j
  }
}

  numeroMayor(8, 5)
  numeroMayor(10, 30)
  numeroMayor(192812, 8371392)

  //Funcion es mayor

function esMayor(a,b) {
    if (a > b) {
    console.log("el mayor es " + a);
    return a
  } else {
    console.log("el mayor es " + b);
    return b
  }
}
  
esMayor(12, 22)


//Funcion es menor

function esMenor(a,b) {
    if (a < b) {
    console.log("el menor es" + a);
    return a
  } else {
    console.log("el menor es " + b);
    return b
  }
}
  
esMenor(12, 22)
esMenor(4,5)