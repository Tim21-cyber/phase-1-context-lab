/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(arr) {
    return arr.map(function (employee) {
        return createEmployeeRecord(employee)
    })

}
function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}
function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(function (e) {
        return e.date === date
    })
    const timeOut = this.timeOutEvents.find(function (e) {
        return e.date === date
    })
    return (timeOut.hour - timeIn.hour) / 100
}
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
}
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function (employee) {
        return employee.firstName === firstName
    })
}
function calculatePayroll(arr) {
    return arr.reduce(function (memo, employee) {
        return memo + allWagesFor.call(employee)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

