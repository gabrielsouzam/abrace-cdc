interface LineLevelBigProps {
  level: number
}

export function LineLevelBig({ level }: LineLevelBigProps) {
  return (
    <div className="relative h-4 w-[50rem] bg-green-200">
      <div
        className="absolute h-4 bg-green-500"
        style={{ width: `${level}%` }}
      />
    </div>
  )
}
