const request = require("request");

function myFunction(result){
  console.log(result);
}

function simpleGet(callback){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },

    function(error, response, result) {
      // console.log("error:", error);
      // console.log("statusCode:", response);
      // console.log("result:", result);

      callback(result);
    }
  );
}

function simpleGetWithParams(callback){
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },

    function(error, response, result) {
      // console.log("error:", error);
      // console.log("statusCode:", response);
      // console.log("result:", result);

      const jsonAtParse= JSON.parse(result);
      callback(jsonAtParse.args);
    }
  );
}

function validateTimestamp(callback){
  const timeStamp = new Date().toISOString();
  request(
    {
      url: "https://postman-echo.com/time/valid?timestamp=" +timeStamp,
      method: "GET"
    },

    function(error, response, result) {
      // console.log("error:", error);
      // console.log("statusCode:", response);
      // console.log("result:", result);

      callback(result);
    }
  );
}



module.exports= {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp : validateTimestamp
};
