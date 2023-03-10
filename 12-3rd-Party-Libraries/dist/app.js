"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const product_model_1 = require("./product.model");
const class_validator_1 = require("class-validator");
const products = [
    { title: "A Carpet", price: 29.99 },
    { title: "A Book", price: 10.99 },
];
const newProd = new product_model_1.Product("", -5.99);
(0, class_validator_1.validate)(newProd).then((errors) => {
    if (errors.length > 0) {
        console.log("VALIDATION ERROR");
        console.log(errors);
    }
    else {
        console.log(newProd.getInformation());
    }
});
const loadedProducts = (0, class_transformer_1.plainToInstance)(product_model_1.Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
//# sourceMappingURL=app.js.map