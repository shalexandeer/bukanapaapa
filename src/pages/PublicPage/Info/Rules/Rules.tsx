import React from "react";
import Breadcrumb from "../../../../components/elements/Breadcrumb";
import { Card, CardBody } from "../../../../components/elements/Card/Card";

const Rules = () => {
  const paths = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Info",
      url: "/info/faq",
    },
    {
      name: "Rules",
    },
  ];

  const rules = [
    {
      rule: "Real Money Trade (RMT) Diperbolehkan",
      description:
        "Tim Seal Indopride menyediakan layanan MiddleMan resmi dengan potongan biaya dari transaksi sebagai bentuk terima kasih. Layanan ini sukarela dan tidak ada unsur paksaan. Tim tidak bertanggung jawab atas penipuan di luar transaksi MiddleMan resmi.",
    },
    {
      rule: "Larangan Program Ilegal",
      description:
        "Dilarang menggunakan program ilegal atau VMware untuk kecurangan dalam game, termasuk menyebarkan program ilegal kepada pemain lain.",
      sanction: "Banned Permanent",
    },
    {
      rule: "Larangan Abuse/Bug",
      description:
        "Dilarang memanfaatkan segala macam abuse atau bug (kostum, senjata, skill, NPC, dll).",
      sanction: "Banned 7 hari hingga Permanent",
    },
    {
      rule: "Larangan Sara dan Penghinaan",
      description:
        "Dilarang melakukan tindakan Sara atau penghinaan yang menjelek-jelekkan seseorang baik dalam game maupun di Discord (termasuk spam dan flamming orang tua).",
      sanction: "Banned 1 hari hingga Permanent",
    },
    {
      rule: "Larangan Nickname Tidak Pantas",
      description:
        "Dilarang menggunakan nickname yang bersifat Sara, rasis, porno, kasar, atau simbol yang tidak pantas.",
      sanction: "Delete Character hingga Permanent",
    },
    {
      rule: "Larangan Penyebaran Isu Tidak Jelas",
      description:
        "Dilarang menyebarkan isu-isu yang tidak jelas kebenarannya baik di dalam game maupun di Discord, terutama yang merugikan tim atau pemain lain.",
      sanction: "Banned 1 hari hingga Permanent",
    },
    {
      rule: "Larangan Memanfaatkan Bug/Error Server",
      description:
        "Dilarang memanfaatkan bug atau error server dengan tujuan untuk keuntungan pribadi dan merugikan server.",
      sanction: "Banned 7 hari hingga Permanent",
    },
    {
      rule: "Larangan Sharing Akun",
      description:
        "Tidak disarankan untuk berbagi akun untuk menghindari kasus hacking dan lain-lain. Kehilangan item atau akun akibat hacking di luar tanggung jawab tim. Catatan: Semua data pribadi dan item di akun adalah tanggung jawab pemilik akun.",
    },
    {
      rule: "Larangan PK di Map Adel Monastery",
      description:
        "Dilarang melakukan PK di Map Adel Monastery dengan sengaja. PK diperbolehkan jika ada kesepakatan bersama dan tidak merugikan pemain lain di sekitar.",
      sanction: "Banned 3 hari hingga 30 hari",
    },
    {
      rule: "Penghinaan atau Fitnah terhadap Tim",
      description:
        "Segala bentuk penghinaan, merendahkan, merusak nama baik, atau fitnah terhadap tim akan ditindak tegas.",
      sanction: "Warning hingga Permanent",
    },
    {
      rule: "Larangan Menggunakan Macro Mouse/Macro Recorder",
      description:
        "Dilarang menggunakan macro mouse atau recorder untuk collect, auto hunt, dll. Macro mouse atau recorder hanya diperbolehkan untuk penggunaan ransum.",
      sanction: "Banned 3 hari, 7 hari hingga Permanent",
    },
    {
      rule: "Larangan Penipuan atau Scam",
      description:
        "Dilarang melakukan penipuan atau scam dalam bentuk apapun (RMT/Cegel) di Seal Indopride.",
      sanction: "Banned HWID dan Nomor Rekening Penipu",
    },
    {
      rule: "Larangan Promosi Server Game Lain",
      description:
        "Dilarang mempromosikan server game lain baik di dalam game maupun di Discord.",
      sanction: "Banned Permanent",
    },
  ];

  return (
    <div className="container-layout pb-20">
      <div className="my-12 grid gap-4 md:place-items-center">
        <Breadcrumb paths={paths} />
        <h1 className="self-stretch text-[2rem] font-bold leading-[130%] text-textPrimaryDark">
          Rules SEAL Indopride
        </h1>
      </div>
      <Card className="box-shadow-primary w-full rounded-xl border-2 border-primary bg-bgSecondaryBlack hover:border-2 md:p-8">
        <CardBody className="space-y-6">
          <ul className="list-none space-y-4">
            {rules.map(({ rule, description, sanction }, index) => (
              <li key={index} className="flex flex-col">
                <span className="font-bold">
                  {index + 1}. {rule}
                </span>
                <p className="max-md:text-sm md:pl-4">{description}</p>
                {sanction && (
                  <p className="font-semibold text-red-500 md:pl-4">
                    Sanksi: {sanction}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <h1 className="text-center">
            Aturan di atas dapat berubah sewaktu-waktu!
          </h1>
          <h1 className="text-center">~Tim SEAL Indopride~</h1>
        </CardBody>
      </Card>
    </div>
  );
};

export default Rules;
