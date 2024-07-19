function getHttp(url){
	return new Promise((resolve,reject)=>{
		fetch(url)
		.then((response)=>{
			if(response.status == 200){
				resolve(response)
			}
			else{
				reject(response.status)
			}
		})
		.catch((err)=>{
			reject(err)
		})
	})

}

getHttp("htps://www.google.com")
.then((response)=>{
	console.log(response)
})
.catch((err)=>{
	console.log(err+"error")
})
