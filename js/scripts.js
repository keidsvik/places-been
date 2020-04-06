// Business Logic Stuffs
function Location(info) {
  // this.location = location;
  // this.landmarks = landmarks;
  // this.timeOfYear = timeOfYear;
  // this.notes = notes;
  this.info = info;
}
var myNewLocation = new Location([["CITY: New York"], ["PLACES TO VISIT: Lake George" , " New York Institute of History & Art"], ["SEASON TO VISIT: Autumn"], ["NOTES: Upstate New York is rural and the trees turn to beautiful colors in the fall."]]);
var myNewLocation2 = new Location([["CITY: Chicago"], ["PLACES TO VISIT: The Bean", " Navy Pier", " Lincoln Park Zoo"], ["SEASON TO VISIT: Not winter"], ["NOTES: Chicago, officially the City of Chicago, is the most populous city in the U.S. state of Illinois, and the third-most-populous city in the United States."]]);
var myNewLocation3 = new Location([["CITY: Black Rock Desert"], ["PLACES TO VISIT: Playa", " lava beds"], ["SEASON TO VISIT: Summer"], ["NOTES: You could go to Burning Man, I guess."]]);

// User Interface Logic Stuffs

$(document).ready(function() {
  // event.preventDefault();
 $(".newYork").click(function() {
   $(this).html(myNewLocation.info.join("<br>"));
 $(".chicago").click(function() {
   $(this).html(myNewLocation2.info.join("<br>"));
 $(".blackRock").click(function() {
   $(this).html(myNewLocation3.info.join("<br>"));
 })
 
  //  $(this).html(myNewLocation3.info.join("-- ");

});
  
})

})
