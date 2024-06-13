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
    console.log(card);
    if (rankCounts[card]) {
      rankCounts[card]++;
    } else {
      rankCounts[card] = 1;
    }
  }
  console.log(rankCounts);

  // Get the counts but in a sort manner
  const counts = Object.values(rankCounts).sort((a, b) => b - a);

  console.log(counts);
}

// let hand = getHandRank([2, 3, 4, 5, 6]);
let hand = getHandRank([3, 3, 3, 3, 5]);
