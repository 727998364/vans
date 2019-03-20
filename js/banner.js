let index = 0;
let mytimer = null;
function showli(inIndex,outIndex){
	if(inIndex==outIndex){
		return;
	}
	let lis = $(".slideLi");
	lis[inIndex].style.left = "400px";
	slideInOut(lis[outIndex],lis[inIndex],"left",2000,400,1000);
	
}
window.onload = function(){
	$("#goBack").click(function(){

	})
}