# MALL(商城)

## description:

基于<a href='https://github.com/lin-xin/wxapp-mall'>李鑫的wxapp-mall</a>的实现了本wxmall商城

## improve：

1. 完成了在商品详情页面显示当前购物车数量
2. 添加商品会添加到购物车中

## BUG（未修复）：

1. 在购物车删除商品，购物车的总数不会减少（原因：因为总数是我存在storage中的一个数据，不是购物车数组的数量计算之和。修改成计算之和即可解决这个BUG）

