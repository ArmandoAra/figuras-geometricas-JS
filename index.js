// Codigo del cuadrado
function perimetroCuadrado(lado){
   return lado * 4; 
} 

function areaCuadrado(lado){
   return lado * lado;
}  

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

function alturaTrianguloIsosceles(lado1,lado2,base){
    if (lado1 != lado2){
        alert("Los dos lados no son iguales");
        return 0;
       }else{
        let calculo1 = (lado1 * lado1) - ((base/2)*(base/2));
        console.log(calculo1);
        let altura = Math.sqrt(calculo1);
        console.log(altura);
        return altura; 
    }
    
}

// Codigo del circulo
// Radio

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return( radio * radio) * PI;
}

// Aqui interactuamos con el HTML
// Funciones para los botones del cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Funciones para los botones del Triangulo

function calcularPerimetroTriangulo(){
    let input1 = document.getElementById('LadoTriangulo1');
    let input2 = document.getElementById('LadoTriangulo2');
    let base = document.getElementById('BaseTriangulo');

    input1 = parseFloat(input1.value);
    input2 = parseFloat(input2.value);
    base = parseFloat(base.value);

    const perimetro = perimetroTriangulo(input1, input2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    let input1 = document.getElementById('LadoTriangulo1');
    let input2 = document.getElementById('LadoTriangulo2');
    let base = document.getElementById('BaseTriangulo');

    input1 = parseFloat(input1.value);
    input2 = parseFloat(input2.value);
    base = parseFloat(base.value);

    const altura = alturaTrianguloIsosceles(input1,input2,base);
    const area = areaTriangulo(base, altura);

    alert(area);

}

// Funciones para los botones del Circulo

function calcularAreaCirculo(){
    let radio = document.getElementById('Radio');
    
    radio = parseFloat(radio.value);

    const area = areaCirculo(radio);
    alert(area);
}

function calcularPerimetroCirculo(){
    let radio = document.getElementById("Radio");
    radio = parseFloat(radio.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);

}