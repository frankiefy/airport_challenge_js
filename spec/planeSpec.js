describe('Plane', function() {
  it('plane has state', function() {
    var myPlane = new Plane(1)
    expect(myPlane.state()).toEqual('Flying')
  })
  it('can change state', function() {
    var myPlane = new Plane(1)
    myPlane.newState('Landed')
    expect(myPlane.state()).toEqual('Landed')
  })
})
