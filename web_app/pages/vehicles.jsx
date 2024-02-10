import React, { useState, useContext } from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from '../styles/styles.module.css';
import TableRow from '../components/TableRow';
import { DataContext } from '../Utils/DataContext';
import Add_employee from '../components/Add_employee'; // Corrected component name to follow conventions

const Vehicles = () => {
  const [toggleState, setToggleState] = useState(1);
  const [showAdd_employee, setShowAdd_employee] = useState(false); // State to manage Add Employee component visibility
  const { allVehData } = useContext(DataContext);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleAdd_employeeClick = () => {
    setShowAdd_employee(!showAdd_employee); // Toggle Add Employee component visibility
  };

  return (
    <section className="vehicles">
      <div className="mt-10 mb-8 ">
        <h1 className="text-2xl md:text-3xl text-black dark:text-white font-bold">
          Vehicles
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mt-3 capitalize">
          Manage and track all vehicles
        </p>
      </div>

      {/* Button to toggle Add Employee component visibility */}
      <button type="button" onClick={handleAdd_employeeClick}>
        {showAdd_employee ? 'Hide Add Employee' : 'Show Add Employee'}
      </button>

      {/* Render Add Employee component based on state */}
      {showAdd_employee && <Add_employee />}

      <div className="bg-off-white dark:bg-night-black">
        <div className=" flex items-center whitespace-nowrap overflow-x-auto md:px-6 border-b-2 border-b-gray-200 dark:border-b-trans-white">
          <a
            className={
              toggleState === 1
                ? `${styles.table__tab} ${styles.table__tab__active}`
                : `${styles.table__tab}`
            }
            href="#allVehicles"
            onClick={() => toggleTab(1)}
          >
            All vehicles
          </a>

          <a
            className={
              toggleState === 2
                ? `${styles.table__tab} ${styles.table__tab__active}`
                : `${styles.table__tab}`
            }
            href="#trucks"
            onClick={() => toggleTab(2)}
          >
            trucks
          </a>

          <a
            className={
              toggleState === 3
                ? `${styles.table__tab} ${styles.table__tab__active}`
                : `${styles.table__tab}`
            }
            href="#trailers"
            onClick={() => toggleTab(3)}
          >
            Trailers
          </a>

          <a
            className={
              toggleState === 4
                ? `${styles.table__tab} ${styles.table__tab__active}`
                : `${styles.table__tab}`
            }
            href="#tankers"
            onClick={() => toggleTab(4)}
          >
            Tankers
          </a>

          <a className={`${styles.table__tab} ml-auto text-2xl cursor-pointer`}>
            <IoSearch />
          </a>
        </div>

        <div className={styles.table__content}>
          <div
            className={
              toggleState === 1
                ? `${styles.tableTab__content__active} ${styles.tableTab__content}`
                : `${styles.tableTab__content}`
            }
          >
            <div className="overflow-x-auto whitespace-nowrap md:px-6">
              <table className={`${styles.table} border-separate w-full`}>
                <tbody>
                  {allVehData.map((item) => (
                    <TableRow item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
