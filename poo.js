const _private = new WeakMap();

class Board {

    constructor(movementsCounter) {
        const properties = {
            _movementsCounter: movementsCounter,
            _instructions: "* El objetivo es colocar los números 1,2,3 en la primera fila, 4,5,6 en la segunda y 7,8 en la tercera.\n "
                + "* La celda vacía debe quedar en la esquina inferior derecha. \n"
                + "* Al presionar un botón con numero si la celda presionada, tiene una celda vacía vecina, esta celda ocupará la celda vacía. \n"
                + "* Si se presiona una celda sin tener la celda vacía de vecina, se contará como un movimiento.",


        }

        _private.set(this, { properties })
    }

    /*
            Getter and setters
    */
    get movementsCounter() {
        return _private.get(this).properties['_movementsCounter'];
    }

    set movementsCounter(movement) {
        return _private.get(this).properties['_movementsCounter'] = movement;
    }

    get instructions() {
        return _private.get(this).properties['_instructions'];
    }

    /*
            Metodos funcionales
    */

    calculateMovementsCounter() {
        console.log("Muchos movimientos");
    }

    isGridSorted() {
        console.log("False");
    }



    myleft(miposicion) {

        if (miPosicion == 0 || miPosicion == 3 || miPosicion == 6)
            return -1;
        else
            return miPosicion - 1;

    }


    myRight(miposicion) {
        if (miPosicion == 2 || miPosicion == 5 || miPosicion == 8)
            return -1;
        else
            return miPosicion + 1;
    }


    inMyUp(miposicion) {
        if (miPosicion == 0 || miPosicion == 1 || miPosicion == 2)
            return -1;
        else
            return miPosicion - 3;
    }

    inMyDown(miposicion) {
        if (miPosicion == 6 || miPosicion == 7 || miPosicion == 8)
            return miPosicion - 1;
        else
            return miPosicion + 3
    }


    isSwapable(squares, posicion) {
        var pos;
        var VacioEs = -1;
        pos = this.myleft(posicion);
        if (pos !== -1)
            if (squares[pos].imEmpty)
                VacioEs = pos
        if (VacioEs == -1)
            pos = this.myRight(posicion);
            if (pos !== -1)
                if (squares[pos].imEmpty)
                    VacioEs = pos   
        if (VacioEs == -1)
            pos = this.inMyUp(posicion);
            if (pos !== -1)
                if (squares[pos].imEmpty)
                    VacioEs = pos
        if (VacioEs == -1)
            pos = this.inMyUp(posicion);
            if (pos !== -1)
                if (squares[pos].imEmpty)
                    VacioEs = pos                    
    }


    swap(posicion,posicionvacia,squares){
        var squareemp;
        squaretemp=squares[posicion];
        squares[posicion]=squares[posicionvacia];
        squares[posicionvacia]=squaretemp;
        var uno = document.getElementById('b' + posicion);
        uno.innerHTML = squares[posicion].ID;
        var uno = document.getElementById('b' + posicionvacia);
        uno.innerHTML = squares[posicionvacia].ID;
    }
    


}


class Square {

    constructor(ID, color) {

        const properties = {
            _ID: ID,
            _color: color,
        }

        _private.set(this, { properties })
    }

    /*
            Getter and setters
    */
    get color() {
        return _private.get(this).properties['_color'];
    }

    set color(color) {
        return _private.get(this).properties['_color'] = color;
    }

    get ID() {
        return _private.get(this).properties['_ID'];
    }

    set ID(id) {
        return _private.get(this).properties['_ID'] = id;
    }



    /*             get isSwapable(){
                    return _private.get(this).properties['_isSwapable'];
                }
            
                set isSwapable(state){
                    return _private.get(this).properties['_isSwapable'] = state;
                } */


    imEmpty() {
        return ID == "";
    }
}

/************************ */
//********* MAIN ***********
//*********************** */



//Objeto Board

const Board1 = new Board(0);
restartManual();



function restartManual() {

    console.log("Reiniciando el tablero");
    var lista = [1, 2, 3, 4, 5, 6, 7, 8, ""];
    let squares = []
    lista = lista.sort(function () { return Math.random() - 0.5 });
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        squares[i] = new Square(lista[i], "Rojo");
        var uno = document.getElementById('b' + i);
        uno.innerHTML = lista[i];
    }
}

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, ""]];
console.log(matriz[0][1])
console.log(matriz)


function processClick(evento) {
    // console.log(evento.innerHTML)
    console.log(evento.id.charAt(1)) //posicion boton
}

function showInstructions() {
    alert(Board1.instructions);
}


