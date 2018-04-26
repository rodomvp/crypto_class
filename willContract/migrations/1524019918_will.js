var Will = artifacts.require("./Will.sol");

module.exports = function(deployer, accounts) {
 var password1 = "who";
 var  password2 = "dat";
 var  deadline = 10;
 var ngo = "0xc104e0eefdca2a09164182019293120c8fc05113";
 var child = "0xc145b9962fe4e83a5405d3afa4b2ef2dc9ba5f73";
 deployer.deploy(Will, password1, password2, deadline, ngo, child); 
};
