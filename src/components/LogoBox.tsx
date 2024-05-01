import Image from "next/image";
import DownloadChip from "@/components/DownloadChip";

type Props = {
	name: string
	downloads: {
		fileType: string,
		url: string
	}[]
	background: "blue" | "white" | "black" | "teal" | "orange" | "red" | "blue-plain" | "white-plain"
	buttonColor: "blue" | "white" | "black" | "teal" | "orange" | "red"
	size?: "small" | "medium" | "large"
}

export default function LogoBox(props:Props) {
	let bg = "bg-gradient-to-br from-white to-gray-100";
	const size = props.size ? props.size : "medium";
	const height = size === "small" ? "100" : size === "medium" ? "200" : "500";
	
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
			<div className={`relative flex flex-col items-center justify-center ${bg} p-0 pb-5 w-72 h-72 rounded-md border-2 border-gray-300`}>
				<Image src={props.downloads.find(download => download.fileType === "PNG")!.url}
					   width={height}
					   height={200}
					   alt={props.name}
				/>
				
				<div className={"flex flex-row text-white font-bold text-xs absolute bottom-3 items-center justify-between space-x-5"}>
					<div className={"flex flex-row space-x-2"}>
						{props.downloads.map(download => (
							<DownloadChip key={download.fileType} fileType={download.fileType} url={download.url} variant={props.buttonColor}/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
