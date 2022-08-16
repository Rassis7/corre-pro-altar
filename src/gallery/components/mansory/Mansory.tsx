import { useMemo, VFC } from "react";
import { Masonry as MansoryComponent } from "masonic";
import { Image } from "./styles";
import { useMediaQuery } from "@/shared/hooks";

type MansoryType = {
  photos: string[];
};

export const Mansory: VFC<MansoryType> = ({ photos }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const items = useMemo(
    () => photos.map((photo) => ({ src: photo })),
    [photos]
  );

  if (!items.length) return null;

  return (
    <MansoryComponent
      key="gallery"
      items={items}
      columnGutter={8}
      rowGutter={8}
      overscanBy={5}
      columnWidth={isMobile ? 130 : 240}
      render={({ index, data: { src }, width }) => (
        <Image
          src={`/${src}`}
          width={width}
          key={index}
          loading="lazy"
          alt={src}
        />
      )}
    />
  );
};
