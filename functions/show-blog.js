var showContent = function  (){
    var $h2 = $(".post-content h2");
    console.log($h2);
    $h2.click(showCont);
    function showCont(event){
       var $p = $(event.target).siblings('p');
         $p.slideToggle('fast');
    }
