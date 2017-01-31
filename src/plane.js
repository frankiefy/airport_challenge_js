function Plane(id) {
  this._state = 'Flying'
  this._id = id;
}

Plane.prototype.state = function() {
  return this._state;
}

Plane.prototype.newState = function(newstate) {
  this._state = newstate
}

Plane.prototype.id = function() {
  return this._id;
}
