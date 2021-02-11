/** 2. Get Return Type */

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R:never

/** 3. Omit  */

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/** 8. Readonly 2 */

//type MyReadonly2<T, K> = 

/** 9. Deep Readonly */

type DeepReadonly<T> = {
    readonly [M in keyof T]: T[M] extends Object ? DeepReadonly<T[M]> : T[M];
}

/** 10. Tuple to Union */

type TupleToUnion <T extends []> = T[number];  

/** 12. Chainable Options */



/** 15. Last of array  COPIED*/

type Last<T extends any[]> = T extends [infer First, ...infer Other] ? T[Other['length']] : never;

/** 16. Pop */

type Pop<T extends any[]> = T extends [...infer Rest, any] ? [...Rest] : never

/** 20. Promise.all */



/** 62. LookUp */

type LookUp<T, U> = T extends { type: U } ? T : never;

/** 106. Trim Left */

type space = ' '
type TrimLeft<T> = T extends `${space}${infer R}` ? TrimLeft<R> : T; 


/** 108. Trim */

type Trim<T> = T extends `${space}${infer R}` | `${infer R}${space}` ? Trim<R> : T;

/** 110. Capitalize */
   


/** 116. Replace */

type Replace<S extends string, from extends string, to extends string> = 
    from extends '' 
    ? S 
    : S extends `${infer head}${from}${infer tail}` 
    ? `${head}${to}${tail}`
    : S;

/** 119. Replace All */

type ReplaceAll<S extends string, from extends string, to extends string> = 
from extends '' 
? S
: S extends `${infer head}${from}${infer tail}` 
? `${head}${to}${ReplaceAll<tail, from, to>}`
: S;

/** 191 Append Argumented */



/** 296. Premonition */

type Permutation<T> = {}
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

/** 298. Lenght of  a String */

type StringLength<T extends string> = T['length'];

/** 459. Flutten */

type Flatten<T> = T extends [infer U, ...infer R]
    ? U extends Array<any>
    ? [...Flatten<U>, ...Flatten<R>]
    : [U, ...Flatten<R>]
    : T;

/** 527. Append To Object */



/** 529. absolute */

type Absolute<T extends number | bigint | string> = `${T}` extends `-${infer R}` ? R : T;
// return string

/** 610. CamelCase  */

//type CamelCase<T extends string> = 

/** 612. KebabCase */

//type KebabCase<T> = 

/** 645. Diff */

