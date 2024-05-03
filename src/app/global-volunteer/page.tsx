import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";

export default function Home() {
    const logos = {
        "gv-horizontal-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV HORIZONTAL COLOR.png",
            }
        ],
        "gv-horizontal-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV HORIZONTAL WHITE.png",
            }
        ],
        "gv-horizontal-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV HORIZONTAL BLACK.png",
            }
        ],
        "gv-without-font-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV LOGO COLOR.png",
            }
        ],
        "gv-without-font-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV LOGO WHITE.png",
            }
        ],
        "gv-without-font-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV LOGO BLACK.png",
            }
        ],
        "gv-watermark-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV WM COLOR.png",
            }
        ],
        "gv-watermark-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV WM WHITE.png",
            }
        ],
        "gv-top-right-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV TOP RIGHT COLOR.png",
            }
        ],
        "gv-top-right-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV TOP RIGHT WHITE.png",
            }
        ],
        "gv-top-right-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV TOP RIGHT BLACK.png",
            }
        ],
        "gv-vertical-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV VERTICAL COLOR.png",
            }
        ],
        "gv-vertical-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV VERTICAL WHITE.png",
            }
        ],
        "gv-vertical-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV VERTICAL BLACK.png",
            }
        ]
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"Global Volunteer Logo Horizontal Color"} downloads={logos["gv-horizontal-color"]} background={"white"} buttonColor={"red"} priority={true}/>
                    <LogoBox name={"Global Volunteer Logo Horizontal White"} downloads={logos["gv-horizontal-white"]} background={"red"} buttonColor={"white"} priority={true}/>
                    <LogoBox name={"Global Volunteer Logo Horizontal Black"} downloads={logos["gv-horizontal-black"]} background={"white"} buttonColor={"black"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Volunteer Logo Top Right Color"} downloads={logos["gv-top-right-color"]} background={"white"} buttonColor={"red"}/>
                    <LogoBox name={"Global Volunteer Logo Top Right White"} downloads={logos["gv-top-right-white"]} background={"red"} buttonColor={"white"}/>
                    <LogoBox name={"Global Volunteer Logo Top Right Black"} downloads={logos["gv-top-right-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Volunteer Logo Vertical Color"} downloads={logos["gv-vertical-color"]} background={"white"} buttonColor={"red"} size={"small"}/>
                    <LogoBox name={"Global Volunteer Logo Vertical White"} downloads={logos["gv-vertical-white"]} background={"red"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Volunteer Logo Vertical Black"} downloads={logos["gv-vertical-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Volunteer Logo without Font Color"} downloads={logos["gv-without-font-color"]} background={"white"} buttonColor={"red"} size={"small"}/>
                    <LogoBox name={"Global Volunteer Logo without Font White"} downloads={logos["gv-without-font-white"]} background={"red"} buttonColor={"white"} size={"small"}/>
                    <LogoBox name={"Global Volunteer Logo without Font Black"} downloads={logos["gv-without-font-black"]} background={"white"} buttonColor={"black"} size={"small"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Volunteer Watermark Color"} downloads={logos["gv-watermark-color"]} background={"white"} buttonColor={"red"} size={"small"}/>
                    <LogoBox name={"Global Volunteer Watermark White"} downloads={logos["gv-watermark-white"]} background={"red"} buttonColor={"white"} size={"small"}/>
                </LogoCategory>
                
            </div>
        </div>
    );
}
