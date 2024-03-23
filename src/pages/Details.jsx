import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';
import algoliasearch from 'algoliasearch';

export default function Details({}) {
  const {id} = useParams ();
  console.log (id);
  const [hit, setHit] = useState (null);

  useEffect (
    () => {
      const fetchData = async () => {
        const client = algoliasearch (
          'H42NYEZRG1',
          'faad703f2419c003fecede5f98457f3d'
        );
        const index = client.initIndex ('MedBuddy');

        try {
          const object = await index.getObject (id);
          console.log (object);
          setHit (object);
        } catch (error) {
          console.error (error);
        }
      };

      fetchData ();
    },
    [id]
  );

  if (!hit) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="flex justify-center h-screen pt-16 ">

      <div className=" flex md:flex-row flex-col  justify-center items-center gap-8 w-full">
        <div className="flex flex-col w-72 h-40 text-center bg-orange-300 rounded-lg">
          <p className=" bg-slate-200 rounded-ss-lg p-4 text-2xl font-bold">Medicine</p>
          <h1 className="font-bold text-2xl m-auto">{hit.name}</h1>{' '}
        </div>
        <div className=" flex  flex-col  w-72 h-40 text-center bg-teal-300 rounded-lg">
        <p className=" bg-slate-200 rounded-ss-lg p-4 text-2xl font-bold">Alternate 1</p>
          {hit.substitute0 !== undefined &&
            hit.substitute0 !== '' &&
            <p className="text-2xl font-semibold m-auto">{hit.substitute0}</p>}
        </div>
        <div className="flex flex-col w-72 h-40 text-center bg-red-300 rounded-lg">
           <p className=" bg-slate-200 rounded-ss-lg p-4 text-2xl font-bold">Alternate 2</p>
          {hit.substitute1 !== undefined &&
            hit.substitute1 !== '' &&
            <p className="text-2xl font-semibold m-auto">{hit.substitute1}</p>}
        </div>
        <div className="flex flex-col w-72 h-40 text-center bg-blue-300 rounded-lg">
        <p className=" bg-slate-200 rounded-ss-lg p-4 text-2xl font-bold">Alternate 3</p>
          {hit.substitute2 !== undefined &&
            hit.substitute2 !== '' &&
            <p className="text-2xl font-semibold m-auto">{hit.substitute2}</p>}
        </div>
        <div className="flex flex-col w-72 h-40 text-center bg-pink-300 rounded-lg">
        <p className=" bg-slate-200 rounded-ss-lg p-4 text-2xl font-bold">Use</p>
          {hit.use0 !== undefined &&
            hit.use0 !== '' &&
            <p className="text-2xl font-semibold m-auto rounded">{hit.use0}</p>}
        </div>

      </div>

    </div>
    </>);
}
