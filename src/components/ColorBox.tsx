import CopyChip from "@/components/CopyChip";

type Props = {
	variant: "blue" | "teal" | "orange" | "red" | "purple" | "green" | "yellow" | "dark-gray" | "light-gray" | "americas" | "asia-pacific" | "europe" | "middle-east-and-africa"
	size?: "small" | "medium" | "large"
}

export default function ColorBox(props: Props) {
	let bgColor = "bg-[#037ef3]";
	let textColor = "text-white";
	const size = props.size ? props.size : "medium";
	let hex = "#037EF3";
	
	if (props.variant === "teal") {
		bgColor = "bg-[#0cb9c1]";
		textColor = "text-white";
		hex = "#0CB9C1";
	}
	
	if (props.variant === "orange") {
		bgColor = "bg-[#f48924]";
		textColor = "text-white";
		hex = "#F48924";
	}
	
	if (props.variant === "red") {
		bgColor = "bg-[#f85a40]";
		textColor = "text-white";
		hex = "#F85A40";
	}
	
	if (props.variant === "purple") {
		bgColor = "bg-[#7552CC]";
		textColor = "text-white";
		hex = "#7552CC";
	}
	
	if (props.variant === "green") {
		bgColor = "bg-[#00c16e]";
		textColor = "text-white";
		hex = "#00c16e";
	}
	
	if (props.variant === "yellow") {
		bgColor = "bg-[#ffc845]";
		textColor = "text-gray-800";
		hex = "#ffc845";
	}
	
	if (props.variant === "dark-gray") {
		bgColor = "bg-[#52565E]";
		textColor = "text-white";
		hex = "#52565E";
	}
	
	if (props.variant === "light-gray") {
		bgColor = "bg-[#CACCD1]";
		textColor = "text-gray-800";
		hex = "#f5f5f5";
	}
	
	if (props.variant === "americas") {
		bgColor = "bg-[#bb0d00]";
		textColor = "text-white";
		hex = "#bb0d00";
	}
	
	if (props.variant === "asia-pacific") {
		bgColor = "bg-[#30c39e]";
		textColor = "text-white";
		hex = "#30c39e";
	}
	
	if (props.variant === "europe") {
		bgColor = "bg-[#674ea7]";
		textColor = "text-white";
		hex = "#674ea7";
	}
	
	if (props.variant === "middle-east-and-africa") {
		bgColor = "bg-[#e69138]";
		textColor = "text-white";
		hex = "#e69138";
	}
	
	return (
		<div className={`flex flex-col space-y-5 w-full ${size == "large" ? "md:w-72 h-72" : "md:w-32 h-32"} ${bgColor} rounded-md items-center justify-center text-sm ${textColor}`}>
			<div>{hex}</div>
			<CopyChip value={hex} variant="white" />
		</div>
	);
}
