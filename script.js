      

function main() {
      var btc_list = [];
      var cel_list = [];
      var year_list = []
      
      var monthlyContributionInput = document.getElementById("monthly-contribution");
      var numberOfYearsInput = document.getElementById("year-count");
      var annualInterestRateInput = document.getElementById("annual-interest-rate");
      

    var rowcount = Number(numberOfYearsInput.value);
    var monthlyContribution = Number(monthlyContributionInput.value);
    var annualInterestRate = Number(annualInterestRateInput.value / 100.0);
    var interestFactor = 1 + annualInterestRate / 12.0;
    var balance = 0;
    var totalDeposit = 0;
    var monthCount = 0;
    var yearInterest = 0;
    var perviousYearInterest = 0;
    
    for (var row = 1; row <= rowcount; row += 1) {
      monthCount = 12 * row;
      totalDeposit = 12.0 * monthlyContribution * row;
      balance = monthlyContribution * (
        (Math.pow(interestFactor, monthCount + 1) - 1) /
        (interestFactor - 1) - 1);
        btc_list.push(Math.round(balance))
        year_list.push(row)
      perviousYearInterest = yearInterest;
      yearInterest = balance - totalDeposit;
        
      }
      //console.log(year_list)
      //console.log(btc_list)

    
      return[year_list, btc_list]
      
}

function cel() {
  var btc_list = [];
  var cel_list = [];
  var year_list = []
  
  var monthlyContributionInput = document.getElementById("monthly-contribution");
  var numberOfYearsInput = document.getElementById("year-count");
  var annualInterestRateInput = document.getElementById("annual-interest-rate");
  int_rate = (Number(annualInterestRateInput.value))
  final_int = (int_rate + 5)
  //console.log(final_int)


    var rowcount = Number(numberOfYearsInput.value);
    var monthlyContribution = Number(monthlyContributionInput.value);
    var annualInterestRate = Number(final_int / 100.0);
    var interestFactor = 1 + annualInterestRate / 12.0;
    var balance = 0;
    var totalDeposit = 0;
    var monthCount = 0;
    var yearInterest = 0;
    var perviousYearInterest = 0;

    for (var row = 1; row <= rowcount; row += 1) {
      monthCount = 12 * row;
      totalDeposit = 12.0 * monthlyContribution * row;
      balance = monthlyContribution * (
        (Math.pow(interestFactor, monthCount + 1) - 1) /
        (interestFactor - 1) - 1);
      
        cel_list.push(Math.round(balance))
      perviousYearInterest = yearInterest;
      yearInterest = balance - totalDeposit;
        
    }
      
      //console.log(cel_list)

    
      return(cel_list)
}

function get_data(){
  //console.log(main())
  //console.log(cel())
  return[main(),cel()]
}

