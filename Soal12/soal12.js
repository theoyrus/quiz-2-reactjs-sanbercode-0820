class BangunDatar {
    constructor(nama) {
        this._nama = nama
        this._luas = ""
        this._keliling = ""
    }

    get nama() {
        return this._nama;
    }

    get luas() {
        return this._luas
    }

    set luas(luas) {
        this._luas = luas;
    }

    get keliling() {
        return this._keliling
    }

    set keliling(keliling) {
        this._keliling = keliling
    }
}

class Persegi extends BangunDatar {
    constructor(nama, sisi) {
        super(nama)
        this._sisi = sisi
    }

    get sisi() {
        return this._sisi;
    }

    get luas() {
        return super.luas = this.sisi * this.sisi;
    }

    get keliling() {
        return super.keliling = 4 * this._sisi;
    }
}

class Lingkaran extends BangunDatar {
    constructor(nama, radius) {
        super(nama)
        this._radius = radius
    }

    get radius() {
        return this._radius;
    }

    get luas() {
        let phi = (this.radius % 7 == 0) ? (22 / 7) : 3.14;
        return super.luas = phi * this.radius * this.radius;
    }

    get keliling() {
        let phi = (this.radius % 7 == 0) ? (22 / 7) : 3.14;
        return super.keliling = phi * 2 * this.radius;
    }
}

console.log('----- Soal 12 -----')
const bangun = new BangunDatar("Bangun")
console.log(`Luas ${bangun.nama} adalah ${bangun.luas} cm2`)
console.log(`Keliling ${bangun.nama} adalah ${bangun.keliling} cm`)
console.log()

const kotak = new Persegi("Kotak", 6)
console.log(`Luas ${kotak.nama} bersisi ${kotak.sisi} cm adalah ${kotak.luas} cm2`)
console.log(`Keliling ${kotak.nama} bersisi ${kotak.sisi} cm adalah ${kotak.keliling} cm`)
console.log()

const bunder = new Lingkaran("Bunder", 7)
console.log(`Luas ${bunder.nama} berjari-jari ${bunder.radius} cm adalah ${bunder.luas} cm2`)
console.log(`Keliling ${bunder.nama} berjari-jari ${bunder.radius} cm adalah ${bunder.keliling} cm`)