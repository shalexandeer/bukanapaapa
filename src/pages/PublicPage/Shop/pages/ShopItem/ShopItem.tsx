import {
  Card,
  CardActions,
  CardBody,
} from "../../../../../components/elements/Card/Card";
import PageHeader from "../../../../../components/templates/PageHeader/PageHeader";
import BeginnerImage from "../../../../../assets/images/beginner.png";
import Button from "../../../../../components/elements/Button";
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const ShopItem = () => {
  const paths = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Shop",
      url: "/shop",
    },
    {
      name: "Power 20x Potion",
    },
  ];

  const badges = [
    { text: "Untradeable", color: "bg-errorColor" },
    { text: "Category", color: "bg-primary font-semibold text-black" },
  ];
  return (
    <div className="container-layout">
      <PageHeader paths={paths} title="Back to shop" enableBack />
      <Card className="box-shadow-no-blur my-6 w-full rounded-xl border border-borderPrimaryDark bg-bgSecondaryBlack md:p-6 lg:my-12">
        <CardBody className="flex flex-col gap-6 md:flex-row">
          <div className="flex w-full flex-col gap-6 xl:flex-row">
            <div className="relative max-w-[490px] overflow-hidden rounded-xl border border-borderPrimaryDark lg:min-w-[433px]">
              <img
                src={BeginnerImage}
                alt=""
                className="h-full w-full object-contain"
              />{" "}
              <div className="absolute right-[1rem] top-[1rem] space-x-2">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`badge border-none ${badge.color}`}
                  >
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full max-w-[400px] flex-col items-start gap-4 self-stretch">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h1 className="self-stretch text-2xl font-bold leading-[120%] text-textPrimaryDark lg:text-4xl">
                  Power-Up Potion x10
                </h1>
                <div className="flex flex-wrap content-center items-center gap-4 self-stretch">
                  <p className="text-center text-sm leading-[150%] text-[#027a48]">
                    Stock: 900
                  </p>
                  <p className="text-center text-sm leading-[150%] text-[#b42318]">
                    Sold: 200
                  </p>
                </div>
              </div>
              <div className="self-stretch text-xl leading-[150%] text-[#aaa]">
                Rp. 20.000,00
              </div>
              <div className="flex flex-col items-start self-stretch">
                <p className="leading-[150%] text-textPrimaryDark">Deskripsi</p>
                <div className="divider" />
                <p className="text-sm text-textPrimaryDark md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
            </div>
          </div>
          <Card className="flex h-max w-full flex-col justify-between bg-bgPrimaryDark xl:max-w-[356px]">
            <CardBody className="w-full space-y-4 bg-bgPrimaryDark">
              <h1 className="text-xl font-semibold">Checkout</h1>
              <Card>
                <div className="flex flex-row items-center justify-between">
                  <Button
                    variant="custom"
                    className="!border-borderSecondary bg-bgTertiary"
                  >
                    <MinusIcon className="size-6" />
                  </Button>
                  <h1 className="text-xl">3 items</h1>
                  <Button
                    variant="custom"
                    className="!border-borderSecondary bg-bgTertiary"
                  >
                    <PlusIcon className="size-6" />
                  </Button>
                </div>
                <div className="mt-5 flex justify-between">
                  <h1>Total</h1>
                  <h1>Rp. 20.000,00</h1>
                </div>
              </Card>
            </CardBody>
            <CardActions className="mt-4 grid grid-cols-1 gap-2 self-stretch">
              <Button variant="secondary" className="flex w-full !p-0">
                <ShoppingCartIcon className="size-6" />
                <span>Add to cart</span>
              </Button>
              <Button className="w-full">Buy now</Button>
            </CardActions>
          </Card>
        </CardBody>
      </Card>
    </div>
  );
};

export default ShopItem;
