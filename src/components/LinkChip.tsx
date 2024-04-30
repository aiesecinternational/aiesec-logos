import Link from "next/link";

type Props = {
	text: string
	url: string
	variant: "blue" | "white" | "black" | "teal" | "orange" | "red"
}

export default function LinkChip(props: Props) {
	let bgColor = "bg-white";
	let textColor = "text-gray-800";
	
	if (props.variant === "blue") {
		bgColor = "bg-blue-600";
		textColor = "text-white";
	}
	
	if (props.variant === "black") {
		bgColor = "bg-gray-800";
		textColor = "text-white";
	}
	
	if (props.variant === "teal") {
		bgColor = "bg-[#0cb9c1]";
		textColor = "text-white";
	}
	
	if (props.variant === "orange") {
		bgColor = "bg-[#f48924]";
		textColor = "text-white";
	}
	
	if (props.variant === "red") {
		bgColor = "bg-[#f85a40]";
		textColor = "text-white";
	}
	
	return (
		<Link href={props.url}>
			<div className={`rounded-full ${bgColor} ${textColor} bg-opacity-85 hover:bg-opacity-100 px-4 py-1 transition-all`}>{props.text}</div>
		</Link>
	);
}
