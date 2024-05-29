import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "AIESEC Human",
    description: "Official resources for the AIESEC Human."
};


export default function Home() {
    const logos = {
        "aiesec-human-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-White.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-White.jpg",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-White.ai",
            }
        ],
        "aiesec-human-blue": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-Blue.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-Blue.jpg",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-Blue.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Walk (Converted).mov",
            }
        ],
        "blue-watermark-white-aiesec-human": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Blue Watermark - White AIESEC Human.png",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-Watermark.ai",
            }
        ],
        "white-watermark-blue-aiesec-human": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/White Watermark - Blue AIESEC Human.png",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-Watermark.ai",
            }
        ]
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"AIESEC Human Logo White"} downloads={logos["aiesec-human-white"]} background={"white-plain"} buttonColor={"blue"} priority={true}/>
                    <LogoBox name={"AIESEC Human Logo Blue"} downloads={logos["aiesec-human-blue"]} background={"blue-plain"} buttonColor={"white"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Blue Watermark - White AIESEC Human"} downloads={logos["blue-watermark-white-aiesec-human"]} background={"white"} buttonColor={"blue"} size={"small"}/>
                    <LogoBox name={"White Watermark - Blue AIESEC Human"} downloads={logos["white-watermark-blue-aiesec-human"]} background={"blue"} buttonColor={"white"} size={"small"}/>
                </LogoCategory>
            </div>
        </div>
    );
}
