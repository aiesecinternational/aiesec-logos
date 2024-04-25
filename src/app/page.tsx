import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";

export default function Home() {
    const logos = {
        "aiesec-blue": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Blue-Logo.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Blue-Logo.jpg",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Blue-Logo.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC Logo Blue.mov",
            },
        ],
        "aiesec-white-blue": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/White-Blue-Logo.png",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/White-Blue-Logo.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC Logo White_Blue.mov",
            },
        ],
        "aiesec-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Black-Logo.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Black-Logo.jpg",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Black-Logo.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC Logo Black.mov",
            },
        ],
        "aiesec-white-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/White-Black-Logo.png",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/White-Black-Logo.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC Logo White_Black.mov",
            },
        ],
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
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-5 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"AIESEC Logo Blue"} downloads={logos["aiesec-blue"]} background={"white"} buttonColor={"blue"}/>
                    <LogoBox name={"AIESEC Logo White Blue"} downloads={logos["aiesec-white-blue"]} background={"blue"} buttonColor={"white"}/>
                    <LogoBox name={"AIESEC Logo Black"} downloads={logos["aiesec-black"]} background={"white"} buttonColor={"black"}/>
                    <LogoBox name={"AIESEC Logo White Black"} downloads={logos["aiesec-white-black"]} background={"black"} buttonColor={"white"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Talent Logo Horizontal Color"} downloads={logos["gta-horizontal-color"]} background={"white"} buttonColor={"teal"}/>
                    <LogoBox name={"Global Talent Logo Horizontal White"} downloads={logos["gta-horizontal-white"]} background={"teal"} buttonColor={"white"}/>
                    <LogoBox name={"Global Talent Logo Horizontal Black"} downloads={logos["gta-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo Horizontal Color"} downloads={logos["gte-horizontal-color"]} background={"white"} buttonColor={"orange"}/>
                    <LogoBox name={"Global Teacher Logo Horizontal White"} downloads={logos["gte-horizontal-white"]} background={"orange"} buttonColor={"white"}/>
                    <LogoBox name={"Global Teacher Logo Horizontal Black"} downloads={logos["gte-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Volunteer Logo Horizontal Color"} downloads={logos["gv-horizontal-color"]} background={"white"} buttonColor={"red"}/>
                    <LogoBox name={"Global Volunteer Logo Horizontal White"} downloads={logos["gv-horizontal-white"]} background={"red"} buttonColor={"white"}/>
                    <LogoBox name={"Global Volunteer Logo Horizontal Black"} downloads={logos["gv-horizontal-black"]} background={"white"} buttonColor={"black"}/>
                </LogoCategory>
                
                {/*<LogoCategory>*/}
                {/*    <LogoBox name={"Global Talent Logo without Font Color"} downloads={logos["gta-without-font-color"]} background={"white"} buttonColor={"teal"}/>*/}
                {/*    <LogoBox name={"Global Talent Logo without Font White"} downloads={logos["gta-without-font-white"]} background={"teal"} buttonColor={"white"}/>*/}
                {/*    <LogoBox name={"Global Talent Logo without Font Black"} downloads={logos["gta-without-font-black"]} background={"white"} buttonColor={"black"}/>*/}
                {/*</LogoCategory>*/}
            </div>
        </div>
    );
}
