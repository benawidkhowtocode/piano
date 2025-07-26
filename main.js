const blackKeysText = ['Ab', 'Bb', '', 'Db', 'Eb', '', 'Fs'];
const whiteKeysText = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const blackKeysKBText = ['R', 'T', '', 'U', 'I', '', 'P'];
const whiteKeysKBText = ['F', 'G', 'H', 'J', 'K', 'L', ';'];

const blackKeysStartTime = [
    1.8, 1.9, 0, 2, 2, 0, 2,
    1.8, 1.8, 0, 1.95, 2, 0, 2,
    1.8, 2, 0, 1.8, 1.8, 0, 1.8,
    1.8
];
const whiteKeysStartTime = [
    1.8, 1.8, 1.8, 1.8, 1.8, 1.5, 1.5,
    2, 1.5, 1.5, 1.5, 1.5, 1.7, 1.5,
    1.5, 1.5, 1.8, 2.5, 2, 1.6, 1.8
];

const songNotes = [
    { note: '5E', time: 0, duration: 0.55 },
    { note: '5Eb', time: 1, duration: 0.55 },
    { note: '5E', time: 2, duration: 0.55 },
    { note: '5Eb', time: 3, duration: 0.55 },
    { note: '5E', time: 4, duration: 0.55 },
    { note: '4B', time: 5, duration: 0.55 },
    { note: '5D', time: 6, duration: 0.55 },
    { note: '5C', time: 7, duration: 0.55 },
    { note: '4A', time: 8, duration: 1.1 },
    { note: '4C', time: 9, duration: 0.55 },
    { note: '4E', time: 10, duration: 0.55 },
    { note: '4A', time: 11, duration: 0.55 },
    { note: '4B', time: 12, duration: 0.55 },
    { note: '4E', time: 13, duration: 0.55 },
    { note: '4Ab', time: 14, duration: 0.55 },
    { note: '4B', time: 15, duration: 0.55 },
    { note: '5C', time: 16, duration: 0.55 },
    { note: '4E', time: 17, duration: 0.55 },
    { note: '5E', time: 18, duration: 0.55 },
    { note: '5Eb', time: 19, duration: 0.55 },
    { note: '5E', time: 20, duration: 0.55 },
    { note: '5Eb', time: 21, duration: 0.55 },
    { note: '5E', time: 22, duration: 0.55 },
    { note: '4B', time: 23, duration: 0.55 },
    { note: '5D', time: 24, duration: 0.55 },
    { note: '5C', time: 25, duration: 0.55 },
    { note: '4A', time: 26, duration: 0.55 },
    { note: '4C', time: 27, duration: 0.55 },
    { note: '4E', time: 28, duration: 0.55 },
    { note: '4A', time: 29, duration: 0.55 },
    { note: '4B', time: 30, duration: 0.55 },
    { note: '4E', time: 31, duration: 0.55 },
    { note: '5C', time: 32, duration: 0.55 },
    { note: '4B', time: 33, duration: 0.55 },
    { note: '4A', time: 34, duration: 0.55 },
    { note: '4B', time: 35, duration: 0.55 },
    { note: '5C', time: 36, duration: 0.55 },
    { note: '5D', time: 37, duration: 0.55 },
    { note: '5E', time: 38, duration: 0.55 },
    { note: '4G', time: 39, duration: 0.55 },
    { note: '5F', time: 40, duration: 0.55 },
    { note: '5E', time: 41, duration: 0.55 },
    { note: '5D', time: 42, duration: 0.55 },
    { note: '5F', time: 43, duration: 0.55 },
    { note: '5E', time: 44, duration: 0.55 },
    { note: '5D', time: 45, duration: 0.55 },
    { note: '5C', time: 46, duration: 0.55 },
    { note: '5E', time: 47, duration: 0.55 },
    { note: '5D', time: 48, duration: 0.55 },
    { note: '5C', time: 49, duration: 0.55 },
    { note: '4B', time: 50, duration: 0.55 },
    { note: '4E', time: 51, duration: 0.55 },
    { note: '5Eb', time: 52, duration: 0.55 },
    { note: '5E', time: 53, duration: 0.55 },
    { note: '5Eb', time: 54, duration: 0.55 },
    { note: '5E', time: 55, duration: 0.55 },
    { note: '4B', time: 56, duration: 0.55 },
    { note: '5D', time: 57, duration: 0.55 },
    { note: '5C', time: 58, duration: 0.55 },
    { note: '4A', time: 59, duration: 0.55 },
    { note: '4C', time: 60, duration: 0.55 },
    { note: '4E', time: 61, duration: 0.55 },
    { note: '4A', time: 62, duration: 0.55 },
    { note: '4B', time: 63, duration: 0.55 },
    { note: '4E', time: 64, duration: 0.55 },
    { note: '4Ab', time: 65, duration: 0.55 },
    { note: '4B', time: 66, duration: 0.55 },
    { note: '5C', time: 67, duration: 0.55 },
    { note: '4E', time: 68, duration: 0.55 },
    { note: '5C', time: 69, duration: 0.55 },
    { note: '4B', time: 70, duration: 0.55 },
    { note: '4A', time: 71, duration: 0.55 },
];

const gameStartOffset = 20;

let currentOctave = 4;
let gameStartTime = 0;
let songDuration = 80;
let checkGameEndInterval;
let checkScoreInterval;

let currentGameNoteToPlay;
let score = 0;

// this is to create the piano keys
function setupPiano() {
    const piano = document.getElementsByClassName('piano-keys')[0];
    const blackKeysContainer = piano.getElementsByClassName('black-keys')[0];
    const whiteKeysContainer = piano.getElementsByClassName('white-keys')[0];

    // create the black keys    //when i = 7, octave: 3+1=4
    for (let i = 0; i < 22; i++) {  //starts keyboard at base octave 3 //there are 7 notes in each octve
        const octave = 3 + parseInt(i / 7); //to assign the correct octave number to each key (black or white) when creating the piano layout.
        const blackKey = document.createElement('div');
        const key = blackKeysText[i % 7];
        blackKey.innerText = blackKeysKBText[i % 7];
        blackKey.classList = "keys octave-" + octave;

        // add audio file
        if (key != '') {
            const audio = document.createElement('audio');
            audio.src = './audio/' + octave + key + '.mp3';
            audio.classList = i;
            audio.id = octave + key;
            blackKey.appendChild(audio);

            // click to play
            blackKey.onclick = handleClickedKey;
        }

        blackKeysContainer.appendChild(blackKey);
    }

    // create the white keys
    for (let i = 0; i < 21; i++) {
        const octave = 3 + parseInt(i / 7);
        const whiteKey = document.createElement('div');
        const key = whiteKeysText[i % 7];
        whiteKey.innerText = whiteKeysKBText[i % 7];
        whiteKey.classList = "keys octave-" + octave;

        // add audio file
        if (key != '') {
            const audio = document.createElement('audio');
            audio.src = './audio/' + octave + key + '.mp3';
            audio.classList = i;
            audio.id = octave + key;
            whiteKey.appendChild(audio);

            // click to play
            whiteKey.onclick = handleClickedKey;
        }
        whiteKeysContainer.appendChild(whiteKey);
    }

    document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
    const piano = document.getElementsByClassName('piano-keys')[0];

    // ensure that the keys are not play repeatedly when held down
    if (event.repeat) return;

    // switch octave
    if (event.code == 'Digit1' || event.code == 'Digit2' || event.code == 'Digit3') {
        switch (event.code) {
            case 'Digit1':
                currentOctave = 3;
                break;
            case 'Digit2':
                currentOctave = 4;
                break;
            case 'Digit3':
                currentOctave = 5;
                break;
        }
        piano.classList = 'piano-keys octave-' + currentOctave;
    } else {
        switch (event.code) {
            // black keys
            case 'KeyR':
                playAudio(document.getElementById(currentOctave + 'Ab'));
                break;
            case 'KeyT':
                playAudio(document.getElementById(currentOctave + 'Bb'));
                break;
            case 'KeyU':
                playAudio(document.getElementById(currentOctave + 'Db'));
                break;
            case 'KeyI':
                playAudio(document.getElementById(currentOctave + 'Eb'));
                break;
            case 'KeyP':
                playAudio(document.getElementById(currentOctave + 'Fs'));
                break;

            // white keys
            case 'KeyF':
                playAudio(document.getElementById(currentOctave + 'A'));
                break;
            case 'KeyG':
                playAudio(document.getElementById(currentOctave + 'B'));
                break;
            case 'KeyH':
                playAudio(document.getElementById(currentOctave + 'C'));
                break;
            case 'KeyJ':
                playAudio(document.getElementById(currentOctave + 'D'));
                break;
            case 'KeyK':
                playAudio(document.getElementById(currentOctave + 'E'));
                break;
            case 'KeyL':
                playAudio(document.getElementById(currentOctave + 'F'));
                break;
            case 'Semicolon':
                playAudio(document.getElementById(currentOctave + 'G'));
                break;
        }
    }
}

function handleClickedKey(event) {
    const keyElement = event.target;    //get the element where the event occured
    const audioElement = keyElement.getElementsByTagName('audio')[0];
    playAudio(audioElement);
}

function playAudio(audioElement) {
    checkScore(audioElement.id);
    const isWhiteKey = audioElement.id.length == 2;
    // Set the starting position based on key type
    if (isWhiteKey) {
        audioElement.currentTime = whiteKeysStartTime[parseInt(audioElement.classList)];
    } else {
        audioElement.currentTime = blackKeysStartTime[parseInt(audioElement.classList)];
    }
    audioElement.play();
}

function setupGameKeys() {
    const gameNotes = document.getElementsByClassName('game-notes')[0];
    const blackNotes = gameNotes.getElementsByClassName('black-notes')[0];
    const whiteNotes = gameNotes.getElementsByClassName('white-notes')[0];
    for (let i = 0; i < 21; i++) {
        const octave = 3 + parseInt(i / 7);
        const blackKeyText = blackKeysText[i % 7];
        const whiteKeyText = whiteKeysText[i % 7];
        const blackLane = document.createElement('div');
        if (blackKeyText != '') {
            blackLane.classList = octave + blackKeyText;
        }
        blackNotes.appendChild(blackLane);
        const whiteLane = document.createElement('div');
        whiteLane.classList = octave + whiteKeyText;
        whiteNotes.appendChild(whiteLane);
    }

    // extra note for black note
    const lane = document.createElement('div');
    lane.classList = '6Ab';
    blackNotes.appendChild(lane);
}

function setupGameNotes() {
    for (let i = 0; i < songNotes.length; i++) {
        const note = songNotes[i];
        addGameNote(note.note, note.time, note.duration);
    }
}
// Add a single falling note to the screen
function addGameNote(noteClass, noteTime, durationInSeconds) {
    const gameNotes = document.getElementsByClassName('game-notes')[0];
    const note = document.createElement('div');
    note.classList = 'note';
    note.style.height = (durationInSeconds * 4) + 'vh';
    note.style.bottom = (noteTime * 4 + gameStartOffset) + 'vh';
    gameNotes.getElementsByClassName(noteClass)[0].appendChild(note);    // Add note to the corresponding lane
}

function startGame() {
    const gameNotes = document.getElementsByClassName('game-notes')[0];
    gameNotes.classList.add('start');
    gameNotes.classList.remove('end');
    gameStartTime = Date.now();

    document.getElementsByClassName('overlay')[0].style.display = 'none';

    clearInterval(checkGameEndInterval);

    checkGameEndInterval = setInterval(function () {
        const elapsedGameTime = Math.round((Date.now() - gameStartTime) / 1000);
        if (elapsedGameTime > songDuration + (gameStartOffset / 4)) {
            gameNotes.classList.remove('start');
            gameNotes.classList.add('end');
            document.getElementsByClassName('overlay')[0].style.display = 'flex';
            clearInterval(checkGameEndInterval);
            clearInterval(checkScoreInterval);
            score = 0;
        }
    }, 1000);

    clearInterval(checkScoreInterval);

    checkScoreInterval = setInterval(function () {
        currentGameNoteToPlay = getGameNotes();
    }, 100);
}

function getGameNotes() {
    const gameNotes = document.getElementsByClassName('game-notes')[0];
    const computedStyle = window.getComputedStyle(gameNotes);
    const viewHeight = window.innerHeight;
    const marginInVH = parseFloat(computedStyle.getPropertyValue("margin-top").replace('px','')) / viewHeight * 100;
    const currentNoteVH = 894 + marginInVH - gameStartOffset;
    for (const note of songNotes) {
        if (note.time * 4 == parseInt(currentNoteVH)) {
            return note.note;
        }
    }
}

function checkScore(key) {
    if (key == currentGameNoteToPlay) {
        score += 100;
    }
    for (const scoreElement of document.getElementsByClassName("score")) {
        scoreElement.innerText = score;
    }
}

setupPiano();
setupGameKeys();
setupGameNotes();