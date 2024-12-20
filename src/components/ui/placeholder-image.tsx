import Image from 'next/image'

interface PlaceholderImageProps {
  width: number
  height: number
  className?: string
}

export function PlaceholderImage({ width, height, className }: PlaceholderImageProps) {
  return (
    <div 
      className={`bg-gray-200 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <span className="text-gray-400">
        {width} x {height}
      </span>
    </div>
  )
}
