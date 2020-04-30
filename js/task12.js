$(document).ready(function(){

    var modal ={
        self: $('#modal'),
        showModal(content){
            this.self.find('#innerModal').html(content);
            this.self.fadeIn(500);
            this.self.css('display','block')
        },
        hideModal(){
            this.self.fadeOut(500);
            this.self.find('#innerModal').html('');
        }
    };

    $('.showModal').on('click',function(e){
        let id = $(this).data('id')
        let content = $('cont'+id).html();
        modal.showModal(content);
    })

    $('#modal').on('click',function(e){
        if($(e.target).attr('id') === 'modal' ||$(e.target).hasClass('closeModal')){
            modal.hideModal();
        }
        else{
            return false;
        }
    })
    
})