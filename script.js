/*1.- Crear una función que encuentre el número más repetido en un array.
Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6*/

function encontrarNumeroMasRepetido(array) {
    // Crear un objeto para realizar el conteo de cada número
    var conteo = {};
  
    // Recorrer el array y contar la frecuencia de cada número
    for (var i = 0; i < array.length; i++) {
      var numero = array[i];
      if (conteo[numero] === undefined) {
        conteo[numero] = 1;
      } else {
        conteo[numero]++;
      }
    }
  
    // Encontrar el número con la frecuencia más alta
    var maxFrecuencia = 0;
    var numeroMasRepetido;
  
    for (var numero in conteo) {
      if (conteo[numero] > maxFrecuencia) {
        maxFrecuencia = conteo[numero];
        numeroMasRepetido = numero;
      }
    }
  
    return parseInt(numeroMasRepetido);
  }
  
  
  var array = [3,6,1,8,2,3,6,3,2,5,6];
  var numeroMasRepetido = encontrarNumeroMasRepetido(array);
  
  console.log('Número más repetido:', numeroMasRepetido);
  

/*2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
Salida → [‘e’,‘a’,‘d’,‘f’]*/

function encontrarLetras(array) {
    var letras = [];
  
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string') {
        letras.push(array[i]);
      }
    }
  
    return letras;
  }
  
  var array = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
  var letrasEncontradas = encontrarLetras(array);
  
  console.log('Letras encontradas:', letrasEncontradas);
  

/*3.- Crear una función que busque el número más grande en un arreglo.
Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
Salida -> 12*/

function encontrarNumeroMasGrande(array) {
    var maximo = array[0];
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] > maximo) {
        maximo = array[i];
      }
    }
  
    return maximo;
  }
  
  
  var array = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
  var numeroMasGrande = encontrarNumeroMasGrande(array);
  
  console.log('Número más grande:', numeroMasGrande);
  

/*4.- Crear una función que busque el número más pequeño en el arreglo.
Ejemplo input - > [1,4,5,-1,-7,2,3,9]
Salida -> -7*/

function encontrarNumeroMasPequeno(array) {
    var minimo = array[0];
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] < minimo) {
        minimo = array[i];
      }
    }
  
    return minimo;
  }
  
  
  var array = [1, 4, 5, -1, -7, 2, 3, 9];
  var numeroMasPequeno = encontrarNumeroMasPequeno(array);
  
  console.log('Número más pequeño:', numeroMasPequeno);
  

/*5.- Crear una clase llamada ``Contacto`` con los siguientes datos:
Nombre
Apellidos
Teléfono
Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
Agregar un contacto.
Buscar un contacto por nombre.*/

class Contacto {
    constructor(nombre, apellidos, telefono) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
    }
  }
  
  class ListaContactos {
    constructor() {
      this.contactos = [];
    }
  
    agregarContacto(nombre, apellidos, telefono) {
      const nuevoContacto = new Contacto(nombre, apellidos, telefono);
      this.contactos.push(nuevoContacto);
    }
  
    buscarContactoPorNombre(nombre) {
      const resultados = this.contactos.filter((contacto) =>
        contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
      return resultados;
    }
  }
  
  
  const lista = new ListaContactos();
  
  lista.agregarContacto('Juan', 'Pérez', '123456789');
  lista.agregarContacto('María', 'Gómez', '987654321');
  lista.agregarContacto('Pedro', 'Sánchez', '555555555');
  
  const resultados = lista.buscarContactoPorNombre('María');
  
  console.log('Resultados de búsqueda:', resultados);
  
  const resultados2 = lista.buscarContactoPorNombre('Juan');
  
  console.log('Resultados de búsqueda:', resultados2);