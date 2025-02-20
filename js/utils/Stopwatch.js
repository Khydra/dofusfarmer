export class Stopwatch {
    constructor(initialSeconds = 0) {
        this.currentTime = initialSeconds * 1000;
        this.interval = null;
        this.running = false;

        this.start();
    }

    start() {
        if (!this.running && this.currentTime > 0) {
            this.interval = setInterval(() => {
                this.currentTime -= 1000;
                console.log(this.currentTime);
                if (this.currentTime <= 0) {
                    this.stop();
                }
              }, 1000);
            this.running = true;
        }
    }

    stop() {
        clearInterval(this.interval);
        this.running = false;
        this.currentTime = 0;
        this.destroy();
    }

    pause() {
        if (this.running) {
          clearInterval(this.interval);
          this.running = false;
        }
    }

    reset(initialSeconds = 0) {
        clearInterval(this.interval);
        this.currentTime = initialSeconds * 1000;
        this.running = false;
    }

    destroy() {
        if (this.interval) { clearInterval(this.interval); }
        this.running = false;
        this.currentTime = 0;
        this.interval = null;
        console.log("Stopwatch destroyed");
    }
}

// To start: stopwatch.start()
// To pause: stopwatch.pause()
// To reset with new time: stopwatch.reset(10)
