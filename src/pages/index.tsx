import Head from "next/head";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
  bg: string;
  textColor: string;
  hoverBg: string;
};

const Card = ({
  title,
  description,
  image,
  bg,
  textColor,
  hoverBg,
}: CardProps) => {
  return (
    <div
      className={`${bg} flex flex-col items-start justify-between gap-4 p-10 shadow-lg`}
    >
      <div className="flex flex-col items-start justify-between">
        <Image
          src={image}
          alt={title}
          width={30}
          height={30}
          className="w-14"
        />
        <h2 className="mt-8 font-bsd text-4xl font-bold uppercase text-very-light-gray">
          {title}
        </h2>
      </div>
      <p className="mt-4 text-transparent-white">{description}</p>
      <button
        className={`${textColor} mt-6 rounded-full border-2 border-transparent bg-white px-7 py-3  hover:border-white hover:text-white ${hoverBg}`}
      >
        Learn More
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>3 Column Preview Card</title>
        <meta name="description" content="3-column-preview-card" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        {/* Cards Container */}
        <div className="md:h-120 my-20 flex w-80 flex-col overflow-hidden rounded-lg md:w-4/5 md:max-w-[800px] md:flex-row">
          <Card
            title="Sedans"
            description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            image="/images/icon-sedans.svg"
            bg="bg-bright-orange"
            textColor="text-bright-orange"
            hoverBg="hover:bg-bright-orange"
          />
          <Card
            title="SUVs"
            description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            image="/images/icon-suvs.svg"
            bg="bg-dark-cyan"
            textColor="text-dark-cyan"
            hoverBg="hover:bg-dark-cyan"
          />
          <Card
            title="Luxury"
            description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
            image="/images/icon-luxury.svg"
            bg="bg-very-dark-cyan"
            textColor="text-very-dark-cyan"
            hoverBg="hover:bg-very-dark-cyan"
          />
        </div>
      </main>
    </>
  );
}
