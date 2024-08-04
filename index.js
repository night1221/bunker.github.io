custom_password = "123"

document.getElementById("sub").onclick = qwe

function qwe(){

    let name = document.getElementById("name").value;       /*ДОВЖИНА НЕЙМА */
    name1 = String(name).length


    if(name1 >= 4){     
        let password = document.getElementById("pass").value;       /*якщо правиольне імя */
        const eror = document.getElementById("eror");
        eror.style.display = "none";                                /* зникає помилка*/

        if(password == custom_password){                            
            document.getElementById("next").innerHTML = "click"                                   /* якщо все правильно*/

            const eror2 = document.getElementById("eror2");              /* зникає помилка*/
            eror2.style.display = "none";
            document.getElementById("next").onclick = function(){
                localStorage.setItem('name', name)
            }

        }   else{
            document.getElementById('eror2').innerHTML = "incorect password"    /*пароль неправильний при правильному імені */
        }

    } else{
            document.getElementById('eror').innerHTML = "name < 4"               /* імя менше 4 символів*/
    }
    let password = document.getElementById("pass").value                        
    if(password !=custom_password){
        document.getElementById('eror2').innerHTML = "incorect password"
    }   else{
        document.getElementById('eror').innerHTML = "name < 4"              
    }

}