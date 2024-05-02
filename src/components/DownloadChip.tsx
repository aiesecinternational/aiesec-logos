import Link from "next/link";

type Props = {
	fileType: string
	url: string
	variant: "blue" | "white" | "black" | "teal" | "orange" | "red" | "purple" | "green" | "americas" | "asia-pacific" | "europe" | "middle-east-and-africa"
}

export default function DownloadChip(props: Props) {
	let bgColor = "bg-white";
	let textColor = "text-gray-800";
	
	if (props.variant === "blue") {
		bgColor = "bg-[#037EF3]";
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
	
	if (props.variant === "purple") {
		bgColor = "bg-[#7c4dff]";
		textColor = "text-white";
	}
	
	if (props.variant === "green") {
		bgColor = "bg-[#00c16e]";
		textColor = "text-white";
	}
	
	if (props.variant === "americas") {
		bgColor = "bg-[#bb0d00]";
		textColor = "text-white";
	}
	
	if (props.variant === "asia-pacific") {
		bgColor = "bg-[#30c39e]";
		textColor = "text-white";
	}
	
	if (props.variant === "europe") {
		bgColor = "bg-[#674ea7]";
		textColor = "text-white";
	}
	
	if (props.variant === "middle-east-and-africa") {
		bgColor = "bg-[#e69138]";
		textColor = "text-white";
	}
	
	return (
		<Link href={props.url} target={"_blank"}>
			<div className={`rounded-full ${bgColor} ${textColor} bg-opacity-100 hover:bg-opacity-85 px-4 py-1 transition-all`}>{props.fileType}</div>
		</Link>
	);
}
