import { useState, useContext } from 'react';

//components
import Card from '../components/Card';
import Analytics from '../components/Analytics';

//icons
import { GoPerson } from 'react-icons/go';
import { BsPeopleFill } from 'react-icons/bs';
import { FaShip } from 'react-icons/fa';

//style
import home from '../styles/Home.module.css';

//Utilities
import { DataContext } from '../Utils/DataContext';

export default function Home() {
  //Toggle the tab view
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //Declare chart variables
  const { monthData } = useContext(DataContext);

  const { yearData } = useContext(DataContext);

  return (
    <section className="home">
      <div className="mt-10 mb-8 ">
        <h1 className="text-2xl md:text-3xl dark:text-white text-black font-bold">
          Good Evening, Abel.
        </h1>
        <p className="text-gray-500 mt-3">
          Glad to have you back, heres an overview of your operation today
        </p>
      </div>

      <div className={home.card__grid}>
        <Card bg="bg-blue-700" icon={<GoPerson />} />

        <Card
          small="registered transporters"
          heading="4"
          joined="2 onboard today"
          bg="bg-green-400"
          icon={<BsPeopleFill />}
        />

        <Card
          small="total shipments"
          heading="6"
          joined="2 shipped today"
          bg="bg-pink-500"
          icon={<FaShip />}
        />
      </div>

      <div className="my-10 text-gray-500 dark:text-gray-200 relative">
        {/* tab heading */}
        <div className=" lg:flex justify-between items-center">
          <div>
            <h5 className="text-black dark:text-white font-bold text-2xl mb-3">
              Shipments
            </h5>
            <p>Shipping is going pretty well today. Heres what we have</p>
          </div>

          <div className=" mt-4 lg:mt-0 w-fit bg-white dark:bg-night-blue py-3 px-5 text-black dark:text-white  flex items-center gap-1 rounded-lg ">
            <a className={home.tabs} href="#1d">
              1D
            </a>

            <a className={home.tabs} href="#5d">
              5D
            </a>

            <a
              href="#oneMonth"
              className={
                toggleState === 1
                  ? `${home.tabs} ${home.tab__active}`
                  : `${home.tabs}`
              }
              onClick={() => toggleTab(1)}
            >
              1M
            </a>

            <a
              href="#oneYear"
              className={
                toggleState === 2
                  ? `${home.tabs} ${home.tab__active}`
                  : `${home.tabs}`
              }
              onClick={() => toggleTab(2)}
            >
              1Y
            </a>

            <a className={home.tabs} href="#max">
              Max
            </a>
          </div>
        </div>

        {/* Tab contents */}
        <div className="animate-slideUp">
          {/* Chart */}
          <div
            className={
              toggleState === 1
                ? `${home.tab__content} ${home.active__content}`
                : `${home.tab__content}`
            }
          >
            <Analytics
              shipment={6}
              activeVehicle={2}
              stats={monthData}
            />
          </div>

          <div
            className={
              toggleState === 2
                ? `${home.tab__content} ${home.active__content}`
                : `${home.tab__content}`
            }
          >
            <Analytics
              shipment={6}
              activeVehicle={2}
              stats={yearData}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
