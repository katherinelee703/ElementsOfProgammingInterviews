/* 

12.3 - Make a LRU Cache to deal with 10 Digit ISBNs 


insert should:
put it into the cache
list that isbn as most recently used
and take out least recently used if cache is too full

lookup should:
function like peek
but also marks that isbn as most recently used

delete should:
only remove from cache
return true if removed
return false if nothing to remove or !isbn
should not alter other ordering

*/

class isbnLRUCache {
  constructor() {
    this.hash = new Map();
    this.maxSize = 3;
  }
  insert(isbn, price) {
    this.hash.set(isbn, price);
    this.updateCache();
  }
  lookup(isbn) {
    if (!this.hash.get(isbn)) return -1;
    let price = this.hash.get(isbn);
    this.hash.delete(isbn);
    this.hash.set(isbn, price);
    return this.hash.get(isbn);
  }
  updateCache() {
    if (this.hash.size > this.maxSize) {
      let old = this.hash.keys();
      for (let key of old) {
        old = key;
        break;
      }
      this.hash.delete(old);
    }
  }
  delete(isbn) {
    if (!this.hash.get(isbn)) return false;
    this.hash.delete(isbn);
    return true;
  }
}

let lib = new isbnLRUCache();
lib.insert(1111111111, '$1');
//console.log(lib);
lib.insert(2222222222, '$2');
console.log('lib with 1 & 2: ', lib);
console.log('lookup 1:', lib.lookup(1111111111));
console.log('lib updated: ', lib);
lib.insert(3333333333, '$3');
console.log('lib with 3: ', lib);
lib.insert(4444444444, '$4');
console.log('lib with 1,3,4:', lib);
lib.insert(5555555555, '$5');
console.log('lib with 3,4,5: ', lib);
lib.delete(4444444444); // true
console.log('lib with 3,5: ', lib);
