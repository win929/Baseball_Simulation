// 클릭 효과음
var click = new Audio('../click.mp3');

// edit.html 배경음악
var audio = new Audio('audio/edit_audio.mp3');

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

    // container 클릭 가능
    document.getElementsByClassName('container')[0].style.pointerEvents = 'auto';
});

// 시작 하기 버튼 클릭 시
document.getElementById('startButton').addEventListener('click', function() {
    // 타자들의 이름
    var batter1 = document.getElementById('batter1').value;
    var batter2 = document.getElementById('batter2').value;
    var batter3 = document.getElementById('batter3').value;
    var batter4 = document.getElementById('batter4').value;
    var batter5 = document.getElementById('batter5').value;
    var batter6 = document.getElementById('batter6').value;
    var batter7 = document.getElementById('batter7').value;
    var batter8 = document.getElementById('batter8').value;
    var batter9 = document.getElementById('batter9').value;

    // 타자들의 이름을 배열에 저장한다.
    var batters = [batter1, batter2, batter3, batter4, batter5, batter6, batter7, batter8, batter9];

    // 타자들의 이름들이 모두 2~4자리의 글자수를 가지고 있는지 확인한다.
    var isBattersValid = true;
    for (var i = 0; i < batters.length; i++) {
        if (batters[i].length < 2 || batters[i].length > 4) {
            isBattersValid = false;
            break;
        }
    }

    // 타자들의 이름 중 하나라도 2~4자리의 글자수를 가지고 있는지 확인
    if (!isBattersValid) {
        alert('선수 이름은 2~4자리로 입력해주세요.');
        return;
    }

    // 팀 이름
    var teamName = document.getElementById('teamNameInput').value;

    // 팀 이름의 값이 2~10자리의 글자수를 가지고 있는지 확인
    if (teamName.length < 2 || teamName.length > 10) {
        alert('팀 이름은 2~10자리로 입력해주세요.');
        return;
    }

    // 팀 약칭
    var teamNickname = document.getElementById('teamAcronymInput').value;

    // 팀 약칭의 값이 2~3자리의 글자수를 가지고 있는지 확인
    if (teamNickname.length < 2 || teamNickname.length > 3) {
        alert('팀 약칭은 2~3자리로 입력해주세요.');
        return;
    }

    // sessionStorage에 팀 이름을 저장한다.
    sessionStorage.setItem('teamName', teamName);

    // sessionStorage에 팀 약칭을 저장한다.
    sessionStorage.setItem('teamNickname', teamNickname);

    // sessionStorage에 선수 이름을 저장한다.
    sessionStorage.setItem('batters', JSON.stringify(batters));

    // sessionStorage에 난이도를 저장한다.
    sessionStorage.setItem('difficulty', document.getElementById('difficulty').value);

    // game.html로 이동
    window.location.href = '../game/game.html';
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