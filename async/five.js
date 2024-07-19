function first(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("async first")	
		resolve()
		},2000)
	})
}

function second(){
	
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("async second")
		
		resolve()
		},1000)
	})

}

function third(){
	
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("async third")
		
		resolve()
		},500)
	})
}

async function invoke(){
	await first()
	await second()
	await third()
}

invoke()
