import { build } from "esbuild";
await build({ entryPoints:["dev/main.tsx"], bundle:true, outdir:"dev/out", jsx:"automatic", define:{"process.env.NEXT_PUBLIC_LANDSCAPE_DEBUG":'"false"',"process.env.NODE_ENV":'"development"'}, logLevel:"warning", loader:{".css":"css"} });
