/* Very Easy Challenge. What's the difference between var, let, and const. Var is a variable that stores information that be utilized both
globally (Example being any var outside of a of hard and curly brackets) or within a block (Example being var being inside a hard or curly
brackets) Var can also be changed in sequential order. 

As for let it has the same function as var however it's limitations is that it can't
be used both globally and in a block level (Example being lets say let1 is outside of a hard or soft curly bracket and let2 is within a sof
t or curly bracket. We let1 can't utilize any information from let2 and vice versa.) What it can still do however is still be changed in se
quential order so long as they're both in a global scale or the same block level. 

Last is const which is similar to let in the fact that th
they both have limitation however they or polar oposites pertaining to those limitations. While let can't interact with one another both g
lobally and in block level const can however the one thing it can't do is change the information within it. Once it's set as a const the i
nfo inside will remain the same.*/

// Easy Challenge

const array1 = [1, 2, 3];
const array2 = [3, 6, 4, 5, 2, 1];
const array3 = [3, 3, 3];

//Math.max() chooses the maximum number out of an argument.
console.log(Math.max(...array1));
console.log(Math.max(...array2));
console.log(Math.max(...array3));