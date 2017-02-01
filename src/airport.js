function Airport(){
  this._capacity = 3
  this._planes = []
  this._weather = 'clear'
}

Airport.prototype.capacity = function(){
  return this._capacity
}

Airport.prototype.planes = function(){
  return this._planes
}

Airport.prototype.weather = function(){
  return this._weather
}

Airport.prototype.isClear = function(){
  if (this._weather == 'clear'){
   return true
 } else {
   return false
 }
}

Airport.prototype.isFull = function(){
  if (this._planes.length == this._capacity){
   return true
 } else {
   return false
 }
}

Airport.prototype.land = function(plane){
  if (this.isFull() == true){
    throw new Error('Airport is full')
  } else if (this.isClear() == false){
    throw new Error('Weather is not clear')
  } else {
  this._planes.push(plane)}
}

Airport.prototype.takeoff = function(id){
  if (this.isClear() == false){
    throw new Error('Weather is not clear')
  } else {
    var myArray = this.planes()
    var index = this._planes.indexOf(id)
    myArray.splice(index, 1)
    this._planes = myArray
  }
}

Airport.prototype.changeWeather = function(weather){
  this._weather = weather
}
