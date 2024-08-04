let verif = localStorage.getItem('name')
let name = document.getElementById('rrr')

window.onload = function(){
    if (verif == null){
        name.innerHTML
    } else{
        name.innerHTML = verif;
    }
}