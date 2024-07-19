function delayTwoSecond(callback){
	setTimeout(callback,2000)
}


function callBack(){
	console.log("Hello After Delay")
}

delayTwoSecond(callBack);
