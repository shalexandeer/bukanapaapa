import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Button from "../../../components/elements/Button";
import { Card, CardBody } from "../../../components/elements/Card/Card";
import PageHeader from "./../../../components/templates/PageHeader/PageHeader";
import DriveLogo from "../../../assets/driveLogo.svg";
import MediafireLogo from "../../../assets/mediafireLogo.png";
import MegaLogo from "../../../assets/megaLogo.svg";

const DownloadPage = () => {
  const paths = [
    {
      name: "Home",
      url: "/",
    },
    { name: "Download" },
  ];

  const steps = [
    "Download file diatas (Recomended) Google Drive.",
    "Matikan antivirus apapun itu yang sedang Running.",
    "Extract Seal Online Executive Plus.rar sesuai folder yang kalian sudah tentukan.",
    "Jika ingin memastikan lagi file tidak akan terjadi corrupt bisa melakukan Exclude di folder Seal Online Executive Plus.",
    "Silahkan jalankan AutoUpdate.exe dan Pilih Resolution di Game Setting sesuai kapasitas/rekomendasi monitor kalian masing-masing.",
  ];
  const systemRequirements = [
    {
      hardware: "OS",
      minimumSystem: "Windows 7 64bit",
      recommendedSystem: "Windows 10/11 Pro 64bit",
    },
    {
      hardware: "CPU",
      minimumSystem: "Core i3 / AMD FX 4 Series",
      recommendedSystem: "Core i5 / AMD Ryzen 3",
    },
    {
      hardware: "HDD",
      minimumSystem: "250 GB HDD/SSD",
      recommendedSystem: "500 GB HDD/SSD",
    },
    {
      hardware: "RAM",
      minimumSystem: "4 GB",
      recommendedSystem: "8 GB atau lebih",
    },
    {
      hardware: "VGA",
      minimumSystem: "2 GB AMD/GTX",
      recommendedSystem: "4 GB AMD/GTX",
    },
    {
      hardware: "DirectX",
      minimumSystem: "DirectX 9.0c",
      recommendedSystem: "DirectX 9.0c atau terbaru",
    },
  ];

  return (
    <div className="container-layout space-y-8 pb-20">
      <PageHeader paths={paths} title="Download" />

      {/* Section client server download */}
      <Card className="box-shadow-no-blur w-full rounded-xl border border-borderPrimaryDark bg-bgSecondaryBlack md:p-8">
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
            <Button className="rounded-xl text-xs md:text-base">
              <ArrowDownTrayIcon className="size-5" /> Drive
            </Button>
            <Button className="rounded-xl !bg-[#3777E3] text-xs text-white hover:bg-[#3777E3] md:text-base">
              <ArrowDownTrayIcon className="size-5" /> Mediafire
            </Button>
            <Button className="rounded-xl bg-textError text-xs text-white hover:bg-textError md:text-base">
              <ArrowDownTrayIcon className="size-5" /> Mega
            </Button>
          </div>
        </CardBody>
      </Card>
      {/* end of Section client server download */}

      {/* Step by step instructions */}
      <Card className="box-shadow-primary w-full rounded-xl border-2 border-primary bg-bgSecondaryBlack hover:border-2 md:p-8">
        <CardBody className="space-y-6">
          <div className="">
            <h1 className="text-xl font-bold text-textPrimaryDark md:text-lg lg:text-2xl">
              Bagaimana cara menginstall Seal Online Executive?
            </h1>
            <div className="divider" />
            <tr>
              {steps.map((step, index) => (
                <ol
                  key={index}
                  className="text-sm font-normal text-textPrimaryDark md:text-base"
                >
                  {index + 1}. {step}
                </ol>
              ))}
            </tr>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-textPrimaryDark md:text-lg lg:text-2xl">
              System Requirements
            </h1>
            <div className="overflow-x-auto">
              <table className="table bg-bgPrimaryDark">
                {/* head */}
                <thead className="order">
                  <tr className="font-normal text-textPrimaryDark">
                    <th className="rounded-tl-xl border border-borderPrimaryDark">
                      Hardware
                    </th>
                    <th className="border border-borderPrimaryDark">
                      Minimum Requirements
                    </th>
                    <th className="border border-borderPrimaryDark">
                      Recommend System
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {systemRequirements.map((system, index) => (
                    <tr key={index} className="border">
                      <td className="border border-borderPrimaryDark">
                        {system.hardware}
                      </td>
                      <td className="border border-borderPrimaryDark">
                        {system.minimumSystem}
                      </td>
                      <td className="border border-borderPrimaryDark">
                        {system.recommendedSystem}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* end of Step by step instructions */}
    </div>
  );
};

export default DownloadPage;
