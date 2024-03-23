import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import Navbar from './Navbar';
import 'instantsearch.css/themes/satellite.css';
import {
    InstantSearch,
    Hits,
    Highlight,
    Snippet,
    SearchBox,
    Pagination,
    RefinementList,
    ClearRefinements,

} from 'react-instantsearch';

import { Link } from 'react-router-dom';
const searchClient = algoliasearch('H42NYEZRG1', 'faad703f2419c003fecede5f98457f3d');

function Hit({ hit }) {
    return (

        <Link className='w-full' to={`/details/${hit.objectID}`}>
            <article className='flex w-full rounded-3xl  '>
                <h1 className='text-xl font-bold w-1/2'>
                    <Highlight attribute="name" hit={hit} />
                </h1>
                <p className='w-1/2 text-lg'>
                    <Highlight attribute="substitute0" hit={hit} />
                </p>

                <i className="fa-solid fa-square-arrow-up-right text-2xl"></i>
                <Snippet hit={hit} attribute="Action Class" />
            </article>

        </Link >
    );
}

export default function AlternateMedicine() {
    return (
        <><Navbar />
            <InstantSearch searchClient={searchClient} indexName="MedBuddy" className="p-4 sm:w-96 w-full ">
                {/* <ClearRefinements className="mb-4" /> */}
                <div className='w-full h-80 flex items-center  ' style={{ backgroundImage: `url('/blurry_background.png')`, backgroundSize: 'cover' }}>

                    <SearchBox className="mb-4 sm:w-1/2 w-full mx-auto border" placeholder='Search for an Alternate Medicine' /></div>

                <RefinementList attribute="category" className="mb-4 text-start" />
                <div className="mb-4  flex justify-start text-xl font-bold sm:w-1/2 w-full mx-auto  p-4"><p className='sm:w-1/2 w-3/4'>Medicine Name</p> <p>Alternate Medicine</p></div>
                <Hits hitComponent={Hit} className="mb-4  w-full sm:w-1/2 mx-auto " />
                <Pagination className="flex justify-center mb-4 text-center" />
            </InstantSearch>
        </>
    );
}