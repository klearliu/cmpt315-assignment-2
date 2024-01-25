# cmpt315-assignment-2
Assignment 2 - Understanding JavaScript and Creating your own NPM Library

npm package: https://www.npmjs.com/package/@klearliu/cmpt-315-assignment-2
<br>
github: https://github.com/klearliu/cmpt315-assignment-2
<br>
The bonus question I went for is test.js
<br>

`
const matches = [
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]
`

* `findNaNIndex(array)`: find the indices of NaN elements in an array
* `isArrayFactorChain(array)`: returns true or false if the array is a chain of factors.
* `countNumberOfArrays(array)`: finds the numbers of arrays within an array.
* `participants(array)`: finds what the participants in matches
* `winnersObject(array)`: finds who beat each other and returns an object of them
* `biggestLoser(array)`: finds who in a list of the matches was the "biggest loser"

