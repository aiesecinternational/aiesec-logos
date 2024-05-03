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
        "powered-by-aiesec-blue": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-Blue.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-Blue.jpg",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-Blue.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Powered by AIESEC Blue.mov",
            },
        ],
        "powered-by-aiesec-white-blue": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-White-Blue.png",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-White-Blue.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Powered by AIESEC White_Blue.mov",
            },
        ],
        "powered-by-aiesec-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-Black.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-Black.jpg",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-Black.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Powered by AIESEC Black.mov",
            },
        ],
        "powered-by-aiesec-white-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-White-Black.png",
            },
            {
                fileType: "AI",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/powered-by-White-Black.ai",
            },
            {
                fileType: "MOV",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Powered by AIESEC White_Black.mov",
            },
        ],
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-center justify-center"}>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Logo Blue"} downloads={logos["aiesec-blue"]} background={"white"}
                             buttonColor={"blue"} priority={true}/>
                    <LogoBox name={"AIESEC Logo White Blue"} downloads={logos["aiesec-white-blue"]} background={"blue"}
                             buttonColor={"white"} priority={true}/>
                    <LogoBox name={"AIESEC Logo Black"} downloads={logos["aiesec-black"]} background={"white"}
                             buttonColor={"black"} priority={true}/>
                    <LogoBox name={"AIESEC Logo White Black"} downloads={logos["aiesec-white-black"]}
                             background={"black"} buttonColor={"white"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Powered by AIESEC Blue"} downloads={logos["powered-by-aiesec-blue"]}
                             background={"white"} buttonColor={"blue"}/>
                    <LogoBox name={"Powered by AIESEC White Blue"} downloads={logos["powered-by-aiesec-white-blue"]}
                             background={"blue"} buttonColor={"white"}/>
                    <LogoBox name={"Powered by AIESEC Black"} downloads={logos["powered-by-aiesec-black"]}
                             background={"white"} buttonColor={"black"}/>
                    <LogoBox name={"Powered by AIESEC White Black"} downloads={logos["powered-by-aiesec-white-black"]}
                             background={"black"} buttonColor={"white"}/>
                </LogoCategory>
            
            </div>
        </div>
    );
}
