import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import MoreVariantsBox from "@/components/MoreVariantsBox";
import ColorBox from "@/components/ColorBox";
import MobileLogoBox from "@/components/MobileLogoBox";

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
        <div className={"flex flex-col space-y-5 items-center justify-center w-full"}>
            <div className={"flex flex-col space-y-5 md:space-y-20 h-full w-full items-center justify-center"}>
                <LogoCategory>
                    <LogoBox name={"AIESEC Logo Blue"} downloads={logos["aiesec-blue"]} background={"white"} buttonColor={"blue"} priority={true} hideOnMobile={true}/>
                    <LogoBox name={"AIESEC Logo White Blue"} downloads={logos["aiesec-white-blue"]} background={"blue"} buttonColor={"white"} priority={true} hideOnMobile={true}/>
                    <LogoBox name={"AIESEC Logo Black"} downloads={logos["aiesec-black"]} background={"white"} buttonColor={"black"} priority={true} hideOnMobile={true}/>
                    <LogoBox name={"AIESEC Logo White Black"} downloads={logos["aiesec-white-black"]} background={"black"} buttonColor={"white"} priority={true} hideOnMobile={true}/>
                    <MoreVariantsBox url={"/aiesec-logo"} variants={["Without font", "Vertical", "Partly Remote", "Watermark", "Russian", "Spanish"]} background={"black"} buttonColor={"white"}/>
                    
                    <MobileLogoBox name={"AIESEC Logo White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/White-Blue-Logo.png"} background={"blue"} url={"/aiesec-logo"}/>
                </LogoCategory>
                
                <div className={`flex-col md:flex-row bg-white p-5 rounded-md border-2 border-gray-300 md:space-x-5 space-y-5 md:space-y-0 hidden md:flex`}>
                    <ColorBox variant={"blue"}/>
                    <ColorBox variant={"teal"}/>
                    <ColorBox variant={"orange"}/>
                    <ColorBox variant={"red"}/>
                    <ColorBox variant={"purple"}/>
                    <ColorBox variant={"green"}/>
                    <ColorBox variant={"yellow"}/>
                    <ColorBox variant={"dark-gray"}/>
                    <ColorBox variant={"light-gray"}/>
                </div>
                
                <div
                    className={`md:hidden`}>
                    <MobileLogoBox name={"AIESEC Colours"}
                                   image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/aiesec-colors.png"}
                                   background={"white-plain"} url={"/colours"}/>
                </div>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Human Logo White"} downloads={logos["aiesec-human-white"]} background={"white-plain"} buttonColor={"blue"} hideOnMobile={true}/>
                    <LogoBox name={"AIESEC Human Logo Blue"} downloads={logos["aiesec-human-blue"]} background={"blue-plain"} buttonColor={"white"} hideOnMobile={true}/>
                    <MoreVariantsBox url={"/aiesec-human"} variants={["Without font", "Vertical", "Partly Remote", "Watermark", "Russian", "Spanish"]} background={"blue"} buttonColor={"white"}/>
                    
                    <MobileLogoBox name={"AIESEC Human Logo White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/AIESEC-Human-White.png"} background={"white-plain"} url={"/aiesec-human"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Talent Logo Horizontal Color"} downloads={logos["gta-horizontal-color"]} background={"white"} buttonColor={"teal"} hideOnMobile={true}/>
                    <LogoBox name={"Global Talent Logo Horizontal White"} downloads={logos["gta-horizontal-white"]} background={"teal"} buttonColor={"white"} hideOnMobile={true}/>
                    <LogoBox name={"Global Talent Logo Horizontal Black"} downloads={logos["gta-horizontal-black"]} background={"white"} buttonColor={"black"} hideOnMobile={true}/>
                    <MoreVariantsBox url={"/global-talent"} variants={["Without font", "Vertical", "Partly Remote", "Watermark", "Russian", "Spanish"]} background={"teal"} buttonColor={"white"}/>
                    
                    <MobileLogoBox name={"Global Talent Logo Horizontal White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTA HORIZONTAL WHITE.png"} background={"teal"} url={"/global-talent"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Teacher Logo Horizontal Color"} downloads={logos["gte-horizontal-color"]} background={"white"} buttonColor={"orange"} hideOnMobile={true}/>
                    <LogoBox name={"Global Teacher Logo Horizontal White"} downloads={logos["gte-horizontal-white"]} background={"orange"} buttonColor={"white"} hideOnMobile={true}/>
                    <LogoBox name={"Global Teacher Logo Horizontal Black"} downloads={logos["gte-horizontal-black"]} background={"white"} buttonColor={"black"} hideOnMobile={true}/>
                    <MoreVariantsBox url={"/global-teacher"} variants={["Without font", "Watermark", "Russian", "Spanish"]} background={"orange"} buttonColor={"white"}/>
                    
                    <MobileLogoBox name={"Global Teacher Logo Horizontal White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/GTE HORIZONTAL WHITE.png"} background={"orange"} url={"/global-teacher"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Global Volunteer Logo Horizontal Color"} downloads={logos["gv-horizontal-color"]} background={"white"} buttonColor={"red"} hideOnMobile={true}/>
                    <LogoBox name={"Global Volunteer Logo Horizontal White"} downloads={logos["gv-horizontal-white"]} background={"red"} buttonColor={"white"} hideOnMobile={true}/>
                    <LogoBox name={"Global Volunteer Logo Horizontal Black"} downloads={logos["gv-horizontal-black"]} background={"white"} buttonColor={"black"} hideOnMobile={true}/>
                    <MoreVariantsBox url={"/global-volunteer"} variants={["Without font", "Watermark", "Russian", "Spanish"]} background={"red"} buttonColor={"white"}/>
                    
                    <MobileLogoBox name={"Global Volunteer Logo Horizontal White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/GV HORIZONTAL WHITE.png"} background={"red"} url={"/global-volunteer"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Member Logo Horizontal Color"} downloads={logos["am-horizontal-color"]} background={"white"} buttonColor={"blue"} hideOnMobile={true}/>
                    <LogoBox name={"AIESEC Member Logo Horizontal White"} downloads={logos["am-horizontal-white"]} background={"blue"} buttonColor={"white"} hideOnMobile={true}/>
                    <LogoBox name={"AIESEC Member Logo Horizontal Black"} downloads={logos["am-horizontal-black"]} background={"white"} buttonColor={"black"} hideOnMobile={true}/>
                    <MoreVariantsBox url={"/aiesec-member"} variants={["Without font", "Watermark", "Russian", "Spanish"]} background={"blue"} buttonColor={"white"}/>
                    
                    <MobileLogoBox name={"AIESEC Member Logo Horizontal White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/AM HORIZONTAL WHITE.png"} background={"blue"} url={"/aiesec-member"}/>
                </LogoCategory>
                
                <LogoCategory spacing={true}>
                    <MobileLogoBox name={"Youth Speak Logo Horizontal White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/YS HORIZONTAL WHITE.png"} background={"purple"} url={"/youth-speak"} showOnDesktop={true}/>
                    <MobileLogoBox name={"H4TF Logo White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/H4TF HORIZONTAL WHITE.png"} background={"green"} url={"/h4tf"} showOnDesktop={true}/>
                </LogoCategory>
                
                <LogoCategory spacing={true}>
                    <MobileLogoBox name={"AIESEC Why White"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/aiesec-way.jpg"} background={"white-plain"} url={"/aiesec-way"} showOnDesktop={true}/>
                    <MobileLogoBox name={"AIESEC 2025 Logo Color"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/A2025%2BLogo_Color.png"} background={"white-plain"} url={"/a2025"} showOnDesktop={true}/>
                    <MobileLogoBox name={"Regions"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/regions.png"} background={"white-plain"} url={"/regions"} showOnDesktop={true}/>
                </LogoCategory>
                
                <LogoCategory spacing={true}>
                    <MobileLogoBox name={"SDGs Grid"} image={"https://aiesec-logos.s3.eu-west-1.amazonaws.com/01_TGG_Grid_Icon_Color.png"} background={"white-plain"} url={"/sdgs"} showOnDesktop={true}/>
                </LogoCategory>
            
            
            </div>
        </div>
    );
}
