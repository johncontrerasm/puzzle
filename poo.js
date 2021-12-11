const _private = new WeakMap();

class Board{

    constructor(movementsCounter){
        const properties ={    
            _movementsCounter : movementsCounter,
            _instructions : "* El objetivo es colocar los números 1,2,3 en la primera fila, 4,5,6 en la segunda y 7,8 en la tercera.\n " 
            +"* La celda vacía debe quedar en la esquina inferior derecha. \n"
            +"* Al presionar un botón con numero si la celda presionada, tiene una celda vacía vecina, esta celda ocupará la celda vacía. \n"
            +"* Si se presiona una celda sin tener la celda vacía de vecina, se contará como un movimiento.",
            
            
        }

        _private.set(this, {properties})
    }

    /*
            Getter and setters
    */
    get movementsCounter(){
        return _private.get(this).properties['_movementsCounter'];
    }

    set movementsCounter(movement){
        return _private.get(this).properties['_movementsCounter'] = movement;
    }

    get instructions(){
        return _private.get(this).properties['_instructions'];
    }

    /*
            Metodos funcionales
    */

    calculateMovementsCounter(){
         console.log("Muchos movimientos");
     }       

    isGridSorted(){
        console.log("False");
    }

}

class Square{

    constructor(ID,color,coordenadas){

        const properties ={    
            _ID : ID,
            _color: color,
            _coordenadas: coordenadas
        }
    
            _private.set(this, {properties})
    }

    /*
            Getter and setters
    */
            get color(){
                return _private.get(this).properties['_color'];
            }
        
            set color(color){
                return _private.get(this).properties['_color'] = color;
            }

            get ID(){
                return _private.get(this).properties['_ID'];
            }
        
            set ID(id){
                return _private.get(this).properties['_ID'] = id;
            }

/*             get isSwapable(){
                return _private.get(this).properties['_isSwapable'];
            }
        
            set isSwapable(state){
                return _private.get(this).properties['_isSwapable'] = state;
            } */

            isSwapable(Square ){
                console.log("Muchos movimientos");
            }

}

/************************ */
//********* MAIN ***********
//*********************** */



//Objeto Board

const Board1 = new Board(0);
restartManual();



function restartManual(){
  
        console.log("Reiniciando el tablero");
        var lista = [1,2,3,4,5,6,7,8,""];
        var coordenadas = [{ x: 0, y: 0 },{ x: 0, y: 1 },{ x: 0, y: 2 }, 
                          { x: 1, y: 0 },{ x: 1, y: 1 },{ x: 1, y: 2 },
                          { x: 2, y: 0 },{ x: 2, y: 1 },{ x: 2, y: 2 }]
        console.log(coordenadas[0])
        let squares = []
        lista = lista.sort(function() {return Math.random() - 0.5});
        console.log (lista)
        for (let i = 0 ; i < lista.length; i++ )
            {                        
                squares[i] = new Square(lista[i],"Rojo",coordenadas[i]);
                var uno = document.getElementById('b'+i);
                uno.innerHTML = lista[i];           
            }
}



function processClick(evento){
    console.log(evento.innerHTML)
 //   console.log(Square[evento.innerHTML].ID)
    console.log(evento.value)
    console.log(evento.id)

}

function showInstructions(){
    alert(Board1.instructions);
}


