interface LineLevelProps {
  level: number
}

export function LineLevel({ level }: LineLevelProps) {
  return (
    <div className="relative h-1 w-[18rem] bg-green-200">
      <div
        className="absolute h-1 bg-green-500"
        style={{ width: `${level}%` }}
      />
    </div>
  )
}
