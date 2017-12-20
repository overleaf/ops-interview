const express = require('express')
const app = express()
const settings = require("./settings")


app.get('/project/1/docs', (req, res) => {
	console.log("getting request for docs")
	const docs = {
		"main.tex":{
			lines:[
				"hello world",
				"this is not real latex"
			]
		},
		"references.bib":{
			lines:[
				"my references live here"
			]
		}

	}
	res.send(docs)
})

app.listen(settings.port, () => console.log('Example app listening on port '+settings.port))