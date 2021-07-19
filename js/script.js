console.log("fs");

$(function(){

	$("#burger").on('click',function(){
		$('#brg').toggleClass('active');
		$(this).toggleClass('active');
	
	});

	var height = $('#serv').offset().top;
	console.log(height);
	$(window).scroll(function(){
		if($(this).scrollTop()>height-150){
			$('#menu').addClass('menu__info_2');
			$('#men').addClass('menu_2');
		}else{
			$('#menu').removeClass('menu__info_2');
			$('#men').removeClass('menu_2');
		}
	});

	$("#video").on('click',function(){
		$('#video__info').addClass('display');
		$(this).addClass('display');
		
		var vid = $('#file');
 	 	vid.trigger('play');
	
	});

	

	$('#link_1').on('click',function(e){
		e.preventDefault();
	});
	$('#link_2').on('click',function(e){
		e.preventDefault();
	});
	$('#link_3').on('click',function(e){
		e.preventDefault();
	});
	$('#link_4').on('click',function(e){
		e.preventDefault();
	});
	$('#link_5').on('click',function(e){
		e.preventDefault();
	});


	var w = screen.width;
	if(w>='1200'){
$("#product1").on('mouseover',function(){
		$(this).addClass('display__none');
	});
	$("#product1").on('mouseout',function(){
		$(this).removeClass('display__none');
	});
	$("#product2").on('mouseover',function(){
		$(this).addClass('display__none');
	});
	$("#product2").on('mouseout',function(){
		$(this).removeClass('display__none');
	});
	$("#product3").on('mouseover',function(){
		$(this).addClass('display__none');
	});
	$("#product3").on('mouseout',function(){
		$(this).removeClass('display__none');
	});
	$("#product4").on('mouseover',function(){
		$(this).addClass('display__none');
	});
	$("#product4").on('mouseout',function(){
		$(this).removeClass('display__none');
	});
	$("#product5").on('mouseover',function(){
		$(this).addClass('display__none');
	});
	$("#product5").on('mouseout',function(){
		$(this).removeClass('display__none');
	});
	$("#product6").on('mouseover',function(){
		$(this).addClass('display__none');
	});
	$("#product6").on('mouseout',function(){
		$(this).removeClass('display__none');
	});
	}
	else{

		$("#product1").on('click',function(){
		$(this).addClass('display__after');
	});
	$("#product1").on('mouseout',function(){
		$(this).removeClass('display__after');
	});
	$("#product2").on('click',function(){
		$(this).addClass('display__after');
	});
	$("#product2").on('mouseout',function(){
		$(this).removeClass('display__after');
	});
	$("#product3").on('click',function(){
		$(this).addClass('display__after');
	});
	$("#product3").on('mouseout',function(){
		$(this).removeClass('display__after');
	});
	$("#product4").on('click',function(){
		$(this).addClass('display__after');
	});
	$("#product4").on('mouseout',function(){
		$(this).removeClass('display__after');
	});
	$("#product5").on('click',function(){
		$(this).addClass('display__after');
	});
	$("#product5").on('mouseout',function(){
		$(this).removeClass('display__after');
	});
	$("#product6").on('click',function(){
		$(this).addClass('display__after');
	});
	$("#product6").on('mouseout',function(){
		$(this).removeClass('display__after');
	});
	}

	
});