const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item)=>{
                return item === day;
            });
            if(cek){
                resolve(cek);
            }else{
                reject(new Error('Hari ini bukan hari kerja'));
            }
        },3000);
    });
};

// Menggunakan then catch
cekHariKerja('senin').then((result) => {
    console.log(`Hari ini adalah hari ${result}`);
}).catch((error) => {
    console.log(error);
});

// Menggunakan try catch
async function showDay(day) {
    try {
        let result = await cekHariKerja(day);
        console.log(`Hari ini adalah hari ${result}`);
    } catch(error) {
        console.log(error);
    }
}

showDay('senin');

// Penggunaan then catch :
// - .then digunakan jika state promisenya fulfilled (berhasil), objectnya adalah resolve()
// - .catch digunakan jika state promisenya rejected (gagal), objectnya adalah reject()

// Penggunaan try catch :
// - .try digunakan untuk mencoba kode yang memungkinkan terjadinya error
// - .catch digunakan untuk menangkap error apabila terjadi error pada blok try