###
	0. svn 操作（需要简单看看，目前应该操作没什么问题）
	1. 定位参照于什么块来定位
		没有定位：包含块
		相对：元素本来的位置
		绝对：包含块
			如果最近的祖先元素中存在定位元素，则这个定位元素就是包含块
			如果没有，包含块为初始包含块
		固定：视口
	2. 什么是初始包含块
		是一个视窗大小的矩形，不等于视窗
	3. top right bottom left width height 默认值为 auto 不可继承
	4. margin padding 默认值为 0
	5. border-width 默认值 如果不存在 border-style
	6. 百分比参照于谁
		width margin padding：包含块的 width
		height：包含块的 height
		left：包含块的 width
		top：包含块的 height
	7. 浮动
		浮动提升半层
	8. 三列布局
		两边固定，当中自适应
		中间列要完整的显示
		中间列要优先加载
		
		定位
		浮动
		（以上两种方式可以实现，但是不推荐使用）
		（比较推荐一下实现方式）
		圣杯
		双飞翼
	9. margin 为负值（margin 不影响元素的位置）
		负值：将元素的边界往里收
		正值：将元素的边界往外扩
	10. 伪等高布局
	11. fixed
		怎么使用绝对定位来模拟固定定位
		- 禁止系统滚动条
		- 将滚动条加给 body
		- 让 body 的尺寸变为视口的尺寸（height: 100%;）
	