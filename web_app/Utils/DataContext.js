import { useState, createContext } from 'react';

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  // sidebar mobile toggle
  const [isShown, setIsShown] = useState(false);

  const handleSideOpen = () => {
    setIsShown(true);
  };

  const handleSideClose = () => {
    setIsShown(false);
  };

  //Modal toggle
  const [isOpen, setIsOpen] = useState(false);
  const [isFound, setIsFound] = useState(false);

  const handleOpen = (idx) => {
    setIsOpen(true);

    ModalItem(idx);

    setTimeout(() => {
      setIsFound(true);
    }, 5000);
  };

  const handleClose = () => {
    setIsOpen(false);

    setIsFound(false);
  };

  const [currentItem, setCurrentItem] = useState(null);

  const ModalItem = (id) => {
    setCurrentItem(id);
  };

  // chart data
  const [monthData] = useState({
    labels: [
      'Oct 22',
      'Oct 23',
      'Oct 24',
      'Oct 25',
      'Oct 26',
      'Oct 27',
      'Oct 28',
      'Oct 29',
    ],

    ShipmentStats: [10000, 15000, 30000, 36000, 46000, 36000, 28000, 60000],

    VehicleStats: [2000, 3000, 6000, 8200, 14000, 7200, 4000, 40000],
  });

  const [yearData] = useState({
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],

    ShipmentStats: [
      9000, 18000, 36000, 58000, 34000, 22000, 39000, 43000, 30000, 36000,
      44000, 60000,
    ],

    VehicleStats: [
      2000, 3000, 6000, 8200, 14000, 7200, 4000, 40000, 10000, 2000, 28000,
      60000,
    ],
  });

  //table data
  const [allVehData] = useState([
    {
      id: '001',
      vehicle: 'Toyolta Highlander 2004',
      reg: 'Et-272-KJ',
      start: 'Lebu',
      end: 'Kera',
      current: 'Kera, Addis Ababa',
      deliveryStatus: 'in transit',
      colorStats: 'transit',
      driver: 'Mubarek',
      img: '/12.jpeg',
    },
    {
      id: '002',
      vehicle: 'Honda Suv 2012',
      reg: 'Abj-272-KJ',
      start: 'Shola',
      end: 'Megenagna',
      current: 'N/A',
      deliveryStatus: 'cancelled',
      colorStats: 'cancelled',
      driver: 'Birehan',
      img: '/14.jpeg',
    },
    {
      id: '003',
      vehicle: 'Volkswagen Golf 3',
      reg: 'Edo-272-KJ',
      start: 'AAU',
      end: 'Bole',
      current: 'N/A',
      deliveryStatus: 'completed',
      colorStats: 'completed',
      driver: 'Kerod',
      img: '/13.png',
    },
    {
      id: '004',
      vehicle: 'Toyolta Highlander 2004',
      reg: 'Ph-272-KJ',
      start: 'AAU',
      end: 'Birchiko Fabrica',
      current: 'Piyassa',
      deliveryStatus: 'in transit',
      colorStats: 'transit',
      driver: 'Ekram',
      img: '/16.jpeg',
    },
  ]);

  return (
    <DataContext.Provider
      value={{
        handleSideOpen,
        handleSideClose,
        isShown,
        isOpen,
        handleClose,
        handleOpen,
        monthData,
        yearData,
        allVehData,
        currentItem,
        isFound,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
