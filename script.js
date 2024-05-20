document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('success-message').classList.remove('hidden');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('contact-success-message').classList.remove('hidden');
});

function showPaymentPopup(packageName, price) {
        const paymentMethod = prompt("Pilih metode pembayaran (contoh: transfer bank, e-wallet, dll):");
        const paymentAccount = prompt("Masukkan akun pembayaran (nomor rekening, ID e-wallet, dll):");
        const receiptNumber = Math.floor(Math.random() * 1000000); // Nomor nota pembelian secara acak
        const totalPayment = price;

        // Menampilkan pop-up dengan detail pembayaran
        const popupMessage = `Terima kasih atas pembelian Anda!\n\nDetail Pembelian:\nPaket: ${packageName}\nHarga: Rp ${price.toLocaleString()}\n\nMetode Pembayaran: ${paymentMethod}\nAkun Pembayaran: ${paymentAccount}\nNomor Nota Pembelian: ${receiptNumber}\nTotal Pembayaran: Rp ${totalPayment.toLocaleString()}`;
        alert(popupMessage);
    }