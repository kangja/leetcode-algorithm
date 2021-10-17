let isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }

  if ((p == null && q !== null) || (p !== null && q == null)) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// example
let p = [1, 2, 3];
let q = [1, 2, 3];
console.log(isSameTree(p, q));
// Input: (p = [1, 2, 3]), (q = [1, 2, 3]);
// Output: true;

// example
// let p = [1, 2];
// let q = [1, null, 2];
// console.log(isSameTree(p, q));

// Input: (p = [1, 2]), (q = [1, null, 2]);
// Output: false;

// example
// let p = [1, 2, 1];
// let q = [1, 1, 2];
// console.log(isSameTree(p, q));

// Input: (p = [1, 2, 1]), (q = [1, 1, 2]);
// Output: false;
