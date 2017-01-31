function Airport(){
  this._capacity = 3
  this._planes = []
}

Airport.prototype.capacity = function(){
  return this._capacity
}

Airport.prototype.planes = function(){
  return this._planes
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
  } else {
  this._planes.push(plane)}
}

Airport.prototype.takeoff = function(id){
  var myArray = this.planes()
  var index = this._planes.indexOf(id)
  myArray.splice(index, 1)
  this._planes = myArray
}
