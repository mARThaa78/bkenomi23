var itemsPdf = []; //arreglo para almacenar los tipo de compras que contiene el item
var itemsTexto = []; //arreglo para almacenar los texto que contiene el item

 
var bloqueEnlaces=[];
 
$(function() {
 
 
  
   //cargamos tipo de  Compras seguido de , del link del texto para cada item

  /*item 1*/ //solo un elemento
   //elemento 1 para itemsPdf,itemsTexto,itemsReformas
   itemsPdf.push([{
      label: 'Compras en efectivo.',
      icon: 'icons/carrito.png',
      action: function() {
          
           window.open();
    }
   },
   {
      label: 'Compras al Credito.',
      icon: 'icons/carrito.png',
      action: function() {
        
        window.open();
      }
   },
   
]);


   
   
   //fin elemento 1 para itemsPdf,itemsTexto,itemsReformas----------------------------------------------------------------------------------------

   

   $('.flex-container .btnPdf').on("click", function(e) {

      var index = $(this).data("index");
 
     // console.log("solo hay un elemento ", itemsPdf[index - 1]);
      if (itemsPdf[index - 1]?.length > 1) {
		 $(this).contextPopup({
            title: 'Códigos',
            items: itemsPdf[index - 1],
			contextMenuClass: (itemsPdf[index - 1]?.length>=7?"contextMenuPlugin2":"contextMenuPlugin")
         });  
		  
        // $(".contextMenuPlugin").hide();
         e.preventDefault();
         e.stopImmediatePropagation();
         $(this).trigger($.Event('contextmenu', {
            data: e.data,
            pageX: e.pageX,
            pageY: e.pageY
         }));
      } else {
 
		    window.open( itemsPdf[index - 1]?.url, '_blank');
        }
   });   


   //click en el boton texto
   $('.flex-container .bntTexto').on("click", function(e) {
      var index = $(this).data("index");
     // console.log(itemsTexto);
      if (itemsTexto[index - 1]?.url != undefined)
        // $(location).attr("href", itemsTexto[index - 1].url);
	        window.open( itemsTexto[index - 1]?.url, '_blank');
   });

   //click en el boton pdf
 

   //click en seccion carousel-wrapper2
   $('.flex-container .bntTexto').on("click", function(e) {
      var index = $(this).data("index");
      //console.log(itemsTexto);
      if (itemsTexto[index - 1]?.url != undefined)
		  
        // $(location).attr("href", itemsTexto[index - 1].url);
	          window.open( itemsTexto[index - 1]?.url, '_blank');
   });

   //click en el boton pdf de seccion reducia solo 2 elementos
 
  let notlink;
   //click en el boton de reforma					 
   $('.flex-container .btnReforma').on("click", function(e) {
        var index = $(this).data("index");
		 //console.log("titulos reformas ",itemsReformasTitle);
                          //console.log("itemsReformasTitle ",itemsReformasTitle," index-1 ",index-1,"--->",itemsReformasTitle[index-1]?.tittle);
								$(".datosReformas").html("");
								 $(".md-reformas").find(".titlereforma").html("");	
					     // console.log(index,"--->",itemsReformas[index-1]);
						if(itemsReformas[index-1]?.length>1){
							$.each(itemsReformas[index-1], function( index_i, value ) {
							//console.log("valor EVAL ",((index-1==0 && index_i==7) || (index-1==6 && index_i==1) || (index-1==7 && index_i==2)));
							 /*   if((index-1==0 && index_i==7) || (index-1==6 && index_i==1) || (index-1==7 && index_i==2))
							      $(".datosReformas").append('<li class="textreform"><a style="cursor:pointer;">'+value.texto+'</a> </li>');
							      else 
								  $(".datosReformas").append('<li class="textreform"><a target="_blank" href="'+value.url+'">'+value.texto+'</a> </li>');
							   */
						 
						      
							  if(in_array(String(index_i),bloqueEnlaces[String((index-1))])!= -1)  //bloqueEnlaces
							  $(".datosReformas").append('<li class="textreform"><a style="cursor:pointer;">'+value.texto+'</a> </li>');		  
							  else
							  $(".datosReformas").append('<li class="textreform"><a target="_blank" href="'+value.url+'">'+value.texto+'</a> </li>');	  
							  
							  
							});		
                            
							
						    $(".md-reformas").find(".titlereforma").html(itemsReformasTitle[index-1]?.tittle);
						    $("#modal").openPopup();
						   }
						   else
						   {
							  
							// $(".linked").attr("href", itemsReformas[index - 1][0]?.url);
                             //  window.open( itemsReformas[index - 1]?.url, '_blank');
						   }
   });   
   function in_array(needle, haystack){
    var found = -1;
    for (var i=0, len=haystack.length;i<len;i++) {
        if (haystack[i] == needle) return i;
            found++;
    }
    return -1;
}


   $('.flex-container .btnReforma').on("click", function(e) {
        var index = $(this).data("index");
		 	 //console.log("titulos reformas ",itemsReformasTitle);
                        //  console.log("itemsReformasTitle ",itemsReformasTitle ," index-1 ",index-1,"--->",itemsReformasTitle[index-1]?.tittle);
								$(".datosReformas").html("");
								$(".md-reformas").find(".titlereforma").html("");	
					    //console.log(index,"--->",itemsReformas[index-1]);
							//console.log("valor EVAL ",((index-1==0 && index_i==7) || (index-1==6 && index_i==1) || (index-1==7 && index_i==2)));
						 console.log("estamos ",index,"--->",itemsReformas[index-1]);
						if(itemsReformas[index-1]?.length>1){
							$.each(itemsReformas[index-1], function( index_i, value ) {
								//console.log("index_i ",index_i," contra : ",(index-1));
								//console.log("evaluacion  ",((index-1==0 && index_i==7) || (index-1==6 && index_i==1)|| (index-1==6 && index_i==9) || (index-1==7 && index_i==2)));
							  /*      if((index-1==0 && index_i==7) || (index-1==6 && index_i==1)|| (index-1==6 && index_i==9)  || (index-1==7 && index_i==2))
							      $(".datosReformas").append('<li class="textreform"><a style="cursor:pointer;">'+value.texto+'</a> </li>');
							      else 
								  $(".datosReformas").append('<li class="textreform"><a target="_blank" href="'+value.url+'">'+value.texto+'</a> </li>');
							   */
							 
							 
						      if(in_array(String(index_i),bloqueEnlaces[String((index-1))])!= -1)  //bloqueEnlaces
							  $(".datosReformas").append('<li class="textreform"><a style="cursor:pointer;">'+value.texto+'</a> </li>');		  
							  else
							  $(".datosReformas").append('<li class="textreform"><a target="_blank" href="'+value.url+'">'+value.texto+'</a> </li>');	  
							
							  
							});		 
                             $(".md-reformas").find(".titlereforma").html(itemsReformasTitle[index-1]?.tittle);							
						    $("#modal").openPopup();
						   }
						   else
						   {
							  
							// $(".linked").attr("href", itemsReformas[index - 1][0]?.url);
                               window.open( itemsReformas[index - 1]?.url, '_blank');
						   }
   });



   var __LIST_OBJECTS_POPUP = {};
   var JSON_CONFIG_POPUP = {
      removalDelay: 10, //delay removal by X to allow out-animation,
      items: {
         src: ''
      },
      // overflowY: 'auto', //
      callbacks: {
         beforeOpen: function(e) {
            this.st.mainClass = "mfp-wrap";
            $('html').css('overflow', 'auto').css('margin-right', '0');
         },


      },
      focus: '#focus-blur-loop-select',
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
   };

   /* Open and close popup */
   $.fn.openPopup = function() {
      let _modal_src = '#' + this[0].id;

      JSON_CONFIG_POPUP.items.src = _modal_src;
      __LIST_OBJECTS_POPUP[_modal_src] = $.magnificPopup.open(JSON_CONFIG_POPUP);

      return this;
   };

   $.fn.closePopup = function() {
      let _modal_src = '#' + this[0].id;

      $.magnificPopup.close();
      delete __LIST_OBJECTS_POPUP[_modal_src];

      return this;
   };
   
      $(document).on('click', function(e) {
      $('.bodmnu').remove();
      $('.contextMenuPlugin').remove();
      $('.contextMenuPlugin2').remove();
 
 
  }); 
})