const headers = require('./conf');
function errorHandle(res) {
  res.writeHead(400, headers);
  res.write(JSON.stringify({
    "status": "false",
    "message": "資料欄位未填寫或格式錯誤",
  }));
  res.end();
}

module.exports = errorHandle;
