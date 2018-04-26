pragma solidity ^0.4.21;

contract Will {
	//The wallet address of Mark, the Father
	address father;
	//Address for son
	address child;
	//Address for charity
	address NGO;
	//Days until expected graduation time
	uint deadline;
	//Amount of money to be deducted from father's account
	uint toBeSent;
	//First half of password, hashed in keccak256, possessed by son
	bytes32 pass1;
	//Second half of password, hashed in keccak256, possessed by father
	bytes32 pass2;

	//Constructor function that initializes passwords, deadline, and addresses for NGO and child
	function Will(bytes32 passy1, bytes32 passy2, uint _deadline, address _ngo, address _child) {
		child = _child;
		NGO = _ngo;
		father = msg.sender;
		deadline = _deadline;
		toBeSent = father.balance;
		pass1 = passy1;
		pass2 = passy2;
	}

	//Checks if the deadline has passed
	function isPastDeadline() internal returns (bool) {
		return now >= deadline * 1 days;
	}

	//Allows the son to withdraw his portion of the money from the account
	function Withdraw(string PlainPass1, string PlainPass2) {
		//Hash plain text passwords with keccak256 and check against original pass hashes
		if(keccak256(PlainPass1) == pass1 && keccak256(PlainPass2) == pass2 && !isPastDeadline()){
			if(toBeSent > msg.sender.balance) {
				return;
		}
		//send the money to child
		child.transfer(toBeSent);
		}
	}
	
	//If son does not graduate, attorney can send money to charity
	function Cancel (string PlainPass2) {
		if(keccak256(PlainPass2) == pass2 && isPastDeadline()){
			NGO.transfer(toBeSent);
		}
	}

}
			
