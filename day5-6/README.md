* 盒子模型

  网页布局中，由各种盒子组成，对相应盒子进行布局设置，形成整个网页效果

* inline、block和inline-block的概念

  inline：不会换行，高度宽度没有用，设置边距时不会挤开盒子

  block：会换行，高度宽度有用，设置边距会撑开盒子

  inline-block：不会换行，可以输入值高度宽度，设置边距会撑开盒子

* 内外边距，宽度，高度，box-sizing等属性

  margin，padding，width，height

  box-sizing是用来表示盒子的宽高计算问题，

  box-sizing：content-box 设定盒子的宽高没有包含边距

  box-sizing：border-box 设定的宽高包含了边距，内部的内容占据空间就小一点

* 浮动，清除浮动

  设置浮动的盒子，不占空间，会飘起来，如果有其他div就会占据这个位置

  清除浮动，有clear：left/right/both

* 如何使用浮动进行布局

  用于多块操作，可以使块元素浮起来