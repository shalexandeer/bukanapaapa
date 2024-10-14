import { useRecoilState } from "recoil";
import CartItem from "../components/CartItem";
import { cartListState } from "../../../../store/cart_recoil";
import Button from "../../../../components/elements/Button";
import { useNavigate } from "react-router-dom";

const UserCart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartListState);
  const navigate = useNavigate();

  const handleDeleteCartItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className="font text-xl font-semibold text-textPrimaryDark lg:text-2xl">
        User Cart
      </h1>
      <div className="divider" />
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem
              quantity={item.quantity}
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              stock={item.stock}
              sold={item.sold}
              badges={item.badges}
              onAddToCart={() => console.log("Add to cart")}
              onBuyNow={() => console.log("Buy now")}
              deleteItem={() => handleDeleteCartItem(item.id)}
            />
          ))
        ) : (
          <div className="grid h-full place-items-center space-y-4">
            <h1 className="text-textPrimaryDark">Keranjang kamu kosong</h1>
            <Button onClick={() => navigate("/shop")}>Explore Item </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
