var faker = require('faker');

var database = { products: [] };

for (var i = 1; i <= 200; i++) {
    const products = ['bottle', 'cosmetics', 'adapter', 'skincare', 'wine', 'book', 'alcohol', 'product', 'sweets', 'sunglasses']
    const random = Math.floor(Math.random() * (400 - 300) + 300);
    const randomProducts = Math.floor(Math.random() * (11 - 1) + 1);
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: `https://source.unsplash.com/${random}x${random}/?${products[randomProducts]}`,
        quantity: faker.random.number(),
        companyName: faker.company.companyName(),
        manufacturedDate: faker.date.past(),
        expiredDate: faker.date.future()
    });
}

console.log(JSON.stringify(database));