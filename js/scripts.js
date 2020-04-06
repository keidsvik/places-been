// Business Logic Stuffs
function Location(info) {
  // this.location = location;
  // this.landmarks = landmarks;
  // this.timeOfYear = timeOfYear;
  // this.notes = notes;
  this.info = info;
}
var myNewLocation = new Location([["City: New York"], ["Places to visit: Lake George", "Art Institute of History & Art"], ["Season to visit:", "Autumn"], ["Upstate New York is rural and the trees turn to beautiful colors in the fall"]]);
var myNewLocation2 = new Location("Chicago", ["The Bean", "Navy Pier", "Lincoln Park Zoo"], "Not winter", "Chicago, officially the City of Chicago, is the most populous city in the U.S. state of Illinois, and the third-most-populous city in the United States.");
var myNewLocation3 = new Location("Black Rock Desert", ["Playa", "lava beds"], "Summer", "Go to Burning Man, I guess.");

// User Interface Logic Stuffs

$(document).ready(function() {
  // event.preventDefault();
 $("h3").click(function(){
   $(this).html(myNewLocation.info.join(" "));

});
  
})


