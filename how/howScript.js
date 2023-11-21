// 클릭 효과음
var click = new Audio('../click.mp3');

// how.html 배경음악
var audio = new Audio('audio/how_audio.mp3');

// 버튼에 마우스를 올릴 때
function mouseOver() {
    // 클릭 효과음 재생
    click.play();
}

// modalCloseButton 클릭 시
document.getElementById('modalCloseButton').addEventListener('click', function() {   
    // 모달 숨기기
    document.getElementById('okModal').style.display = 'none';
    
    // 배경음악 재생
    audio.play();

    // volumeOff -> volumeOn 이미지 변경
    document.getElementById('volumeOff').style.display = 'none';
    document.getElementById('volumeOn').style.display = 'block';

    // volumeOff, volumeOn 클릭 가능
    document.getElementById('volumeOff').style.pointerEvents = 'auto';

    // 뒤로 가기 버튼 클릭 가능
    document.getElementById('backButton').style.pointerEvents = 'auto';
});

// 뒤로 가기 버튼 클릭 시
document.getElementById('backButton').addEventListener('click', function() {
    // home.html로 이동
    history.back();
});

// volumeOff 클릭 시
document.getElementById('volumeOff').addEventListener('click', function() {
    // 배경음악 재생
    audio.play();

    // volumeOff -> volumeOn 이미지 변경
    document.getElementById('volumeOff').style.display = 'none';
    document.getElementById('volumeOn').style.display = 'block';
});

// volumeOn 클릭 시
document.getElementById('volumeOn').addEventListener('click', function() {
    // 배경음악 중지
    audio.pause();

    // volumeOn -> volumeOff 이미지 변경
    document.getElementById('volumeOn').style.display = 'none';
    document.getElementById('volumeOff').style.display = 'block';
});