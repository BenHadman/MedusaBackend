import Image from "next/image"

export default function ImageGallery({ images = [] }) {
  return (
    <div className="w-full relative bg-bg-100 border border-border-200 rounded-large overflow-hidden">
      {/* main image */}
      {/* … your existing logic */}
      <div className="flex gap-2 p-2">
        {images.map((img) => (
          <button
            key={img.id}
            className="rounded-base border border-border-200 bg-bg-000 overflow-hidden"
          >
            <Image
              src={img.url}
              alt="Thumbnail"
              width={72}
              height={96}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
