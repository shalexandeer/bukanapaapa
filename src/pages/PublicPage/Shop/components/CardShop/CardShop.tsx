import {
  Card,
  CardActions,
  CardBody,
} from "../../../../../components/elements/Card/Card";
import Button from "../../../../../components/elements/Button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface CardShopProps {
  image: string;
  title: string;
  price: string;
  stock: number;
  sold: number;
  badges: { text: string; color: string }[];
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const CardShop = ({
  image,
  title,
  price,
  stock,
  sold,
  badges,
  onAddToCart,
  onBuyNow,
}: CardShopProps) => {
  const navigate = useNavigate();
  return (
    <Card className="card-hoverable-no-skew flex w-full flex-col items-start space-y-4 rounded-lg border border-borderPrimaryDark bg-bgSecondaryBlack p-3 font-['Poppins'] max-md:max-w-[19.5625rem] lg:max-w-[19.5625rem]">
      <CardBody className="space-y-4">
        <div
          className="card-shop-hover relative flex h-[14.1875rem] cursor-pointer flex-col items-start gap-2.5 self-stretch overflow-hidden rounded border border-black hover:opacity-70"
          onClick={() => navigate("/shop/1")}
        >
          <img
            src={image}
            alt={title}
            className="h-auto w-full object-fill max-md:h-full lg:h-full"
          />
          <div className="absolute right-[1rem] top-[1rem] space-x-2">
            {badges.map((badge, index) => (
              <div key={index} className={`badge border-none ${badge.color}`}>
                {badge.text}
              </div>
            ))}
          </div>
          <div className="card-hover-text absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100">
            Lihat Detail
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col items-center gap-2 self-stretch">
            <div className="self-stretch text-xl font-bold leading-[140%] text-textPrimaryDark">
              {title}
            </div>
            <div className="self-stretch leading-[150%] text-[#aaa]">
              {price}
            </div>
          </div>
          <div className="flex flex-wrap content-center items-center gap-4 self-stretch">
            <div className="flex items-center gap-2 text-center text-sm leading-[150%] text-successColor">
              Stock: {stock}
            </div>
            <div className="flex items-center gap-2 text-center text-sm leading-[150%] text-borderError">
              Sold: {sold}
            </div>
          </div>
        </div>
      </CardBody>
      <CardActions className="grid grid-cols-2 gap-2 self-stretch">
        <Button
          variant="secondary"
          className="flex w-full !p-0"
          onClick={onAddToCart}
        >
          <ShoppingCartIcon className="size-6" />
          <span>Add to cart</span>
        </Button>
        <Button className="w-full" onClick={onBuyNow}>
          Buy now
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardShop;
