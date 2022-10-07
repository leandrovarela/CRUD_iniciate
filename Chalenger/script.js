const productStock = [
  {
    barcode: 4454671,
    name: "Pencil",
    description: "Used to draw",
    amount: 2000,
    category: "School supplies",
  },
  {
    barcode: 2511561,
    name: "Pen",
    description: "Used to sing",
    amount: 3000,
    category: "School supplies",
  },
  {
    barcode: 3454564,
    name: "Sharpener",
    description: "used to sharpen pencils",
    amount: 400,
    category: "School supplies",
  },
  {
    barcode: 6789997,
    name: "Paper",
    description: "Used for printing, painting and signatures",
    amount: 10000,
    category: "School supplies",
  },
];

const registrationProduct = (newProduct) => {
  productStock.push(newProduct);
};
// Create Products in array
registrationProduct({
  barcode: 1589593,
  name: "Eraser",
  description: "User for eraser",
  amount: 50,
  category: "School supplies",
});
registrationProduct({
  barcode: 8514516,
  name: "Folder",
  description: "Used to store documents",
  amount: 70,
  category: "School supplies",
});
registrationProduct({
  barcode: 9645821,
  name: "Schedule",
  description: "Used to make appointments",
  amount: 60,
  category: "School supplies",
});

//Delete Product by index
const deleteProduct = (index) => {
  productStock.splice(index, 1);
};

// Listen products in tables
const listenProduct = () => {
  console.log("******************************************************");
  console.log("**********LIST OF ALL STATIONERY PRODUCTS*************");
  console.log("******************************************************");
  console.table(productStock);
};
//Listem products in descriptions
const listenProductbyName = (inputname) => {
  console.log("******************************************************");
  console.log("*********DESCRIPTION OF THE SELECTED PRODUCT**********");
  console.log("******************************************************");
  console.table(
    productStock.find((nameProduct) => nameProduct.name === inputname)
  );
};
const updateProduct = (id, updateItem) => {
  let productFinder = productStock.find(
    (nameProduct) => nameProduct.name === id
  );
  if (productFinder != updateItem) productStock[id] = updateItem;
};

deleteProduct(1);
updateProduct(3, {
  barcode: 5556897,
  name: "Jacarandu",
  description: "Used for trasation",
  amount: 50,
  category: "School supplies",
});
listenProduct();
listenProductbyName("Pencil");
