# SOTRUST 品牌官网规划方案

> 域名：**www.sotrust.net** · 面向北美 · 全英文 · B2B + B2C 兼顾 · 起步阶段（2 个产品，后续扩展）

---

## 一、定位与策略

| 维度 | 决策 | 说明 |
|---|---|---|
| 品牌内核 | "SO + TRUST"（No So, No Trust） | 把"软件(Soft) + 信任(Trust)"作为贯穿全站的主线，差异化于纯硬件厂商 |
| 目标客户 | B2B + B2C 双轨 | 分销商/零售商走询价，个人用户走表单下单 |
| 下单模式 | 询价/表单制起步 | 零支付网关、零库存系统依赖，最快上线；后续平滑升级完整电商 |
| 产品少怎么办 | 用"软件生态"补厚度 | 产品虽少，但"自研驱动 + 固件 + 配套 App"是可大书特书的护城河 |
| 视觉调性 | 极简科技感 + 淡蓝/青色 | 深色底 + 蓝色渐变 + 网格光效，符合北美外设品牌审美（Keychron/NuPhy/Wooting 风格） |
| 正规性传达 | 资质 + 支持 + 联系方式 | 首页 trust strip、明确的 Warranty/Support/About、真实联系方式 |

---

## 二、站点地图（Site Map）

```
www.sotrust.net
├── Home (首页)                    # 品牌叙事 + 产品概览 + 软件生态 + CTA
├── Products (产品中心)
│   ├── S68 Magnetic Keyboard     # 产品详情页
│   └── U350 USB Drive            # 产品详情页
│   └── (后续新品自动归档)
├── Software (软件/下载)
│   ├── Driver Suite              # 驱动下载
│   ├── Firmware Updates          # 固件
│   └── Companion Apps            # 磁轴钢琴等 App
├── Partners (合作伙伴 / B2B 入口)
│   ├── Distributors              # 分销政策、MOQ、批发价、定制包装
│   └── Esports & Teams           # 战队/大学电竞合作
├── Support (支持)
│   ├── Downloads                 # 驱动/固件/说明书
│   ├── Warranty                  # 保修政策
│   └── FAQ                       # 常见问题
├── About (关于我们)
│   ├── Brand Story               # SO + TRUST 故事
│   └── Contact                   # 联系方式
└── Get a Quote / Contact (询价)   # 全站 CTA 汇聚点
```

---

## 三、页面结构与文案框架（英文）

### 1. Home（首页）
| 区块 | 内容要点 |
|---|---|
| Hero | 主标题 "Precision Magnetic Keyboards & High-Speed Storage"，副标题强调 software ecosystem，CTA "Request a Quote" |
| Trust strip | Hall-Effect Switches / In-House Software / North America Ready |
| Products | 两个产品卡片 + 关键规格（自研轴、可调行程、双接口金属盘） |
| Software | 三张卡：Driver Suite / Magnetic Piano App / Firmware Updates |
| Buyers | 三条路径：分销商 / 电竞战队 / 个人客户 |
| CTA + 表单 | 询价表单（姓名、邮箱、公司、身份、需求） |

### 2. Product 详情页（每个产品一页）
- 主图 + 多角度图 + 规格表
- 差异化卖点（键盘：Rapid Trigger、可调触发点；U盘：双接口、金属旋转）
- 软件联动区块（"由 SOTRUST Driver 驱动"）
- CTA：Request Specs / Request Quote

### 3. Software（下载中心）
- 驱动/固件/App 下载（带版本号、更新日志）
- 软件即差异化 —— 每个下载项配说明

### 4. Partners（B2B）
- 分销商：批发价、MOQ、定制品牌/包装、专属客户经理
- 电竞：战队批量、大学电竞、快速触发性能
- 明确的分销询价表单

### 5. Support / About
- Warranty、FAQ、下载、联系方式
- About 讲品牌故事（SO + TRUST 哲学）

---

## 四、技术选型

| 决策点 | 推荐方案 | 理由 |
|---|---|---|
| 建站方式 | **静态站点 + 表单后端**（起步） | 产品少、无需 CMS 复杂度；部署快、成本低、SEO 友好 |
| 推荐栈 | Astro / Next.js（静态导出）或纯 HTML | 科技感自定义 UI 灵活；后续扩展组件化 |
| 询价表单 | Formspree / Web3Forms / 自建 API | 免后端直接收邮件；或接 Zoho（已有账号） |
| 部署 | Vercel / Netlify / Cloudflare Pages | 免费、全球 CDN（北美访问快）、自动 HTTPS |
| 域名 | sotrust.net（已定） | 解析到托管平台即可 |
| 后续升级电商 | Shopify / WooCommerce | 产品扩展 + 需要在线支付时平滑迁移，数据结构先预留 |
| 分析 | Google Analytics 4 + Search Console | 追踪北美流量来源，指导后续投放 |
| SEO | 结构化数据(Product schema)、sitemap.xml | Product schema 让 Google 显示星级/价格，提升点击率 |

**关键预留**：URL 结构、产品分类、SKU 命名现在就要规范（如 `/products/s68-keyboard`），避免后续迁移返工。

---

## 五、正规性与信任感设计（产品少也要"显正规"）

1. **资质与认证区**：FCC/CE/RoHS 认证标志（如已取得）、公司实体信息
2. **真实联系方式**：企业邮箱（Zoho）、北美联系地址/电话、响应时间承诺
3. **明确的 Warranty & Support 页面**：保修期、退换政策、联系方式
4. **软件下载中心**：版本号 + 更新日志，体现"活着的产品"
5. **About 页**：品牌故事 + 团队 + 价值观，而非空壳
6. **用户评价/案例**（后续）：分销商/战队合作案例
7. **法务页**：Privacy Policy、Terms of Service（北美合规必需）

---

## 六、上线路线图

| 阶段 | 交付内容 | 周期参考 |
|---|---|---|
| **Phase 1 — MVP** | 首页 + 2 产品详情 + 询价表单 + About/Contact + 基础 SEO | 1–2 周 |
| **Phase 2 — 完善** | Software 下载中心、Support（Warranty/FAQ）、法务页、GA4 接入 | 1 周 |
| **Phase 3 — B2B** | Partners 页深化、分销政策、定制包装案例、专属表单 | 1 周 |
| **Phase 4 — 扩展** | 新产品上线、用户评价、多语言预留、电商支付（可选） | 持续 |

---

## 七、下一步建议

1. **补齐产品素材**：S68 键盘、U350 U盘的官方产品图（白底/多角度）、规格表、认证信息 —— 这是正式上线前的关键素材
2. **确认软件清单**：Driver Suite / 磁轴钢琴 App / 固件的具体名称、版本、下载包
3. **确定品牌视觉资产**：Logo（高清 SVG/PNG）、品牌色值、字体
4. **明确公司实体信息**：公司名、地址、联系方式（用于 About/Contact/法务页）
5. **先预览首页原型** → 确认方向 → 逐页落地

---

*首页原型已生成：`sotrust-site/index.html`，可在浏览器直接预览，或部署为在线预览。*
