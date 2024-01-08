/*
 * @Author: Leo.wang wanglizhigs@163.com
 * @Date: 2023-11-02 11:22:43
 * @LastEditors: Leo.wang wanglizhigs@163.com
 * @LastEditTime: 2023-11-02 11:22:50
 * @FilePath: /VoxGS/packages/nuclear-style/ gulpfile.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 先npm安装这四个包
const gulp = require('gulp');
const gulpSass = require('gulp-sass');

const dartSass = require('sass');

const minifyCss = require('gulp-clean-css');
const renameCss = require('gulp-rename');

// gulp创建任务
gulp.task('sass', function () {
  const sass = gulpSass(dartSass);
  return gulp
    .src('./index.scss') // 编写的scss文件路径
    .pipe(sass()) //将scss编译成css
    .pipe(renameCss('index.css')) //重命名压缩后的css
    .pipe(gulp.dest('dist')) //未压缩的css存放目录
    .pipe(minifyCss()) //压缩css
    .pipe(renameCss('index.min.css')) //重命名压缩后的css
    .pipe(gulp.dest('dist')); //压缩后的css存放位置
});
