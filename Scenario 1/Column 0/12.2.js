// 12.2 IS AN ANONYMOUS RANSOM NOTE CONSTRUCTIBLE?

// too easy version using Sets
function constructible(letterText, magazineText) {
  let lt = new Set(letterText);
  let mt = new Set(magazineText);
  for (let l of lt) {
    if (!mt.has(l)) return false;
  }
  return true;
}

// non-Set version
function constr(letterText, magazineText) {
  let letHash = {};
  let magHash = {};

  for (let letter of letterText) {
    if (!letHash[letter]) {
      letHash[letter] = 1;
    } else {
      letHash[letter]++;
    }
  }

  for (let letter of magazineText) {
    if (!magHash[letter]) {
      magHash[letter] = 1;
    } else {
      magHash[letter]++;
    }
  }

  for (let letter in letHash) {
    if (letHash[letter] > magHash[letter]) return false;
  }

  return true;
}

// 3rd version - a bit shorter
function con(letterText, magazineText) {
  let hash = {};

  for (let l of letterText) {
    !hash[l] ? (hash[l] = 1) : hash[l]++;
  }

  for (let l of magazineText) {
    if (hash[l]) {
      hash[l]--;
      if (hash[l] === 0) delete hash[l];
    }
  }

  return Object.keys(hash).length === 0;
}

let letterA = 'Please bring 200 dollars';
let magazineA = 'Please have 200 cats bring 100 birds a dollar';
let magazineB = 'Please give 200 dollars';

console.log(constructible(letterA, magazineA)); // true
console.log(constructible(letterA, magazineB)); // false

console.log('===========');

console.log(constr(letterA, magazineA)); // true
console.log(constr(letterA, magazineB)); // false

console.log('===========');

console.log(con(letterA, magazineA)); // true
console.log(con(letterA, magazineB)); // false
