export class ComputerPlayer {
  constructor(id, name, difficulty = 'medium') {
    this.id = id;
    this.name = name;
    this.difficulty = difficulty;
    this.isComputer = true;
    this.reactionTime = this.getReactionTime(difficulty);
  }

  getReactionTime(difficulty) {
    // Reaction times in milliseconds - made much longer for fair gameplay
    switch (difficulty) {
      case 'easy':
        return { min: 10000, max: 20000 }; // 10-20 seconds
      case 'medium':
        return { min: 7000, max: 12000 };  // 7-12 seconds
      case 'hard':
        return { min: 5000, max: 8000 };   // 5-8 seconds
      default:
        return { min: 7000, max: 12000 };
    }
  }

  findMatch(playerCard, centerCard) {
    if (!playerCard || !centerCard) return null;
    
    // Find the matching symbol between player's card and center card
    const matchingSymbol = playerCard.symbols.find(symbol => 
      centerCard.symbols.includes(symbol)
    );
    
    return matchingSymbol || null;
  }

  async makeMove(playerCard, centerCard, callback) {
    const matchingSymbol = this.findMatch(playerCard, centerCard);
    
    if (matchingSymbol) {
      // Add randomized reaction time based on difficulty
      const reactionTime = Math.random() * 
        (this.reactionTime.max - this.reactionTime.min) + 
        this.reactionTime.min;
      
      // Small chance to make a mistake (even if match is found)
      const mistakeChance = this.getMistakeChance();
      const shouldMakeMistake = Math.random() < mistakeChance;
      
      setTimeout(() => {
        if (shouldMakeMistake) {
          // Select a random symbol from player's card instead
          const randomSymbol = playerCard.symbols[
            Math.floor(Math.random() * playerCard.symbols.length)
          ];
          callback(randomSymbol);
        } else {
          callback(matchingSymbol);
        }
      }, reactionTime);
    } else {
      // No match found - this shouldn't happen in Dobble, but just in case
      setTimeout(() => {
        const randomSymbol = playerCard.symbols[
          Math.floor(Math.random() * playerCard.symbols.length)
        ];
        callback(randomSymbol);
      }, this.reactionTime.max);
    }
  }

  getMistakeChance() {
    switch (this.difficulty) {
      case 'easy':
        return 0.3; // 30% chance to make a mistake
      case 'medium':
        return 0.15; // 15% chance to make a mistake
      case 'hard':
        return 0.05; // 5% chance to make a mistake
      default:
        return 0.15;
    }
  }
} 