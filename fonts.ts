import localFont from "next/font/local";

export const sherika = localFont({
  src: [
    {
      path: "./public/fonts/Sherika Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./public/fonts/Sherika Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./public/fonts/Sherika Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./public/fonts/Sherika Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./public/fonts/Sherika Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./public/fonts/Sherika ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./public/fonts/Sherika Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./public/fonts/Sherika Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-sherika",
  display: "swap",
});
