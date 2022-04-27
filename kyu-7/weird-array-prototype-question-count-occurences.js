Array.prototype.numberOfOccurrences = function(number) {
  
   
    let instances = 0
      for(let i = 0; i < this.length; i++) {
        if(this[i] === number) {
          instances = instances + 1
        } 
    }
    
    return instances
  }