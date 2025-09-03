
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
                    <LogoBox name={"Heading for the Future Logo Horizontal Color"} downloads={logos["h4tf-horizontal-color"]} background={"white"} buttonColor={"green"} priority={true}/>
                    <LogoBox name={"Heading for the Future Logo Horizontal White"} downloads={logos["h4tf-horizontal-white"]} background={"green"} buttonColor={"white"} priority={true}/>
                    <LogoBox name={"Heading for the Future Logo Horizontal Black"} downloads={logos["h4tf-horizontal-black"]} background={"white"} buttonColor={"black"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Heading for the Future Logo Vertical Color"} downloads={logos["h4tf-vertical-color"]} background={"white"} buttonColor={"green"} size={"small"}/>
                    <LogoBox name={"Heading for the Future Logo Vertical White"} downloads={logos["h4tf-vertical-white"]} background={"green"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Heading for the Future Logo Vertical Black"} downloads={logos["h4tf-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Heading for the Future Logo Color"} downloads={logos["h4tf-logo-color"]} background={"white"} buttonColor={"green"} size={"small"}/>
                    <LogoBox name={"Heading for the Future Logo White"} downloads={logos["h4tf-logo-white"]} background={"green"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Heading for the Future Logo Black"} downloads={logos["h4tf-logo-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Heading for the Future Watermark Color"} downloads={logos["h4tf-watermark-color"]} background={"white"} buttonColor={"green"} size={"small"}/>
                    <LogoBox name={"Heading for the Future Watermark White"} downloads={logos["h4tf-watermark-white"]} background={"green"} buttonColor={"white"} size={"small"}/>
                </LogoCategory>
            </div>
        </div>
    );
}
