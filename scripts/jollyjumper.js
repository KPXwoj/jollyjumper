var addButton = document.getElementById( 'addButton' ),
    valueInput = document.getElementById( 'valueInput' );

// actions
addButton.addEventListener( 'click', function(e) {
    console.log( 'add button clicked !' );
});

// Jolly jumper function
function jollyJumper( numbers ) {
    var existsNumbers = [];
    var isJollyJumper = false;
    mainLoop: for ( var i = 0; i < numbers.length; i++ ) {
        var currentNumber = Math.abs( numbers[i] - numbers[i+1] );
        arrayLoop: for ( var j = 0; j < numbers.length; j++ ) {
            if ( existsNumbers[j] !== undefined ) {
                if ( currentNumber === existsNumbers[j] ) {
                    isJollyJumper = false;
                    break mainLoop;
                } else {
                    existsNumbers.push( currentNumber );
                    isJollyJumper = true;
                    continue arrayLoop;
                }
            } else {
                existsNumbers.push( currentNumber );
                isJollyJumper = true;
            }
        }
    }
    isJollyJumper === true ? console.log( 'Its JOLLY JUMPER!' ) : console.log( 'Its NOT Jolly Jumper!' );
}