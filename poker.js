/**Task 5
Create a function to determine the winner of this card game.
Two players are dealt five cards from a standard deck. The winner is the player with the best
Hand. Winning hands are based on the ranks only (ignore the suit) and are as follows (best
at the top):
Four of a kind: Four cards of the same rank.
Full House: Three cards of the same rank, and two cards of a different matching rank.
Straight: Five cards in sequence.
Three of a kind: Three cards of the same rank.
Two pair: Two cards of a matching rank and another two cards of a different matching rank.
One pair: Two cards of a matching rank.
If both players have none of the above, it is a draw.
If both players have the same type of hand, it is a draw.
Your function should accept the names of both players and an array of integers
(representing the rank, where A=1, J=11, Q=12, K=13) for each player’s hand. Your function
should return the name of the winning player, or “draw” if there is no winner. You may write
other supporting functions. */

// Determine the hand ranking: We need a function to determine the rank of each hand (e.g., Four of a kind, Full House, etc.).

// example_hand = [2, 3, 4, 5, 6] -Straight
// const hand2 = [3, 3, 3, 3, 5]; - Four of a kind

function getHandRank(hand) {
  // Create an object to count occurrences of each rank
  const rankCounts = {};
  for (let i = 0; i < hand.length; i++) {
    const card = hand[i];
    if (rankCounts[card]) {
      rankCounts[card]++;
    } else {
      rankCounts[card] = 1;
    }
  }

  // Get the counts but in a sort manner
  const counts = Object.values(rankCounts).sort((a, b) => b - a);

  // Determine the hand rank
  let rankType = '';

  if (counts[0] === 4) {
    rankType = 'Four of a kind';
  } else if (counts[0] === 3 && counts[1] === 2) {
    rankType = 'Full house';
  } else if (counts[0] === 3) {
    rankType = 'Three of a kind';
  } else if (isStraight(hand)) {
    rankType = 'Straight';
  } else if (counts[0] === 2 && counts[1] === 2) {
    rankType = 'Two pair';
  } else if (counts[0] === 2) {
    rankType = 'One pair';
  } else {
    rankType = 'High card';
  }

  return rankType;

  // function to handdle straight
  function isStraight(hand) {
    const uniqueHand = hand.slice();

    uniqueHand.sort((a, b) => a - b);
    if (uniqueHand.length !== 5) return false;
    if (uniqueHand[4] - uniqueHand[0] === 4) return true;

    const specialStraight = [1, 10, 11, 12, 13];
    for (let i = 0; i < specialStraight.length; i++) {
      if (uniqueHand[i] !== specialStraight[i]) return false;
    }
    return true;
  }
}

//function to compare hands

function compareHands(hand1, hand2) {
  const handRanks = [
    'High card',
    'One pair',
    'Two pair',
    'Three of a kind',
    'Straight',
    'Full House',
    'Four of a kind',
  ];

  const rank1 = getHandRank(hand1);
  const rank2 = getHandRank(hand2);

  const rank1Index = handRanks.indexOf(rank1);
  const rank2Index = handRanks.indexOf(rank2);

  return rank1Index > rank2Index
    ? 'Player 1'
    : rank1Index < rank2Index
    ? 'Player 2'
    : 'draw';
}

// function to show winner between two players and their hands

function showWinner(player1, hand1, player2, hand2) {
  const winner = compareHands(hand1, hand2);

  if (winner === 'Player 1') {
    return player1;
  } else if (winner === 'Player 2') {
    return player2;
  } else return 'draw';
}

// Example usage:
const player1 = 'Alice';
const player2 = 'Bob';
const hand1 = [6, 12, 12, 12, 12];
const hand2 = [2, 3, 4, 5, 6];

let test = showWinner(player1, hand1, player2, hand2);

console.log(test);
