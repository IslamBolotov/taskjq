
$(document).ready(function(){
    let inp1 = $('#inp1');
    let inp2 = $('#inp2');
    let btn = $('#btn1');
    $(btn).on('click',function(e){

        if($(inp1).val()&&(inp2).val()){
            e.preventDefault()
            
            
            let val1 =  $(inp1).val()
            let val2 =  $(inp2).val()
            
            $('#container').append(`<h3 class="first-name">${val1}</h3>`)
            $('#container').append(`<h3 class="last-name">${val2}</h3>`)

            inp1.val('')
            inp2.val('')
        }
        else{
            e.preventDefault()
            alert('ошибка')
        }
        
    })
})






