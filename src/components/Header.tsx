import Image from "next/image";
import Link from "next/link";

export default function Header() {

	return (
		<div
			className={`font-bold bg-[#037ef3] text-blue-700 text-md p-5 items-center justify-between flex flex-row w-full mb-5`}>
			<div>
				<Link href={`/`}>
					<Image src={`/aiesec-logo.png`}
						   width={200}
						   height={200}
						   priority={true}
						   alt={`AIESEC logo`}
					/>
				</Link>
			</div>
			<div className={`flex flex-row text-white font-normal text-xs`}><div className={`hidden md:flex`}>To learn how to use the logos, visit</div>
				<Link
					href={"https://drive.google.com/drive/folders/1uMvyMsiKSkNO78ZXm1KD1rNPAHnx7sNc?usp=drive_link"} target={"_blank"}>
                                <span
									className={"px-2 py-1 ml-2 text-xs text-[#037EF3] rounded-full bg-white"}>aies.ec/bluebook</span>
				</Link>
			</div>
		
		</div>
	);
}
