import {
  CardActions,
  CardBody,
} from "../../../../components/elements/Card/Card";
import Button from "../../../../components/elements/Button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface CartItemProps {
  quantity: number;
  image: string;
  title: string;
  price: string;
  stock: number;
  sold: number;
  badges: { text: string; color: string }[];
  onAddToCart: () => void;
  onBuyNow: () => void;
  deleteItem: () => void;
}

const CartItem = ({
  quantity,
  image,
  title,
  price,
  stock,
  sold,
  badges,
  onBuyNow,
  deleteItem,
}: CartItemProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <CardBody className="flex gap-3">
        <div className="space-y-2">
          <div
            className="card-shop-hover relative flex cursor-pointer flex-col items-start gap-2.5 self-stretch overflow-hidden rounded border border-black hover:opacity-70"
            onClick={() => navigate("/shop/1")}
          >
            <img
              src={image}
              alt={title}
              className="h-auto w-full max-w-[151px] object-fill"
            />

            <div className="card-hover-text absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100">
              Lihat Detail
            </div>
          </div>
          <div className="flex flex-wrap content-center items-center gap-4 self-stretch">
            <p className="text-center text-sm leading-[150%] text-successColor">
              Stock: {stock}
            </p>
            <p className="text-center text-sm leading-[150%] text-borderError">
              Sold: {sold}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col items-center gap-2 self-stretch">
            <h1 className="self-stretch text-xl font-bold leading-[140%] text-textPrimaryDark">
              {title}
            </h1>
            <div className="space-x-2">
              {badges.map((badge, index) => (
                <p key={index} className={`badge border-none ${badge.color}`}>
                  {badge.text}
                </p>
              ))}
            </div>
            <p className="self-stretch leading-[150%] text-[#aaa]">
              {quantity} items
            </p>
            <p className="self-stretch leading-[150%] text-[#aaa]">{price}</p>
          </div>
        </div>
      </CardBody>
      <CardActions className="grid grid-cols-2 gap-2 self-stretch">
        <Button
          variant="custom"
          className="border border-borderPrimaryDark bg-transparent text-xs"
          onClick={onBuyNow}
        >
          <span>Bayar Item</span>
        </Button>
        <Button className="w-max" onClick={deleteItem} variant="danger">
          <TrashIcon className="size-6" />
        </Button>
      </CardActions>
    </div>
  );
};

export default CartItem;
