---
layout: post
cTitle: CSS設定中英文不同的字體
category: sass
tagline: CSS3 unicode-range
tags: [css, sass]
cssdemo: 2014-spring
thumbnail: 
published: false
---



Just font中的字型學文章都相當有意思，而有一篇是關於[中英文字搭配](http://blog.justfont.com/2013/12/popular-typography)的問題；其中一段"以 Windows 內建的三種字型為例，表現最好的是微軟正黑體，英文部分採用了微軟的 Segoe UI，粗細與中文較一致"，在目前web中當然也可以有這樣的設定，在中文字中套用"微軟正黑體"，英文套用"Segoe UI"，用的就是`unicode-range`。

<!-- more -->
#### 本篇參考

1. [利用 CSS 分別設定中文字、英數、注音、假名的字體：使用 CSS3 @font-face](http://blog.yorkxin.org/posts/2012/06/17/assign-fonts-for-specific-characters)
2. [大眾字型學(3)：Word 預設中英搭配有什麼問題？](http://blogorg.justfont.com/2013/12/popular-typography/)
3. [Uni-code 字符百科](http://unicode-table.com/cn/)

## 本篇重點

了解`unicode-range`的使用方法。

## 效果展示

`unicode-range`部分效果在Mac OS上測試有問題，不管是Chrome、Safari、Firefox都有點問題...。

<div class="demo d0218">
	<div class="custom-Iam">	
		這一句話只有"我"會被換成黑體
	</div>
</div>

以上面這一段文字為例，在windows內，"我"這一個文字會被替換成微軟正黑體，而其他文字沒有變化。

[https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-range](https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-range)

如果參考Mozilla 的MDN可以了解到，

	unicode-range: U+26               /* 單一字符 */
	unicode-range: U+0025-00FF        /* 範圍字符 */
	unicode-range: U+4??              /* 萬用字符 */
	unicode-range: U+0025-00FF, U+4?? /* 利用','，多選取字符 */

[http://unicode-table.com/cn/](http://unicode-table.com/cn/)

再參考uni code的表，可以查詢各文字的unicode。


用這樣的方式就能夠選取特定的文字，或是語系等等。

	@font-face
		font-family: custom-Iam
		src: local(Heiti TC), local("微軟正黑體"), local("Microsoft JhengHei")
		unicode-range: U+6211

	.custom-Iam
		font-family: custom-Iam












