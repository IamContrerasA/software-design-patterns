const MediaPlayer = require('./mediaPlayer')
const MediaAdapter = require('./mediaAdapter')

class AudioPlayer extends MediaPlayer {
  play(audioType, fileName) {
    if (audioType === 'mp3') {
      console.log(`Playing mp3 file. Name: ${fileName}`)
    } else if (audioType === 'mp4' || audioType === 'vlc') {
      const adapter = new MediaAdapter(audioType)
      adapter.play(audioType, fileName)
    } else {
      console.log(`Invalid media. ${audioType} format not supported.`)
    }
  }
}

module.exports = AudioPlayer
