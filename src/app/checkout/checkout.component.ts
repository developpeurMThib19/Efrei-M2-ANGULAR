import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Product, products } from '../products';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	products!: Product[];
	totalPrice: number = 0;

	ngOnInit(): void {
		let actualCheckout = localStorage.getItem('checkout')
		if (actualCheckout) {
			this.products = JSON.parse(actualCheckout);
			this.updateTotalPrice();
		}
	}
	updateTotalPrice() {
		this.totalPrice = 0;
		this.products.forEach((product) => {
			this.totalPrice += product.specifications.price * product.quantity;
		}
		);
	}
	addQuantity(product: Product) {
		//search for the product in the checkout
		let index = this.products.findIndex((p) => p.id === product.id);
		if (index !== -1) {
			this.products[index].quantity++;
		}
		//update the checkout and the total price
		localStorage.setItem('checkout', JSON.stringify(this.products));
		this.updateTotalPrice();
	}
	removeQuantity(product: Product) {
		//search for the product in the checkout
		let index = this.products.findIndex((p) => p.id === product.id);
		if (index !== -1) {
			if (this.products[index].quantity > 0) {
				this.products[index].quantity--;
			}
			if (this.products[index].quantity === 0) {
				this.products.splice(index, 1);
			}
		}
		//update the checkout and the total price
		localStorage.setItem('checkout', JSON.stringify(this.products));
		this.updateTotalPrice();
		if (this.products.length === 0) {
			localStorage.removeItem('checkout');
			this.router.navigate(['/']);
		}
	}
	constructor(private route: ActivatedRoute, private router: Router ) { }


}
