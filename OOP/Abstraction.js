/*
 Points to remember
 - We cannot create an instance of Abstract Class
 - It reduces the duplication of code 
 */

 // Creating a constructor function
 function Vehicle() {
     this.vehicleName = "vehicleName";  
     throw new Error("You cannot create an instance of Abstract class");
 }
 Vehicle.prototype.display = function() {
     return this.vehicleName;
 }

 var vehicle = new Vehicle();
 //error