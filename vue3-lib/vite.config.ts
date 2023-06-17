import { fileURLToPath, URL } from "node:url";

import { defineConfig, type UserConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode, command }): Promise<UserConfig> => {
  const config: UserConfig = {
    base: "./",
    // Resolver
    resolve: {
      // https://vitejs.dev/config/shared-options.html#resolve-alias
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./node_modules", import.meta.url)),
      },
    },
    // https://vitejs.dev/config/#server-options
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: [".."],
      },
    },
    plugins: [
      Vue(),
      //
    ],
    optimizeDeps: {
      exclude: [
        "vue-demi",
        //
      ],
    },
    // Build Options
    // https://vitejs.dev/config/#build-options
    build: {
      outDir: "../lib",
      lib: {
        entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
        name: "CodeMirror",
        formats: ["umd", "es", "iife"],
        fileName: "index",
      },

      rollupOptions: {
        plugins: [],
        external: [
          "vue",
          "vue-demi",
          //
        ],
        output: {
          esModule: true,
          generatedCode: {
            reservedNamesAsProps: false,
          },
          interop: "compat",
          systemNullSetters: false,
          exports: "named",
          globals: {
            "vue-demi": "VueDemi",
            vue: "Vue",
          },
          manualChunks: undefined,
        },
      },
      // Minify option
      // target: "esnext",
      minify: false,
    },
  };

  // Export vite config
  return config;
});
