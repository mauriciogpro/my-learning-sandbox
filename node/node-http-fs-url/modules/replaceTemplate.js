module.exports =  (temp, product)  => {
  // before module was like this
  // const replaceTemplate = (temp, product)  => {

  // use the output var for save the changes in all the document
  // the / /g its for global document change
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) {output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')};
  return output;
}