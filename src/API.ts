import axios from 'axios';
import {Response} from './Types';

export async function getProductList() {
  const data = await axios.get<Response>('https://artisant.io/api/products');
  return data.data.data.products;
}
