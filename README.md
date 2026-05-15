# 婴儿生长曲线图

0-24个月婴儿身高、体重、BMI追踪工具，支持中国标准和WHO标准对比。

## 功能特点

- **多标准切换**：支持中国标准（WS/T 423-2022）和WHO标准（2006版）
- **三项指标追踪**：身高、体重、BMI曲线
- **性别区分**：专为男孩和女孩设计的生长曲线
- **数据可视化**：基于Chart.js的交互式图表
- **百分位/Z值计算**：根据输入数据自动计算所处的百分位或Z值
- **PWA支持**：可安装到桌面/手机，离线使用
- **响应式设计**：适配桌面和移动设备

## 数据标准

### 中国标准
- 来源：中华人民共和国卫生行业标准 WS/T 423-2022
- 百分位：P3, P10, P25, P50, P75, P90, P97

### WHO标准
- 来源：世界卫生组织(WHO) 2006年发布的0-2岁儿童生长标准
- Z-scores：-3SD, -2SD, -1SD, Median, +1SD, +2SD, +3SD

## 使用方法

1. 选择性别（男孩/女孩）
2. 选择标准（🇨🇳 中国标准 / 🌍 WHO标准）
3. 输入宝宝的月龄、身高、体重
4. 点击"添加记录"保存数据
5. 查看图表了解生长趋势

## 技术栈

- HTML5 + CSS3
- Chart.js（图表渲染）
- Service Worker + Web App Manifest（PWA支持）

## 运行方式

直接用浏览器打开 `index.html` 即可使用。

## 项目结构

```
├── index.html              # 主页面
├── manifest.json           # PWA配置文件
├── sw.js                   # Service Worker（离线支持）
├── data/
│   ├── who-standards.js    # WHO生长标准数据
│   └── china-standards.js  # 中国生长标准数据
└── README.md
```

## 数据来源

- WHO标准: https://www.who.int/toolkits/child-growth-standards/standards/length-height-for-age
- 中国标准: https://www.nhc.gov.cn/wjw/c100311/202211/923e7646561d4b88b72da9097d4da4d5.shtml

## 提示

生长曲线仅供参考，如有疑问请咨询儿科医生。