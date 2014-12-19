var DataStore =  require('nedb');

var Nedb = function(){
	this.load = function(name){
		console.log("load me");
		return {};
	}
}

var DataStore = function(){

}

module.exports = {
	Nedb: Nedb
}
