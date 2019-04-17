(function(){
	function addSync(x,y){
		console.log(`	[@Service] - processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] - returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log('[@Client] - triggering addSync');
		var result = addSync(x,y);
		console.log(`[@Client] - result = ${result}`);
	}

	window['addSyncClient'] = addSyncClient;

	function addAsync(x,y, callback){
		console.log(`	[@Service] - processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] - returning result`);
			if (typeof callback === 'function')
				callback(result);
		}, 5000);
	}

	function addAsyncClient(x,y){
		console.log('[@Client] - triggering addAsync');
		addAsync(x,y, function(result){
			console.log(`[@Client] - result = ${result}`);
		});
	}

	window['addAsyncClient'] = addAsyncClient;

	var addAsyncEvents = (function(){
		var callbacks = [];

		function subscribe(callback){
			callbacks.push(callback);
		}

		function process(x,y){
			console.log(`	[@Service] - processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] - returning result`);
				callbacks.forEach(callback => callback(result));
			}, 5000);
		}

		return { process, subscribe };
	})();

	window['addAsyncEvents'] = addAsyncEvents;


	function addAsyncPromise(x,y){
		console.log(`	[@Service] - processing ${x} and ${y}`);
		var p = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] - returning result`);
				resolveFn(result);
			}, 5000);
		});
		return p;
	}

	window['addAsyncPromise'] = addAsyncPromise;

	/*function addAsyncPromiseClient(x,y){
		console.log(`[@Client] - triggering addAsyncPromise`)
		var p = addAsyncPromise(x,y);
		p.then(function(result){
			console.log(`[@Client] - result = ${result}`);
		});
	}*/

	async function addAsyncPromiseClient(x,y){
		console.log('[@Client] - triggering addSync');
		var result = await addAsyncPromise(x,y);
		console.log(`[@Client] - result = ${result}`);
	}

	window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();

/*
Client Code

//Usage - 1
var p = addAsyncPromise(10,20);
//then(), catch()
var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var p2 = new Promise(function(resolveFn, rejectFn){
        setTimeout(function(){
            var doubleResult = result * 2;
            resolveFn(doubleResult);
        }, 5000);
    });
	return p2;
});

//Usage - 2
var p = addAsyncPromise(10,20);
//then(), catch()
var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var doubleResult = result * 2;
    var p2 = new Promise(function(resolveFn, rejectFn){
		resolveFn(doubleResult);
    });
	return p2;
});

//Usage - 3
var p = addAsyncPromise(10,20);
//then(), catch()
var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var doubleResult = result * 2;
    return Promise.resolve(doubleResult);
});

//Usage - 4
var p = addAsyncPromise(10,20);
//then(), catch()
var p2 = p.then(function(result){
	console.log(`[@Client] result = ${result}`);
	var doubleResult = result * 2;
    return doubleResult;
});
*/