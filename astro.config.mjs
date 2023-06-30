import { defineConfig } from 'astro/config';

import solidJs from "@astrojs/solid-js";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), lit()]
});