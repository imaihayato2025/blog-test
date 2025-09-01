import parse, { Element } from "html-react-parser";
import Image from "next/image";

type ConvertBodyProps = {
  contentHTML: string;
};

export default function ConvertBody({ contentHTML }: ConvertBodyProps) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node instanceof Element && node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            src={src}
            alt={alt}
            width={Number(width)}
            height={Number(height)}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
}
