import { useState } from "react"
import Navbar from "./Navbar";

const TagsInput = (props) => {
    const [tags, setTags] = useState(props.tags);
    const addTags = event => {
        if (event.target.value !== "")
            setTags([...tags, event.target.value])
        props.selected([...tags, event.target.value])
        event.target.value = "";
    }

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    }


    return (
        <>
        <Navbar/>
            <div className="  w-screen flex justify-center  mt-64 ">

                <div className="px-1 flex w-4/12 border h-12 border-slate-300 bg-white rounded-lg ">
                    <ul className="flex text-center items-center ">{
                        tags.map((tag, index) =>
                            <span key={index} className="ml-1">
                                <span className="  flex w-full rounded-lg bg-blue-700 text-white p-2 whitespace-nowrap" >{tag}<i className="pl-2 fa-regular fa-circle-xmark my-auto" onClick={() => removeTag(index)}></i></span>
                            </span>
                        )}</ul>
                    <input className=" h-full w-full border-none p-4 focus:outline-none" type="text" name="" id="" placeholder="Add your Symptom and Press Enter" onKeyUp={event => event.key === "Enter" ? addTags(event) : null} />
                </div>
            </div>


        </>
    )

}
export default function Recommendation() {
    const selected = tags => console.log(tags);
    return (
        <div>
            <TagsInput selected={selected} tags={["Fever",
        "Headache",
        "Fatigue",]}/>
        </div>)

}