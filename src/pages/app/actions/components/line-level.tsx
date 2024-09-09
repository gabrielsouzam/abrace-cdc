interface LineLevelProps {
  level: number
}

export function LineLevel({ level }: LineLevelProps) {
  return (
    <div className="relative h-1 w-[18rem] bg-yellow-200">
      <div
        className="absolute h-1 bg-yellow-400"
        style={{ width: `${level}%` }}
      />
    </div>
  )
}
