
/* This is the js page for Maps */

  $(document).ready(function(){
    $("area").click(function(){
        $('.boxes').hide();
        $('#' + this.id + 'D').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('map').imageMapResize();
});