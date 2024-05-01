import CopyChip from "@/components/CopyChip";

type Props = {
	variant: "blue" | "teal" | "orange" | "red" | "purple" | "green" | "yellow" | "dark-gray" | "light-gray"
}

export default function ColorBox(props: Props) {
	let bgColor = "bg-[#037ef3]";
	let textColor = "text-white";
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
	
	return (
		<div className={`flex flex-col space-y-5 w-32 h-32 ${bgColor} rounded-md items-center justify-center text-sm ${textColor}`}>
			<div>{hex}</div>
			<CopyChip value={hex} variant="white" />
		</div>
	);
}
