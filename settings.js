// Store Settings
const storeSettings = {
    storeName: "Isn_pro Store",
    storeLogo: "https://via.placeholder.com/60",
    storeDescription: "Kami menjual kebutuhan untuk para JB + HOSTING",
    aboutText: "Isn_pro menjual keperluan yang di butuhkan para JB dan HOSTING dengan harga murah, kami juga menjual bahan / keperluan yang di carikan anda.",
    
    // Contact Information
    whatsappNumber: "6281234567890",
    telegramUsername: "isn_pro",
    
    // Groups and Channels
    whatsappGroupLink: "https://chat.whatsapp.com/yourgroup1",
    whatsappChannelLink: "https://whatsapp.com/channel/yourchannel",
    telegramGroupLink: "https://t.me/yourtelegramgroup",
    
        // Telegram settings
    telegramBotToken: '8113712218:AAESXcy7qxOb6lF0T31D7Jc10w36vSY6nEw', // Will be set in Vercel environment variables
    telegramChatId: '5726066125', // Your personal chat ID or group ID
    
    // Payment Information
    qrisImage: "https://via.placeholder.com/300x300?text=QRIS+Payment",
    danaNumber: "081234567890",
    gopayNumber: "081234567890",
    shopeepayNumber: "081234567890",
    
    // Products
    products: [
        {
            id: 1,
            name: "JB Tools Premium",
            description: "Kumpulan alat esensial untuk mempermudah transaksi jual-beli online Anda dengan aman.",
            image: "https://img1.pixhost.to/images/7835/630437361_ochobot.jpg",
            variants: [
                { name: "Lisensi 1 Bulan", price: 50000 },
                { name: "Lisensi 3 Bulan", price: 120000 },
                { name: "Lisensi 6 Bulan", price: 200000 },
                { name: "Lisensi 1 Tahun", price: 350000 },
                { name: "Lisensi Permanen", price: 600000 }
            ]
        },
        {
            id: 2,
            name: "Hosting Package",
            description: "Paket hosting cepat dan andal untuk website Anda, lengkap dengan support 24/7.",
            image: "https://via.placeholder.com/320x180?text=Hosting",
            variants: [
                { name: "Paket Basic", price: 100000 },
                { name: "Paket Personal", price: 200000 },
                { name: "Paket Bisnis", price: 350000 },
                { name: "Paket Enterprise", price: 500000 },
                { name: "Custom Spek", price: 300000 }
            ]
        },
        {
            id: 3,
            name: "Custom Script",
            description: "Butuh script khusus? Kami buatkan sesuai kebutuhan fungsionalitas website atau aplikasi Anda.",
            image: "https://via.placeholder.com/320x180?text=Script",
            variants: [
                { name: "Script PHP", price: 150000 },
                { name: "Script Python", price: 200000 },
                { name: "Script Javascript", price: 180000 },
                { name: "Bot Telegram", price: 250000 },
                { name: "Bot WhatsApp", price: 300000 }
            ]
        },
        {
            id: 4,
            name: "VPN Premium",
            description: "Akses internet aman, cepat, dan tanpa batas dengan server di berbagai negara.",
            image: "https://via.placeholder.com/320x180?text=VPN",
            variants: [
                { name: "Akun 1 Bulan", price: 75000 },
                { name: "Akun 6 Bulan", price: 350000 },
                { name: "Akun 1 Tahun", price: 600000 },
                { name: "Akun Keluarga", price: 800000 },
                { name: "Akun Bisnis", price: 1200000 }
            ]
        },
        {
            id: 5,
            name: "Proxy Server",
            description: "Sembunyikan identitas online Anda dengan proxy server privat yang stabil dan cepat.",
            image: "https://via.placeholder.com/320x180?text=Proxy",
            variants: [
                { name: "10 Proxy Privat", price: 100000 },
                { name: "50 Proxy Privat", price: 400000 },
                { name: "100 Proxy Privat", price: 700000 },
                { name: "Proxy Residensial", price: 150000 },
                { name: "Proxy ISP", price: 250000 }
            ]
        },
        {
            id: 6,
            name: "Tutorial Package",
            description: "Paket tutorial lengkap dari dasar hingga mahir untuk berbagai topik digital.",
            image: "https://via.placeholder.com/320x180?text=Tutorial",
            variants: [
                { name: "Tutorial Hosting", price: 50000 },
                { name: "Tutorial Scripting", price: 75000 },
                { name: "Tutorial Keamanan", price: 60000 },
                { name: "Tutorial Bot", price: 80000 },
                { name: "Paket Lengkap", price: 200000 }
            ]
        }
    ]
};
