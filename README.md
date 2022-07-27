## 低代码平台
- 发布平台 (ly-lowcode-publish-platform)
  - 组件版本控制（生产/测试版本）
  - 组件代码审核
  - 可跳转组件开发工作台查看代码
  - 组合组件（模块）管理
  - 框架和组件使用模块联邦方式独立发布
  - 公共级工具函数和请求响应中间件代码评审和发布
- 组件开发工作台 (ly-lowcode-component-editor)
  - 允许开发者选择react、vue等不同框架编写组件和组件表单
  - 实现组件、组件控制表单预览
- 低代码开发工作台 (ly-lowcode-editor) 
  `低代码平台下所有的模块使用模块方式解耦，低代码开发平台做版本控制可插拔接入模块和模块的版本`
  - 基础组件库 （@ly-lowcode/component-tree）
    - 测试/生产环境从组件发布平台获取可用组件
    - 组件问题反馈区
    - 组件不满足需求时可引导开发者跳转组件开发工作台，开发自定义组件
    - 当组件存在新版本时，提示用户当前使用的是旧版本组件，若需要切换为新版本相关的逻辑编排和组件都会被重置
  - 项目区域 (@ly-lowcode/project-tree)
    - 项目区分为页面设计和自定义组合组件设计
    - 组合组件（物料）可发布，可选是否关联逻辑编排
    - 可点击页面、组合组件、模板查看关联的逻辑
    - 模板与物料类似，区别模板属于页面级
  - 大纲树 (@ly-lowcode/outline)
    - 显示当前页面的基础组件结构
  - 静态资源 (@ly-lowcode/static-tree)
    - 配置项目依赖的外部资源或上传静态资源（图片，JS，CSS）等，默认增加hash值（使用CDN强缓存）
  - 逻辑编排工作台 (@ly-lowcode/logic-editor)
    - 使用 ANTV 以流程图方式编写页面和组合组件逻辑
    - 支持按组件、按页面、按组合组件过滤查看关联的逻辑
    - 使用逻辑编排完成（UI事件、数据源、数据绑定、页面数据存储等逻辑）
    - 使用数据绑定快捷完成逻辑编排
  - 数据源 (@ly-lowcode/datasources)
    - 根据swagger获取后端接口数据源
    - 数据mock，前端自定义接口
    - 公共请求响应拦截中间件（MP1、2、3）
    - 自定义请求响应拦截中间件（可发布为公共级）
    - 开发/测试/生产环境接口配置
  - 工具函数库 (@ly-lowcode/utils-library)
    - 项目级
      - 可封装项目内自定义的工具函数，在组件开发工作台直接使用
      - 可发布为公共级工具函数
    - 公共级
      - 浮点数、大数值运算
      - 常用的加解密方法
      - 日期、数值格式化
      - 正则校验规则
      - 数据类型转化，深浅拷贝
  - 画布区 (@ly-lowcode/canvas-panel)
    - 画布提供PC、移动端，缩放展示
    - 布局提供布局模式和预览模式（参考imgCook）
    - 提供鼠标多选组件
    - 封装组件操作逻辑
  - 控制面板 (@ly-lowcode/control-panel)
    - 真机预览
    - 提供开发/测试/生产环境预览发布（生产发布需要审核）
    - 项目保存导出
    - 提供上一步下一步，回退撤销功能
    - 提供全屏、多屏操作界面
  - 骨架屏模块 (@ly-lowcode/skeleton)
    - 导入骨架屏图片生成页面级骨架屏
    - 提供骨架屏图片生成工具
  - AI模块 (@ly-lowcode/ai)
    - AI模块提供根据视觉稿和图片生成代码（参考imgCook）
  - 行为数据埋点模块 (@ly-lowcode/page-event-sdk)
    - 内嵌行为数据埋点SDK，统计页面访问事件（页面级PV、UV）（元素点击、曝光、结果、键盘事件）
  - 页面性能分析模块 (@ly-lowcode/page-performance-sdk)
    - 搜集上报页面性能数据
  - 页面级报错检测模块 (@ly-lowcode/error-monitoring-sdk)
    - 搜集上报页面代码报错、资源报错、接口报错信息
  - 自动化测试方案 (@ly-lowcode/auto-test)