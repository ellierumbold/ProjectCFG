
/* This is the js page for Maps 

 $(document).ready(function(){
            $("#KX").click(function(){
                $('.boxes#KXD').slideToggle();
            });
        });


 $(document).ready(function(){
            $("#BS").click(function(){
                $('.boxes#BSD').slideToggle();
            });
        });

$(document).ready(function(){
            $("#OC").click(function(){
                $('.boxes#OCD').slideToggle();
            });
        });

        */



  $(document).ready(function(){
    $("area").click(function(){
        $('.boxes').hide();
        $('#' + this.id + 'D').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('map').imageMapResize();
});