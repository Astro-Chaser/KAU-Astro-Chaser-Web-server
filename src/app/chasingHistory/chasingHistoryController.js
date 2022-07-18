const chasingHistoryProvider = require("./chasingHistoryProvider");
const chasingHistoryService = require("./chasingHistoryService");

const response = require("../../../config/response");
const baseResponse = require("../../../config/baseResponseStatus");
const baseResponseStatus = require("../../../config/baseResponseStatus");


exports.getChasingHistoryTitle = async function(req, res){
    const getChasingHistoryRes = await chasingHistoryProvider.getChasingHistory();

    return res.send(getChasingHistoryRes);
}