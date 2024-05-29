import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import ColorBox from "@/components/ColorBox";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "AIESEC Regional Logos",
    description: "Official logos for the regions of AIESEC",
};

export default function Home() {
    const logos = {
        "americas-red": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Reg_Americas_red.png",
            }
        ],
        "americas-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Reg_Americas_white.png",
            }
        ],
        "asia-pacific-green": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Reg_AP_green.png",
            }
        ],
        "asia-pacific-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Reg_AP_white.png",
            }
        ],
        "europe-old-purple": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Europe Purple.png",
            }
        ],
        "europe-old-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Europe White.png",
            }
        ],
        "europe-purple": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Europe United In Exchange Purple.png",
            }
        ],
        "europe-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Europe United In Exchange White.png",
            }
        ],
        "europe-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Europe United In Exchange Logo.png",
            }
        ],
        "middle-east-and-africa-orange": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Middle East & Africa.png",
            }
        ],
        "middle-east-and-africa-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Middle East & Africa-2.png",
            }
        ]
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"Americas Logo White"} downloads={logos["americas-white"]} background={"americas"} buttonColor={"white"} priority={true}/>
                    <LogoBox name={"Americas Logo Red"} downloads={logos["americas-red"]} background={"white"} buttonColor={"americas"} priority={true}/>
                    <ColorBox variant={"americas"} size={"large"} />
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Asia Pacific Logo Green"} downloads={logos["asia-pacific-white"]} background={"asia-pacific"} buttonColor={"white"}/>
                    <LogoBox name={"Asia Pacific Logo White"} downloads={logos["asia-pacific-green"]} background={"white"} buttonColor={"asia-pacific"}/>
                    <ColorBox variant={"asia-pacific"} size={"large"} />
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Europe Old Logo Purple"} downloads={logos["europe-old-white"]} background={"europe"} buttonColor={"white"}/>
                    <LogoBox name={"Europe Old Logo White"} downloads={logos["europe-old-purple"]} background={"white"} buttonColor={"europe"}/>
                    <ColorBox variant={"europe"} size={"large"} />
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Europe Logo Purple"} downloads={logos["europe-white"]} background={"europe"} buttonColor={"white"}/>
                    <LogoBox name={"Europe Logo White"} downloads={logos["europe-purple"]} background={"white"} buttonColor={"europe"}/>
                    <LogoBox name={"Europe Logo White"} downloads={logos["europe-black"]} background={"white"} buttonColor={"black"}/>
                    <ColorBox variant={"europe"} size={"large"} />
                </LogoCategory>
                
                
                <LogoCategory>
                    <LogoBox name={"Middle East & Africa Logo Orange"} downloads={logos["middle-east-and-africa-white"]} background={"middle-east-and-africa"} buttonColor={"white"}/>
                    <LogoBox name={"Middle East & Africa Logo White"} downloads={logos["middle-east-and-africa-orange"]} background={"white"} buttonColor={"middle-east-and-africa"}/>
                    <ColorBox variant={"middle-east-and-africa"} size={"large"} />
                </LogoCategory>
            </div>
        </div>
    );
}
