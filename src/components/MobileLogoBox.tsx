import Image from "next/image";
import Link from "next/link";

type Props = {
	name: string,
	background: "blue" | "white" | "black" | "teal" | "orange" | "red" | "blue-plain" | "white-plain" | "purple" | "green"
	size?: "small" | "medium" | "large"
	priority?: boolean
	image: string
	url: string
	showOnDesktop?: boolean
}

export default function MobileLogoBox(props:Props) {
	let bg = "bg-gradient-to-br from-white to-gray-100";
	const size = props.size ? props.size : "medium";
	const height = size === "small" ? "100" : size === "medium" ? "200" : "500";
	const priority = props.priority ? props.priority : false;
	const showOnDesktop = props.showOnDesktop ? props.showOnDesktop : false;
	
	if (props.background === "blue") {
		bg = "bg-gradient-to-br from-blue-600 to-blue-500";
	}
	
	if (props.background === "black") {
		bg = "bg-gradient-to-br from-gray-800 to-gray-700";
	}
	
	if (props.background === "teal") {
		bg = "bg-gradient-to-br from-[#0cb9c1] to-[#0cb9c1]";
	}
	
	if (props.background === "orange") {
		bg = "bg-gradient-to-br from-[#f48924] to-[#ff6d00]";
	}
	
	if (props.background === "red") {
		bg = "bg-gradient-to-br from-[#f85a40] to-[#e84a30]";
	}
	
	if (props.background === "blue-plain") {
		bg = "bg-[#037ef3]";
	}
	
	if (props.background === "white-plain") {
		bg = "bg-white";
	}
	
	if (props.background === "purple") {
		bg = "bg-gradient-to-br from-[#7552CC] to-[#5E3AB4FF]";
	}
	
	if (props.background === "green") {
		bg = "bg-gradient-to-br from-[#00c16e] to-[#008c50]";
	}
	
	return (
		<div>
			<Link href={props.url}>
				<div className={`relative flex flex-col items-center justify-center ${bg} p-0 w-72 h-72 rounded-md border-2 border-gray-300 ${showOnDesktop ? "" : "md:hidden"} `}>
					<Image src={props.image}
						   width={height}
						   height={200}
						   alt={props.name}
						   priority={priority}
					/>
					
					<div className={`hidden md:flex text-xs font-bold mt-10 rounded-full ${props.background === "white-plain" ? "bg-blue-600 text-white" : "bg-white text-gray-800"} bg-opacity-100 hover:bg-opacity-85 px-4 py-1 transition-all absolute bottom-3`}>Click to open</div>
				</div>
			</Link>
		</div>
	);
}
