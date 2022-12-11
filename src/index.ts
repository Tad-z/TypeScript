// tuple
let user: [number, string] = [1, "dave"]
// enums

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium
console.log(mySize);

// functions
function calculateTax(income: number, taxYear: number): number {
    if(taxYear < 2022)
        return income * 2;
    return income * 2.2
}

calculateTax(10_000, 2022)

// objects
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1 ,
    name: "david",
    retire: (date: Date) => {
        console.log(date);
    }
    }
