import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
	changeText: boolean;
	constructor() {
		this.changeText = false;
	}
	products = products;

	addToCheckout(product: Product) {
		let actualCheckout = localStorage.getItem('checkout')
		if (actualCheckout) {
			let checkout = JSON.parse(actualCheckout);
			let productInCheckout = checkout.find((p: Product) => p.id === product.id);
			if (productInCheckout) {
				productInCheckout.quantity += 1;
			} else {
				product.quantity = 1;
				checkout.push(product);
			}
			localStorage.setItem('checkout', JSON.stringify(checkout));
		} else {
			product.quantity = 1;
			localStorage.setItem('checkout', JSON.stringify([product]));
		}
		window.alert(`The product ${product.name} has been shared!`);
	}

}

