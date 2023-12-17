// 클릭 효과음
var click = new Audio('../click.mp3');

// home.html 배경음악
var audio = new Audio('audio/home_audio.mp3');

// 버튼에 마우스를 올릴 때
function mouseOver() {
    // 클릭 효과음 재생
    click.play();
}

// versionCloseButton 클릭 시
document.getElementById('versionCloseButton').addEventListener('click', function() {
    // versionModal 숨기기
    document.getElementById('versionModal').style.display = 'none';
    
    // 배경음악 재생
    audio.play();
    
    // volumeOff -> volumeOn 이미지 변경
    document.getElementById('volumeOff').style.display = 'none';
    document.getElementById('volumeOn').style.display = 'block';

    // volumeOff, volumeOn 클릭 가능
    document.getElementById('volumeOff').style.pointerEvents = 'auto';
});

// 게임 시작 버튼 클릭 시
document.getElementById("startButton").addEventListener("click", function() {
    // edit.html로 이동
    window.location.href = '../edit/edit.html';
});

// 게임 설명 버튼 클릭 시
document.getElementById('howButton').addEventListener('click', function() {
    // how.html로 이동
    window.location.href = '../how/how.html';
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

// version
var version = document.getElementById('versionTextarea');
version.innerHTML = "<ver 1.0>\n최초 배포\n";
version.innerHTML += "\n<ver 1.1>\n홈런 버그 수정\n게임 중 배트, 공 표시\n";
version.innerHTML += "\n<ver 1.2>\n메인 화면 인터페이스 수정\n타격음 추가\n";
version.innerHTML += "\n<ver 1.3>\n각 화면 알림창 생성 및 인터페이스 수정\n";
version.innerHTML += "\n<ver 1.4>\n게임 중 효과음 추가\n";
version.innerHTML += "\n<ver 2.0>\n대규모 난이도 조절\n";
version.innerHTML += "\n<ver 2.1>\n타자 결과 표시\n";
version.scrollTop = version.scrollHeight;
