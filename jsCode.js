const btn = document.getElementById('btn');
btn.addEventListener('click',showAvatar);
function showAvatar(){
    let name = (document.getElementById('name').value).trim();
    let img = document.getElementById('img');
    let iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?"; //list of special char.
    // alert(name);/
    if(name==''){
        Swal.fire('Pls Enter Your Name First 😧')
        
    }
    else if(name.length<4){
                    Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Minimum 4 charachter required!😓',
                    })
                                }
    else if(!isNaN(name)){
        Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Only charachters are allowed! 😓',
                    })
    }
   
     else{
        Swal.fire({
position: 'center',
icon: 'success',
title: `Hi! ${name} Your work has been completed 👏`,
showConfirmButton: false,
timer: 1300
})
        img.src=`https://joeschmoe.io/api/v1/${name}`
    }

    for (let i = 0; i < name.length; i++) {
    if (iChars.indexOf(name.charAt(i)) != -1) {
        Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your name has special character..These are not allowed! 😠',
                    })
   
    }
    }
    
   }
