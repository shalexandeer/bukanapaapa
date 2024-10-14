import Breadcrumb from "../../../../components/elements/Breadcrumb";
import PageHeader from "./../../../../components/templates/PageHeader/PageHeader";

const Faq = () => {
  const paths = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Info",
      url: "/info/rules",
    },
    {
      name: "Frequently Asked Question",
    },
  ];

  const faq = [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website is a platform for people who want to learn more about the blockchain and cryptocurrency. We provide information about the latest news, trends, and technologies in the blockchain and cryptocurrency industry.",
    },
    {
      question: "How do I get started?",
      answer:
        "To get started, you can create an account on our website. Once you have created an account, you can start exploring the different sections of the website to learn more about the blockchain and cryptocurrency industry.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "If you have any questions or need assistance, you can contact our customer support team by sending an email to",
    },
  ];

  return (
    <div className="container-layout pb-20">
      <div className="my-12 grid gap-4 md:place-items-center">
        <Breadcrumb paths={paths} />
        <h1 className="self-stretch text-[2rem] font-bold leading-[130%] text-textPrimaryDark">
          Frequently Asked Question
        </h1>
      </div>
      <div className="space-y-6">
        {faq.map(({ question, answer }, index) => (
          <div
            className="collapse collapse-arrow bg-bgSecondaryBlack"
            key={index}
          >
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-xl font-medium text-primary">
              {question}
            </div>
            <div className="collapse-content">
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
