import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts", // Your entry point file
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      compilerOptions: {
        declaration: true, // Generate type definitions
        module: "ESNext", // Use ESNext module system for output
        target: "ES2015" // Transpile to ES2015
      }
    }),
    terser() // Minify the output code
  ],
  external: ["react"]
};
