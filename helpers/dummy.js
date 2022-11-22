import { RiBankFill } from 'react-icons/ri';
import { FaBriefcaseMedical, FaBed } from 'react-icons/fa';
import { MdOutlineNordicWalking } from 'react-icons/md';

export const revenueData = [
  {
    id: 1,
    title: 'Appointments',
    amount: '213',
    icon: <FaBriefcaseMedical />,
    color: 'text-success',
  },
  {
    id: 2,
    title: 'New Patients',
    amount: 104,
    icon: <MdOutlineNordicWalking />,
    color: 'text-primary',
  },
  {
    id: 3,
    title: 'Interventions',
    amount: 24,
    icon: <FaBed />,
    color: 'text-success',
  },
  {
    id: 4,
    title: "Clafiya's Earnings",
    amount: '$ 112,174',
    icon: <RiBankFill />,
    color: 'text-tangerine',
  },
];

export const tabledata = [
  {
    id: 1,
    image: '/images/Ed.svg',
    name: 'Purest Meion',
    email: 'purestmoine@purest.com',
    date: '10/15/2020',
    visited: '12:00-12:45pm',
    chw: 'Blessing Chidi',
    plan: 'family',
  },
  {
    id: 2,
    image: '/images/Myra.svg',
    name: 'Lucky Williams',
    email: 'luckywills@purest.com',
    date: '10/15/2020',
    visited: '12:00-12:45pm',
    chw: 'Esther Lucky',
    plan: 'basic',
  },
  {
    id: 3,
    image: '/images/Ed.svg',
    name: 'Purest Meion',
    email: 'purestmoine@purest.com',
    date: '10/15/2020',
    visited: '12:00-12:45pm',
    chw: 'Blessing Chidi',
    plan: 'Family',
  },
  {
    id: 4,
    image: '/images/Ed.svg',
    name: 'Blessing Wilson',
    email: 'blessing@purest.com',
    date: '10/09/2020',
    visited: '12:00-12:45pm',
    chw: 'Blessing Chidi',
    plan: 'basic',
  },
  {
    id: 5,
    image: '/images/Myra.svg',
    name: 'Jennie Johnson',
    email: 'jenniejohnson@purest.com',
    date: '10/22/2020',
    visited: '12:00-12:45pm',
    chw: 'Esther Lucky',
    plan: 'family',
  },
];
