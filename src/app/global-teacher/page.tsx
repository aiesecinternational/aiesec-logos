import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";

export default function Home() {
    const logos = {
        "gte-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE HORIZONTAL COLOR.png",
            }
        ],
        "gte-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE HORIZONTAL WHITE.png",
            }
        ],
        "gte-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE HORIZONTAL BLACK.png",
            }
        ],
        "gte-without-font-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE LOGO COLOR.png",
            }
        ],
        "gte-without-font-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE LOGO WHITE.png",
            }
        ],
        "gte-without-font-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE LOGO BLACK.png",
            }
        ],
        "gte-watermark-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE WM COLOR.png",
            }
        ],
        "gte-watermark-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE WM WHITE.png",
            }
        ],
        "gte-top-right-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE TOP RIGHT COLOR.png",
            }
        ],
        "gte-top-right-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE TOP RIGHT WHITE.png",
            }
        ],
        "gte-top-right-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE TOP RIGHT BLACK.png",
            }
        ],
        "gte-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE VERTICAL COLOR.png",
            }
        ],
        "gte-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE VERTICAL WHITE.png",
            }
        ],
        "gte-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE VERTICAL BLACK.png",
            }
        ],
        "gte-pr-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR HORIZONTAL COLOR.png",
            }
        ],
        "gte-pr-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR HORIZONTAL WHITE.png",
            }
        ],
        "gte-pr-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR HORIZONTAL BLACK.png",
            }
        ],
        "gte-pr-top-right-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR TOP RIGHT COLOR.png",
            }
        ],
        "gte-pr-top-right-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR TOP RIGHT WHITE.png",
            }
        ],
        "gte-pr-top-right-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR TOP RIGHT BLACK.png",
            }
        ],
        "gte-pr-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR VERTICAL COLOR.png",
            }
        ],
        "gte-pr-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR VERTICAL WHITE.png",
            }
        ],
        "gte-pr-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-PR VERTICAL BLACK.png",
            }
        ],
        "gte-r-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R HORIZONTAL COLOR.png",
            }
        ],
        "gte-r-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R HORIZONTAL WHITE.png",
            }
        ],
        "gte-r-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R HORIZONTAL BLACK.png",
            }
        ],
        "gte-r-top-right-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R TOP RIGHT COLOR.png",
            }
        ],
        "gte-r-top-right-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R TOP RIGHT WHITE.png",
            }
        ],
        "gte-r-top-right-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R TOP RIGHT BLACK.png",
            }
        ],
        "gte-r-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R VERTICAL COLOR.png",
            }
        ],
        "gte-r-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R VERTICAL WHITE.png",
            }
        ],
        "gte-r-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE-R VERTICAL BLACK.png",
            }
        ],
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo Horizontal Color"} downloads={logos["gte-horizontal-color"]} background={"white"} buttonColor={"orange"}/>
                    <LogoBox name={"Global Teacher Logo Horizontal White"} downloads={logos["gte-horizontal-white"]} background={"orange"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Logo Horizontal Black"} downloads={logos["gte-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo Top Right Color"} downloads={logos["gte-top-right-color"]} background={"white"} buttonColor={"orange"}/>
                    <LogoBox name={"Global Teacher Logo Top Right White"} downloads={logos["gte-top-right-white"]} background={"orange"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Logo Top Right Black"} downloads={logos["gte-top-right-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo Vertical Color"} downloads={logos["gte-vertical-color"]} background={"white"} buttonColor={"orange"} size={"small"}/>
                    <LogoBox name={"Global Teacher Logo Vertical White"} downloads={logos["gte-vertical-white"]} background={"orange"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Teacher Logo Vertical Black"} downloads={logos["gte-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo without Font Color"} downloads={logos["gte-without-font-color"]} background={"white"} buttonColor={"orange"} size={"small"}/>
                    <LogoBox name={"Global Teacher Logo without Font White"} downloads={logos["gte-without-font-white"]} background={"orange"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Teacher Logo without Font Black"} downloads={logos["gte-without-font-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Watermark Color"} downloads={logos["gte-watermark-color"]} background={"white"} buttonColor={"orange"} size={"small"}/>
                    <LogoBox name={"Global Teacher Watermark White"} downloads={logos["gte-watermark-white"]} background={"orange"} buttonColor={"white"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Partly Remote Logo Horizontal Color"} downloads={logos["gte-pr-horizontal-color"]} background={"white"} buttonColor={"orange"}/>
                    <LogoBox name={"Global Teacher Partly Remote Horizontal White"} downloads={logos["gte-pr-horizontal-white"]} background={"orange"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Partly Remote Horizontal Black"} downloads={logos["gte-pr-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Partly Remote Logo Top Right Color"} downloads={logos["gte-pr-top-right-color"]} background={"white"} buttonColor={"orange"}/>
                    <LogoBox name={"Global Teacher Partly Remote Logo Top Right White"} downloads={logos["gte-pr-top-right-white"]} background={"orange"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Partly Remote Logo Top Right Black"} downloads={logos["gte-pr-top-right-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Partly Remote Logo Vertical Color"} downloads={logos["gte-pr-vertical-color"]} background={"white"} buttonColor={"orange"} size={"small"}/>
                    <LogoBox name={"Global Teacher Partly Remote Vertical White"} downloads={logos["gte-pr-vertical-white"]} background={"orange"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Teacher Partly Remote Vertical Black"} downloads={logos["gte-pr-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                {/*<LogoCategory>*/}
                {/*    <LogoBox name={"Global Teacher Remote Logo Horizontal Color"} downloads={logos["gte-r-horizontal-color"]} background={"white"} buttonColor={"orange"}/>*/}
                {/*    <LogoBox name={"Global Teacher Remote Horizontal White"} downloads={logos["gte-r-horizontal-white"]} background={"orange"} buttonColor={"white"}/>*/}
                {/*    <LogoBox name={"Global Teacher Remote Horizontal Black"} downloads={logos["gte-r-horizontal-black"]} background={"white"} buttonColor={"black"}/>*/}
                {/*</LogoCategory>*/}
                
                {/*<LogoCategory>*/}
                {/*    <LogoBox name={"Global Teacher Remote Logo Top Right Color"} downloads={logos["gte-r-top-right-color"]} background={"white"} buttonColor={"orange"}/>*/}
                {/*    <LogoBox name={"Global Teacher Remote Logo Top Right White"} downloads={logos["gte-r-top-right-white"]} background={"orange"} buttonColor={"white"}/>*/}
                {/*    <LogoBox name={"Global Teacher Remote Logo Top Right Black"} downloads={logos["gte-r-top-right-black"]} background={"white"} buttonColor={"black"}/>*/}
                {/*</LogoCategory>*/}
                
                {/*<LogoCategory>*/}
                {/*    <LogoBox name={"Global Teacher Remote Logo Vertical Color"} downloads={logos["gte-r-vertical-color"]} background={"white"} buttonColor={"orange"} size={"small"}/>*/}
                {/*    <LogoBox name={"Global Teacher Remote Vertical White"} downloads={logos["gte-r-vertical-white"]} background={"orange"} buttonColor={"white"} size={"small"}/>*/}
                {/*    <LogoBox name={"Global Teacher Remote Vertical Black"} downloads={logos["gte-r-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>*/}
                {/*</LogoCategory>*/}
            
            </div>
        </div>
    );
}
