let isDone: boolean = false;

let decimal: number = 16;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n; // ES2020 or above

let color: string = "red";
color = 'red';

let list: number[] = [1,2,3];
list.push(5);

let list2: Array<number> = [1,2,3];
list2.push(9);

/** fixed length */
let tuple: [number, number, string];

enum Color {
    Red = 1,
    Green,
    Blue,
}

let c: Color = Color.Green;
let d: String = Color[2];
