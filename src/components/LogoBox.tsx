import Image from "next/image";
import DownloadChip from "@/components/DownloadChip";

type Props = {
	name: string
	downloads: {
		fileType: string,
		url: string
	}[]
	background: "blue" | "white" | "black"
	buttonColor: "blue" | "white" | "black"
}

export default function LogoBox(props:Props) {
	let bg = "bg-gradient-to-br from-white to-gray-100";
	
	if (props.background === "blue") {
		bg = "bg-gradient-to-br from-blue-600 to-blue-500";
	}
	
	if (props.background === "black") {
		bg = "bg-gradient-to-br from-gray-800 to-gray-700";
	}
	
	return (
		<div>
			<div className={`relative flex flex-col items-center justify-center ${bg} p-0 w-72 h-72 rounded-md border-2 border-gray-300`}>
				<Image src={props.downloads.find(download => download.fileType === "PNG")!.url}
					   width={200}
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
