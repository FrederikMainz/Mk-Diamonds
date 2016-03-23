appHelpers.sendFiles = function(pathname, res){}

//send anything with a file extension as normal
app.get('*.*', function(reg, res){
  appHelpers.sendFile('.' + req.url, res);
})

app.get('*', function(req, res){
  appHelpers.sendFile('./index.html', res);
})

app.listen(DEFAULT_PORT);
console.log('Listening on port: ' + DEFAULT_PORT)
