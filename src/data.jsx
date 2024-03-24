import {
  MicrophoneIcon,
  PlaneIcon,
  SatelitteIcon,
  SelectionIcon,
  SettingsIcon,
  TaxiIcon,
  WaterSportIcon,
} from "./components/icons";

export const MENU = [
  {
    id: 1,
    name: "Destinations",
    link: "#destinations",
  },
  {
    id: 2,
    name: "Hotels",
    link: "#",
  },
  {
    id: 3,
    name: "Flights",
    link: "#",
  },
  {
    id: 4,
    name: "Bookings",
    link: "#",
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "Calculated Weather ",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: <SatelitteIcon />,
  },
  {
    id: 2,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: <PlaneIcon />,
  },
  {
    id: 3,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    icon: <MicrophoneIcon />,
  },
  {
    id: 4,
    title: "Customization",
    description:
      "We deliver outsource aviation services for military customers",
    icon: <SettingsIcon />,
  },
];

export const DESTINATIONS = [
  {
    id: 1,
    name: "Rome, Italy",
    price: "$5,42k",
    description: "10 Days Trip",
    image: "images/italy.png",
  },
  {
    id: 2,
    name: "London, UK",
    price: "$4,2k",
    description: "12 Days Trip",
    image: "images/london.png",
  },
  {
    id: 3,
    name: "Full Europe",
    price: "$15k",
    description: "28 Days Trip",
    image: "images/europe.png",
  },
];

export const BOOK_TRIP = [
  {
    id: 1,
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: <SelectionIcon />,
    color: "#F0BB1F",
  },
  {
    id: 2,
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: <WaterSportIcon />,
    color: "#F15A2B",
  },
  {
    id: 3,
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    icon: <TaxiIcon />,
    color: "#006380",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mike Taylor",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    location: "Lahore, Pakistan",
    image: "images/person1.jpg",
  },
  {
    id: 2,
    name: "Chris Thomas",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    location: "CEO of Red Button",
    image: "images/person2.jpg",
  },
  {
    id: 3,
    name: "Isabella Rossi",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    location: "Rome, Italy",
    image: "images/person3.jpg",
  },
];

export const LOGOS = [
  {
    id: 1,
    name: "Axon Airlanes",
    logo: "images/logos/axon.png",
  },
  {
    id: 2,
    name: "Jetstar",
    logo: "images/logos/jetstar.png",
  },
  {
    id: 3,
    name: "Expedia",
    logo: "images/logos/expedia.png",
  },
  {
    id: 4,
    name: "Qantas",
    logo: "images/logos/qantas.png",
  },
  {
    id: 5,
    name: "Alitalia",
    logo: "images/logos/alitalia.png",
  },
];

export const FOOTER = [
  {
    id: 1,
    name: "Company",
    children: [
      {
        id: 11,
        name: "About",
        link: "#",
      },
      {
        id: 12,
        name: "Careers",
        link: "#",
      },
      {
        id: 13,
        name: "Mobile",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    name: "Contact",
    children: [
      {
        id: 21,
        name: "Help/FAQ",
        link: "#",
      },
      {
        id: 22,
        name: "Press",
        link: "#",
      },
      {
        id: 23,
        name: "Affilates",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    name: "More",
    children: [
      {
        id: 31,
        name: "Airlinefees",
        link: "#",
      },
      {
        id: 32,
        name: "Airline",
        link: "#",
      },
      {
        id: 33,
        name: "Low fare tips",
        link: "#",
      },
    ],
  },
];