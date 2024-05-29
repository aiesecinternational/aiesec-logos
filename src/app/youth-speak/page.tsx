import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "AIESEC Youth Speak (YS) Logos",
    description: "Official logos for AIESEC Youth Speak (YS)",
};

export default function Home() {
    const logos = {
        "ys-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS HORIZONTAL COLOR.png",
            }
        ],
        "ys-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS HORIZONTAL WHITE.png",
            }
        ],
        "ys-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS HORIZONTAL BLACK.png",
            }
        ],
        "ys-logo-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS LOGO COLOR.png",
            }
        ],
        "ys-logo-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS LOGO WHITE.png",
            }
        ],
        "ys-logo-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS LOGO BLACK.png",
            }
        ],
        "ys-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS VERTICAL COLOR.png",
            }
        ],
        "ys-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS VERTICAL WHITE.png",
            }
        ],
        "ys-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS VERTICAL BLACK.png",
            }
        ],
        "ys-watermark-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS WM COLOR.png",
            }
        ],
        "ys-watermark-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS WM WHITE.png",
            }
        ],
        "ysf-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSF HORIZONTAL COLOR.png",
            }
        ],
        "ysf-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSF HORIZONTAL WHITE.png",
            }
        ],
        "ysf-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSF HORIZONTAL BLACK.png",
            }
        ],
        "ysf-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSF VERTICAL COLOR.png",
            }
        ],
        "ysf-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSF VERTICAL WHITE.png",
            }
        ],
        "ysf-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSF VERTICAL BLACK.png",
            }
        ],
        "yss-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSS HORIZONTAL COLOR.png",
            }
        ],
        "yss-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSS HORIZONTAL WHITE.png",
            }
        ],
        "yss-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSS HORIZONTAL BLACK.png",
            }
        ],
        "yss-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSS VERTICAL COLOR.png",
            }
        ],
        "yss-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSS VERTICAL WHITE.png",
            }
        ],
        "yss-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/YSS VERTICAL BLACK.png",
            }
        ],
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"Youth Speak Logo Horizontal Color"} downloads={logos["ys-horizontal-color"]} background={"white"} buttonColor={"purple"} priority={true}/>
                    <LogoBox name={"Youth Speak Logo Horizontal White"} downloads={logos["ys-horizontal-white"]} background={"purple"} buttonColor={"white"} priority={true}/>
                    <LogoBox name={"Youth Speak Logo Horizontal Black"} downloads={logos["ys-horizontal-black"]} background={"white"} buttonColor={"black"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Youth Speak Logo Vertical Color"} downloads={logos["ys-vertical-color"]} background={"white"} buttonColor={"purple"} size={"small"}/>
                    <LogoBox name={"Youth Speak Logo Vertical White"} downloads={logos["ys-vertical-white"]} background={"purple"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Youth Speak Logo Vertical Black"} downloads={logos["ys-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Youth Speak Logo Color"} downloads={logos["ys-logo-color"]} background={"white"} buttonColor={"purple"} size={"small"}/>
                    <LogoBox name={"Youth Speak Logo White"} downloads={logos["ys-logo-white"]} background={"purple"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Youth Speak Logo Black"} downloads={logos["ys-logo-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Youth Speak Watermark Color"} downloads={logos["ys-watermark-color"]} background={"white"} buttonColor={"purple"} size={"small"}/>
                    <LogoBox name={"Youth Speak Watermark White"} downloads={logos["ys-watermark-white"]} background={"purple"} buttonColor={"white"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Youth Speak Forum Logo Horizontal Color"} downloads={logos["ysf-horizontal-color"]} background={"white"} buttonColor={"purple"}/>
                    <LogoBox name={"Youth Speak Forum Logo Horizontal White"} downloads={logos["ysf-horizontal-white"]} background={"purple"} buttonColor={"white"}/>
                    <LogoBox name={"Youth Speak Forum Logo Horizontal Black"} downloads={logos["ysf-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Youth Speak Forum Logo Vertical Color"} downloads={logos["ysf-vertical-color"]} background={"white"} buttonColor={"purple"} size={"small"}/>
                    <LogoBox name={"Youth Speak Forum Logo Vertical White"} downloads={logos["ysf-vertical-white"]} background={"purple"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Youth Speak Forum Logo Vertical Black"} downloads={logos["ysf-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Youth Speak Survey Logo Horizontal Color"} downloads={logos["yss-horizontal-color"]} background={"white"} buttonColor={"purple"}/>
                    <LogoBox name={"Youth Speak Survey Logo Horizontal White"} downloads={logos["yss-horizontal-white"]} background={"purple"} buttonColor={"white"}/>
                    <LogoBox name={"Youth Speak Survey Logo Horizontal Black"} downloads={logos["yss-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Youth Speak Survey Logo Vertical Color"} downloads={logos["yss-vertical-color"]} background={"white"} buttonColor={"purple"} size={"small"}/>
                    <LogoBox name={"Youth Speak Survey Logo Vertical White"} downloads={logos["yss-vertical-white"]} background={"purple"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Youth Speak Survey Logo Vertical Black"} downloads={logos["yss-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
            </div>
        </div>
    );
}
