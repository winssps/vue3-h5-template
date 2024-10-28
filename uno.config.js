import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetRemToPx()]
});
