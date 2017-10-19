var modulescroll = (function (){
    var $h2 = $(".post-content h2");
    console.log($h2);
    $h2.click(showCont);
    function showCont(event){
       var $p = $(event.target).siblings('p');
         $p.slideToggle('fast');
    }


(function($){
        $(window).on("load",function(){
            $('body').mCustomScrollbar({
                theme:"inset-2-dark"
            });
        });
    })(jQuery);
} ()
)


//activating the scroll to the specific elemts
var scroll = function ( elemToGo){
    
    $("body").mCustomScrollbar("scrollTo", elemToGo, {
            scrollInertia:2000
        } );

}
//function to give animation to any element when scrolling
var AnimateScroll = function (triggerElem, elemTochange) {
     this.opt = {
        triggerElement: triggerElem
    }

    this.controller = new ScrollMagic.Controller(
        {container:"#main"}
        );
    
    this.scene = new ScrollMagic.Scene(this.opt).on('start', function (){
        elemTochange.addClass('hidden');
    })
    .addTo(this.controller);
}

//getting the value of elements 
 var elements = [
        {
        elem1: $("#blog"),
        elem3: $("li.b-blog"),
        trigger: '#blog',
        change: $(".post-content")
    },
    {
        elem1: $("#social"),
        elem3: $("li.b-social"),
        trigger: '#social',
        change: $(".social-content")
    },
    {
        elem1: $("#about"),
        elem3: $("li.b-about"),
        trigger: '#about',
        change: $(".about-content")
    }
    
    ] 
//fire calls the functions needed

function fire  (event){
  if(event.target == elements[0].elem3[0]){
    
    scroll(elements[0].elem1 );
    return;
  }if(event.target == elements[1].elem3[0]){
    
    scroll(elements[1].elem1 );
    return;
  }if(event.target == elements[2].elem3[0]){
   
    scroll(elements[2].elem1);
    return;
}
  } 
    
//init manin functions
function init (){
   var blog = new AnimateScroll(elements[0].trigger, elements[0].change );
   var social = new AnimateScroll(elements[1].trigger, elements[1].change );
   var about = new AnimateScroll(elements[2].trigger, elements[2].change );
}    
//binding the events
var eventClick = function (){

    elements[0].elem3.click(fire);
    elements[1].elem3.click(fire);
    elements[2].elem3.click(fire);
}

eventClick();
init();