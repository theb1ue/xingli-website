# 苏州猩力科技有限公司官网

[苏州猩力科技](https://xingli-tech.github.io) - 官方网站

## 项目介绍

这是苏州猩力科技有限公司的官方网站，展示公司形象及旗下产品。

### 产品矩阵

- **厨树** - 你的私人厨房管家 (菜谱App)
- **每日蛙** - 每天进步一点点 (外语学习)
- **每日猩球** - 在家也能科学健身 (健身App)

## 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推荐）

1. 创建 `gh-pages` 分支：
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. 在 GitHub 仓库设置中：
   - Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "gh-pages" + "/(root)"
   - 点击 Save

3. 官网将发布在 `https://your-username.github.io/repository-name/`

### 方法二：使用 GitHub Actions 自动部署

1. 在仓库中创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

2. 推送代码后自动部署

### 方法三：手动部署

```bash
# 克隆仓库
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 创建 gh-pages 分支
git checkout --orphan gh-pages

# 删除其他文件，只保留网站文件
git rm -rf .
git rm -rf .gitignore README.md

# 添加网站文件
git add .
git commit -m "Initial commit"

# 推送到 GitHub
git push origin gh-pages
```

## 本地预览

直接在浏览器中打开 `index.html`，或者使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve .
```

然后访问 http://localhost:8000

## 技术栈

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript
- Google Fonts (Outfit, DM Sans)
- 响应式设计

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 许可证

MIT License
