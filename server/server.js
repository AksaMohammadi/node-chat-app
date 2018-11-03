const path= require('path');
const express = require('express')

// console.log(__dirname, '/../public')

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
console.log(publicPath)

const app = express();
app.use(express.static(publicPath))

app.listen(port, () => {
	console.log(`server is now ready to be used at ${port}`)
})


