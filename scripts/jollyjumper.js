function jollyJumper( numbers ) {
    var isJollyJumper = false;
    loop: for ( var i = 0; i < numbers.length; i++ ) {
        var leftElements = numbers.length - ( i + 1 );
        if (leftElements === 0) {
            console.log( 'breaking loop -> !' );
            break loop;
        } else {
            console.log( 'leftElements = ' + leftElements );
            if ( Math.abs( numbers[i] - numbers[i + 1] ) === leftElements ) {
                console.log( 'difference = ' + Math.abs( numbers[i] - numbers[i + 1] ) );
                isJollyJumper = true;
                continue loop;
            } else {
                console.log( 'breaking loop !' );
                isJollyJumper = false;
                break loop;
            }
        }
    }
    if ( isJollyJumper === true ) {
        console.log( "Its JOLLY JUMPER !" );
    } else {
        console.log( "Its NOT jolly jumper!" );
    }
}