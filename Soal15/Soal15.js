let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "John doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

let combinedWarna = [...warna, ...buku.warnaSampul]
console.log('----- Soal 15 -----')
console.log(combinedWarna);
console.log()

buku = { ...buku, ...dataBukuTambahan }
console.log(buku);
console.log()