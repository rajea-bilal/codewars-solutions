// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

function flatten(array){


    let result = [].concat(...array)
    return result
    }
    
    console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]))

    function flatten(array){


        let result = array.flat(1)
        return result
        }
        
        console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]))