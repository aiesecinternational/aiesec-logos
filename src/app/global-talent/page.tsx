import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import MoreVariantsBox from "@/components/MoreVariantsBox";

export default function Home() {
    const logos = {
        "gta-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA HORIZONTAL COLOR.png",
            }
        ],
        "gta-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA HORIZONTAL WHITE.png",
            }
        ],
        "gta-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA HORIZONTAL BLACK.png",
            }
        ],
        "gta-without-font-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA LOGO COLOR.png",
            }
        ],
        "gta-without-font-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA LOGO WHITE.png",
            }
        ],
        "gta-without-font-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA LOGO BLACK.png",
            }
        ],
        "gta-watermark-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA WM COLOR.png",
            }
        ],
        "gta-watermark-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA WM WHITE.png",
            }
        ],
        "gta-top-right-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA TOP RIGHT COLOR.png",
            }
        ],
        "gta-top-right-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA TOP RIGHT WHITE.png",
            }
        ],
        "gta-top-right-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA TOP RIGHT BLACK.png",
            }
        ],
        "gta-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA VERTICAL COLOR.png",
            }
        ],
        "gta-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA VERTICAL WHITE.png",
            }
        ],
        "gta-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA VERTICAL BLACK.png",
            }
        ],
        "gta-pr-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR HORIZONTAL COLOR.png",
            }
        ],
        "gta-pr-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR HORIZONTAL WHITE.png",
            }
        ],
        "gta-pr-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR HORIZONTAL BLACK.png",
            }
        ],
        "gta-pr-top-right-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR TOP RIGHT COLOR.png",
            }
        ],
        "gta-pr-top-right-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR TOP RIGHT WHITE.png",
            }
        ],
        "gta-pr-top-right-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR TOP RIGHT BLACK.png",
            }
        ],
        "gta-pr-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR VERTICAL COLOR.png",
            }
        ],
        "gta-pr-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR VERTICAL WHITE.png",
            }
        ],
        "gta-pr-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-PR VERTICAL BLACK.png",
            }
        ],
        "gta-r-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R HORIZONTAL COLOR.png",
            }
        ],
        "gta-r-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R HORIZONTAL WHITE.png",
            }
        ],
        "gta-r-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R HORIZONTAL BLACK.png",
            }
        ],
        "gta-r-top-right-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R TOP RIGHT COLOR.png",
            }
        ],
        "gta-r-top-right-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R TOP RIGHT WHITE.png",
            }
        ],
        "gta-r-top-right-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R TOP RIGHT BLACK.png",
            }
        ],
        "gta-r-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R VERTICAL COLOR.png",
            }
        ],
        "gta-r-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R VERTICAL WHITE.png",
            }
        ],
        "gta-r-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA-R VERTICAL BLACK.png",
            }
        ],
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo Horizontal Color"} downloads={logos["gta-horizontal-color"]} background={"white"} buttonColor={"teal"}/>
                    <LogoBox name={"Global Teacher Logo Horizontal White"} downloads={logos["gta-horizontal-white"]} background={"teal"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Logo Horizontal Black"} downloads={logos["gta-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo Top Right Color"} downloads={logos["gta-top-right-color"]} background={"white"} buttonColor={"teal"}/>
                    <LogoBox name={"Global Teacher Logo Top Right White"} downloads={logos["gta-top-right-white"]} background={"teal"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Logo Top Right Black"} downloads={logos["gta-top-right-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo Vertical Color"} downloads={logos["gta-vertical-color"]} background={"white"} buttonColor={"teal"} size={"small"}/>
                    <LogoBox name={"Global Teacher Logo Vertical White"} downloads={logos["gta-vertical-white"]} background={"teal"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Teacher Logo Vertical Black"} downloads={logos["gta-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo without Font Color"} downloads={logos["gta-without-font-color"]} background={"white"} buttonColor={"teal"} size={"small"}/>
                    <LogoBox name={"Global Teacher Logo without Font White"} downloads={logos["gta-without-font-white"]} background={"teal"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Teacher Logo without Font Black"} downloads={logos["gta-without-font-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Watermark Color"} downloads={logos["gta-watermark-color"]} background={"white"} buttonColor={"teal"} size={"small"}/>
                    <LogoBox name={"Global Teacher Watermark White"} downloads={logos["gta-watermark-white"]} background={"teal"} buttonColor={"white"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Partly Remote Logo Horizontal Color"} downloads={logos["gta-pr-horizontal-color"]} background={"white"} buttonColor={"teal"}/>
                    <LogoBox name={"Global Teacher Partly Remote Horizontal White"} downloads={logos["gta-pr-horizontal-white"]} background={"teal"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Partly Remote Horizontal Black"} downloads={logos["gta-pr-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Partly Remote Logo Top Right Color"} downloads={logos["gta-pr-top-right-color"]} background={"white"} buttonColor={"teal"}/>
                    <LogoBox name={"Global Teacher Partly Remote Logo Top Right White"} downloads={logos["gta-pr-top-right-white"]} background={"teal"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Partly Remote Logo Top Right Black"} downloads={logos["gta-pr-top-right-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Partly Remote Logo Vertical Color"} downloads={logos["gta-pr-vertical-color"]} background={"white"} buttonColor={"teal"} size={"small"}/>
                    <LogoBox name={"Global Teacher Partly Remote Vertical White"} downloads={logos["gta-pr-vertical-white"]} background={"teal"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Teacher Partly Remote Vertical Black"} downloads={logos["gta-pr-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Remote Logo Horizontal Color"} downloads={logos["gta-r-horizontal-color"]} background={"white"} buttonColor={"teal"}/>
                    <LogoBox name={"Global Teacher Remote Horizontal White"} downloads={logos["gta-r-horizontal-white"]} background={"teal"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Remote Horizontal Black"} downloads={logos["gta-r-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Remote Logo Top Right Color"} downloads={logos["gta-r-top-right-color"]} background={"white"} buttonColor={"teal"}/>
                    <LogoBox name={"Global Teacher Remote Logo Top Right White"} downloads={logos["gta-r-top-right-white"]} background={"teal"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Remote Logo Top Right Black"} downloads={logos["gta-r-top-right-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Remote Logo Vertical Color"} downloads={logos["gta-r-vertical-color"]} background={"white"} buttonColor={"teal"} size={"small"}/>
                    <LogoBox name={"Global Teacher Remote Vertical White"} downloads={logos["gta-r-vertical-white"]} background={"teal"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Teacher Remote Vertical Black"} downloads={logos["gta-r-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
            
            </div>
        </div>
    );
}
