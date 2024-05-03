import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";

export default function Home() {
    const logos = {
        "aiesec-way": [
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/aiesec-way.jpg",
            }
        ],
        "aiesec-why": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Why.png",
            }
        ],
        "aiesec-who": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Who.png",
            }
        ],
        "aiesec-what": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/What.png",
            }
        ],
        "aiesec-how": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/How.png",
            }
        ],
        "aspirational question": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/aspirational question.png",
            }
        ],
        "definition": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Definition.png",
            }
        ],
        "foundation": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Foundation.png",
            }
        ],
        "io-journey": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/I_O Journey.png",
            }
        ],
        "Leadership Values": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Leadership Values.png",
            }
        ],
        "activating-leadership": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Activating Leadership.png",
            }
        ],
        "acting-sustainably": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Acting Sustainably.png",
            }
        ],
        "demonstrating-integrity": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Demonstrating Integrity.png",
            }
        ],
        "enjoying-participation": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Enjoying Participation.png",
            }
        ],
        "living-diversity": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Living Diversity.png",
            }
        ],
        "striving-for-excellence": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/Striving for Excellence.png",
            }
        ],
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-start justify-center"}>
                <LogoCategory>
                    <LogoBox name={"AIESEC Way Logo"} downloads={logos["aiesec-way"]} background={"white-plain"} buttonColor={"blue"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Why"} downloads={logos["aiesec-why"]} background={"white-plain"} buttonColor={"blue"} priority={true}/>
                    <LogoBox name={"AIESEC Who"} downloads={logos["aiesec-who"]} background={"white"} buttonColor={"blue"} priority={true}/>
                    <LogoBox name={"AIESEC How"} downloads={logos["aiesec-how"]} background={"white"} buttonColor={"blue"} priority={true}/>
                    <LogoBox name={"AIESEC What"} downloads={logos["aiesec-what"]} background={"white"} buttonColor={"blue"} priority={true}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Foundation"} downloads={logos["foundation"]} background={"white"} buttonColor={"blue"}/>
                    <LogoBox name={"AIESEC Aspirational Question"} downloads={logos["aspirational question"]} background={"white"} buttonColor={"blue"} size={"small"}/>
                    <LogoBox name={"AIESEC Definition"} downloads={logos["definition"]} background={"white"} buttonColor={"blue"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"AIESEC Inner and Outer Journey"} downloads={logos["io-journey"]} background={"white"} buttonColor={"blue"}/>
                    <LogoBox name={"AIESEC Leadership Values"} downloads={logos["Leadership Values"]} background={"white"} buttonColor={"blue"}/>
                </LogoCategory>
                
                <LogoCategory>
                    <LogoBox name={"Activating Leadership"} downloads={logos["activating-leadership"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"Acting Sustainably"} downloads={logos["acting-sustainably"]} background={"white"} buttonColor={"green"} variant={"small"}/>
                    <LogoBox name={"Striving for Excellence"} downloads={logos["striving-for-excellence"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"Living Diversity"} downloads={logos["living-diversity"]} background={"white"} buttonColor={"teal"} variant={"small"}/>
                    <LogoBox name={"Enjoying Participation"} downloads={logos["enjoying-participation"]} background={"white"} buttonColor={"purple"} variant={"small"}/>
                    <LogoBox name={"Demonstrating Integrity"} downloads={logos["demonstrating-integrity"]} background={"white"} buttonColor={"orange"} variant={"small"}/>
                </LogoCategory>
            </div>
        </div>
    );
}
