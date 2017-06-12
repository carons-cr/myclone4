// Write your code here
module.exports = Person(name,age){
            this.name=name;
	    this.age=age;
	    Person.prototype.introduce=function(){
	         var s1="My name is "+this.name+". I am "+this.age+" years old. ";
	         return s1;
	    }
}
