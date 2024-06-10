


const user = {
    name: "kittisak",
    age: "33",
    address: {
        abc: "abcde",
    }
}

const print = user.address ? user.address.abc : undefined;
const print01 = user.address?.abc

console.log(print);
console.log(print01);