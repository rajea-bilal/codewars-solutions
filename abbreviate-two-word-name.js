// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

    let capital = name.toUpperCase();
    let array = capital.split(' ')
    let extract = array.map(function(item) {
      return item.slice(0, 1)
    })
    let joined = extract.join('.');
    return joined
    }
    
    console.log(abbrevName('sam harris'));