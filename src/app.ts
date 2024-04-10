class AudioPlayer {
    playAudio(file: string) {
        console.log("Playing audio file: " + file);
    }
}

class VideoPlayer {
    playVideo(file: string) {
        console.log("Playing video file: " + file);
    }
}

class MultimediaFacade {
    private audioPlayer: AudioPlayer;
    private videoPlayer: VideoPlayer;

    constructor() {
        this.audioPlayer = new AudioPlayer();
        this.videoPlayer = new VideoPlayer();
    }

    playAudio(file: string) {
        this.audioPlayer.playAudio(file);
    }

    playVideo(file: string) {
        this.videoPlayer.playVideo(file);
    }
}

// Використання фасаду для відтворення аудіо та відео
const multimediaFacade = new MultimediaFacade();
multimediaFacade.playAudio("song.mp3");
multimediaFacade.playVideo("movie.mp4");
