const r = document.getElementById('r')
const sub = document.getElementById('sub')
const hasil = document.getElementById('hasil')

sub.addEventListener('click',function(){
    let j = r.value
    let h =3.14*j*j
    hasil.innerHTML = `Luas = ${h} cm2`


})