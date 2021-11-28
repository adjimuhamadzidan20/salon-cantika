// button next
let next = document.getElementById('next');
next.onclick = function() {
    // menampilkan bagian transaksi
    let transaksi = document.getElementsByClassName('transaksi')[0];
    transaksi.style.display = 'block';

    let data = document.getElementsByClassName('data-pelanggan')[0];
    data.style.display = 'none';
}


// bagian opsi transaksi [iya/tidak]
// button iya
let iya = document.getElementById('iya');
iya.onclick = function(iya) {
    // menampilkan menu
    let menu = document.getElementsByClassName('menu')[0];
    menu.style.display = 'block';

    // menyembunyikan bagian transaksi 
    let transaksi = document.getElementsByClassName('transaksi')[0];
    transaksi.style.display = 'none';

}

// button tidak
let tidak = document.getElementById('tidak');
tidak.onclick = function(tidak) {
    // menampilkan text "transaksi dibatalkan"
    let transaksi = document.getElementsByClassName('transaksi')[0];
    transaksi.style.display = 'block';
    transaksi.innerHTML = 'transaksi dibatalkan';
    transaksi.style.textTransform = 'capitalize';
    transaksi.style.color = '#CC8E36';
    transaksi.style.fontFamily = 'play';
}


// bagian pilihan menu
let btnMenu = document.getElementById('btn-menu');
btnMenu.onclick = function() {
    // menangkap inputan pilihan user
    let pilihan = parseInt(document.getElementById('input-pilihan').value);
    
    // pilihan no1 perawatan
    if(pilihan == 1) {
        // menangkap bagian perawatan
        let menuPerawatan = document.getElementsByClassName('perawatan')[0];
        menuPerawatan.style.display = 'block';
        
        // menyembunyikan bagian menu
        let menu = document.getElementsByClassName('menu')[0];
        menu.style.display = 'none';

        // menangkap button bagian perawatan
        let btnPerawatan = document.getElementById('btn-perawatan');
        btnPerawatan.onclick = function() {
             // menangkap inputan perawatan
            let pilihanPrwtn = parseInt(document.getElementById('input-perawatan').value);

            // no1 facial
            if(pilihanPrwtn == 1) {
                // menangkap bagian facial
                let facial = document.getElementsByClassName('facial')[0];
                facial.style.display = 'block';

                // menyembunyikan bagian menu perawatan
                let menuPerawatan = document.getElementsByClassName('perawatan')[0];
                menuPerawatan.style.display = 'none';

                // menangkap button bagian facial
                let btnfacial = document.getElementById('btn-facial');
                btnfacial.onclick = function() {
                    // menangkap inputan facial
                    let pilihanfacial = parseInt(document.getElementById('input-facial').value);

                    // facial biasa
                    if(pilihanfacial == 1) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu facial
                        let facial = document.getElementsByClassName('facial')[0];
                        facial.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 50000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';

                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // facial emas
                    else if(pilihanfacial == 2) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu facial
                        let facial = document.getElementsByClassName('facial')[0];
                        facial.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 100000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';

                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);
                        }
                    }

                    // inputan diluar list
                    else {
                        alert('Maaf, inputan tidak sesuai');
                    }
                }
            }

            // no2 masker
            else if(pilihanPrwtn == 2) {
                // menampilkan bagian masker
                let masker = document.getElementsByClassName('masker')[0];
                masker.style.display = 'block';

                // menyembunyikan bagian menu perawatan
                let menuPerawatan = document.getElementsByClassName('perawatan')[0];
                menuPerawatan.style.display = 'none';

                 // menangkap button bagian masker
                let btnmasker = document.getElementById('btn-masker');
                btnmasker.onclick = function() {
                     // menangkap inputan masker
                    let pilihanmasker = parseInt(document.getElementById('input-masker').value);

                    // masker buah
                    if(pilihanmasker == 1) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu masker
                        let masker = document.getElementsByClassName('masker')[0];
                        masker.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 40000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';

                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // masker lumpur
                    else if (pilihanmasker == 2) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu masker
                        let masker = document.getElementsByClassName('masker')[0];
                        masker.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 75000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';

                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // inputan diluar list
                    else {
                        alert('Maaf, inputan tidak sesuai');
                    }
                }
            }

            // no3 potong rambut
            else if(pilihanPrwtn == 3) {
                // menampilkan bagian potong rambut
                let potongrambut = document.getElementsByClassName('potong-rambut')[0];
                potongrambut.style.display = 'block';

                // menyembunyikan bagian menu perawatan
                let menuPerawatan = document.getElementsByClassName('perawatan')[0];
                menuPerawatan.style.display = 'none';

                // menangkap button bagian potong rambut
                let btnrambut = document.getElementById('btn-potongrambut');
                btnrambut.onclick = function() {
                    // menangkap inputan potong rambut
                    let pilihanrambut = parseInt(document.getElementById('input-potongrambut').value);

                    // tidak keramas
                    if(pilihanrambut == 1) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu potong rambut
                        let potongrambut = document.getElementsByClassName('potong-rambut')[0];
                        potongrambut.style.display = 'none';
                        potongrambut.innerHTML = bnyakOrg;

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 20000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';
                            
                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // keramas
                    else if (pilihanrambut == 2) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu potong rambut
                        let potongrambut = document.getElementsByClassName('potong-rambut')[0];
                        potongrambut.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 75000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';

                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // inputan diluar list
                    else {
                        alert('Maaf, inputan tidak sesuai');
                    }
                }
            }

            // inputan diluar list
            else {
                alert('Maaf, inputan tidak sesuai');
            }
        }       
    }
        
    // pilihan no2 penyewaan    
    else if(pilihan == 2) {
        // menangkap bagian penyewaan
        let menuPenyewaan = document.getElementsByClassName('penyewaan')[0];
        menuPenyewaan.style.display = 'block';

        // menyembunyikan bagian menu
        let menu = document.getElementsByClassName('menu')[0];
        menu.style.display = 'none';

        // menangkap button bagian penyewaan
        let btnPenyewaan = document.getElementById('btn-penyewaan');
        btnPenyewaan.onclick = function() {
             // menangkap inputan penyewaan
            let pilihanPnywn = parseInt(document.getElementById('input-penyewaan').value);

            // no1 rias wajah
            if(pilihanPnywn == 1) {
                // menangkap bagian rias
                let rias = document.getElementsByClassName('rias')[0];
                rias.style.display = 'block';

                // menyembunyikan bagian menu penyewaan
                let menuPenyewaan = document.getElementsByClassName('penyewaan')[0];
                menuPenyewaan.style.display = 'none';

                // menangkap button bagian rias
                let btnrias = document.getElementById('btn-rias');
                btnrias.onclick = function() {
                    // menangkap inputan rias
                    let pilihanrias = parseInt(document.getElementById('input-rias').value);

                    // rias wajah biasa
                    if(pilihanrias == 1) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu rias
                        let rias = document.getElementsByClassName('rias')[0];
                        rias.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 100000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';
                        
                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }

                    }

                    // rias wajah makeup artis
                    else if(pilihanrias == 2) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu rias
                        let rias = document.getElementsByClassName('rias')[0];
                        rias.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 250000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';

                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);
                        }
                    }

                    // inputan diluar list
                    else {
                        alert('Maaf, inputan tidak sesuai');
                    }
                }
            }

            // no2 baju pengantin
            else if(pilihanPnywn == 2) {
                // menampilkan bagian pengantin
                let pengantin = document.getElementsByClassName('pengantin')[0];
                pengantin.style.display = 'block';

                // menyembunyikan bagian menu penyewaan
                let menuPenyewaan= document.getElementsByClassName('penyewaan')[0];
                menuPenyewaan.style.display = 'none';

                 // menangkap button bagian baju pengantin
                let btnpengantin = document.getElementById('btn-pengantin');
                btnpengantin.onclick = function() {
                     // menangkap inputan pengantin
                    let pilihanpengantin = parseInt(document.getElementById('input-pengantin').value);

                    // baju pengantin adat
                    if(pilihanpengantin == 1) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu pengantin
                        let pengantin = document.getElementsByClassName('pengantin')[0];
                        pengantin.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 150000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';
            
                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // baju pengantin intern
                    else if (pilihanpengantin == 2) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu pengantin
                        let pengantin = document.getElementsByClassName('pengantin')[0];
                        pengantin.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 350000;
                            let jumlah = nominal * orang;

                            // menampilkan bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';

                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // inputan diluar list
                    else {
                        alert('Maaf, inputan tidak sesuai');
                    }
                }
            }

            // no3 aksesoris
            else if(pilihanPnywn == 3) {
                // menampilkan bagian aksesoris
                let aksesoris = document.getElementsByClassName('aksesoris')[0];
                aksesoris.style.display = 'block';

                // menyembunyikan bagian menu penyewaan
                let menuPenyewaan = document.getElementsByClassName('penyewaan')[0];
                menuPenyewaan.style.display = 'none';

                // menangkap button bagian aksesoris
                let btnaksesoris = document.getElementById('btn-aksesoris');
                btnaksesoris.onclick = function() {
                    // menangkap inputan aksesoris
                    let pilihanaksesoris = parseInt(document.getElementById('input-aksesoris').value);

                    // aksesoris anak
                    if(pilihanaksesoris == 1) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan menu potong rambut
                        let aksesoris = document.getElementsByClassName('aksesoris')[0];
                        aksesoris.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 20000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';
    
                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // aksesoris dewasa
                    else if (pilihanaksesoris == 2) {
                        // menangkap bagian jumlah orang
                        let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                        bnyakOrg.style.display = 'block';

                        // menyembunyikan aksesoris
                        let aksesoris = document.getElementsByClassName('aksesoris')[0];
                        aksesoris.style.display = 'none';

                        // menangkap button jumlah orang
                        let org = document.getElementById('btn-jmlorg');
                        org.onclick = function() {
                            // menangkap input jumlah orang
                            let orang = parseInt(document.getElementById('input-jmlorg').value);
                            
                            // nominal harga
                            let nominal = 50000;
                            let jumlah = nominal * orang;

                            // menangkap bagian hasil
                            let total = document.getElementsByClassName('hasil')[0];
                            total.style.display = 'block';

                            // menyembunyikan bagian input orang
                            let bnyakOrg = document.getElementsByClassName('berapa-org')[0];
                            bnyakOrg.style.display = 'none';

                            // menampilkan bagian jumlah/total
                            let hasil = document.getElementsByClassName('jumlah')[0];
                            hasil.innerHTML = `Data Tersimpan\nHarga Sebesar Rp.${jumlah}`;
                            hasil.style.textTransform = 'capitalize';
                            hasil.style.color = '#CC8E36';
                            hasil.style.marginBottom = '10px';
                            hasil.style.fontFamily = 'play';
                            
                            alert('Total biaya yang harus dibayar Rp.'+ jumlah);

                        }
                    }

                    // inputan diluar list
                    else {
                        alert('Maaf, inputan tidak sesuai');
                    }
                }
            }

            // inputan diluar list
            else {
                alert('Maaf, inputan tidak sesuai');
            }
        }
    }

    // inputan diluar list
    else {
        alert('Maaf, inputan tidak sesuai');
    }

}

// mengulang kembali ke menu
let mulaiKembali = document.getElementById('mulai-kembali');
mulaiKembali.addEventListener('click', function() {

    let nama = document.getElementById('nama').value;
    let telp = parseInt(document.getElementById('telp'));

    let end = document.getElementsByClassName('end')[0];
    end.style.display = 'block';
    end.innerHTML = `Terimakasih ${nama} sudah datang di salon cantika\nMembuat anda cantik adalah keahlian kami`;
    end.style.textTransform = 'capitalize';
    end.style.color = '#CC8E36';
    end.style.fontFamily = 'play';

    let total = document.getElementsByClassName('hasil')[0];
    total.style.display = 'none';
    total.innerHTML = end;

    alert(`Terimakasih ${nama} sudah datang di salon cantika, Membuat anda cantik adalah keahlian kami`);

});

















