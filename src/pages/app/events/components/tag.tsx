type Props = {
    text: string
  }
  
  export function Tag({ text }: Props) {
    return (
      <div className="flex h-8 items-center justify-center rounded-3xl bg-zinc-300 px-2">
        <p className="text-sm font-medium text-zinc-950">{text}</p>
      </div>
    )
  }
  