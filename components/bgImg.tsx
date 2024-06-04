import Image from "next/image";

export default function AppBgImg() {
  return (
    <div>
      <Image
        src="/background-img.jpg"
        fill
        quality={100}
        
        style={{
          objectFit: "cover",
          zIndex: 0,
            // position: 'absolute',
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
        alt=""
      />
    </div>
  );
}
