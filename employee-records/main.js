var workers = []

function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.printEmployeeForm = function(){
        console.log(this)
        this.status = status

    // this.status = function(){
    //     console.log("Full time")
    }
    }
    

    Employee.prototype.stats = function(){
        console.log(this.status)
    }

var employ1 = new Employee("Rose", "Teacher", "60,000/annually", "Full Time")
var employ2 = new Employee("Jack", "Counselour", "50,000/annually", "Contract")
var employ3 = new Employee("Patricio", "Gym Teacher", "40,000/annually", "Part Time")


employ1.printEmployeeForm()
employ1.stats()
employ2.printEmployeeForm()
employ2.stats()
employ3.printEmployeeForm()
employ3.stats()

var add = workers.push(employ1, employ2, employ3)
console.log(workers)
