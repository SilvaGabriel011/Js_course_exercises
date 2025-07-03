
// // const bayernFieldPlayers = bayernPlayers;
// // const bvbFieldPlayers = bvbPlayers;

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = bvbPlayers.concat(bayernPlayers);
// // console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const playersFinal = bayernFieldPlayers.concat('thiago', 'coutinho', 'perisic');
// // console.log(playersFinal);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const oddTeam1 = game.odds.team1;
// const draw = game.odds.x;
// const oddTeam2 = game.odds.team2;

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals = function (...number) {
//   if (number == 'lewandowski') {
//     console.log(`${number} scored 2 goals`);
//   }
//   if (number == 'gnabry') {
//     console.log(`${number} scored 1 goals`);
//   }
//   if (number == 'hummels') {
//     console.log(`${number} scored 1 goals`);
//   }
//   console.log(number);
// };

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
