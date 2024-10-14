import PageHeader from "../../../components/templates/PageHeader/PageHeader";
import CardEvent from "./components/CardEvent";
import BeginnerImage from "../../../assets/images/beginner.png";

const Events = () => {
  const paths = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "News & Events",
    },
  ];

  const categories = [
    { name: "All Category" },
    { name: "Item Mall", variant: "custom" },
    { name: "Item kedua", variant: "custom" },
    { name: "Item ketiga", variant: "custom" },
    { name: "Item keempat", variant: "custom" },
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
    {
      image: BeginnerImage,
      category: "Community Event",
      title: "Community Q&A",
      description:
        "Join our community Q&A session to ask questions and get answers from the developers.",
      eventDate: "Mon 19 Feb 2024",
      location: "Discord",
    },
    {
      image: BeginnerImage,
      category: "Special Event",
      title: "Anniversary Celebration",
      description:
        "Celebrate our game's anniversary with special events, giveaways, and more!",
      eventDate: "Tue 27 Feb 2024",
      location: "In-Game",
    },
    {
      image: BeginnerImage,
      category: "Tournament",
      title: "PvP Tournament",
      description:
        "Test your skills in our PvP tournament and compete against other players for the top spot.",
      eventDate: "Fri 01 Mar 2024",
      location: "In-Game",
    },
    {
      image: BeginnerImage,
      category: "Charity Event",
      title: "Charity Livestream",
      description:
        "Join us for a charity livestream event where we will be raising funds for a good cause.",
      eventDate: "Sun 03 Mar 2024",
      location: "Twitch",
    },
    {
      image: BeginnerImage,
      category: "Update Event",
      title: "Patch Notes Discussion",
      description:
        "Discuss the latest patch notes and upcoming changes with the developers.",
      eventDate: "Thu 07 Mar 2024",
      location: "Discord",
    },
    {
      image: BeginnerImage,
      category: "Holiday Event",
      title: "Easter Egg Hunt",
      description:
        "Join our Easter egg hunt event and find hidden eggs to win special prizes.",
      eventDate: "Sun 31 Mar 2024",
      location: "In-Game",
    },
    {
      image: BeginnerImage,
      category: "Special Event",
      title: "Spring Festival",
      description:
        "Celebrate the arrival of spring with our in-game festival, featuring unique quests and rewards.",
      eventDate: "Wed 10 Apr 2024",
      location: "In-Game",
    },
  ];

  return (
    <div className="container-layout">
      <PageHeader
        paths={paths}
        title="News & Events"
        categories={categories}
        onSearch={() => console.log("onsearch")}
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
  );
};

export default Events;
