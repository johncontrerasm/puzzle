const _private = new WeakMap();

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

    imEmpty() {
        return this.ID == ""; 
    }
}


class Board {

    constructor(movementsCounter,squares) {

            this._movementsCounter= movementsCounter,
            this._instructions= "* El objetivo es colocar los números 1,2,3 en la primera fila, 4,5,6 en la segunda y 7,8 en la tercera.\n "
                + "* La celda vacía debe quedar en la esquina inferior derecha. \n"
                + "* Al presionar un botón con numero si la celda presionada, tiene una celda vacía vecina, esta celda ocupará la celda vacía. \n"
                + "* Si se presiona una celda sin tener la celda vacía de vecina, se contará como un movimiento.",
            this._squares=squares

    }

    /*
            Getter and setters
    */
    movementsCounter() {
        return this._movementsCounter;
    }

    setmovementsCounter(movement) {
        return this._movementsCounter = movement;
    }

    instructions() {
        return this._instructions;
    }

    /*
            Metodos funcionales
    */

    calculateMovementsCounter() {
        this._movementsCounter++;
        console.log("Muchos movimientos"+this._movementsCounter);
    }

    isGridSorted() {
        console.log("False");
    }



    myleft(miPosicion) {
        miPosicion=parseInt(miPosicion)
        if (miPosicion == 0 || miPosicion == 3 || miPosicion == 6)
            return -1;
        else
            return miPosicion - 1;

    }


    myRight(miPosicion) {
        miPosicion=parseInt(miPosicion)
        if (miPosicion == 2 || miPosicion == 5 || miPosicion == 8)
            return -1;
        else
            return miPosicion + 1;
    }


    inMyUp(miPosicion) {
        miPosicion=parseInt(miPosicion)
        if (miPosicion == 0 || miPosicion == 1 || miPosicion == 2)
            return -1;
        else
            return miPosicion - 3;
    }

    inMyDown(miPosicion) {
        miPosicion=parseInt(miPosicion)
        if (miPosicion == 6 || miPosicion == 7 || miPosicion == 8)
            return -1;
        else
            return miPosicion + 3
    }

    isSwapable(posicion) {
        var posVacio = 0;
        var pos = 0;
        var VacioEs = -1;
        for (var i=0;i<this._squares.length; i++){
            if (this._squares[i].imEmpty() == true){
                posVacio = i
            }    
        }
        pos = this.myleft(posicion);
        if ((pos !== -1) && (pos==posVacio))
            VacioEs = pos
        if (VacioEs == -1){
            pos = this.myRight(posicion);
            if ((pos !== -1) && (pos==posVacio))
                VacioEs = pos
        }   
        if (VacioEs == -1){
            pos = this.inMyUp(posicion);
            if ((pos !== -1) && (pos==posVacio))
                VacioEs = pos
        }
        if (VacioEs == -1){
            pos = this.inMyDown(posicion);
            if ((pos !== -1) && (pos==posVacio))
                VacioEs = pos
        }
        
        return VacioEs                    
    }

    swap(posicion,posicionvacia){

        var squaretemp=this._squares[posicion];
        this._squares[posicion]=this._squares[posicionvacia];
        this._squares[posicionvacia]=squaretemp;
        
        var uno = document.getElementById('b' + posicion);
        uno.innerHTML = this._squares[posicion].ID;
        var uno = document.getElementById('b' + posicionvacia);
        uno.innerHTML = this._squares[posicionvacia].ID;
        leo se tiró en esto 
    }

    restartManual() {

        var lista = [1, 2, 3, 4, 5, 6, 7, 8, ""];
        lista = lista.sort(function () { return Math.random() - 0.5 });
        console.log(lista)
        for (let i = 0; i < lista.length; i++) {
            this._squares[i] = new Square(lista[i], "Rojo");
            var uno = document.getElementById('b' + i);
            uno.innerHTML = lista[i];
        }
    }

    workOnClick(posicion){
        console.log("workonclic"+ this._squares)
        let vacio=this.isSwapable(posicion)
        console.log("Vacio " +vacio)
        if (vacio != -1){
            this.swap(posicion,vacio);
        }
    }
    


}




/************************ */
//********* MAIN ***********
//*********************** */



//Objeto Board
var cuadrado = [];
const Board1 = new Board(0,cuadrado);
Board1.restartManual();




function processClick(evento) {
    // console.log(evento.innerHTML)
    console.log(evento.id.charAt(1)) //posicion boton
    console.log(Board1.inMyDown(evento.id.charAt(1)));  
    posicion=evento.id.charAt(1);
    Board1.calculateMovementsCounter();
    Board1.workOnClick(parseInt(posicion));
/*     console.log("CUADRADOS"+squares);
    console.log("VALOR"+squares[posicion].ID)
    console.log("IZQ"+Board1.myleft(posicion));
    console.log("DER"+Board1.myRight(posicion));
    console.log("UP"+Board1.inMyUp(posicion));
    console.log("DOWN"+Board1.inMyDown(posicion)); */

}

function showInstructions() {
    alert(Board1.instructions);
}

function restartManualDOM(){
    Board1.restartManual();
}
