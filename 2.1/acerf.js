function App(){}
    window.onload=function(evento){
        var app= new App();
        window.app=app;
    }

    App.prototype.processingButton = function(evento){
        const btn = evento.currentTarget;
        const carruselList = evento.currentTarget.parentNode;
        const track = evento.currentTarget.parentNode.querySelector("#track");
        const carrusel = track.querySelectorAll(".carrusel");
        const carruselWidth = carrusel[0].offseWidth;
        const trackWidth = track.offseWidth;
        const listWidht = carruselList.offseWidth;
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth,track) : nextAction(leftPosition,trackWidth, listWidht,carruselWidth,track);
    }


let prevAction=(leftPosition,carruselWidth,track)=>{
    if(leftPosition>0){
        track.style.left =` ${-1*(leftposition - carruselWidth)}px`;

    }
}
let nextAction=(leftPosition,trackWidth,listWidht,carruselWidht,track)=>{
    if(leftPosition<(trackWidth-listWidht)){
        track.style.left = `${-1*(leftposition + carruselWidht)}px`;

    }
}