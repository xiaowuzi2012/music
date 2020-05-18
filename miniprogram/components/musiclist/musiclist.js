Component({
  /**
   * 组件的属性列表
   */
  properties: {
    musiclist: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    playingId: -1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setPlayingMusicId(musicid) {
      this.setData({
        playingId: musicid
      })
    },
    onSelect(event) {
      const dataset = event.currentTarget.dataset
      const musicid = dataset.musicid
      const index = dataset.index
      this.setData({
        playingId: musicid
      })
      wx.navigateTo({
        url: `../../pages/player/player?musicId=${musicid}&index=${index}`,
      })
    }
  }
})