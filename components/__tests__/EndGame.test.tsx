import { screen } from '@testing-library/dom';
import EndGame from '@/components/EndGame';
import { renderWithProviders } from '@/utils/test-utils';
import { initialGameState } from '@/redux/gameStateSlice';

describe('EndGame', () => {
  describe('when endGame = false', () => {
    it('should not render', () => {
      renderWithProviders(<EndGame />, {
        preloadedState: { gameState: { ...initialGameState, endGame: false } },
      });
      expect(screen.queryByText('New game')).not.toBeInTheDocument();
    });
  });
  describe('when endGame = true', () => {
    it('should render', () => {
      renderWithProviders(<EndGame />, {
        preloadedState: { gameState: { ...initialGameState, endGame: true } },
      });
      expect(screen.queryByText('New game')).toBeInTheDocument();
    });

    it('should render won text', () => {
      renderWithProviders(<EndGame />, {
        preloadedState: {
          gameState: {
            ...initialGameState,
            endGame: true,
            secondGuess: 0,
            winningDoor: 0,
          },
        },
      });
      expect(screen.getByText(/Congratulations you won!/)).toBeInTheDocument();
    });

    it('should render losing text', () => {
      renderWithProviders(<EndGame />, {
        preloadedState: {
          gameState: {
            ...initialGameState,
            endGame: true,
            secondGuess: 0,
            winningDoor: 1,
          },
        },
      });
      expect(screen.getByText(/Game Over/)).toBeInTheDocument();
    });
  });
});
