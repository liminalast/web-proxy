# liminal-home-page

基于 [leleo-home-page](https://github.com/leleo886/leleo-home-page) 二次开发的个人主页，修复了多项体验问题并优化了移动端适配。

**演示地址**：[web-proxy-liminal.cc.cd](https://web-proxy-liminal.cc.cd)

---

## 功能特性

- 可自定义的头像、欢迎语、个人标签和社交链接
- 支持图片 / 动态视频壁纸切换
- 网易云音乐播放器集成
- 打字机效果语录展示
- 项目卡片展示（支持本地图片）
- 主题色、亮度、模糊度实时调节
- QQ / 微信一键复制联系方式
- PC 端与移动端自适应布局

---

## 相较原项目的改进

### Bug 修复
- **QQ / 微信点击体验**：点击社交图标不再跳转无效链接，改为弹窗展示并一键复制至剪贴板
- **项目卡片本地图片**：修复 `public/img/` 下图片扩展名与配置不一致导致 404 的问题
- **加载卡死**：修复图片加载失败时 Promise 永不 resolve、页面永久停在 loading 的问题

### 移动端优化
- **壁纸分类自动切换**：打开壁纸设置时自动定位到"手机壁纸"Tab
- **Tab 切换状态保持**：修复手机端切换图片/动态壁纸 Tab 时 type 被强制重置的问题
- **弹窗宽度适配**：设置弹窗在手机端自动收窄为 95vw

### 数据持久化
- **Cookie 有效期**：从约 7 分钟（0.005 天）修正为 30 天，个性化设置不再频繁丢失

---

## 技术栈

| 类别 | 技术 |
|---|---|
| 框架 | Vue 3 |
| UI 组件库 | Vuetify |
| 构建工具 | Vite |
| 部署平台 | Vercel |

---

## 快速开始

```bash
git clone https://github.com/你的用户名/liminal-home-page.git
cd liminal-home-page
npm install
npm run dev
```

### Vercel 部署

将仓库导入 Vercel 即可自动构建。个性化配置可通过环境变量 `VITE_CONFIG` 注入，无需修改源码。

---

## 个性化配置

编辑 `src/config.js`：

| 配置项 | 说明 |
|---|---|
| `avatar` | 头像图片链接 |
| `welcometitle` | 欢迎标题 |
| `tags` | 个人标签列表 |
| `socialPlatformIcons` | 社交链接，支持 `qq` / `wechat` 字段直接展示联系方式 |
| `projectcards` | 项目卡片，图片可使用 `/img/` 本地路径 |
| `wallpaper` | 可切换壁纸列表（支持 pc / mobile 分别设置） |
| `musicPlayer` | 网易云歌单播放器配置 |

---

## 致谢

原项目作者：[leleo886](https://github.com/leleo886/leleo-home-page)
