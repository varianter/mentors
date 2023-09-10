import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
   image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'chewiesald2ijhpvmb34c.blob.core.windows.net',
      pathname: '/employees/**',
    }],
  },
  output: "server",
  adapter: vercel(),
});
