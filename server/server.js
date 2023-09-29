const express = require('express')
const app = express();
const cors  = require('cors')

require('../server/config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}));

app.use(cors());

const allRoutes = require('../server/routes/product.routes')
allRoutes(app);

app.listen(4500, (req, res) => {
    console.log("server is started at 4500")
})