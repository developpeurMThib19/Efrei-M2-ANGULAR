export interface Product {
	id: number;
	name: string;
	specifications: {
		color: string;
		weight: string;
		storage: string;
		price: number;
	};
	picture: string;
	quantity: number;
}

export const products = [
	{
		id: 1,
		name: "1download",
		specifications: {
			color: "black",
			weight: "250g",
			storage: "256GB",
			price: 1000
		},
		picture: "assets/1download.jpg",
		quantity: 0
	},
	{
		id: 2,
		name: "2download",
		specifications: {
			color: "orange",
			weight: "50g",
			storage: "N/A",
			price: 200
		},
		picture: "assets/2download.jpg",
		quantity: 0
	},
	{
		id: 3,
		name: "3download",
		specifications: {
			color: "black",
			weight: "250g",
			storage: "512GB",
			price: 900
		},
		picture: "assets/3images.jpg",
		quantity: 0
	},
	{
		id: 4,
		name: "4images",
		specifications: {
			color: "or",
			weight: "250g",
			storage: "256GB",
			price: 950
		},
		picture: "assets/4images.jpg",
		quantity: 0
	},
	{
		id: 5,
		name: "5images",
		specifications: {
			color: "red",
			weight: "250g",
			storage: "256GB",
			price: 1300
		},
		picture: "assets/5images.jpg",
		quantity: 0
	}
];

