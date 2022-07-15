// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//   Test.assertEquals(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
//   Test.assertEquals(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
//   Test.assertEquals(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');

function buildString(...template){
  
    let change = template.join(', ')
    return `I like ${change}!`
    
    
  }
  
  console.log(buildString('Cheese','Milk','Chocolate'));