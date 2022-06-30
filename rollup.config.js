import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default [
  {
    input: "build/tester.js",
    output: {
      file: "dist/tester.js",
      format: "iife",
    },
    plugins: [resolve(), commonjs(), json()],
    inlineDynamicImports: true,
  },
  {
    input: "build/index.js",
    output: {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
    },
    plugins: [resolve({ preferBuiltins: true }), commonjs(), json()],
    inlineDynamicImports: true,
  },
];
