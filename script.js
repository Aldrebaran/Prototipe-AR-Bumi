window.onload = () => {
    const bumi = document.querySelector('#entity-bumi');

    // Animasi rotasi otomatis Bumi
    let rotasiY = 0;
    
    function animate() {
        rotasiY += 0.5; // Kecepatan putaran
        bumi.setAttribute('rotation', `0 ${rotasiY} 0`);
        requestAnimationFrame(animate);
    }

    // Mulai animasi
    animate();

    console.log("Model Bumi AR Markerless siap!");
};
