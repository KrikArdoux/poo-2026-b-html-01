const btnSaludar = document.getElementById("btnSaludar");
let mensajeMostrado=false;
console.log(btnSaludar);
btnSaludar.addEventListener('click',function(){
    if(!mensajeMostrado){
        const sectionContacto = document.getElementById('contacto'); 
        console.log('click');
    const mensaje = document.createElement ('p');
    mensaje.textContent = 'Ricardo Campeon WRB.';
    mensaje.style.color ='#27ae60';
    mensaje.style.fontWeight ='bold';
    sectionContacto.appendChild(mensaje);
    mensajeMostrado = true;
    btnSaludar.textContent="Mensaje enviado";
    btnSaludar.disabled=true;
    btnSaludar.style.backgroundColor='#bdc3e7';
    }
});