function Product({ name, price, left, image}) {
    return (
  <tr>
    <td> {name} </td>
    <td> {price} </td>
    <td> {left} </td>
    <td> <img src= {image} alt="" /> </td>
  </tr>
    );
  }
  
  export default Product;
  