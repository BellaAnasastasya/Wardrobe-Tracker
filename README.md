# Lemari — Wardrobe Tracker (PWA)

Aplikasi pencatatan pakaian pribadi, statis 100% HTML/CSS/JavaScript. Dibuat untuk GitHub Pages + Safari iPhone, tanpa akun, iklan, database cloud, atau library eksternal.

## Deploy GitHub Pages

1. Buat repository publik GitHub (contoh `lemari`).
2. Upload **isi folder ini** ke **root** repository (`index.html`, `app.js`, `style.css`, `sw.js`, `manifest.webmanifest`, dan folder `icons/`). Jangan upload file ZIP saja.
3. Buka **Settings → Pages → Build and deployment → Deploy from a branch**, pilih `main` dan `/ (root)`, lalu **Save**.
4. Buka `https://USERNAME.github.io/lemari/` di Safari iPhone.
5. Safari → **Share / Bagikan → Add to Home Screen / Tambahkan ke Layar Utama**. Jalankan dari ikon baru.

> Bisa juga memakai repo `USERNAME.github.io`; URL-nya menjadi `https://USERNAME.github.io/`.

## Fitur

- Inventaris pakaian dengan kategori, nama, label/kode warna, grup/set, foto, dan catatan.
- Hitung pemakaian sejak pencucian terakhir dan target per kategori atau per item.
- Pencatatan outfit tanggal tertentu; satu pakaian hanya bisa dihitung sekali per hari.
- Grup seperti `Tidur A` untuk memilih kaos dan celana tidur sekaligus.
- Status `Siap pakai`, `Ember kotor`, `Di laundry`, `Hilang / belum ketemu`.
- Tandai pencucian selesai dengan memindahkan dari ember/laundry ke siap pakai (reset hitungan).
- Audit stok manual dan laporan item yang tidak ditemukan.
- Riwayat pemakaian dan pembatalan pencatatan.
- Backup JSON termasuk foto, dan restore data dengan file JSON.
- Service worker untuk mengakses aplikasi setelah kunjungan pertama meski offline.

## Penting soal data

Data disimpan di **IndexedDB di browser/iPhone tempat aplikasi dijalankan**. GitHub Pages tidak menyimpan atau menyinkronkan koleksi. Safari dan PWA Home Screen bisa memiliki penyimpanan terpisah; data tidak otomatis sama jika aplikasi dibuka dari konteks berbeda. Menghapus data situs, menghapus PWA, atau berganti perangkat berisiko menghilangkan data.

**Ekspor file JSON secara teratur** dari Pengaturan dan simpan ke Files/iCloud Drive. Impor JSON akan mengganti seluruh database aplikasi saat ini.

Pakaian yang mencapai batas tidak otomatis dipindah ke ember karena keputusan laundry tetap pada pengguna. Target pemakaian pakaian dalam dan kaos kaki default 1 kali (disarankan cuci setelah sekali dipakai), sedangkan baju luar dapat dipersonalisasi.

## Update situs

Setelah mengubah file aplikasi, ubah nilai `CACHE` di `sw.js` (misalnya `lemari-v1.0.1`) agar cache perangkat diperbarui ketika online.
