import { readFileSync } from 'fs';
const alphabet = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];

function syncReadFile(filename: string) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}
const inputData = syncReadFile('./day3/input.txt');


let compoundPriority: number = 0;
// for (let i = 0; i < inputData.length; i++) {
//     const ruckSack: string = inputData[i]
// const firstCompartement = [...new Set([...ruckSack.substring(0, (ruckSack.length / 2))])]
// const secondCompartement = [...new Set([...ruckSack.substring(ruckSack.length / 2)])]
//     console.log(firstCompartement , secondCompartement);

//     for (let j = 0; j < firstCompartement.length; j++) {
//         const item1 : string = firstCompartement[j]        
//         for (let k = 0; k < secondCompartement.length; k++) {
//             const item2 : string = secondCompartement[k]
//             if(item1 === item2) {
//                 compoundPriority += (alphabet.indexOf(item1)+1);                
//             }

//         }

//     }
// }


//group of three
for (let i = 0; i < inputData.length; i = i + 3) {
    const sack1: string = inputData[i]
    const sack2: string = inputData[i + 1]
    const sack3: string = inputData[i + 2]
    const ruckSack1 = [...new Set([...sack1])]
    const ruckSack2 = [...new Set([...sack2])]
    const ruckSack3 = [...new Set([...sack3])]

    const group = ruckSack1.concat(ruckSack2).concat(ruckSack3)
    for (let j = 0; j < ruckSack1.length; j++) {
        const item1: string = group[j]
        let repeated: number = 0;

        for (let k = 0; k < group.length; k++) {
            const item2: string = group[k]
            if (item1 === item2) {
                repeated++;
                if (repeated >= 3) {
                    compoundPriority += (alphabet.indexOf(item1) + 1);
                    
                }
            }

        }

    }
}
console.log(compoundPriority);
