import LogoBox from "@/components/LogoBox";
import LogoCategory from "@/components/LogoCategory";

export default function Home() {
    const logos = {
        "sdgs-grid-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/01_TGG_Grid_Icon_Color.png",
            }
        ],
        "sdgs-grid-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/02_TGG_Grid_Icon_Black.png",
            }
        ],
        "sdg-1-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_01.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_01.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/1 No-Poverty.gif",
            }
        ],
        "sdg-2-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_02.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_02.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/2-Zero-Hunger.gif",
            }
        ],
        "sdg-3-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_03.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_03.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/3-Good-Health-and-Well-being.gif",
            }
        ],
        "sdg-4-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_04.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_04.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/4-Quality-Education.gif",
            }
        ],
        "sdg-5-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_05.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_05.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/5-Gender-Equality.gif"
            }
        ],
        "sdg-6-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_06.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_06.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/6-Clean-Water-and-Sanitation.gif"
            }
        ],
        "sdg-7-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_07.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_07.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/7-Afforable-and-Clean-Energy.gif"
            }
        ],
        "sdg-8-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_08.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_08.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/8-Decent-Work-and-Economic-Growth.gif"
            }
        ],
        "sdg-9-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_09.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_09.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/9-Industry-2.gif"
            }
        ],
        "sdg-10-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_10.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_10.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/10 Reduced-Inequalities.gif"
            }
        ],
        "sdg-11-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_11.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_11.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/11 Sustainable-Cities.gif"
            }
        ],
        "sdg-12-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_12.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_12.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/12-Responsible-Consumption.gif"
            }
        ],
        "sdg-13-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_13.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_13.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/13-Climate-Action.gif"
            }
        ],
        "sdg-14-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_14.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_14.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/14-Life-Below-Water.gif"
            }
        ],
        "sdg-15-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_15.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_15.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/15-Life-on-Land.gif"
            }
        ],
        "sdg-16-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_16.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_16.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/16-Peace.gif"
            }
        ],
        "sdg-17-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_17.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_17.jpg",
            },
            {
                fileType: "GIF",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/17-Partnership.gif"
            }
        ],
        "global-goals-logo-color": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_18.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_Color_18.jpg",
            }
        ],
        "sdg-1-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_01.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_01.jpg",
            }
        ],
        "sdg-2-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_02.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_02.jpg",
            }
        ],
        "sdg-3-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_03.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_03.jpg",
            }
        ],
        "sdg-4-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_04.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_04.jpg",
            }
        ],
        "sdg-5-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_05.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_05.jpg",
            }
        ],
        "sdg-6-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_06.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_06.jpg",
            }
        ],
        "sdg-7-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_07.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_07.jpg",
            }
        ],
        "sdg-8-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_08.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_08.jpg",
            }
        ],
        "sdg-9-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_09.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_09.jpg",
            }
        ],
        "sdg-10-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_10.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_10.jpg",
            }
        ],
        "sdg-11-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_11.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_11.jpg",
            }
        ],
        "sdg-12-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_12.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_12.jpg",
            }
        ],
        "sdg-13-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_13.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_13.jpg",
            }
        ],
        "sdg-14-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_14.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_14.jpg",
            }
        ],
        "sdg-15-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_15.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_15.jpg",
            }
        ],
        "sdg-16-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_16.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_16.jpg",
            }
        ],
        "sdg-17-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_17.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_17.jpg",
            }
        ],
        "global-goals-logo-black": [
            {
                fileType: "PNG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_18.png",
            },
            {
                fileType: "JPG",
                url: "https://aiesec-logos.s3.eu-west-1.amazonaws.com/TGG_Icon_BW_18.jpg",
            }
        ]
    }
    
    return (
        <div className={"flex flex-col space-y-5 items-center justify-center"}>
            <div className={"flex flex-col space-y-20 h-full w-full items-center justify-center"}>
                <LogoCategory>
                    <LogoBox name={"SDGs Grid Color"} downloads={logos["sdgs-grid-color"]} background={"white"} buttonColor={"blue"}/>
                    <LogoBox name={"SDGs Grid Black"} downloads={logos["sdgs-grid-black"]} background={"white"} buttonColor={"blue"}/>
                </LogoCategory>
                
                <LogoCategory grid={true}>
                    <LogoBox name={"SDGs 1 No Poverty Color"} downloads={logos["sdg-1-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 2 Zero Hunger Color"} downloads={logos["sdg-2-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 3 Good Health and Well-being Color"} downloads={logos["sdg-3-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 4 Quality Education Color"} downloads={logos["sdg-4-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 5 Gender Equality Color"} downloads={logos["sdg-5-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 6 Clean Water and Sanitation Color"} downloads={logos["sdg-6-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 7 Affordable and Clean Energy Color"} downloads={logos["sdg-7-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 8 Decent Work and Economic Growth Color"} downloads={logos["sdg-8-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 9 Industry Innovation and Infrastructure Color"} downloads={logos["sdg-9-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 10 Reduced Inequality Color"} downloads={logos["sdg-10-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 11 Sustainable Cities and Communities Color"} downloads={logos["sdg-11-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 12 Responsible Consumption and Production Color"} downloads={logos["sdg-12-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 13 Climate Action Color"} downloads={logos["sdg-13-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 14 Life Below Water Color"} downloads={logos["sdg-14-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 15 Life on Land Color"} downloads={logos["sdg-15-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 16 Peace Justice and Strong Institutions Color"} downloads={logos["sdg-16-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"SDGs 17 Partnerships for the Goals Color"} downloads={logos["sdg-17-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                    <LogoBox name={"Global Goals Logo"} downloads={logos["global-goals-logo-color"]} background={"white"} buttonColor={"black"} variant={"small"}/>
                </LogoCategory>
                
                <LogoCategory grid={true}>
                    <LogoBox name={"SDGs 1 No Poverty Black"} downloads={logos["sdg-1-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 2 Zero Hunger Black"} downloads={logos["sdg-2-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 3 Good Health and Well-being Black"} downloads={logos["sdg-3-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 4 Quality Education Black"} downloads={logos["sdg-4-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 5 Gender Equality"} downloads={logos["sdg-5-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 6 Clean Water and Sanitation Black"} downloads={logos["sdg-6-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 7 Affordable and Clean Energy Black"} downloads={logos["sdg-7-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 8 Decent Work and Economic Growth Black"} downloads={logos["sdg-8-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 9 Industry Innovation and Infrastructure Black"} downloads={logos["sdg-9-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 10 Reduced Inequality Black"} downloads={logos["sdg-10-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 11 Sustainable Cities and Communities Black"} downloads={logos["sdg-11-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 12 Responsible Consumption and Production Black"} downloads={logos["sdg-12-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 13 Climate Action Black"} downloads={logos["sdg-13-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 14 Life Below Water Black"} downloads={logos["sdg-14-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 15 Life on Land Black"} downloads={logos["sdg-15-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 16 Peace Justice and Strong Institutions Black"} downloads={logos["sdg-16-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"SDGs 17 Partnerships for the Goals Black"} downloads={logos["sdg-17-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                    <LogoBox name={"Global Goals Logo Black"} downloads={logos["global-goals-logo-black"]} background={"white"} buttonColor={"blue"} variant={"small"}/>
                </LogoCategory>
                
            </div>
        </div>
    );
}
