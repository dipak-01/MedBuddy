import React from "react";
import algoliasearch from "algoliasearch/lite";
import Navbar from "./Navbar";
import "instantsearch.css/themes/satellite.css";
import {
  InstantSearch,
  Hits,
  Highlight,
  Snippet,
  SearchBox,
  Pagination,
  RefinementList,
  ClearRefinements,
} from "react-instantsearch";

import { Link } from "react-router-dom";
const searchClient = algoliasearch(
  "V28D315HMA",
  "2eb9fbcf18664352f517bb8a94009960"
);

function Hit({ hit }) {
  return (
    <article className="flex md:w-full w-auto rounded-3xl">
      <h1 className="md:text-xl text-lg font-bold w-1/2 ">
        <Highlight attribute="Disease" hit={hit} />
      </h1>
      <p className="w-1/2 md:text-lg text-sm flex-wrap  gap-1 flex  ">
        <span className="bg-blue-100 rounded-lg p-1 m-1  ">
          <Highlight attribute="Symptom_1" hit={hit} />
        </span>
        <span className="bg-pink-100 rounded-lg p-1 m-1  ">
          <Highlight attribute="Symptom_2" hit={hit} />
        </span>
        <span className="bg-red-100 rounded-lg p-1 m-1  ">
          <Highlight attribute="Symptom_3" hit={hit} />
        </span>

        {hit.Symptom_4 && (
          <span className="bg-orange-100 rounded-lg p-1 m-1  ">
            <Highlight attribute="Symptom_4" hit={hit} />
          </span>
        )}
        {hit.Symptom_5 && (
          <span className="bg-teal-100 rounded-lg p-1 m-1  ">
            <Highlight attribute="Symptom_5" hit={hit} />
          </span>
        )}
      </p>
      <Snippet hit={hit} attribute="Symptom_2" />
    </article>
  );
}

export default function AlternateMedicine() {
  return (
    <>
      <Navbar />
      <InstantSearch
        searchClient={searchClient}
        indexName="MedBuddySym"
        className="p-4 sm:w-96 w-3/4 "
      >
        {/* <ClearRefinements className="mb-4" /> */}
        <div
          className="w-full h-80 flex items-center  "
          style={{
            backgroundImage: `url('/blurry_background.png')`,
            backgroundSize: "cover",
          }}
        >
          <SearchBox
            className="mb-4 sm:w-1/2 w-screen mx-auto border"
            placeholder="Search for Disease based on the Symptoms"
          />
        </div>

        <RefinementList attribute="category" className="mb-4 text-start" />

        <Hits hitComponent={Hit} className="mb-4  w-full sm:w-3/4 mx-auto " />
        <Pagination
          showFirst={false}
          padding={1}
          showLast={false}
          className="flex justify-center mb-4 text-center  "
        />
      </InstantSearch>
    </>
  );
}
