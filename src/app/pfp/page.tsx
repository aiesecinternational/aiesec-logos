
import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "People for People (P4P)",
    description: "Official logos for People for People (P4P)",
};

export default function Home() {
    const logos = {
        "p4p-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/PFP_Color_Logo.png",
            }
        ],
        "p4p-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/PFP_Black_Logo.png",
            }
        ],
        "p4p-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/PFP_White_Logo.png",
            }
        ],
        "p4p-icon-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/PFP_Color_Icon.png",
            }
        ],
        "p4p-icon-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/PFP_White_Icon.png",
            }
        ],
        "p4p-icon-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/PFP_Black_Icon.png",
            }
        ]
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"People for People Logo Horizontal Color"} downloads={logos["p4p-horizontal-color"]} background={"white"} buttonColor={"purple"} priority={true}/>
                    <LogoBox name={"People for People Logo Horizontal White"} downloads={logos["p4p-horizontal-white"]} background={"purple"} buttonColor={"white"} priority={true}/>
                    <LogoBox name={"People for People Logo Horizontal Black"} downloads={logos["p4p-horizontal-black"]} background={"white"} buttonColor={"black"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"People for People Logo Vertical Color"} downloads={logos["p4p-icon-color"]} background={"white"} buttonColor={"purple"} size={"small"}/>
                    <LogoBox name={"People for People Logo Vertical White"} downloads={logos["p4p-icon-white"]} background={"purple"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"People for People Logo Vertical Black"} downloads={logos["p4p-icon-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
            </div>
        </div>
    );
}
