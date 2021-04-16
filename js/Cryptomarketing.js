$(document).ready(function(){
    
    // Animate Header slogan 
    //setInterval(function () {
        //Cache the ancestor
        //var $ancestor = jQuery(".current").parent();
        //Get next .current
        //var $next = jQuery(".current").next();
        //If wasn't a next one, go back to fist one
        //if($next.length === 0){
            //$next = $ancestor.children(":first");
        //}
        //Remove class one to another
        //jQuery(".current").removeClass("current");
        //$next.addClass("current");
    //}, 2.2 * 1400);
    
    $('.powered-by-carrousel').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        arrows: false,
        dots: true,
        useCSS: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
});

jQuery(document).ready(function(t) {
    // ----------------------------------------------------------------
    //  Contact Form Ajax
    // ----------------------------------------------------------------
    
    t("#contactForm").submit(function(e) {
        e.preventDefault(), t(".resultados").css("display", "block");
        
        var r = "sendform.php",
            s = "POST",
            o = t(this).serialize();
        
        t.ajax({
            url: r,
            type: s,
            data: 0
        }).done(function(e) {
            t("#server-results").fadeOut("slow", function(){
                t(".resultados").html("<span>Gracias por contactarnos. <br>En breve nos pondremos en contacto contigo.</span>")
            })
            alert('El Registro ha sido Modificado');
            //window.location.href='gracias';
        }).fail(function(){
            t("#server-results").html("<strong>Por alguna razón, no se ha pododo enviar, llámanos mejor.</strong>")
        })
    })
});

(function() {
    var v = document.getElementsByClassName("reproductor");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();
function labnolThumb(id) {
    return '<img class="imagen-previa" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="youtube-play"></div>';
}
function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("width", "970");
    iframe.setAttribute("height", "400");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    //iframe.setAttribute("allowfullscreen");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}





