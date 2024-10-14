import { useRef, useState } from "react";
import Breadcrumb from "../../components/elements/Breadcrumb";
import Button from "../../components/elements/Button";
import {
  Card,
  CardActions,
  CardBody,
} from "../../components/elements/Card/Card";
import Input from "../../components/elements/Input";
import {
  Modal,
  ModalAction,
  ModalBox,
} from "../../components/elements/Modal/Modal";
import Select from "../../components/elements/Select/Select";

import BeginnerImage from "../../assets/images/beginner.png";
import CardEvent from "../PublicPage/Events/components/CardEvent";
import CardShop from "../PublicPage/Shop/components/CardShop";
import SectionHeader from "../../components/templates/SectionHeader/SectionHeader";
import PageHeader from "../../components/templates/PageHeader/PageHeader";

const ComponentsLab = () => {
  const modalExamples = useRef<HTMLDialogElement>(null);
  const [, setIsModalOpen] = useState(false);

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const paths = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
  ];

  const showModal = () => {
    setIsModalOpen(true);
    if (modalExamples.current) {
      modalExamples.current.showModal();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalExamples.current) {
      modalExamples.current.close();
    }
  };

  // const categories = [
  //   { name: "All Category" },
  //   { name: "Item Mall", variant: "custom" },
  //   { name: "Item kedua", variant: "custom" },
  //   { name: "Item ketiga", variant: "custom" },
  //   { name: "Item keempat", variant: "custom" },
  // ];

  return (
    <div className="container-layout my-8 space-y-12 font-['Poppins']">
      <div>
        <h1 className="text-3xl">Card Element</h1>
        <Card className="transition delay-150 ease-in-out hover:border hover:border-primary hover:shadow-sm hover:shadow-primary">
          <CardBody>Halo this is the card body</CardBody>
          <CardActions>
            <Button>Halo</Button>
          </CardActions>
        </Card>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl">Button Element</h1>
        <div className="flex space-x-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Button Outline</Button>
          <Button variant="danger">Button Outline</Button>
        </div>
        <Button
          variant="outline"
          className="!border-borderPrimaryDark text-textPrimaryDark hover:shadow-primary"
        >
          Button Outline
        </Button>
      </div>

      <div>
        <h1 className="text-3xl">Input Element</h1>
        <div className="grid">
          <Input
            label="This is the label"
            labelAlt="label alt"
            labelBottomLeft="label bottom left"
            labelBottomRight="label bottom right"
            error="If error occurs, this would be shown"
            leftIcon={<span>🔍</span>}
            rightIcon={<span>🔍 </span>}
            as="input"
            placeholder="this is the placeholder"
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl">Select Element</h1>
        <div className="grid">
          <Select
            labelAlt="label alt"
            error="If error occurs, this would be shown"
            labelBottomRight="label bottom right"
            labelBottomLeft="label bottom left"
            label="This is the label"
            options={options}
          >
            Primary Button
          </Select>
        </div>
      </div>

      <div>
        <h1 className="text-3xl">Breadcrumb</h1>
        <div className="grid">
          <Breadcrumb paths={paths} />
        </div>
      </div>

      <div>
        <h1 className="text-3xl">Modals</h1>
        <Button onClick={showModal}>Show modal</Button>
      </div>
      <Modal id="my-modal-5" ref={modalExamples} className="">
        <ModalBox className="bg-bgPrimaryDark">
          This is the box
          <ModalAction>
            <Button onClick={closeModal}>Close</Button>
          </ModalAction>
        </ModalBox>
      </Modal>

      <div>
        <h1 className="text-3xl">News and Events card</h1>
        <CardEvent
          image={BeginnerImage}
          category="Category"
          title="Beginner Events"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          eventDate="Fri 09 Feb 2024"
          location="Discord"
          onDetailClick={() => console.log("yes")}
        />
      </div>
      <div>
        <h1 className="text-3xl">Shop card</h1>
        <CardShop
          image={BeginnerImage}
          title="Power-Up Potion x10"
          price="Rp. 20.000,00"
          stock={900}
          sold={200}
          badges={[
            { text: "Untradeable", color: "bg-errorColor" },
            { text: "Category", color: "bg-primary font-semibold text-black" },
          ]}
          onAddToCart={() => console.log("Add to cart")}
          onBuyNow={() => console.log("Buy now")}
        />
      </div>

      <div className="w-full">
        <h1 className="mb-5 text-3xl">Section Headers</h1>
        <SectionHeader
          title="News & Events"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          buttonText="Lihat Semua"
          onButtonClick={() => console.log("redirect")}
        />
      </div>

      <div>
        <h1 className="text-3xl">Page Headers</h1>
        <PageHeader paths={paths} title="Shop" />
      </div>
    </div>
  );
};

export default ComponentsLab;
