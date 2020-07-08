module.exports = {
	start: function(port, db){
		db.on('error', function(err) {
			console.log('\n=================================================================\n');
			console.log('  [SUCCESS]\t\t\tSERVER RUNNING ON PORT ['+port+']');
			console.log('  [ ERROR ]\t\t\tCOULD NOT CONNECT TO MONGODB');
			console.log('\n=================================================================\n');
		});
		db.once('open', function() {
			console.log('\n=================================================================\n');
			console.log('  [SUCCESS]\t\t\tSERVER RUNNING ON PORT ['+port+']');
			console.log('  [SUCCESS]\t\t\tCONNECTED TO MONGODB');
			console.log('\n=================================================================\n');
		});
	},
	success: function(str){
		console.log('[SUCCESS]\t\t\t'+str);
	},
	error: function(str){
		console.log('[ERROR]\t\t\t'+str);
	},
	warn: function(str){
		console.log('[WARNING]\t\t\t'+str);
	}
};