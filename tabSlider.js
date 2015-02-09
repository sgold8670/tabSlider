// JavaScript Document
$(document).ready(function(){
	$('.tab-panels .tabs li').on('click',function(){
		$('.tab-panels .tabs li.active').removeClass('active');
		$(this).addClass('active');
		
		//figure out which panel to show
		var panelToShow = $(this).attr('rel');
		//hide current panel
		$('.tab-panels .panel.active').slideUp(300, function(){
		    $(this).removeClass('active');
			  
			$('#' + panelToShow).slideDown(300,function(){
			 $(this).addClass('active');	
			  });
			});
		});
});// end of document

//see video to use the "closest method" jquery function if you have more than one tab on a page