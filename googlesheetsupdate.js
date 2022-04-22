var SHEET_ID = '16tY-_-V0LHV9R3iUXD4G-KAsJkRgqGhx83Q3CEveQgs';
var ACCESS_TOKEN = 'ya29.A0ARrdaM8BnSUWEpMAIiIShCcyU5OOHYLsjSHBsj0q5tLX2M0v0ES5mu5t3hiVTs-2iP1e9Zgx4BQxmZrSM0uIvrySLav785FEWCfySMida-hO-W-MY4rCZIe2MCtm5pUGil1xE-YN2ZdkAU9OkW8kcIQKuGXC
var birdName = document.querySelector("input[list='birds']").value;
var birdCount = document.querySelector("input[id='bcount']").value;


var updateSheetValues = () => {
    console.log("updating bird count");
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours.
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({

 "requests": [
    {
      "repeatCell": {
        "range": {
          "startColumnIndex": 0,
          "endColumnIndex": 1,
          "startRowIndex": 1,
          "endRowIndex": 2,
          "sheetId": 0
        },
        "cell": {
          "userEnteredValue": {
            "numberValue": birdCount
          }
        },
        "fields": "*"
      }
    }
  ]
})
})
}
