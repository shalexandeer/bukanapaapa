import Button from "../../../components/elements/Button";
import heroImage from "../../../assets/hero.jpg";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Card, CardBody } from "../../../components/elements/Card/Card";
import DriveLogo from "../../../assets/driveLogo.svg";
import MediafireLogo from "../../../assets/mediafireLogo.png";
import MegaLogo from "../../../assets/megaLogo.svg";
import BeginnerImage from "../../../assets/images/beginner.png";
import SectionHeader from "../../../components/templates/SectionHeader/SectionHeader";
import CardEvent from "../Events/components/CardEvent";
import Marquee from "./components/Marquee";
import CardShop from "../Shop/components/CardShop";
import GradualSpacing from "../../../components/templates/GradualSpacing/GradualSpacing";
import { FadeText } from "../../../components/templates/FadeText/FadeText";

const Home = () => {
  const items = [
    {
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
  ];
  const events = [
    {
      image: BeginnerImage,
      category: "Category",
      title: "Beginner Events",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      eventDate: "Fri 09 Feb 2024",
      location: "Discord",
    },
    {
      image: BeginnerImage,
      category: "Special Event",
      title: "Valentine's Day Event",
      description:
        "Celebrate Valentine's Day with us! Participate in special quests and win exclusive rewards.",
      eventDate: "Wed 14 Feb 2024",
      location: "In-Game",
    },
    {
      image: BeginnerImage,
      category: "Weekly Event",
      title: "Weekly Boss Hunt",
      description:
        "Join the weekly boss hunt and defeat powerful enemies to earn rare items and experience.",
      eventDate: "Sat 17 Feb 2024",
      location: "In-Game",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative grid place-items-center overflow-y-hidden py-28">
        <img
          src={heroImage}
          alt=""
          className="absolute top-0 z-10 h-full w-full object-cover opacity-20"
        />
        <div className="container-layout relative z-30 grid w-full max-w-[768px] place-items-center space-y-6">
          <div className="space-y-6 self-stretch">
            <div className="space-y-6 self-stretch">
              {/* <h1 className="text-center text-4xl font-bold leading-[120%] text-white lg:text-6xl">
                SEAL Indopride Community
              </h1> */}
              <div>
                <GradualSpacing
                  className="text-center text-4xl font-bold leading-[120%] text-white lg:text-6xl"
                  text=" SEAL Indopride"
                />
                <GradualSpacing
                  className="text-center text-4xl font-bold leading-[120%] text-white lg:text-6xl"
                  text="Community"
                />
              </div>
              <FadeText
                className="flex items-center !text-center text-textPrimaryDark lg:text-lg"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.6 } },
                }}
                text="Describe exactly what your product or service does and how it
                makes your customer's lives better. Avoid using verbose words or
                phrases."
              />
              {/* <p className="self-stretch text-center text-textPrimaryDark lg:text-lg">
                Describe exactly what your product or service does and how it
                makes your customer's lives better. Avoid using verbose words or
                phrases.
              </p> */}
            </div>
          </div>
          <div className="flex items-start gap-4 p-4">
            <Button>Masuk ke akun</Button>
            <Button
              variant="custom"
              className="border-none bg-transparent hover:opacity-75"
            >
              Jelajahi Store
            </Button>
          </div>
        </div>
      </div>
      {/* end of Hero Section */}

      {/* item secton */}
      <div className="bg-bgSecondaryBlack py-14">
        <div className="container-layout space-y-10">
          <Card className="box-shadow-no-blur w-full rounded-xl border border-borderPrimaryDark bg-bgPrimaryDark md:p-8">
            <CardBody className="flex w-full flex-col justify-between max-md:gap-5 md:flex-row">
              <div className="flex flex-col lg:flex-row">
                <div className="flex gap-2 md:items-center lg:justify-center">
                  <img src={MediafireLogo} alt="Mediafire" className="h-12" />
                  <img src={DriveLogo} alt="Drive" className="h-12 w-12" />
                  <img src={MegaLogo} alt="Mega" className="h-12 w-12" />
                </div>
                <div className="divider lg:divider-horizontal" />
                <div className="flex flex-col items-start gap-4">
                  <h1 className="text-xl font-bold leading-[140%] text-textPrimaryDark md:text-lg lg:text-2xl">
                    Download Client Server Sekarang
                  </h1>
                  <p className="self-stretch text-sm text-textPrimaryDark md:text-base">
                    Bergabung bersama kami, ikuti step by step instalasi
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-3 max-md:items-end">
                <Button className="rounded-[20px_0_20px_0] text-xs md:text-base">
                  <ArrowDownTrayIcon className="size-5" /> Download Client
                </Button>
              </div>
            </CardBody>
          </Card>
          <Card className="w-full rounded-xl border border-borderPrimaryDark bg-bgPrimaryDark p-0 md:p-8">
            <CardBody className="space-y-6">
              <div className="flex flex-col justify-between space-y-2 max-md:p-3 max-sm:items-end md:flex-row">
                <div className="space-y-1">
                  <h1 className="self-stretch text-2xl font-bold leading-[140%] text-textPrimaryDark">
                    Jelajahi produk{" "}
                  </h1>
                  <p className="self-stretch text-sm leading-[150%] text-textPrimaryDark md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <Button variant="outline">Explore Item</Button>
              </div>
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-bgPrimaryDark md:shadow-xl">
                <Marquee
                  pauseOnHover
                  horizontal="true"
                  className="[--duration:20s]"
                >
                  {items.map((item, index) => (
                    <CardShop
                      key={index}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      stock={item.stock}
                      sold={item.sold}
                      badges={item.badges}
                      onAddToCart={() => console.log("Add to cart")}
                      onBuyNow={() => console.log("Buy now")}
                    />
                  ))}
                </Marquee>
                <div className="dark:from-background pointer-events-none absolute inset-y-0 -left-2 w-1/3 bg-gradient-to-r from-bgPrimaryDark"></div>
                <div className="dark:from-background pointer-events-none absolute inset-y-0 -right-2 z-40 w-1/3 bg-gradient-to-l from-bgPrimaryDark"></div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* end of item secton */}

      {/* events secton */}
      <div className="container-layout py-14">
        <SectionHeader
          title="News & Events"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          buttonText="Lihat Semua"
          onButtonClick={() => console.log("redirect")}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <CardEvent
              key={index}
              image={event.image}
              category={event.category}
              title={event.title}
              description={event.description}
              eventDate={event.eventDate}
              location={event.location}
              onDetailClick={() =>
                console.log(`Detail clicked for ${event.title}`)
              }
            />
          ))}
        </div>
      </div>
      {/* end of events secton */}
    </div>
  );
};

export default Home;
