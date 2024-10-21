let vid = document.getElementById("iMakeYouCryWhenIRunaway")

async function captureScreen() {
    let mediaStream = null;
    try {
        mediaStream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                cursor: "always"
            },
            audio: true
        });
        console.log(vid)
        vid.srcObject = mediaStream;
    } catch (ex) {
        console.log("Error occurred", ex);
    }
}

