//typeScript Supports only single and Multilevel inheritance
class MyObject{

    //can't change
    readonly fixedName = "TYPESCRIPT";

    constructor()
    {
        console.log("Parent Constructor");   
    }

    //arrow funtion in class

    mydisplay = () => console.log("Arrow function in class");
    

}
class OOPS extends MyObject{
    public Myname:string = "Rajeev Sharma";
    private MyClass:string;
    protected MyCourse:string;

    constructor(MyClass:string,MyCourse:string)
    {
        super();
        this.MyClass = MyClass;
        this.MyCourse = MyCourse;
    }

    display(): Map<any,any> {
       let mymap = new Map<any,any>();
        mymap.set("name",this.Myname);
        mymap.set("class",this.MyClass);
        mymap.set("course",this.MyCourse);
        return mymap; 
    }

}

let obj = new OOPS("B.Tech","COMputer");
console.log(obj.display());
console.log(obj.fixedName);
obj.mydisplay();


//interface - can hold only variables in typescript
interface Test{
    subject:string;
    marks:number;
}

//arrow function
let checker = (test:Test) => console.log(test);

let mydata = {
    "subject":"Maths",
    "marks":23
};

checker(mydata);

