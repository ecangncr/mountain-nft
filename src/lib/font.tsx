import { Outfit, Sora } from "next/font/google";

const MainFont = Outfit({
  subsets: ["latin"],
});

const SecondaryFont = Sora({
  subsets: ["latin"],
});

export { MainFont, SecondaryFont };
