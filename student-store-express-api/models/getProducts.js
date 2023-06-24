const productObj = require("../data/db.json");

const getProductList = () => {
  return productObj;
};

const getproduct = (productID) => {
  let products = productObj.products;
  const product = products.filter((product, index) => product.id == productID);
  return product[0];
};

const getPurchases = () => {
  return productObj.purchases;
};
const getSpecificPurchase = (orderID) => {
  let orders = productObj.purchases;
  const SpecificPurchase = orders.filter((order, index) => order.id == orderID);
  return SpecificPurchase[0];
};

const addToPurchases = (shoppingCart, name, email) => {
  console.log("first inside of shoppingcart", shoppingCart);
  const purchases = productObj.purchases;
  const receiptID = purchases.length + 1;
  const receipt = {};
  receipt[receiptID] = { name: name, email: email, shoppingCart: shoppingCart };
  console.log("inside of addtopurchase:", receipt);
  purchases.push(receipt);
  productObj["purchases"] = purchases;
  console.log("Product object key purchases value:", productObj["purchases"]);
  return purchases;
};

const getLastReceipt = () => {
  const purchases = productObj.purchases;
  console.log("last Purchases is (getLASTRECEIPT", purchases);
  const lastReceiptPosition = purchases.length - 1;
  const lastReceipt = purchases[lastReceiptPosition];
  const lastReceiptID = purchases.length;
  console.log("THIS IS THE LAST RECEIPT", lastReceipt);
  const receiptInformation = lastReceipt[lastReceiptID];
  console.log("productsInReceipt", receiptInformation);
  return receiptInformation;
};

const getAllReceipts = () => {
  const receipts = productObj.purchases;
  return receipts;
};

module.exports = {
  getProductList,
  getproduct,
  getPurchases,
  addToPurchases,
  getSpecificPurchase,
  getLastReceipt,
  getAllReceipts,
};
