describe('Airport', function(){
  it('has a capacity', function(){
    var myAirport = new Airport()
    expect(myAirport.capacity()).toEqual(3)
  })
  it('knows when full', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    var otherPlane = new Plane(2)
    var anotherPlane = new Plane(3)
    myAirport.land(myPlane.id())
    myAirport.land(otherPlane.id())
    myAirport.land(anotherPlane.id())
    var weirdPlane = new Plane(4)
    expect(function() { myAirport.land(weirdPlane.id())}).toThrow(new Error("Airport is full"))
  })
  it('has an array of planes', function(){
    var myAirport = new Airport()
    expect(myAirport.planes()).toEqual([])
  })
  it('can receive planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    myAirport.land(myPlane.id())
    expect(myAirport.planes()).toContain(myPlane.id())
  })
  it('can takeoff planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    myAirport.land(myPlane.id())
    myAirport.takeoff(myPlane.id())
    expect(myAirport.planes()).toEqual([]);
  })
  it('can takeoff planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    var otherPlane = new Plane(2)
    var anotherPlane = new Plane(3)
    myAirport.land(myPlane.id())
    myAirport.land(otherPlane.id())
    myAirport.land(anotherPlane.id())
    myAirport.takeoff(otherPlane.id())
    myAirport.takeoff(myPlane.id())
    expect(myAirport.planes()).toEqual([anotherPlane.id()]);
  })
  it('can takeoff planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    var otherPlane = new Plane(2)
    var anotherPlane = new Plane(3)
    myAirport.land(myPlane.id())
    myAirport.land(otherPlane.id())
    myAirport.land(anotherPlane.id())
    myAirport.takeoff(anotherPlane.id())
    myAirport.takeoff(myPlane.id())
    expect(myAirport.planes()).toEqual([otherPlane.id()]);
  })
  it('can takeoff planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    var otherPlane = new Plane(2)
    var anotherPlane = new Plane(3)
    myAirport.land(myPlane.id())
    myAirport.land(otherPlane.id())
    myAirport.land(anotherPlane.id())
    myAirport.takeoff(myPlane.id())
    expect(myAirport.planes()).toEqual([otherPlane.id(), anotherPlane.id()]);
  })
  it('has weather', function(){
    var myAirport = new Airport()
    expect(myAirport.weather()).toEqual('clear')
  })
  it('knows when not clear', function(){
    var myAirport = new Airport()
    myAirport.changeWeather('stormy')
    var myPlane = new Plane(1)
    expect(function() { myAirport.land(myPlane.id())}).toThrow(new Error("Weather is not clear"))
  })
})

debugger;
