const { spawn } = require("child_process");
const { join } = require("path");

const rootDir = join(__dirname, "..");

// 定义要启动的项目
const projects = [
  {
    name: "主应用 (main)",
    cwd: join(rootDir, "packages", "main"),
    command: "pnpm",
    args: ["dev"],
    port: 7000,
    color: "\x1b[36m", // Cyan
  },
  {
    name: "React 子应用 (react-app)",
    cwd: join(rootDir, "packages", "react-app"),
    command: "pnpm",
    args: ["dev"],
    port: 7001,
    color: "\x1b[33m", // Yellow
  },
  {
    name: "Vue2 子应用 (vue2-app)",
    cwd: join(rootDir, "packages", "vue2-app"),
    command: "pnpm",
    args: ["serve"],
    port: 7002,
    color: "\x1b[32m", // Green
  },
  {
    name: "Vue3 子应用 (vue3-app)",
    cwd: join(rootDir, "packages", "vue3-app"),
    command: "pnpm",
    args: ["dev"],
    port: 7003,
    color: "\x1b[35m", // Magenta
  },
];

// 颜色重置
const reset = "\x1b[0m";
const green = "\x1b[32m";

console.log(`${green}正在启动所有微前端应用...${reset}\n`);

// 启动所有项目
const processes = projects.map((project) => {
  const { name, cwd, command, args, port, color } = project;

  console.log(`${color}[${name}]${reset} 正在启动 (端口: ${port})...`);

  const proc = spawn(command, args, {
    cwd,
    stdio: "inherit",
    shell: true,
  });

  proc.on("error", (error) => {
    console.error(`${color}[${name}]${reset} 启动失败:`, error.message);
  });

  proc.on("exit", (code) => {
    if (code !== 0 && code !== null) {
      console.error(`${color}[${name}]${reset} 进程退出，代码: ${code}`);
    }
  });

  return { name, port, color, process: proc };
});

// 显示启动信息
setTimeout(() => {
  console.log(`\n${green}所有应用已启动！${reset}`);
  processes.forEach(({ name, port, color }) => {
    console.log(`${color}${name}: http://localhost:${port}${reset}`);
  });
  console.log("\n按 Ctrl+C 停止所有服务\n");
}, 2000);

// 处理退出信号
process.on("SIGINT", () => {
  console.log(`\n${green}正在停止所有服务...${reset}`);
  processes.forEach(({ name, color, process: proc }) => {
    console.log(`${color}[${name}]${reset} 正在停止...`);
    proc.kill("SIGINT");
  });
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

process.on("SIGTERM", () => {
  processes.forEach(({ process: proc }) => {
    proc.kill("SIGTERM");
  });
  process.exit(0);
});
