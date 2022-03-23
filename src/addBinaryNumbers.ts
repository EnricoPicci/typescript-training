import { checkBinaries } from "./checkBinaries";

export function addBinary(a: string, b: string) {
    const error = checkBinaries(a, b)
    if (error !== undefined) {
        console.error(error.message)
        return undefined
    }
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}


/*export function addBinary(a: string, b: string) {
    const allBinaries = areBinaries(a, b)
    if (allBinaries === false) {
        console.error('one parameter is not a binary')
        return undefined
    }
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}*/


