$(document).ready(function(){
    let btn = $('.btn')
    let i=0, j=0,k=0;

    $(btn).on('click',function(){
        back='rgb('+ i+','+j+','+ k+')';
        $('body').css('background-color',back)  
        if(i<256){
            i+=15;
        }
        else if(j<256){
            j+=15;
        }
        else if(k<256){
            k+=15;
            
        }
        else{
            i=0,j=0,k=0
        }
        })



})