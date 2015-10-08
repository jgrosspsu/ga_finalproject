/* CURRENTLY IN: javascript/main.js */

(function(){

	// if something breaks in dragble, change z-inde back zIndex
	$('.links').draggable({
		helper: 'clone', 
		helper: function () { 
			return $(this).clone().appendTo('body').css('z-index',5).show(); 
		} 
	});

	$('.js-Bill').droppable({
	    accept: '.links',
	    drop: function(ev,ui){
	        $(ui.draggable).clone().appendTo( $( '.js-newTweet-Bill' ) );
	    }
	});

	$('.js-Tyler').droppable({
	    accept: '.links',
	    drop: function(ev,ui){
	        $(ui.draggable).clone().appendTo( $( '.js-newTweet-Tyler' ) );
	    }
	});

	$('.js-Jon').droppable({
	    accept: '.links',
	    drop: function(ev,ui){
	        $(ui.draggable).clone().appendTo( $( '.js-newTweet-Jon' ) );
	    }
	});

	$('.js-Xander').droppable({
	    accept: '.links',
	    drop: function(ev,ui){
	        $(ui.draggable).clone().appendTo( $( '.js-newTweet-Xander' ) );
	    }
	});

	$('.js-Aliza').droppable({
	    accept: '.links',
	    drop: function(ev,ui){
	        $(ui.draggable).clone().appendTo( $( '.js-newTweet-Aliza' ) );
	    }
	});


	$( '.js-hide' ).hide();


	$('.js-Bill').on('click', function (){
		$( '.js-hideMain' ).hide();
		$('.js-Tyler').fadeTo(200, .2);
		$('.js-Jon').fadeTo(200, .2);
		$('.js-Xander').fadeTo(200, .2);
		$('.js-Aliza').fadeTo(200, .2);
		$('.js-Tyler').animate({ width: '70%' });
		$('.js-Jon').animate({ width: '70%' });
		$('.js-Xander').animate({ width: '70%' });
		$('.js-Aliza').animate({ width: '70%' });
	    $( '.js-hide-Bill' ).show();
	    return false; 
	});


	$('.js-Tyler').on('click', function (){
		$( '.js-hideMain' ).hide();
		$('.js-Bill').fadeTo(200, .2);
		$('.js-Jon').fadeTo(200, .2);
		$('.js-Xander').fadeTo(200, .2);
		$('.js-Aliza').fadeTo(200, .2);
		$('.js-Bill').animate({ width: '70%' });
		$('.js-Jon').animate({ width: '70%' });
		$('.js-Xander').animate({ width: '70%' });
		$('.js-Aliza').animate({ width: '70%' });
	    $( '.js-hide-Tyler' ).show();
	    return false; 
	});

	$('.js-Jon').on('click', function (){
		$( '.js-hideMain' ).hide();
		$('.js-Bill').fadeTo(200, .2);
		$('.js-Tyler').fadeTo(200, .2);
		$('.js-Xander').fadeTo(200, .2);
		$('.js-Aliza').fadeTo(200, .2);
		$('.js-Bill').animate({ width: '70%' });
		$('.js-Tyler').animate({ width: '70%' });
		$('.js-Xander').animate({ width: '70%' });
		$('.js-Aliza').animate({ width: '70%' });
	    $( '.js-hide-Jon' ).show();
	    return false; 
	});

	$('.js-Xander').on('click', function (){
		$( '.js-hideMain' ).hide();
		$('.js-Bill').fadeTo(200, .2);
		$('.js-Tyler').fadeTo(200, .2);
		$('.js-Jon').fadeTo(200, .2);
		$('.js-Aliza').fadeTo(200, .2);
		$('.js-Bill').animate({ width: '70%' });
		$('.js-Tyler').animate({ width: '70%' });
		$('.js-Jon').animate({ width: '70%' });
		$('.js-Aliza').animate({ width: '70%' });
	    $( '.js-hide-Xander' ).show();
	    return false; 
	});

	$('.js-Aliza').on('click', function (){
		$( '.js-hideMain' ).hide();
		$('.js-Bill').fadeTo(200, .2);
		$('.js-Tyler').fadeTo(200, .2);
		$('.js-Jon').fadeTo(200, .2);
		$('.js-Xander').fadeTo(200, .2);
		$('.js-Bill').animate({ width: '70%' });
		$('.js-Tyler').animate({ width: '70%' });
		$('.js-Jon').animate({ width: '70%' });
		$('.js-Xander').animate({ width: '70%' });
	    $( '.js-hide-Aliza' ).show();
	    return false; 
	});


	// api section

	// var baseURL = "https://api.twitter.com/1.1/search/tweets.json?";
	// var query = "q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4";

	// var completeURL = baseURL + query;

	// function onSuccesFunc( data ) {
	// 	console.log('this is data:', data);
	// } 

	// $.ajax({
	// 	method: "GET",
	// 	dataType: "JSONP",
	// 	url: completeURL,
	// 	async: true,
	// 	succes: onSuccesFunc
	// });




})();