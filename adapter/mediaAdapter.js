const MediaPlayer = require('./mediaPlayer')
const Mp4Player = require('./mp4Player')
const VlcPlayer = require('./vlcPlayer')

class MediaAdapter extends MediaPlayer {
  constructor(audioType) {
    super()
    if (audioType === 'mp4') {
      this.advancedMusicPlayer = new Mp4Player()
    } else if (audioType === 'vlc') {
      this.advancedMusicPlayer = new VlcPlayer()
    }
  }

  play(audioType, fileName) {
    if (audioType === 'mp4') {
      this.advancedMusicPlayer.playMp4(fileName)
    } else if (audioType === 'vlc') {
      this.advancedMusicPlayer.playVlc(fileName)
    }
  }
}

module.exports = MediaAdapter
