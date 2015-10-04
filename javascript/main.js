/* CURRENTLY IN: javascript/main.js */

(function(){

	// if something breaks in dragble, change z-inde back zIndex
	$('.links').draggable({helper: 'clone', helper: function () { return $ 
	(this).clone().appendTo('body').css('z-index',5).show(); } 
	});

	$('.js-Bill').droppable({
	    accept: '.links',
	    drop: function(ev,ui){
	        $(ui.draggable).clone().appendTo( $( '.js-newTweet' ) );
	    }
	});


	$( '.js-hide' ).hide();


	$('.js-Bill').on('click', function (){
		$( '.js-hideMain' ).hide();
	    $( '.js-hide' ).show();
	    return false;    
	});

	// api section

	var baseURL = "https://api.twitter.com/1.1/search/tweets.json?";
	var query = "q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4";

	var completeURL = baseURL + query;

	function onSuccesFunc( data ) {
		console.log('this is data:', data);
	} 

	// $.ajax({
	// 	method: "GET",
	// 	dataType: "JSONP",
	// 	url: completeURL,
	// 	async: true,
	// 	succes: onSuccesFunc
	// });




})();