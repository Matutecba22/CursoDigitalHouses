const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		
		const productsVisited = products.filter((p) => p.category == "visited");
		const productsInSale = products.filter(p => p.category  == "in-sale");

		res.render('index', {productos:products,
			productsInSale:productsInSale,
			productsVisited:productsVisited});
	},
	search: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let search = req.query.keywords///
		
		const resultado = products.filter((p) => p.name.toLowerCase().includes(search))

		res.render("results",{productos:resultado, search:search }) 
	},

};

module.exports = controller;
