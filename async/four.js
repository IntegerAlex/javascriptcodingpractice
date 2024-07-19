function download(urls){
	let collectPromises=[]
	for(let i=0;i<urls.length;i++){
		collectPromises.push(
			fetch(urls[i])
			.then((response)=>{
				if(response.status == 200){
					return response
				}
				else{
					return response.status
				}

			})
			.catch((err)=>{
				throw new Error(err)		
			})

		)


	}
	
	return Promise.all(collectPromises)
	.then((response)=>{
		return response
	})
	.catch((err)=>{
		return err
	})

}


let urls = ["https://www.google.com","https://realtalkportfoilio.vercel.app/","https://www.amazon.in"]
download(urls).then((response)=>{console.log(response)})



