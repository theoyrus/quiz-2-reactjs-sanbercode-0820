const volum_kubus = (sisi) => {
    let [s] = sisi;
    return s * s * s
}

const volum_balok = (rest) => {
    let [p, l, t] = rest;
    return p * l * t
}

console.log(`Volum kubus [4] adalah ${volum_kubus([4])} cm3`)
console.log(`Volum balok [3,4,5] adalah ${volum_balok([3, 4, 5])} cm3`)