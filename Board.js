class Board{

    constructor(movementsCounter,instructions){

        const properties ={    
            _movementsCounter : movementsCounter,
            _instructions : instructions,
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

    restart(){
        console.log("Reiniciando el juego");
        var lista = [1,2,3,4,5,6,7,8,""];
        lista = lista.sort(function() {return Math.random() - 0.5});
        console.log (lista)
        var j=0;
        for (let i = 0 ; i < lista.length; i++ )
            {
                var uno = document.getElementById('b'+i);
                uno.innerHTML = lista[i];           
            }    
    }
}


