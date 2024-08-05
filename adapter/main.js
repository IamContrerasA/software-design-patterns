const AudioPlayer = require('./audioPlayer')

const audioPlayer = new AudioPlayer()

audioPlayer.play('mp3', 'song.mp3') // Output: Playing mp3 file. Name: song.mp3
audioPlayer.play('mp4', 'video.mp4') // Output: Playing mp4 file. Name: video.mp4
audioPlayer.play('vlc', 'movie.vlc') // Output: Playing vlc file. Name: movie.vlc
audioPlayer.play('avi', 'clip.avi') // Output: Invalid media. avi format not supported.
