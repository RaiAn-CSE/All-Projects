// <!-- ======================================================= (Part 1) =========================== -->
// Style 1 :==========>
function red() {
    document.body.style.backgroundColor = 'red';
}
// Style 2 :==========>
const makeBlueBtn = document.getElementById('makeBlue');
makeBlueBtn.onclick = makeBlueColor;
function makeBlueColor() {
    document.body.style.backgroundColor = 'Blue';
}
// Style 3 :==========>
const makeGreenBtn = document.getElementById('makeGreen');
makeGreenBtn.onclick = function () {
    document.body.style.backgroundColor = 'Green';
}
// Style 4 :==========>
const makePinkBtn = document.getElementById('makePink');
makePinkBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})
// Style 5 :==========> Direct Use:
document.getElementById('makeGoldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
// <!-- ======================================================= (Part 2) =========================== -->
// Style 1 :==========>
function text() {
    const changeText = document.getElementById('editText');
    changeText.innerText = 'Text Changed';
}
// Style 2 :==========>
document.getElementById('btnId').addEventListener('click', function () {
    document.getElementById('editText2').innerText = 'Updated By AddEventListener button'
})
// <!-- // Style 3 :==========> -->
document.getElementById('btnPost').addEventListener('click', function () {
    const commentBox = document.getElementById('newComment');
    const newCommentValue = commentBox.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newCommentValue;
    commentContainer.appendChild(p);

    commentBox.value = '';
})
// <!-- ======================================================= (Part 3) =========================== -->