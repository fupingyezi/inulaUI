import { defineConfig } from 'dumi';
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: ({
    name: 'InulaUI',
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: '组件',
        link: '/components/button',
      },
      {
        title: '更新日志',
        link: '/changelog',
      },
      {
        title: '贡献指南',
        link: '/contributing',
      },
    ],
    sidebar: {
      '/components': [
        {
          title: 'Basic 基础组件',
          children: [
            { title: 'Button 按钮', link: '/components/button' },
            // { title: 'Icon 图标', link: '/components/icon' },
            // { title: 'FloatButton 悬浮按钮', link: '/components/floatbutton' },
            { title: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
          ],
        },
        {
          title: 'Feedback 反馈组件',
          children: [
            // { title: 'Message 全局提示', link: '/components/message' },
            // { title: 'Dialog 对话框', link: '/components/dialog' },
            // { title: 'Tooltip 文字提示', link: '/components/tooltip' },
          ],
        },
        {
          title: 'Form 表单组件',
          children: [
            // { title: 'Input 输入框', link: '/components/input' },
            // { title: 'Checkbox 多选框', link: '/components/checkbox' },
            // { title: 'Radio 单选框', link: '/components/radio' },
            // { title: 'Select 选择器', link: '/components/select' },
            // { title: 'InputTag 标签输入', link: '/components/inputtag' },
            // { title: 'InputNumber 数字输入', link: '/components/inputnumber' },
            // { title: 'Rate 评分', link: '/components/rate' },
            // { title: 'Foo', link: '/components/Foo' },
          ],
        },
        {
          title: 'Data 数据展示',
          children: [
            // { title: 'Progress 进度条', link: '/components/progress' },
            // { title: 'Tree 树形控件', link: '/components/tree' },
          ],
        },
      ],
    },
  }),
});
