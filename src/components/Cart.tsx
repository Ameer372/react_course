interface CartProps {
  cartItems: string[];
  onClearCart: () => void;
}
const Cart = ({ cartItems, onClearCart }: CartProps) => {
  return (
    <>
      <div>Cart</div>{" "}
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClearCart}>CLEAR</button>
    </>
  );
};

export default Cart;
