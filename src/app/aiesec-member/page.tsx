import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "AIESEC Member Logos",
    description: "Official logos of AIESEC Member",
};


export default function Home() {
    const logos = {
        "am-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM HORIZONTAL COLOR.png",
            }
        ],
        "am-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM HORIZONTAL WHITE.png",
            }
        ],
        "am-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM HORIZONTAL BLACK.png",
            }
        ],
        "am-without-font-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM LOGO COLOR.png",
            }
        ],
        "am-without-font-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM LOGO WHITE.png",
            }
        ],
        "am-without-font-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM LOGO BLACK.png",
            }
        ],
        "am-watermark-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM WM COLOR.png",
            }
        ],
        "am-watermark-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM WM WHITE.png",
            }
        ],
        "am-top-right-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM TOP RIGHT COLOR.png",
            }
        ],
        "am-top-right-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM TOP RIGHT WHITE.png",
            }
        ],
        "am-top-right-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM TOP RIGHT BLACK.png",
            }
        ],
        "am-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM VERTICAL COLOR.png",
            }
        ],
        "am-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM VERTICAL WHITE.png",
            }
        ],
        "am-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM VERTICAL BLACK.png",
            }
        ]
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"AIESEC Member Logo Horizontal Color"} downloads={logos["am-horizontal-color"]} background={"white"} buttonColor={"blue"} priority={true}/>
                    <LogoBox name={"AIESEC Member Logo Horizontal White"} downloads={logos["am-horizontal-white"]} background={"blue"} buttonColor={"white"} priority={true}/>
                    <LogoBox name={"AIESEC Member Logo Horizontal Black"} downloads={logos["am-horizontal-black"]} background={"white"} buttonColor={"black"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Member Logo Top Right Color"} downloads={logos["am-top-right-color"]} background={"white"} buttonColor={"blue"}/>
                    <LogoBox name={"AIESEC Member Logo Top Right White"} downloads={logos["am-top-right-white"]} background={"blue"} buttonColor={"white"}/>
                    <LogoBox name={"AIESEC Member Logo Top Right Black"} downloads={logos["am-top-right-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Member Logo Vertical Color"} downloads={logos["am-vertical-color"]} background={"white"} buttonColor={"blue"} size={"small"}/>
                    <LogoBox name={"AIESEC Member Logo Vertical White"} downloads={logos["am-vertical-white"]} background={"blue"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"AIESEC Member Logo Vertical Black"} downloads={logos["am-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Member Logo without Font Color"} downloads={logos["am-without-font-color"]} background={"white"} buttonColor={"blue"} size={"small"}/>
                    <LogoBox name={"AIESEC Member Logo without Font White"} downloads={logos["am-without-font-white"]} background={"blue"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"AIESEC Member Logo without Font Black"} downloads={logos["am-without-font-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Member Watermark Color"} downloads={logos["am-watermark-color"]} background={"white"} buttonColor={"blue"} size={"small"}/>
                    <LogoBox name={"AIESEC Member Watermark White"} downloads={logos["am-watermark-white"]} background={"blue"} buttonColor={"white"} size={"small"}/>
                </LogoCategory>
                
            </div>
        </div>
    );
}
