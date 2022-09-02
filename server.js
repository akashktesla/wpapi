const http = require("http");
const host = "localhost";
const port = 8000;

const server = http.createServer(function(req,res){
  res.write('valzkai ae')
  res.end()

})

server.listen(port,function(error){
  if(error){
    console.log("error in serverjs, something went wrong")
  }
  else{
    console.log("server is listening on "+port)
  }
})
