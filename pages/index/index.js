// Page({
//   data: {
//     imgUrls: [
//       'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
//       'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
//       'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
//     ],
//     indicatorDots: false,
//     autoplay: false,
//     interval: 5000,
//     duration: 1000
//   },
//   changeIndicatorDots: function (e) {
//     this.setData({
//       indicatorDots: !this.data.indicatorDots
//     })
//   },
//   changeAutoplay: function (e) {
//     this.setData({
//       autoplay: !this.data.autoplay
//     })
//   },
//   intervalChange: function (e) {
//     this.setData({
//       interval: e.detail.value
//     })
//   },
//   durationChange: function (e) {
//     this.setData({
//       duration: e.detail.value
//     })
//   }
// })
// Page({
//   onReady: function (e) {
//     // 使用 wx.createAudioContext 获取 audio 上下文 context
//     this.audioCtx = wx.createAudioContext('myAudio')
//   },
//   data: {
//     poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
//     name: '此时此刻',
//     author: '许巍',
//     src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
//   },
//   audioPlay: function () {
//     this.audioCtx.play()
//   },
//   audioPause: function () {
//     this.audioCtx.pause()
//   },
//   audio14: function () {
//     this.audioCtx.seek(14)
//   },
//   audioStart: function () {
//     this.audioCtx.seek(0)
//   }
// })

// Page({
//   takePhoto() {
//     const ctx = wx.createCameraContext()
//     ctx.takePhoto({
//       quality: 'high',
//       success: (res) => {
//         this.setData({
//           src: res.tempImagePath
//         })
//       }
//     })
//   },
//   error(e) {
//     console.log(e.detail)
//   }
// })
// Page({
//   formSubmit: function (e) {
//     console.log('form发生了submit事件，携带数据为：', e.detail.value)
//   },
//   formReset: function () {
//     console.log('form发生了reset事件')
//   }
// })

// Page({
//   data: {
//     nodes: [{
//       name: 'div',
//       attrs: {
//         class: 'div_class',
//         style: 'line-height: 60px; color: red;'
//       },
//       children: [{
//         type: 'text',
//         text: 'hahahhahah!'
//       }]
//     }]
//   },
//   tap() {
//     console.log('tap')
//   },
//   start(){
//     console.log('start')
//   },
//   move(){
//     console.log('move')
//   },
//   end(){
//     console.log('end')
//   },
//   cacel(){
//     console.log('cacel')
//   }
// })
// Page({
//   onReady() {
//     const query = wx.createSelectorQuery()
//     query.select('#myCanvas').node().exec((res) => {
//       const canvas = res[0].node
//       const gl = canvas.getContext('webgl')
//       console.log(gl)
//     })
//   }
// })
Page({
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})