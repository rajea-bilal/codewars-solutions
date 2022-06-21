// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//  it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
//   it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
//   it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));

function defineSuit(card) {
  
    if(card.includes('♣')) {
      return 'clubs'
    } else if(card.includes('♦')) {
      return 'diamonds'
    } else if(card.includes('♥')) {
      return 'hearts'
    } else if(card.includes('♠')) {
      return 'spades'
    }
    
      
    }
    
    console.log(defineSuit('J♥'));