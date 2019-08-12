Page({
  data: {
    components: [
      {
        title: '营销组件',
        children: [
          {
            id: 'wheel',
            url: '/pages/wheel/index',
            name: '大转盘'
          },
          {
            id: 'gridCard',
            url: '/pages/gridCard/index',
            name: '九宫格翻牌'
          },
          {
            id: 'picketRain',
            url: '/pages/packetRain/index',
            name: '红包雨'
          }
        ]
      },
      {
        title: '页面demo',
        children: [
          {
            id: 'filter',
            url: '/pages/filter/index',
            name: '筛选'
          },
          {
            id: 'saveImgs',
            url: '/pages/saveImgs/index',
            name: '保存多张图片'
          }
          // {
          //   id: 'touchMove',
          //   url: '/pages/touchMove/index',
          //   name: '拖拽'
          // },
        ]
      }
    ]
  },
  /* 转发*/
  onShareAppMessage: function(ops) {
    return {
      title: 'soul-weapp组件',
      path: '/pages/index/index',
      imageUrl: '../../assets/qrcode.png'
    }
  }
})
