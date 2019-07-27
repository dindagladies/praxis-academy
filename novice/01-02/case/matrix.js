var run = function () {

	var matrix_A = 
	[
		[ 1, 3 ],
		[ 1, 0 ]
	];

	var matrix_B = 
	[
		[ 0, 0 ],
		[ 7, 5 ]
	];	
	
	// println( "Matrix A:" );
	printMatrix( matrix_A );
    // println("");
    console.log("");
	
	// println( "Matrix B:" );
	printMatrix( matrix_B );
    // println("");
    console.log("");
	
	// println( "Sum of Matrix A + Matrix B:" );
	var matrixResult = sum( matrix_A, matrix_B );
	printMatrix( matrixResult );
}

function printMatrix( matrix ) {
	
	for ( var i in matrix ) {
		
		for ( var j in matrix[ i ] ) {
			
			console.log( matrix[ i ][ j ] + "  " );
		}
        // println( "" );
        console.log("");
	}
}

function sum( mA, mB ) {
	
	var result = [];
	
	result = new Array( mA.length );
	for ( var i = 0; i < result.length; i++ ) {
		
		result[ i ] = new Array( mA[ i ].length );
		for ( var j = 0; j < result[ i ].length; j++ ) {
			
			result[ i ][ j ] = mA[ i ][ j ] + mB[ i ][ j ];
		}
	}
	
	return result;
}

run();