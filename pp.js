const panjang = document.getElementById('panjang')
const lebar = document.getElementById('lebar')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
hitung.addEventListener('click',function(){
    let p = panjang.value
    let l = lebar.value
    let h = p*l
    output.innerHTML = `Luas = ${h} cm2`
})