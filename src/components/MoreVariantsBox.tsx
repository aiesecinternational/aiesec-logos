import LinkChip from "@/components/LinkChip";

type Props = {
	url: string
	variants: string[]
	background: "blue" | "white" | "black" | "teal" | "orange" | "red"
	buttonColor: "blue" | "white" | "black" | "teal" | "orange" | "red"
}

export default function MoreVariantsBox(props:Props) {
	let bg = "bg-gradient-to-br from-gray-800 to-gray-700";
	
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
	
	return (
		<div>
			<div className={`relative flex flex-col items-center justify-center ${bg} p-0 w-72 h-72 rounded-md border-2 border-gray-300`}>
				<div className={"flex flex-row text-white font-bold text-xs items-center justify-between space-x-5"}>
					<div className={"flex flex-col space-x-2 items-center space-y-5"}>
						<LinkChip text={"More Variants"} url={props.url} variant={props.buttonColor}/>
						{/*<div className={'flex flex-wrap space-x-1 font-normal text-[10px]'}>*/}
						{/*	<span>&middot; </span>*/}
						{/*	{props.variants.map(variant => (*/}
						{/*		<span key={variant}>{variant} &middot;</span>*/}
						{/*	))}*/}
						{/*</div>*/}
					</div>
				</div>
			</div>
		</div>
	);
}
