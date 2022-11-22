'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');


function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }
    removeAllChildren(resultDivided)
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
};
const answes = [
'{userName}のいいところは声です。',
'{userName}のいいところはまなざしです。',
'{userName}のいいところは情熱です。',
'{userName}のいいところは厳しさです。',
'{userName}のいいところは知識です。',
'{userName}のいいところはユニークさです。',
'{userName}のいいところは用心深さです。',
'{userName}のいいところは見た目です。',
'{userName}のいいところは決断力です。',
'{userName}のいいところは思いやりです。',
'{userName}のいいところは感受性です。',
'{userName}のいいところは節度です。',
'{userName}のいいところは好奇心です。',
'{userName}のいいところは気配りです。',
'{userName}のいいところはそのすべてです。',
'{userName}のいいところは自制心です。',
];

function assessment(userName) {
   let sumOFCharCode = 0;
   for (let i = 0; i < userName.length; i++) {
    sumOFCharCode = sumOFCharCode + userName.charCodeAt(i);
   }
   const index = sumOFCharCode % answes.length;

   let result = answes[index];

result = result.replace(/\{userName\}/g, userName);
   return result;
}


console.assert(
    assessment('太郎') ===
    '太郎のいいところは決断力です。',
    '診断結果の文言の特定の部分を名前に書き換える処理が正しくありません。'  
);

