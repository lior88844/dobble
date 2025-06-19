import { DobbleDeck } from './src/dobbleDeck.js';

console.log('🎯 Testing Dobble Deck Generation');
console.log('================================');

const deck = new DobbleDeck();

// Test deck generation
console.log('\n📦 Generating deck...');
const cards = deck.generateDeck();
console.log(`✅ Generated ${cards.length} cards`);

// Test deck validation
console.log('\n🔍 Validating deck...');
const isValid = deck.verifyDeck(cards);
console.log(`✅ Deck validation: ${isValid ? 'PASSED' : 'FAILED'}`);

// Show first few cards
console.log('\n🃏 First 3 cards:');
cards.slice(0, 3).forEach((card, index) => {
  console.log(`Card ${index + 1}: [${card.symbols.map(s => deck.getSymbolUrl(s)).join(', ')}]`);
});

// Test symbol matching
console.log('\n🎯 Testing symbol matching...');
let allPairsValid = true;
for (let i = 0; i < Math.min(5, cards.length); i++) {
  for (let j = i + 1; j < Math.min(5, cards.length); j++) {
    const card1 = cards[i];
    const card2 = cards[j];
    const commonSymbols = card1.symbols.filter(s => card2.symbols.includes(s));
    
    if (commonSymbols.length !== 1) {
      console.log(`❌ Cards ${i} and ${j} share ${commonSymbols.length} symbols`);
      allPairsValid = false;
    } else {
      console.log(`✅ Cards ${i} and ${j} share exactly 1 symbol: ${deck.getSymbolUrl(commonSymbols[0])}`);
    }
  }
}

console.log(`\n🎉 Test completed: ${allPairsValid ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}`); 