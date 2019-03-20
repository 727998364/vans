$(".footbtmContry").click(function(){
	$(".footbtmUl").css("display","block");
})
// $("body").click(function(){
// 	$(".footbtmUl").css("display","none");
// })
$('body').click(function(e){
      if($(e.target).attr('class')!='footbtmContry'){
    	$('.footbtmUl').css('display','none');
      }
});