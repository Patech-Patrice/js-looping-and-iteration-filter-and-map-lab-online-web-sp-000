// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) { return driver.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  goodDrivers = drivers.filter (function (driver) { return driver.revenue > revenue });
  return goodDrivers.map(function (driver) { return driver.name });
}


function exactMatch(){}





function exactMatchToList(){}