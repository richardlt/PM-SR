/*
/*
* CandyClient class definition
* by Richard LE TERRIER & Kévin LACIRE
*/

module.exports = function Candy(){

	this.id 	= null;
	this.xCoord = null;
	this.yCoord = null;
	this.state 	= true;
    this.points = 0;
    this.color  = null;

	/**
	* Method that check if a candy is over another candy (used by the disposition algorithm)
	* @param anotherCandy the other candy to check
	*/
	this.checkIfOverCandy = function(anotherCandy){
		return (this.xCoord==anotherCandy.xCoord && this.yCoord==anotherCandy.yCoord);
	}
}