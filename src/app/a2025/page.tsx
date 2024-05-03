import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";

export default function Home() {
    const logos = {
        "aiesec-2025": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/A2025%2BLogo_Color.png",
            }
        ],
        "empowering-youth-leaders-long-logo": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/A2025-Statement-1.png",
            },
            {
                fileType: "MP4",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Empowering Youth Leaders_Logo Animation_White Background.mp4",
            }
        ],
        "building-a-long-lasting-aiesec-long-logo": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/A2025-Statement-2.png",
            },
            {
                fileType: "MP4",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Building a Long-Lasting AIESEC_Animation Logo_White Background.mp4",
            }
        ],
        "developing-purposeful-partnerships-long-logo": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/A2025-Statement-3.png",
            },
            {
                fileType: "MP4",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Developing Purposeful Partnerships_Animation Logo_White Background.mp4",
            }
        ],
        "empowering-youth-leaders-icon": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/A2025_Statements_Icon_Empowering Youth Leaders-01.png",
            }
        ],
        "building-a-long-lasting-aiesec-icon": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/A2025_Statements_Icon_Building a Long-Lasting AIESEC-02.png",
            }
        ],
        "developing-purposeful-partnerships-icon": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/A2025_Statements_Icon_Developing Purposeful Partnerships-03.png",
            }
        ],
        "empowering-youth-leaders-description-transparent": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Statemet-1%2BText-Stripped.png",
            }
        ],
        "building-a-long-lasting-aiesec-description-transparent": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Statemet-2%2BText-Stripped.png",
            }
        ],
        "developing-purposeful-partnerships-description-transparent": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Statemet-3%2BText-Stripped.png",
            }
        ],
        "empowering-youth-leaders-description": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Statemet-1%2BText.png",
            }
        ],
        "building-a-long-lasting-aiesec-description": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Statemet-2%2BText.png",
            }
        ],
        "developing-purposeful-partnerships-description": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Statemet-3%2BText.png",
            }
        ],
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"AIESEC Way Logo"} downloads={logos["aiesec-2025"]} background={"white-plain"} buttonColor={"blue"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Empowering Youth Leaders Long Logo"} downloads={logos["empowering-youth-leaders-long-logo"]} background={"white"} buttonColor={"blue"} priority={true}/>
                    <LogoBox name={"Building A Long Lasting AIESEC"} downloads={logos["building-a-long-lasting-aiesec-long-logo"]} background={"white"} buttonColor={"green"} priority={true}/>
                    <LogoBox name={"Developing Purposeful Partnerships"} downloads={logos["developing-purposeful-partnerships-long-logo"]} background={"white"} buttonColor={"orange"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Empowering Youth Leaders Description Transparent"} downloads={logos["empowering-youth-leaders-description-transparent"]} background={"blue"} buttonColor={"white"}/>
                    <LogoBox name={"Building A Long Lasting AIESEC Description Transparent"} downloads={logos["building-a-long-lasting-aiesec-description-transparent"]} background={"green"} buttonColor={"white"}/>
                    <LogoBox name={"Developing Purposeful Partnerships Description Transparent"} downloads={logos["developing-purposeful-partnerships-description-transparent"]} background={"orange"} buttonColor={"white"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Empowering Youth Leaders Description"} downloads={logos["empowering-youth-leaders-description"]} background={"blue"} buttonColor={"white"}/>
                    <LogoBox name={"Building A Long Lasting AIESEC Description"} downloads={logos["building-a-long-lasting-aiesec-description"]} background={"green"} buttonColor={"white"}/>
                    <LogoBox name={"Developing Purposeful Partnerships Description"} downloads={logos["developing-purposeful-partnerships-description"]} background={"orange"} buttonColor={"white"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Empowering Youth Leaders Icon"} downloads={logos["empowering-youth-leaders-icon"]} background={"white"} buttonColor={"blue"}/>
                    <LogoBox name={"Building A Long Lasting AIESEC Icon"} downloads={logos["building-a-long-lasting-aiesec-icon"]} background={"white"} buttonColor={"green"}/>
                    <LogoBox name={"Developing Purposeful Partnerships Icon"} downloads={logos["developing-purposeful-partnerships-icon"]} background={"white"} buttonColor={"orange"}/>
                </LogoCategory>
                
                
            </div>
        </div>
    );
}
