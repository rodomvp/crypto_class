var Will = artifacts.require("./Will.sol");

module.exports = function(deployer, accounts) {
 var password1 = "who";
 var  password2 = "dat";
 var  deadline = 10;
 deployer.deploy(Will, password1, password2, deadline); 
};