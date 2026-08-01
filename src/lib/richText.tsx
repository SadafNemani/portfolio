import GradientText from "@/components/typography/GradientText";
import AccentText from "@/components/typography/AccentText";

export const richText = {
  gradient: (chunks: React.ReactNode) => <GradientText>{chunks}</GradientText>,

  accent: (chunks: React.ReactNode) => <AccentText>{chunks}</AccentText>,

  br: () => <br />,
};
