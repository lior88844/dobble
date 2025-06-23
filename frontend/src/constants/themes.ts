import { pokemonSymbols } from './pokemonSymbols';
import { animalSymbols } from './animalSymbols';

export type Theme = 'pokemon' | 'animals';

export interface ThemeConfig {
  id: Theme;
  name: string;
  emoji: string;
  symbols: (string | number)[];
  getSymbolDisplay: (symbolId: number) => string;
}

export const themes: Record<Theme, ThemeConfig> = {
  pokemon: {
    id: 'pokemon',
    name: 'Pokémon',
    emoji: '⚡',
    symbols: pokemonSymbols,
    getSymbolDisplay: (symbolId: number) => pokemonSymbols[symbolId] || '',
  },
  animals: {
    id: 'animals',
    name: 'Animals',
    emoji: '🐾',
    symbols: animalSymbols,
    getSymbolDisplay: (symbolId: number) => animalSymbols[symbolId] || '',
  },
};

export const getTheme = (themeId: Theme): ThemeConfig => {
  return themes[themeId] || themes.pokemon;
}; 