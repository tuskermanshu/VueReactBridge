# 项目安装和运行指南

本指南将引导你完成安装、构建和运行本项目的步骤。本项目展示了 Vue 项目与 React 组件之间的通信，仅作为示例，不适用于生产环境。

## 安装步骤

确保在开始之前，你的开发环境已经安装了 `pnpm`。然后执行以下命令以安装项目依赖：

```bash
pnpm install
```

## 构建 Remote 项目

使用下面的命令来构建远程端产物：

```bash
pnpm run build:all
```

## 运行预览

```bash
pnpm run preview:all
```

## 运行 Host 端

```bash
pnpm run dev:host
```

## 注意事项

- 本项目是一个演示示例，展示了如何在 Vue 和 React 之间进行组件通信。无法用于生产环境
