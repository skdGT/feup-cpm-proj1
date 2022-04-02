const dao = require('./dao');


exports.getAllItems = async () => {
  return await dao.all("SELECT * FROM items", [])
}

exports.getItemByUUID = async (uuid) => {
  return await dao.get("SELECT * FROM items WHERE uuid = ?", [uuid])
}
