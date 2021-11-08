// given heads of 2 singly linked-lists headA and headB, return the node at which the 2 links intersect.

// If the 2 linked lists have no intersection at all, return null.

// example one
// let headA = [4,1,8,4,5];
// lead headB = [5,6,1,8,4,5];

// loop through 2 linedlist/nodes in javascript and if there is a match, return that value.

let getIntersectionNode = function (headA, headB) {
  for (let i = 0; i < headA.length; i++) {
    for (let j = 0; j < headB.length; j++) {
      if (headA[i] === headB[j]) {
        return headA[i];
      }
    }
  }
};

let headA = [4, 1, 8, 4, 5];
let headB = [5, 6, 1, 8, 4, 5];
console.log(getIntersectionNode(headA, headB));
