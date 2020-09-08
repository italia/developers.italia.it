declare function mergeUnique(key: string, uniques: string[], getter: (a: object) => string): (a: [], b: [], k: string) => false | object[];
export default mergeUnique;
