import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";
import ColorBox from "@/components/ColorBox";

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
        "europe-purple": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Europe Purple.png",
            }
        ],
        "europe-white": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Europe White.png",
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
                    <LogoBox name={"Americas Logo White"} downloads={logos["americas-white"]} background={"americas"} buttonColor={"white"}/>
                    <LogoBox name={"Americas Logo Red"} downloads={logos["americas-red"]} background={"white"} buttonColor={"americas"}/>
                    <ColorBox variant={"americas"} size={"large"} />
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Asia Pacific Logo Green"} downloads={logos["asia-pacific-white"]} background={"asia-pacific"} buttonColor={"white"}/>
                    <LogoBox name={"Asia Pacific Logo White"} downloads={logos["asia-pacific-green"]} background={"white"} buttonColor={"asia-pacific"}/>
                    <ColorBox variant={"asia-pacific"} size={"large"} />
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Europe Logo Purple"} downloads={logos["europe-white"]} background={"europe"} buttonColor={"white"}/>
                    <LogoBox name={"Europe Logo White"} downloads={logos["europe-purple"]} background={"white"} buttonColor={"europe"}/>
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
