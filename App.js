const IS_Absent = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Num_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWagearr = new Array();
let empCheck = Math.floor(Math.random()* 10) % 2;

if(empCheck == IS_Absent){
    console.log("Employee is Absent");
    return;
}
else{
    console.log("Employee is Present");
}

function getWorkingHours(empCheck){
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR ;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < Num_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random()* 10) % 3;
    let empHrs = getWorkingHours(empCheck)
    totalEmpHrs += empHrs
    empDailyWagearr.push(calcDailyWage(empHrs))
}

let empWage = totalEmpHrs * WAGE_PER_HOUR ;
console.log("UC6 - Total Days:- " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);