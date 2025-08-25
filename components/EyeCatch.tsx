import Image from "next/image";
import rocket from "public/rocket.jpg";

export default function EyeCatch() {
  return (
    <figure>
      <Image
        src={rocket}
        alt="空飛ぶロケット"
        layout="responsive"
        width="1980"
        height="1150"
      />
    </figure>
  );
}
