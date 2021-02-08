/** Easy Section */

// 4.- Pick

type MyPick<T, K extends keyof T> = {
    [M in K]: T[M];
};

// 7.- Reandonly

type MyReadonly<T> = {
    readonly [M in keyof T]: T[M];
};

// 11.- Tuple to Object

type TupleToObject<T extends readonly any[]> = {
    [key in T[number]]: key
}

// 14.- First of Array

type Fist<T extends any[]> = T extends []? never: T[0];

// 18.- Length of Tuple

type Length<T extends any[]> = T['length']

// 43.- Exclude

type MyExclude<T, U> = T extends U ? never : T;

// 189.- Awaiter

type Awaiter<T> = T extends Promise< infer R> ? R: never;

// 268.- If

type If<C extends boolean, T, F> = C extends true? T : F;

// 533.- Concat

type Concat<T extends any[], M extends any[]> = [...T, ...M];
