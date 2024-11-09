import { ExternalLinkIcon } from "lucide-react";

interface IExternalLinkProps  {
    label: string
    link?: string,
}

export function ExternalLink({ label, link = '#' } : IExternalLinkProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="min-w-fit inline-flex gap-2 font-semibold underline-offset-2 hover:text-accentColor underline">
            {label} 
            <ExternalLinkIcon size={14} />
        </a>
    )
}