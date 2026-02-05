document.addEventListener("DOMContentLoaded", () => {
    const sceneEl = document.querySelector('a-scene');
    const modelEl = document.querySelector('#model-entity');
    const statusText = document.querySelector('#status');
    const resetBtn = document.querySelector('#reset-btn');
    const targetEl = document.querySelector('#ar-target');

    // Event saat target gambar ditemukan
    targetEl.addEventListener("targetFound", event => {
        console.log("Target ditemukan!");
        statusText.innerText = "Model Aktif";
        statusText.style.backgroundColor = "rgba(40, 167, 69, 0.8)";
    });

    // Event saat target gambar hilang dari kamera
    targetEl.addEventListener("targetLost", event => {
        console.log("Target hilang!");
        statusText.innerText = "Mencari Target...";
        statusText.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    });

    // Logika tombol Reset
    resetBtn.addEventListener('click', () => {
        // Mengembalikan rotasi model ke awal
        modelEl.setAttribute('rotation', '0 0 0');
        alert("Rotasi model telah direset!");
    });

    // Animasi rotasi halus menggunakan requestAnimationFrame
    let rotation = 0;
    const animate = () => {
        rotation += 0.5;
        modelEl.setAttribute('rotation', `0 ${rotation} 0`);
        requestAnimationFrame(animate);
    };
    
    // Aktifkan baris di bawah jika ingin model berputar otomatis
    // animate();
});