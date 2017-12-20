const express = require('express')
const app = express()
const settings = require("./settings")
const request = require("request")


app.get('/project/1', (req, res) => {
	opts = {
		uri:"http://localhost:"+settings.docs_api_port+"/project/1/docs",
		method:"GET"
	}
	console.log("getting request for projects, asking docs api on ", opts.uri)
	request(opts, (err, respose, docs)=>{
		if(err){
			console.log(err)
		}
		if(!docs){
			throw("no docs returned from docs api")
		}
		let project = {
			user_id : "random_user_id",
			project_name : "my test project",
			docs: docs
		}
		res.send(project)
	})
})

app.listen(settings.port, () => console.log('Example app listening on port '+settings.port))