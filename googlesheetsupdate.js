var SHEET_ID = '16tY-_-V0LHV9R3iUXD4G-KAsJkRgqGhx83Q3CEveQgs';
var ACCESS_TOKEN = 'ya29.A0ARrdaM_-x-MjMMJ06T_ZT0uqdPx5D-RQiL21clXlOqhGD1tTAaIwr9MSYEXA9W-YFbmGeR3ltLuC0W7Po4C-GHiTQ0_vQNXbUflCtjMsp1VbRKcQg8yRIf7EG9i_JWTyhMaK-9sb58gH7YoQUMEQeYwl1ODk';
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
