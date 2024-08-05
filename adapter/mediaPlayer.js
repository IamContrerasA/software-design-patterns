class MediaPlayer {
  play(audioType, fileName) {
    throw new Error('This method should be overridden!')
  }
}

module.exports = MediaPlayer
