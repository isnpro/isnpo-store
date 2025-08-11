// Konfigurasi Toko
const storeSettings = {
    storeName: "ISN_PRO",
    storeLogo: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
    storeDescription: "Kami menjual kebutuhan untuk para JB + HOSTING",
    aboutText: "Isn_pro menjual keperluan yang di butuhkan para JB, HOSTING, dan LAINNYA dengan harga murah, kami juga menjual bahan / keperluan yang di carikan anda.",
    backgroundImage: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
    
    // Kontak Support
    whatsappNumber: "628988685425",
    telegramUsername: "Isnxmahiru",
    
    // Grup dan Channel
    whatsappGroupLink: "https://chat.whatsapp.com/IxkbCwq6RA72PNufhDRsoZ?mode=ac_t",
    telegramGroupLink: "https://t.me/+kVi1YnucOzAwOThl",
    whatsappChannelLink: "https://whatsapp.com/channel/0029Vaxm2K6A2pL5H5lr231U",
    
    // Metode Pembayaran
    qrisImage: "https://img1.pixhost.to/images/7854/630633360_ochobot.jpg",
    danaNumber: "08988685425",
    gopayNumber: "08988685425",
    shopeepayNumber: "08988685425",
    
    // Konfigurasi Bot Telegram
    botToken: "8113712218:AAESXcy7qxOb6lF0T31D7Jc10w36vSY6nEw", // Token bot Telegram Anda
    chatId: "5726066125", // Chat ID penerima (bisa ID pribadi atau grup)
    
    openText: "OPEN",
    closedText: "CLOSE",
    
    // Daftar Produk
    products: [
        {
            name: "Sewa Bot Jaga Grub",
            description: "Bot jaga grub WhatsApp only, untuk para jb yang risih adanya unchek, linkgrub, suntik, bokep, dll",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "open",
            variants: [
                { name: "1 Minggu", price: 1000 },
                { name: "2 Minggu", price: 2000 },
                { name: "3 Minggu", price: 3000 },
                { name: "4 Minggu", price: 4000 },
                { name: "Permanen", price: 5000 }
            ]
        },
                {
            name: "Sewa Bot Pushkontak",
            description: "Bot Pushkontak, berfungi untuk meminta save / menaikan view kepada para orang jb ( otomatis )",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "close",
            variants: [
                { name: "1 Hari", price: 2000 },
                { name: "2 Hari", price: 4000 },
                { name: "3 Hari", price: 5000 }
            ]
        },
        {
            name: "Murbug",
            description: "Murbug telegram + WhatsApp, sebelum membeli murbug wajib ada telegram ( ini bugnya tetap bug untuk WhatsApp )",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "close",
            variants: [
                { name: "1 Minggu", price: 5000 },
                { name: "2 Minggu", price: 7000 },
                { name: "3 Minggu", price: 10000 },
                { name: "Permanen", price: 15000 }
            ]
        },
        {
            name: "Script Bot",
            description: "Script Bot serangkaian instruksi atau kode yang digunakan untuk mengotomatiskan tugas tertentu pada suatu program",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "open",
            variants: [
                { name: "Sc Pushkontak (no up)", price: 10000 },
                { name: "Sc Jaga Grup (free up)", price: 25000 },
                { name: "Sc Bug (free up)", price: 40000 }
            ]
        },
        {
            name: "Panel Bot Pterodactyl",
            description: "Panel Pterodactyl bisa req username dan berfungi run script, tentunya ada garansi 15 hari masa aktif panel 30h",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "open",
            variants: [
                { name: "Panel 5Gb", price: 3000 },
                { name: "Panel 10Gb", price: 5000 },
                { name: "Panel unli", price: 8000 }
            ]
        },
        {
            name: "Resseler Panel Bot Pterodactyl",
            description: "Resseler panel, anda bisa membuat panel sepuas anda dan anda bisa menjual panel dari resseler panel ini",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "close",
            variants: [
                { name: "1 Minggu", price: 5000 },
                { name: "2 Minggu", price: 8000 },
                { name: "Permanent", price: 10000 }
            ]
        },
        {
            name: "Jasa bikin All Trx",
            description: "All trx on/off untuk memberitahu para buyer yang melihat grub jika kalian sedang ingin trx on/off",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "open",
            variants: [
                { name: "Trx On Saja", price: 3000 },
                { name: "Trx Off Saja", price: 3000 },
                { name: "Trx On + Off", price: 5000 }
            ]
        },
        {
            name: "Nokos Indonesia",
            description: "Nokos only Indonesia, kalau ingin buy negara lain belum open ( karena susah pas dapetin code ), Nokos untuk nomor ke 2 tanpa sim",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "close",
            variants: [
                { name: "1 Nokos", price: 4000 },
                { name: "2 Nokos", price: 7000 },
                { name: "3 Nokos", price: 10000 }
            ]
        },
        {
            name: "Jasa Edit",
            description: "Jasa untuk mengedit jj menggunakan alight motion, preset + bahan ( foto ) dari anda",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "open",
            variants: [
                { name: "Preset Mudah", price: 1000 },
                { name: "Preset Lumayan", price: 3000 },
                { name: "Preset Sulit", price: 5000 }
            ]
        },
        {
            name: "Rekber|Mc|Mm",
            description: "Rekber|Mc|Mm, untuk membantu pembeli agar aman saat membeli acc / sebuah produk dari orang lain",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "open",
            variants: [
                { name: "1K - 30K", price: 1000 },
                { name: "31K - 60K", price: 2000 },
                { name: "61K - 90K", price: 3000 },
                { name: "91K - 120K", price: 4000 },
                { name: "121K - 150K", price: 5000 }

            ]
        },
        {
            name: "Apk Premium",
            description: "Aplikasi Premium untuk membuka semua fitur ataupun tanpa iklan untuk aplikasi tertentu, jadi bisa sepuasnya pakai dalam waktu tertentu",
            imageOpen: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            imageClosed: "https://img1.pixhost.to/images/7853/630630381_ochobot.jpg",
            status: "open",
            variants: [
                { name: "Aligth Motion 1Thn", price: 5000 },
                { name: "Youtube 1Bln", price: 8000 },
                { name: "Capcut 1Bln", price: 16000 }
            ]
        }
    ]
};
