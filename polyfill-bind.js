const nameObj = {
    firstName: 'Saif',
    lastName: 'Sheikh'
}

const printName = function (hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + state)
}

const printMyName = printName.bind(nameObj, 'Dubai')
printMyName('UAE')

Function.prototype.myBind = function (...args) {
    let self = this
    return function(...arg2) {
        self.call(...args, ...arg2)    
    }
}

printName.myBind(nameObj, 'Bangalore')('India')
