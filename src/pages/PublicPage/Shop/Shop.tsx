/* eslint-disable @typescript-eslint/no-unused-vars */
import PageHeader from "../../../components/templates/PageHeader/PageHeader";
import CardShop from "./components/CardShop";
import BeginnerImage from "../../../assets/images/beginner.png";
import { useRecoilState } from "recoil";
import { cartListState } from "../../../store/cart_recoil";
import toast from "react-hot-toast";

const Shop = () => {
  const [, setCartItems] = useRecoilState(cartListState);

  const paths = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Shop",
    },
  ];

  const categories = [
    { name: "All Category" },
    { name: "Item Mall", variant: "custom" },
    { name: "Item kedua", variant: "custom" },
    { name: "Item ketiga", variant: "custom" },
    { name: "Item keempat", variant: "custom" },
  ];

  const items: Product[] = [
    {
      id: "product-001",
      image: BeginnerImage,
      title: "Power-Up Potion x10",
      price: "Rp. 20.000,00",
      stock: 900,
      sold: 200,
      badges: [
        { text: "Untradeable", color: "bg-errorColor" },
        { text: "Category", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-002",
      image: BeginnerImage,
      title: "Health Potion x50",
      price: "Rp. 15.000,00",
      stock: 1200,
      sold: 400,
      badges: [
        { text: "Untradeable", color: "bg-errorColor" },
        { text: "Consumable", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-003",
      image: BeginnerImage,
      title: "Mana Potion x50",
      price: "Rp. 15.000,00",
      stock: 800,
      sold: 300,
      badges: [
        { text: "Untradeable", color: "bg-errorColor" },
        { text: "Consumable", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-004",
      image: BeginnerImage,
      title: "Magic Scroll x5",
      price: "Rp. 10.000,00",
      stock: 500,
      sold: 150,
      badges: [
        { text: "Tradeable", color: "bg-successColor" },
        { text: "Scroll", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-005",
      image: BeginnerImage,
      title: "Sword of Valor",
      price: "Rp. 50.000,00",
      stock: 100,
      sold: 50,
      badges: [
        { text: "Untradeable", color: "bg-errorColor" },
        { text: "Weapon", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-006",
      image: BeginnerImage,
      title: "Shield of Honor",
      price: "Rp. 40.000,00",
      stock: 200,
      sold: 80,
      badges: [
        { text: "Untradeable", color: "bg-errorColor" },
        { text: "Armor", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-007",
      image: BeginnerImage,
      title: "Ring of Strength",
      price: "Rp. 30.000,00",
      stock: 300,
      sold: 150,
      badges: [
        { text: "Tradeable", color: "bg-successColor" },
        { text: "Accessory", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-008",
      image: BeginnerImage,
      title: "Amulet of Wisdom",
      price: "Rp. 25.000,00",
      stock: 400,
      sold: 250,
      badges: [
        { text: "Tradeable", color: "bg-successColor" },
        { text: "Accessory", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-009",
      image: BeginnerImage,
      title: "Boots of Speed",
      price: "Rp. 35.000,00",
      stock: 150,
      sold: 60,
      badges: [
        { text: "Untradeable", color: "bg-errorColor" },
        { text: "Armor", color: "bg-primary font-semibold text-black" },
      ],
    },
    {
      id: "product-010",
      image: BeginnerImage,
      title: "Helmet of Protection",
      price: "Rp. 45.000,00",
      stock: 120,
      sold: 70,
      badges: [
        { text: "Untradeable", color: "bg-errorColor" },
        { text: "Armor", color: "bg-primary font-semibold text-black" },
      ],
    },
  ];

  const handleAddToCart = (item: Product) => {
    setCartItems((prevCartItems) => {
      const isExist = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (isExist) {
        return prevCartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      }
      return [...prevCartItems, { ...item, quantity: 1 }];
    });
    toast.success("Added to cart");
  };

  return (
    <div className="container-layout">
      <PageHeader
        paths={paths}
        title="Shop"
        categories={categories}
        onSearch={() => console.log("onsearch")}
      />

      <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, index) => (
          <CardShop
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            stock={item.stock}
            sold={item.sold}
            badges={item.badges}
            onAddToCart={() => handleAddToCart(item)}
            onBuyNow={() => console.log("Buy now")}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
