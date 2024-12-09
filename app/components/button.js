"use client";


export default function Button() {
    return (
        <div className="mt-5">
            <button className="bg-white text-black rounded-sm px-5 py-2" onClick={() => console.log("I Have Chicked Here")}>Click Here</button>
        </div>
    )
}
