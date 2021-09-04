import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Product from "./components/Product";
import Serial from "./components/Serial";
import Service from "./components/Service";
import Subcontent01 from "./components/subcontent/Subcontent01";
import Subcontent02 from "./components/subcontent/Subcontent02";
import Footer from "./components/template/Footer";
import Header from "./components/template/Header";
import "./css/main.css";
import img01 from "./images/-e-img-1.png";
import img02 from "./images/-e-img-2.png";

const serial = [
  {
    isLightMode: true,
    isAlignLeft: true,
    image: img01,
    alt: "First",
    subheading: "First",
    heading: "Lorem ipsum",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    isLightMode: false,
    isAlignLeft: false,
    image: img02,
    alt: "Second",
    subheading: "Second",
    heading: "Lorem ipsum",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    isLightMode: true,
    isAlignLeft: true,
    image: img01,
    alt: "Third",
    subheading: "Third",
    heading: "Lorem ipsum",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    isLightMode: false,
    isAlignLeft: false,
    image: img02,
    alt: "Four",
    subheading: "Four",
    heading: "Lorem ipsum",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const services = [
  {
    isLeft: true,
    image: img01,
    alt: "Service 1",
    paragraphs: [
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  },
  {
    isLeft: false,
    image: img02,
    alt: "Service 2",
    paragraphs: [
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  },
  {
    isLeft: true,
    image: img01,
    alt: "Service 3",
    paragraphs: [
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        heading: "Sub Heading",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  },
];

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Feature />
      <Subcontent01 />
      {serial.map((s, index) => (
        <Serial
          key={index}
          isLightMode={s.isLightMode}
          isAlignLeft={s.isAlignLeft}
          image={s.image}
          alt={s.alt}
          subheading={s.subheading}
          heading={s.heading}
          content={s.content}
        />
      ))}
      <Subcontent02 />
      {services.map((service, index) => (
        <Service
          key={index}
          isLeft={service.isLeft}
          image={service.image}
          alt={service.alt}
          paragraphs={service.paragraphs}
        />
      ))}
      <Product />
      <Footer />
    </div>
  );
}

export default App;
