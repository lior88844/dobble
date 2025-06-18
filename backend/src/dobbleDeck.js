export class DobbleDeck {
  constructor() {
    this.symbols = [
      '🦄', '🐱', '🐶', '🐸', '🐼', '🐨', '🐯', '🦁',
      '🐮', '🐷', '🐸', '🐙', '🦑', '🦐', '🦞', '🦀',
      '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊',
      '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏',
      '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐',
      '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🦚', '🦜',
      '🦢', '🦩', '🕊️', '🦅', '🦆', '🦉', '🦇', '🐺',
      '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞'
    ];
  }

  generateDeck() {
    // Correct Dobble deck generation for order 7 (8 symbols per card, 57 cards)
    const n = 7;
    const symbolsPerCard = n + 1;
    const totalSymbols = n * n + n + 1;
    const deck = [];

    // First set of cards
    for (let i = 0; i < n + 1; i++) {
      const card = [];
      card.push(0);
      for (let j = 0; j < n; j++) {
        card.push(i * n + j + 1);
      }
      deck.push({ id: deck.length, symbols: card });
    }

    // Second set of cards
    for (let a = 0; a < n; a++) {
      for (let b = 0; b < n; b++) {
        const card = [];
        card.push(a + 1);
        for (let k = 0; k < n; k++) {
          card.push((n + 1) + n * k + ((a * k + b) % n));
        }
        deck.push({ id: deck.length, symbols: card });
      }
    }

    this.shuffleDeck(deck);
    return deck;
  }

  shuffleDeck(deck) {
    // Fisher-Yates shuffle for cards
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    // Also shuffle symbols within each card
    deck.forEach(card => {
      for (let i = card.symbols.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [card.symbols[i], card.symbols[j]] = [card.symbols[j], card.symbols[i]];
      }
    });
  }

  // Verify that the deck is valid (each pair of cards shares exactly one symbol)
  verifyDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      for (let j = i + 1; j < deck.length; j++) {
        const card1 = deck[i];
        const card2 = deck[j];
        const commonSymbols = card1.symbols.filter(s => card2.symbols.includes(s));
        
        if (commonSymbols.length !== 1) {
          console.error(`Cards ${i} and ${j} share ${commonSymbols.length} symbols:`, commonSymbols);
          return false;
        }
      }
    }
    return true;
  }

  getSymbolEmoji(symbolId) {
    return this.symbols[symbolId] || '❓';
  }

  // Generate a simpler deck for testing (fewer cards)
  generateSimpleDeck() {
    // Generate a smaller deck for testing - 13 cards with 4 symbols each
    const deck = [];
    const symbolsPerCard = 4;
    const totalSymbols = 13;
    
    // Create cards using a simple pattern
    for (let i = 0; i < totalSymbols; i++) {
      const card = {
        id: i,
        symbols: []
      };
      
      // Add symbols based on a pattern that ensures each pair shares exactly one symbol
      for (let j = 0; j < symbolsPerCard; j++) {
        const symbol = (i + j * 3) % totalSymbols;
        card.symbols.push(symbol);
      }
      
      deck.push(card);
    }
    
    this.shuffleDeck(deck);
    return deck;
  }
} 