# `flexi-style`

 flexi-style 提供通用布局样式库

## Usage

```
npm install flexi-style -S
```

## Quick Start

导入 css 样式

```
import 'flexi-style/dist/index.css';
// or
import 'flexi-style/dist/index.min.css';
```

导入 scss 样式

```
import 'flexi-style/index.scss';
```

覆盖默认变量

```
// ./variables.scss
/*
* 定义主题色变量
*/
$themeColorMap: (
  primary: #0D6DFD,
  success: #198753,
  warning: #ffc007,
  error: #dd3444,
  info: #12caf0,
) !default;


import 'flexi-style/index.scss';
import './variables.scss'
```

默认variables
```
/*
* 定义主题色变量
*/
$theme-colors: (
  primary: #409eff,
  success: #67c23a,
  warning: #e6a23c,
  error: #f56c6c,
  info: #909399,
) !default;

// 基础色
$white-color: #ffffff !default;
$black-color: #000000 !default;
$transparent-color: transparent !default;

/*
  * 定义文字变量
  * default level: [lighter,light,default,dark,darker]
  */
$text-colors: (
  lighter: #cccccc,
  light: #aaaaaa,
  default: #888888,
  dark: #666666,
  darker: #444444,
) !default;

$line-height: 1.6 !default;
$heading-max-size: 26px !default;


/*
  * 定义边框色变量
  * default level: [lighter,light,default,dark,darker]
  */
$border-colors: (
  lighter: #cccccc,
  light: #aaaaaa,
  default: #888888,
  dark: #666666,
  darker: #444444,
) !default;

/*
  * 定义间距变量
  * default size: [xs,sm,default,md,lg]
  * default value: 16px
  * default offset: 4
  */
$space-offset: 4;
$space: 16px;
$spaces: (
  default: $space,
  xs: $space - $space-offset * 2,
  sm: $space - $space-offset,
  md: $space + $space-offset,
  lg: $space + $space-offset * 2,
) !default;

/*
  * 定义圆角变量
  * default size: [xs,sm,default,md,lg]
  * default value: 6px
  * default offset: 2
  */
$radius-offset: 2;
$radius: 6px;
$radii: (
  default: $radius,
  xs: $radius - $radius-offset * 2,
  sm: $radius - $radius-offset,
  md: $radius + $radius-offset,
  lg: $radius + $radius-offset * 2,
) !default;


$flex-column: 24;

$grid-column: 24;

```