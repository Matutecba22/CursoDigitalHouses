const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products', { productos: products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const producto = products.filter((p) => p.id == req.params.id);

		res.render('detail', { productos: producto })
	},

	// Create - Form to create
	create: (req, res) => {

		res.render('product-create-form')
	},

	// Create -  Method to store
	store: (req, res) => {

		console.log(req.file);

		const productoNuevo = {
			id: Date.now(),
			name: req.body.nombre,
			description: req.body.ca,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			image: "default-image.png"
		};

		if (req.file){

			productoNuevo.image=req.file.filename;
		
		}
		
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		products.push(productoNuevo);

		const data = JSON.stringify(products, null, " ");
		fs.writeFileSync(productsFilePath, data);

		// Do the magic

		console.log('////////////');
		console.log(req.body);
		console.log('////////////');

		res.redirect('/products/create')
	},

	// Update - Form to edit
	edit: (req, res) => {

		console.log('id', req.params.id);
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const producto = products.find((p) => p.id == req.params.id);

		res.render('product-edit-form', { productToEdit : producto })
		// res.render('product-edit-form')
		// res.redirect('/')
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
		console.log(req.body);
		console.log(req.params.id);

		products.forEach(p  => {
			if (p.id==req.params.id){
				p.name = req.body.name;
				p.price = req.body.price;
				p.discount = req.body.discount;
				p.category = req.body.category;
				p.description = req.body.description;

				if(req.file){
					fs.unlinkSync("./public/images/product/"+p.image)
					p.image = req.file.filename
				}
			}
			
		});
		const data = JSON.stringify(products, null, " ");
		fs.writeFileSync(productsFilePath, data);
		

		res.redirect('/products/detail/' + req.params.id)
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {

		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		products = products.filter((p) => p.id != req.params.id);

		const data = JSON.stringify(products, null, " ");
		fs.writeFileSync(productsFilePath, data);

		
		res.redirect('/products')
		// Do the magic
	}
};

module.exports = controller;