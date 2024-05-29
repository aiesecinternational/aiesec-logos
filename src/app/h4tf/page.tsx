import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "AIESEC Heading for the Future Logos (H4TF)",
    description: "Official logos for Heading for the Future (H4TF)",
};

export default function Home() {
    const logos = {
        "h4tf-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF HORIZONTAL COLOR.png",
            }
        ],
        "h4tf-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF HORIZONTAL WHITE.png",
            }
        ],
        "h4tf-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF HORIZONTAL BLACK.png",
            }
        ],
        "h4tf-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF VERTICAL COLOR.png",
            }
        ],
        "h4tf-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF VERTICAL WHITE.png",
            }
        ],
        "h4tf-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF VERTICAL BLACK.png",
            }
        ],
        "h4tf-logo-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF LOGO COLOR.png",
            }
        ],
        "h4tf-logo-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF LOGO WHITE.png",
            }
        ],
        "h4tf-logo-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF LOGO BLACK.png",
            }
        ],
        "h4tf-watermark-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF WM COLOR.png",
            }
        ],
        "h4tf-watermark-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF WM WHITE.png",
            }
        ],
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
