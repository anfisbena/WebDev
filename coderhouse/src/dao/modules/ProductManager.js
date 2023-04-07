/*You can easily read my code like this:
function name(){
  //Variables
  result = Final result

  try{result}
  catch{error}
}
Enjoy 🌴 
*/

import Product from '../models/products.model.js';

const defaultFunction=()=>'please provide a function to handle the error'

export const getProducts=async()=>await Product.find().lean();

export default defaultFunction;