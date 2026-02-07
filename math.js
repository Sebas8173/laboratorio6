function factorialize(num) {
  // Si el número es menor que 0, rechacelo. 
  if (num < 0) 
        return -1;
    
  // Si el número es 0, su factorial es 1.
  else if (num == 0) 
      return 1;
    
  // De otra forma, llama al procedimiento de nuevo
    else {
        return (num * factorialize(num - 1));
    }
}

function fibonacciIterativo(n) {
    let a = 0, b = 1;
    console.log(a); // Imprime el primer número (0)
    
    for (let i = 1; i < n; i++) {
        console.log(b);
        let temporal = a + b;
        a = b;      // El anterior ahora es el actual
        b = temporal; // El actual ahora es la suma
    }
}


module.exports = { factorialize, fibonacciIterativo };