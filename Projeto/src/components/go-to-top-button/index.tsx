import { ArrowUpCircleIcon } from "lucide-react";

export function GoToTopButton() {
    return (
        <a className="bottom-2 right-2 p-2 fixed rounded-md border-2 border-borderColor bg-bgColor" href="#">
            <ArrowUpCircleIcon size={32} strokeWidth={1.5} />
        </a>
    )
}