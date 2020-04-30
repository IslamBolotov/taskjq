$(document).ready(function(){
    let item = $('#kvad')
    let right  = $('#right')
    let left  = $('#left')
    let i=0;

    $(right).on('click',function(){
        i+=100;
        $(item).css({'margin-left':`${i}px`, 'transition': '0.5s'})

    })

    


})
// var i=0;
// right.addEventListener('click', () =>{
//     i+=100
//     kvadrad.style.marginLeft = i+'px';
//     kvadrad.style.marginRight = 'auto';
//     kvadrad.style.transition = '1s'
// })

// left.addEventListener('click', () =>{
//     i-=100;
//     kvadrad.style.marginLeft = i+'px';
//     kvadrad.style.marginRight = 'auto';
//     kvadrad.style.transition = '1s'
// })