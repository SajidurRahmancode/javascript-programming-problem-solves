function hello() {
    console.log("Hello");
}
hello()

const hello2=(name,age) => {console.log("Hello "+name)
                        console.log(`Hello i am ${name}. My age is ${age}`)
                        
                        
                        };


hello2("Sajid",30)

setTimeout(()=>console.log("hello"),3000);

const numbers=[1,2,3,4,5,6,7,8,9]

const squares=numbers.map((element)=>Math.pow(element,2));
const cube=numbers.map((element)=>Math.pow(element,3));
const evenNums=numbers.filter((element)=>element%2===0);
const oddNums=numbers.filter((element)=>element%2!==0);
const total=numbers.reduce((accumulator,element)=>accumulator+element);
console.log(squares);
console.log(cube);
console.log(evenNums);
console.log(oddNums);
console.log(total);