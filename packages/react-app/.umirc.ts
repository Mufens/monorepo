import { defineConfig } from "umi";

export default defineConfig({
  base: '/sub1',
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  plugins: ["@umijs/plugins/dist/qiankun"],
  qiankun: {
    slave: {}
  },
});
