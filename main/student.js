let Person = require('./person')
// Write your code here
module.exports = Student(name,age,kclass){
        Person.call(this,name,age);
 	this.kclass=kclass;	        
 	Student.prototype.introduce=function(){
    	      var s1=new Person(name,age).introduce();
    	      var s2=" I am a Student. I am at Class "+this.kclass+".";
    	      return s1+s2;
        }	    	  
}
