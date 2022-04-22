var SHEET_ID = '16tY-_-V0LHV9R3iUXD4G-KAsJkRgqGhx83Q3CEveQgs';
var ACCESS_TOKEN = 'ya29.A0ARrdaM_yjYLPFtz2eeLCdgFJuyHVZ3DrU4li2BNZdfu1lhKn0i3uQCrGAK7kQN3x-PKW4qXba2RQFhFcr2hFEMCU7IvsrnRnl1p8S_5GIXaiXg9ItHtCTWgzUWr6VN6HJNg2v6eNg5Va4lmV9twO7KuxmxKj';



var updateSheetValues = () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours. 
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({

        requests: [{
          repeatCell: {
            range: {
              startColumnIndex: 0,
              endColumnIndex: 1,
              startRowIndex: 0,
              endRowIndex: 1,
              sheetId: 0
            },
            cell: {
              userEnteredValue: {
                "numberValue": 10
              },
            },
            fields: "*"
          }
        }]

      })
    })
  }
