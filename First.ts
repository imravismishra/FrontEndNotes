console.log("Welcome to TypeScript");
console.log(12+23);
console.log(12.23+90);

//BuiltIn Data Type- number, string, boolean, any, null, void

let a: number = 90;
let b: number = 90.23;
console.log(a+b.toFixed(2));

let myName:string = "Rohit Sharma";
console.log("My name is "+myName);
console.log(myName.length);
console.log(myName.startsWith("Rohit"));
console.log(myName.endsWith("sharma"));
console.log(myName.slice(0,5));  //substring in java
console.log(myName.replace("R","M"));
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.split(" "));  // array of string
console.log(myName.charAt(0));
console.log(myName.indexOf('Z')); //if data not there return -1
console.log(myName.substring(0,5));
console.log(myName.concat(" is Cricketer"));
console.log(myName.search("Sharma"));
console.log(myName.repeat(2));  //to repeat words

console.log(90>23); //boolean true
if(a>b)
{
    console.log("a has max value than b");
}
else{
    console.log("b has max value than a");
}

let n = new String("Ravi Shankar Mishra");
console.log(n);

let num = new Number(12);
console.log(num);

let check  = new Boolean(a>b);
console.log(check);

let text:string = "This is basic\n introduction\n for typescript ";
console.log(text);

type Myname = "Amit" | "Rohit" | "Mohit";   //String literals 
let my = myName;  //assigning literals into variable
if(my = "Mohit")
{
    console.log("Amit Found");
}
else{
    console.log("Compile Time Error");
    
}

//function
type brands = "Dell" | "Lenovo" | "HP";
function selectYourFavouriteLaptopBrand(brand:brands){    //brands use as data type
    console.log("Favorite brand "+brand);
}

selectYourFavouriteLaptopBrand("Dell");

var demo = 23;
let demo2 = 89;  
//var demo = 34;  // var support reassign
//let demo2 = 90; // let doesn't support reassign

//Arithmetic Operator
// +,-,*,/,%

//Relational Operator
// ==,!=,<=,>=,<,>

// Logical Operator
// && ||

//Arrays in TypeScript
let data1 = [23,34,45,56,67,78,79];
let data2:number[] = [23,34,45,56,67,78,79];
let student = ["ROhit","Mohit","Amit","Aakash","Rajat"];
console.log(student[1]);

let studentRecord:any[][] = [["Rohit","Mohit","Aakash"],[12,23,34],["rohit@gmail.com","mohit@gmail.com","Aakash@gmail.com"]];
console.log(studentRecord[0][2]);

let arr:string[] = new Array("12","Amit","Aakash");
console.log(arr[1]);

for(let i of arr)   //iterate data from array
{
    console.log(i);
}

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}

//use array as argument for function


function Myprint(arr:string[])
{
    console.log(arr);
    
    for(let i of arr)
    {
        console.log(i);
        
    }
}

Myprint(arr);

//array  = merge and copy

let m:string[] = ["Ram","Raman","Rajeev"];
let n2:string[] = [...m];   // ... these 3 fullstops use to copy data into another variable
console.log(n2);
let o:string[] = [...m,...n2];   //merginig 2 arrays
console.log(o);

//arrays predefined Methods
console.log(m.concat(["Mohit","Akash"]));
console.log(m.copyWithin(0,2));   // we are copying data from 2 index and storing into 0 index
m.pop();  //removes last data from array
console.log(m);
m.push("Ravi");  //to  add at last index of array
console.log(m);
m.reverse(); 
console.log(m);
console.log(m.slice(0,2));

let nums = [12,23,34,12,23,231,21,2,12];
nums.sort();
console.log(nums);

let data = [12,"Rohit",true];  //tuples - Hetrogeneous in nature and mutuable ( can change its value )

type data0 = "Rohit" | "Mohit";
let mychoice = "Rohit";

enum data10 {"Rohit", "Mohit"}

//switch 
let weekday =1;
switch(weekday)
{
    case 1: console.log("Sun");
    break;
    case 2: console.log("Mon");
    break;
    case 3: console.log("Tue");
    break;
    default: console.log("Invalid Input");
}

//while and do - while

let j = 1;
while(j<=10)
{
    console.log(j);
    j++;
}

let k = 1;
do{
console.log(k);
k++;


}while(k<=10);

//Map as DataType

let map = {"name":"Rohit Sharma",
"profession":"Cricketer",
"Education":"Graduate"};
console.log(map["name"]);

let map2 = [{"name":"Rohit Sharma",
"profession":"Cricketer",
"Education":"Graduate"},
{
    "name":"Ravi Shankar Mishra",
    "profession":"Java Fullstack Trainer",
       "Education":"Graduate" 
}
];
console.log(map2[0]["name"]);

//set using object

let myset = new Set();
myset.add("Rajeev");
myset.add("Amit");
myset.add("Rajeev");
myset.delete("Amit");
console.log(myset);
console.log(myset.size);
console.log(myset.has("Rajeev"));

//Anonymous Function
let myfun = function(a:number,b:number):number{
    return a+b;
};

console.log(myfun(12,23));

//optional and default argument in Function

function display(name:string,age?:number,phone:number = 0)
{
    console.log(name+"\n"+age+"\n"+phone);

    
}

display("Rajeev");
display("Amit",23);
display("Ram",12,8372472384);

//Rest argument function will take 1 or more than 1 argument

function total(...a:number[]):number
{
    let sum:number = 0;
    for(let i of a)
    {
        sum = sum+i;
    }
    return sum;
}

let result = total(12,23,3,445,65,56,45,45);
console.log(result);

//Arrow function with parameter

let sum2 = (a:number,b:number) => { return a+b;}
console.log(sum2(12,23));

let display2 = () => console.log("Display");
display2();









