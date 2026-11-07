class Siswa {
    constructor(nama, nis, jurusan, kelas) {
        this.nama = nama;
        this.nis = nis;
        this.jurusan = jurusan;
        this.kelas = kelas;
    }

    perkenalan() {
        return `Nama saya ${this.nama} dengan NIS ${this.nis} dan jurusan ${this.jurusan}, berasal dari kelas ${this.kelas}.`;
    }
}

const Siswa1 = new Siswa("Sisca", "12345", "RPL","X RPL 4");
console.log(Siswa1.perkenalan());
const Siswa2 = new Siswa("Gitanti", "12345", "TKJ","X TKJ 2");
console.log(Siswa2.perkenalan());
const siswa3 = new Siswa("Jessica", "12345", "PSPT", "X PSPT 1");
console.log(siswa3.perkenalan());

const form = document.getElementById("forminput");
const daftarSiswa = document.getElementById("daftarSiswa");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataForm = new FormData(form);
    const siswaBaru = new Siswa(
        dataForm.get("nama").trim(),
        dataForm.get("nis").trim(),
        dataForm.get("jurusan").trim(),
        dataForm.get("kelas").trim()
    );

    const itemSiswa = document.createElement("li");
    itemSiswa.textContent = siswaBaru.perkenalan();
    daftarSiswa.appendChild(itemSiswa);

    form.reset();
});