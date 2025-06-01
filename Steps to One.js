/* Steps to One
Problem Statement
Given a positive integer n, write a program that returns the minimum number of steps to reach 1 by performing one of the following operations: Subtract 1 from it. If it is divisible by 2, divide it by 2. If it is divisible by 3, divide it by 3. For example- from 5 , subtracting 1 it will be 4, then it will be divided by 2 and become 2 then again it will be divided by 2 and become 1. Total 3 steps will be needed.

Input
The program will take an integer 
N
N as input.

Output
The output will print the number of steps to become 1.

Constraints
0 ≤ |N| ≤ 1000
Example:
Enter number

Input:
5
Output:
3
Notes:
None */

function main(input) {
    const n = parseInt(input); 
    if (n === 1) {
        console.log(0);
        return; 
    }
    const step = new Array(n + 1).fill(Infinity);
    step[1] = 0;
    for (let i = 2; i <= n; i++) {   
        step[i] = 1 + step[i - 1];
        if (i % 2 === 0) { 
            step[i] = Math.min(step[i], 1 + step[i / 2]);
        } 
        if (i % 3 === 0) { 
            step[i] = Math.min(step[i], 1 + step[i / 3]);
        }
    }
    console.log(step[n]);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});