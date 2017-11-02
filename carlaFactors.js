
function One()
{
	var levelOne = new Array();
	for (var i = 0; i < 20; i++)
		levelOne[i] = i + 1;
	return levelOne;
}
function Two()
{
	//code here
	var levelTwo = new Array();
	for (var i = 0; i < 1000; i++)
		levelTwo[i]=i + 1;
	return levelTwo;
}
function Three()
{
	//code here
	var levelThree = new Array();
	for (var i = 1; i < 20; i++)
		levelThree[i]= i + 1;
	
	return levelThree;
}
function  getFactors(index)
{
	var factors = new Array();
	for ( i = 1; i <= index; i++)
	{
			if ((index/i) == parseInt(index/i))
				factors.push(i);
	}//end of for
	return factors;
}
