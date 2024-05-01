import Image from "next/image";
import Link from "next/link";

type Props = {
	name: string,
	background: "blue" | "white" | "black" | "teal" | "orange" | "red" | "blue-plain" | "white-plain"
	size?: "small" | "medium" | "large"
	priority?: boolean
	image: string
	url: string
}

export default function MobileLogoBox(props:Props) {
	let bg = "bg-gradient-to-br from-white to-gray-100";
	const size = props.size ? props.size : "medium";
	const height = size === "small" ? "100" : size === "medium" ? "200" : "500";
	const priority = props.priority ? props.priority : false;
	
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
	
	return (
		<div>
			<Link href={props.url}>
				<div className={`relative flex flex-col items-center justify-center ${bg} p-0 w-72 h-72 rounded-md border-2 border-gray-300 md:hidden`}>
					<Image src={props.image}
						   width={height}
						   height={200}
						   alt={props.name}
						   priority={priority}
					/>
				</div>
			</Link>
		</div>
	);
}
