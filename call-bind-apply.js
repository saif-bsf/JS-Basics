const nameObj = {
    firstName: 'Saif',
    lastName: 'Sheikh'
}

const printMyInfo = function(hometown) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown)
}

printMyInfo.call(nameObj, 'jubail') // Saif Sheikh from jubail
printMyInfo.apply(nameObj, ['bangalore']) // Saif Sheikh from bangalore
const returnFunction = printMyInfo.bind(nameObj, 'Dubai')
returnFunction() // Saif Sheikh from Dubai