var click = new Audio('../click.mp3');
var audio = new Audio('audio/home_audio.mp3');

document.getElementById('versionCloseButton').addEventListener('mouseover', function() {
    click.play();
});

document.getElementById('versionCloseButton').addEventListener('click', function() {
    document.getElementById('volumeOff').style.pointerEvents = 'auto';

    document.getElementById('versionModal').style.display = 'none';
    
    audio.play();
    document.getElementById('volumeOff').style.display = 'none';
    document.getElementById('volumeUp').style.display = 'block';
});

document.getElementById("startButton").addEventListener("mouseover", function() {
    click.play();
});

document.getElementById("startButton").addEventListener("click", function() {
    window.location.href = '../edit/edit.html';
});

document.getElementById('howButton').addEventListener('mouseover', function() {
    click.play();
});

document.getElementById('howButton').addEventListener('click', function() {
    window.location.href = '../how/how.html';
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

// version
var version = document.getElementById('versionTextarea');
version.innerHTML = "<ver 1.0>\n최초 배포\n";
version.innerHTML += "\n<ver 1.1>\n홈런 버그 수정\n게임 중 배트, 공 표시\n";
version.innerHTML += "\n<ver 1.2>\n메인 화면 인터페이스 수정\n타격음 추가\n";
version.innerHTML += "\n<ver 1.3>\n각 화면 알림창 생성 및 인터페이스 수정\n";
version.innerHTML += "\n<ver 1.4>\n게임 중 효과음 추가\n";
version.innerHTML += "\n<ver 2.0 예상>\n난이도 조절 및 해설 수정\n";
version.innerHTML += "\n<ver 2.1 예상>\n한 구마다 결과 모달 생성\n";
version.scrollTop = version.scrollHeight;