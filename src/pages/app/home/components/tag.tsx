
type Props = {
    text: String;
}

export function Tag({ text }: Props) {
    return (
        <div className="flex items-center justify-center bg-zinc-300 rounded-3xl h-8 px-2">
            <p className="text-zinc-950 text-sm font-medium">
                {text}
            </p>
            
        </div>
    );
}