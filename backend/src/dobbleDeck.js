export class DobbleDeck {
  constructor() {
    this.symbols = [
      // User's 19
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", // Pikachu
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png", // Raichu
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png", // Krokorok
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png", // Lucario
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",   // Bulbasaur
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",  // Alakazam
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png", // Mew
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png", // Mewtwo
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",   // Charizard
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",   // Charmander
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",   // Charmeleon
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png", // Sentret
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",   // Squirtle
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png", // Eevee
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png", // Umbreon
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",  // Jigglypuff
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",  // Wigglytuff
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",  // Magneton
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png", // Ho-Oh
      // 38 more
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",   // Ivysaur
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",   // Venusaur
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",   // Blastoise
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",  // Butterfree
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",  // Pidgeot
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",  // Rattata
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",  // Fearow
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",  // Arbok
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",  // Sandshrew
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",  // Nidoqueen
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",  // Clefairy
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",  // Vulpix
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",  // Zubat
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",  // Oddish
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",  // Diglett
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",  // Meowth
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",  // Psyduck
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",  // Growlithe
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",  // Machop
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",  // Magnemite
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",  // Farfetch'd
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",  // Seel
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",  // Grimer
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",  // Shellder
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",  // Gastly
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",  // Onix
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",  // Drowzee
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",  // Krabby
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png", // Exeggcute
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png", // Cubone
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png", // Hitmonlee
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png", // Lickitung
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png", // Koffing
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png", // Rhyhorn
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png", // Horsea
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png", // Staryu
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png", // Scyther
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"  // Lapras
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

  getSymbolUrl(symbolId) {
    return this.symbols[symbolId] || null;
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