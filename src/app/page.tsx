import LogoBox from "@/components/LogoBox";

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
    }
    
    return (
        <div className={"flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 h-full w-full items-center justify-center"}>
            <LogoBox name={"AIESEC Logo Blue"} downloads={logos["aiesec-blue"]} background={"white"} buttonColor={"blue"}/>
            <LogoBox name={"AIESEC Logo White Blue"} downloads={logos["aiesec-white-blue"]} background={"blue"} buttonColor={"white"}/>
            <LogoBox name={"AIESEC Logo Black"} downloads={logos["aiesec-black"]} background={"white"} buttonColor={"black"}/>
            <LogoBox name={"AIESEC Logo White Black"} downloads={logos["aiesec-white-black"]} background={"black"} buttonColor={"white"}/>
        </div>
    );
}
