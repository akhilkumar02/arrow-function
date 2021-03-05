//this with arrow function

let student=function(id,age){
    this.id=101;
    this.age=20;
    this.display=function(){
        console.log(this.age,this)
        settimeout ( () => {
            console.log(this);
            console.log(this.id+"is"+this.age);
         },1000);
    }
    
    
}
let student1=new student();
 student1.display();
