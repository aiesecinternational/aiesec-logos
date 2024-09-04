import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Youth for Global Goals (Y4GG) logos",
    description: "Official logos for Youth for Global Goals (Y4GG)",
};

export default function Home() {
    const logos = {
        "y4gg-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Y4GG-01.png"
            }
        ],
        "y4gg-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Y4GG-03.png"
            }
        ],
        "y4gg-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Y4GG-02.png"
            }
        ]
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-center justify-center"}>
                <LogoCategory>
                    <LogoBox name={"SDGs Grid Color"} downloads={logos["y4gg-color"]} background={"black"} buttonColor={"white"} priority={true}/>
                    <LogoBox name={"SDGs Grid Color"} downloads={logos["y4gg-white"]} background={"white"} buttonColor={"blue"} priority={true}/>
                    <LogoBox name={"SDGs Grid Color"} downloads={logos["y4gg-black"]} background={"white"} buttonColor={"black"} priority={true}/>
                </LogoCategory>
            </div>
        </div>
    );
}
