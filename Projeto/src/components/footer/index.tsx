import { FolderCodeIcon } from "lucide-react";
import { ExternalLink } from "../external-link";
import { GoToTopButton } from "../go-to-top-button";

export function Footer() {
    return (
        <footer className="bg-borderColor py-6 mt-12">
            <div className="max-w-[1376px] w-full flex flex-wrap px-4 justify-around sm:justify-between mx-auto gap-x-2 gap-y-4">
                <span className="flex gap-2">
                    <FolderCodeIcon />
                    <p>Desafio Classificador de Nível de Herói | 2024</p>
                </span>
                <ExternalLink label="GitHub" link="#"/>
            </div>
            <GoToTopButton />
        </footer>
    )
}