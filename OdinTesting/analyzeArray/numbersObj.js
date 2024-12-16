class numbersObj  {
    
    constructor (array) {
        this.array = array;
        /* works fine but difficulty testing so removed to function
        this.retObj = {
            average: this.average(),
            min: this.min(),
            max:this.max(),
            length:this.length()
        }
        return this.retObj;
        */
    }
    
    average () {
        const initialValue = 0;
        const sumWithInitial = this.array.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue,
        );
        const avg = sumWithInitial / this.array.length
        return avg;
    }

    min () {
        let lowest= Infinity ;

        function minVal ( element ) {
           if(element < lowest ){
                return lowest = element;
            }else{return false;}
        }
        let minimum =  this.array.filter((minVal) ) ;
        return minimum[0];
    }

    max () {
        let highest = (-Infinity) ;
        let maximum;

        function maxVal ( h, element, index , array ) {
            h = h > element ? h : element;
            return h;
        }
        maximum =  this.array.reduce((maxVal) ) ;
        return maximum;
    }

    length () {
        return this.array.length;
    }
}

export {numbersObj}