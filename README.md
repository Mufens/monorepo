# 微前端 Monorepo 项目

基于 qiankun 的微前端架构项目，使用 pnpm workspace 管理多个子应用。

## 📋 项目结构

```
monorepo/
├── packages/        # 子应用目录
│   ├── main/        # 主应用 (React + Vite + qiankun)
│   ├── react-app/   # React 子应用 (UmiJS)
│   ├── vue2-app/    # Vue 2 子应用
│   └── vue3-app/    # Vue 3 子应用
├── common/          # 公共工具库
└── scripts/         # 启动脚本
```

## 🚀 快速开始

### 环境要求

Node.js >= 16, pnpm >= 7

### 安装与启动

```bash
# 安装依赖
pnpm install

# 统一启动所有应用（推荐）
pnpm dev

# 单独启动
pnpm dev:main    # 主应用 (7000)
pnpm dev:react   # React 子应用 (7001)
pnpm dev:vue2    # Vue2 子应用 (7002)
pnpm dev:vue3    # Vue3 子应用 (7003)

# 构建所有应用
pnpm build:all
```

## 📦 子应用

| 应用      | 技术栈                    | 端口 |
| --------- | ------------------------- | ---- |
| main      | React 19 + Vite + qiankun | 7000 |
| react-app | React + UmiJS             | 7001 |
| vue2-app  | Vue 2.6 + Vue CLI         | 7002 |
| vue3-app  | Vue 3 + Vite              | 7003 |

## 🛠️ 公共库

所有子应用可通过 `common` 包使用公共工具函数（utils.js、format.js）。

```javascript
import { debounce, formatDate, formatMoney } from "common";
```

## 🔧 技术栈

- 包管理: pnpm workspace
- 微前端: qiankun
- 主应用: React 19 + Vite + TypeScript
- 子应用: React (UmiJS) / Vue 2 / Vue 3
