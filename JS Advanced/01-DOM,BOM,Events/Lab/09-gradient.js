function attachGradientEvents() {
    let box = document.getElementById('gradient');
    let div = document.getElementById('result');
    box.addEventListener('mousemove', calcPercent);
    box.addEventListener('mouseout', function(){ div.textContent = ''; });

    function calcPercent(event){
        let newMouseX =  event.offsetX;
        let percent = Math.trunc(newMouseX / event.target.clientWidth * 100);
        div.textContent = percent + '%';
    }
}
