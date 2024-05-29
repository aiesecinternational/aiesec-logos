import ColorBox from "@/components/ColorBox";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "AIESEC Colours",
    description: "Official colours of the AIESEC brand",
};


export default function Colours() {
    
    return (
        <div className={`flex w-full md:w-fit flex-col md:flex-row bg-white p-5 rounded-md border-2 border-gray-300 md:space-x-5 space-y-5 md:space-y-0`}>
            <ColorBox variant={"blue"}/>
            <ColorBox variant={"teal"}/>
            <ColorBox variant={"orange"}/>
            <ColorBox variant={"red"}/>
            <ColorBox variant={"purple"}/>
            <ColorBox variant={"green"}/>
            <ColorBox variant={"yellow"}/>
            <ColorBox variant={"dark-gray"}/>
            <ColorBox variant={"light-gray"}/>
        </div>
    
    );
}
