const object1 = {
    a: 1,
    b: 2,
    c: 3
};
const object3 = {
    g: 1,
    h: 2,
    i: 3
};

const object2 = Object.assign({c:4, d:5}, object1)
const object4 = Object.assign({g:34, h:25}, object3)
console.log(object2.b, object2.d)
console.log(object4.g, object4.h)

