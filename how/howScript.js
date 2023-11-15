var click = new Audio('../click.mp3');
var audio = new Audio('audio/how_audio.mp3');

document.getElementById('backButton').addEventListener('mouseover', function() {
    click.play();
});

document.getElementById('backButton').addEventListener('click', function() {
    history.back();
});

document.getElementById('modalCloseButton').addEventListener('mouseover', function() {
    click.play();
});

document.getElementById('modalCloseButton').addEventListener('click', function() {
    document.getElementById('okModal').style.display = 'none';
    
    audio.play();

    document.getElementById('volumeOff').style.display = 'none';
    document.getElementById('volumeUp').style.display = 'block';

    document.getElementsByClassName('container')[0].style.pointerEvents = 'auto';
});

document.getElementById('volumeOff').addEventListener('click', function() {
    // home_audio.mp3 재생
    audio.play();

    // volumeOff 이미지 변경
    document.getElementById('volumeOff').style.display = 'none';
    document.getElementById('volumeUp').style.display = 'block';
});

document.getElementById('volumeUp').addEventListener('click', function() {
    // home_audio.mp3 중지
    audio.pause();

    // volumeUp 이미지 변경
    document.getElementById('volumeUp').style.display = 'none';
    document.getElementById('volumeOff').style.display = 'block';
});