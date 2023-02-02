// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  const fYear = 15
  const sYear = 9
  const catAfter = 4
  const dogAfter = 5
  const catSYear = fYear + 9
  const dogSYear = fYear + 9
  
 if(humanYears === 1) {
   return [ humanYears, fYear * humanYears, fYear * humanYears ]
 } else if (humanYears === 2) {
   return [ humanYears, catSYear, dogSYear]
 } else if(humanYears > 2) {
    return [humanYears, ((humanYears - 2) * catAfter) + catSYear, ((humanYears - 2) * dogAfter) + dogSYear]
 }
  
}

console.log(humanYearsCatYearsDogYears(10))
