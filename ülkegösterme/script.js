const yazilar = document.getElementById("yazilar");
let secilenKita = ""; 

document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('area');
    
    areas.forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault(); // Varsayılan tıklama davranışını durdurur
            const yeniKita = area.getAttribute('alt');
            
            if (secilenKita !== yeniKita) {
                yazilar.innerText = yeniKita;
                secilenKita = yeniKita;
            }
        });
    });
});
