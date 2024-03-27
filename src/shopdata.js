export const dataShop = await (await fetch("https://fakestoreapi.com/products")).json();
export const dataShopCategories = await (await fetch("https://fakestoreapi.com/products/categories")).json();

