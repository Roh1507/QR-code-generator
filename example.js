
const wrapper=document.querySelector('.wrapper');
genButton=wrapper.querySelector('.form button');
qrInput=wrapper.querySelector('.form input')
qrImg=wrapper.querySelector('.qr-code img')

genButton.addEventListener("click",()=>{
    let qrVal=qrInput.value
    if(!qrVal) return
    genButton.innerText='Generating QR Code...'
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrVal}`;
    // console.log(qrVal);
    qrImg.addEventListener('load',()=>{ 
        wrapper.classList.add('active')
        genButton.innerText='Generate QR Code'
    })
})  

qrInput.addEventListener('keyup',()=>{
    if(!qrInput.value){
        wrapper.classList.remove('active')
    }
})