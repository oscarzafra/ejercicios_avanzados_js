function swap(array, index1, index2) {
    if (index1 < 0, index2 < 0, index1 >= array.length, index2 >= array.length) {
        return "Elemento no encontrado"
    }

    const igual = array[index1];
    array[index1] = array[index2];
    array[index2] = igual;
    
    return array;
}

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  console.log(swap(fantasticFour, 3, 1));
  console.log(swap(fantasticFour, 0, 2));
  console.log(swap(fantasticFour, 3, 5));