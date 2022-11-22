const alterartema = document.queryselectorById('#range');
const html1 = document.querySelector('html');

if(alterartema){
    alterartema.addEventListener('change' Event =>{
        Event.preventDefalt()
        document.body.setAttribute('class' ,'theme2')
    })
}