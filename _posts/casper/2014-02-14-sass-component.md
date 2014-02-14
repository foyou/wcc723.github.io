---
layout: post
cTitle: Sass 模組開發
category: sass
tagline: sass沒有極限
tags: [css, sass]
cssdemo: spring
thumbnail: 2014-02-14_152727.png
published: false
---

最近社群上有人分享了一個連結，是關於sass模組製作的教學，大致看了一下，發現和我的方式頗為接近，所以就在這介紹我的Sass模組開發方式。

[http://www.sitepoint.com/sass-component-10-minutes/](http://www.sitepoint.com/sass-component-10-minutes/)

<!-- more -->

## 本篇重點

以按鈕模組為例，示範Sass模組開發。

## 效果展示

<div class="demo d0214">
	<a href="#" class="btn-default">btn-default</a>
</div>

<div class="demo d0214">
	<a href="#" class="demo-btn">demo-btn</a>
	<a href="#" class="demo-btn Validation">demo-btn Validation</a>
	<a href="#" class="demo-btn Error">demo-btn Error</a>
	<a href="#" class="demo-btn Warning">demo-btn Warning</a>
	<a href="#" class="demo-btn Information">demo-btn Information</a>
</div>

	<a href="#" class="demo-btn">demo-btn</a>
	<a href="#" class="demo-btn Validation">demo-btn Validation</a>
	<a href="#" class="demo-btn Error">demo-btn Error</a>
	<a href="#" class="demo-btn Warning">demo-btn Warning</a>
	<a href="#" class="demo-btn Information">demo-btn Information</a>

以上是分為兩組的範例，上面那一組是模組預設值，而下方這組是透過`變數`以及`@each`來快速產生，透過這個方式，可以有效的管理CSS程式碼，以及增加開發速度。

## 模組開發流程

首先，分為兩個部分，一個是共通的屬性，另一部份是可變動的屬性；共通部分就是基本的格式，也是模組最基礎的屬性，
可變動的可以如顏色