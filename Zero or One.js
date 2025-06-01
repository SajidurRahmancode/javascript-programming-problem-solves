/* Problem Statement
A number from 0 to 9 will be presented as an word in lower case english letter. For example- three. The program will take it as input. Print 0 if the remainder is 0 while the number is divided by 2, otherwise print 1 if the remainder is 1.

Input
The program will take a string 
S
S as input.

Output
The output will print either 0 0r 1.

Constraints
0 ≤ |S| ≤ 9
Example:
Enter string

Input:
three
Output:
1
Notes:
No number greater than 9 will be given as input */


function main(input) {
    const w = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
        "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9
    };
    const n = w[input.toLowerCase()];

    if (n % 2 === 0) {
        console.log(0);
    } else {
        console.log(1);
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});