const first = process.argv[2];
const second = process.argv[3];

function letsAdd (first, second) {
    if (process.argv[2] === undefined) {
        console.log("0");
    } else {
        console.log(`The sum is (${+first + +second})`);
}};

letsAdd(first, second);