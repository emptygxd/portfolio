import { TiltedCard } from "shared";

type Props = {
  text: string;
};

export const AboutItem = ({ text }: Props) => {
  return (
    <>
      <TiltedCard
        containerHeight="140px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        overlayContent={
          <p className="tilted-card-demo-text text-color text-lg lg:text-sm md:text-xs sm:text-center">
            {text}
          </p>
        }
      />
    </>
  );
};
