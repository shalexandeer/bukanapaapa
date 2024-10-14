import {
  Card,
  CardActions,
  CardBody,
} from "../../../../../components/elements/Card/Card";
import Button from "../../../../../components/elements/Button";
import {
  CalendarIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// interface Badge {
//   text: string;
//   color: string;
// }

interface CardEventProps {
  image: string;
  category: string;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  onDetailClick: () => void;
}

const CardEvent = ({
  image,
  category,
  title,
  description,
  eventDate,
  location,
  onDetailClick,
}: CardEventProps) => {
  return (
    <Card className="card-hoverable-no-skew flex max-w-[416px] flex-col items-start rounded-lg border border-borderPrimaryDark bg-bgSecondaryBlack p-3">
      <CardBody>
        <div className="relative flex flex-col items-start gap-2.5 self-stretch overflow-hidden rounded border border-black">
          <img src={image} alt={title} />
          <div className="absolute right-[1rem] top-[1rem] flex flex-wrap content-start items-start justify-end gap-4">
            <p className="rounded-lg bg-primary px-2 py-1 text-sm font-semibold leading-[150%] text-black">
              {category}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch px-0 pb-3 pt-6">
          <div className="flex flex-col items-center gap-2 self-stretch">
            <h1 className="text-xl font-bold text-textPrimaryDark md:text-lg lg:text-2xl">
              {title}
            </h1>
            <p className="text-center text-sm font-normal text-textSecondaryDark lg:text-base">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap content-center items-center justify-center gap-4 self-stretch">
            <div className="flex items-center gap-2">
              <CalendarIcon className="size-6" />
              <p className="text-center text-sm leading-[150%] text-textPrimaryDark">
                {eventDate}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="size-6" />
              <p className="text-center text-sm leading-[150%] text-textPrimaryDark">
                {location}
              </p>
            </div>
          </div>
        </div>
      </CardBody>
      <CardActions className="flex flex-col items-center justify-center gap-2 self-stretch">
        <Button onClick={onDetailClick}>
          Lihat detail <ChevronRightIcon className="size-4" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardEvent;
