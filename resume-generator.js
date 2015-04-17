var fs = require( 'fs' );
var jsonName = process.argv[2];
var templateName = process.argv[3];
if ( jsonName && templateName )
{
	fs.readFile( jsonName, 'utf8', function ( err, data )
	{
		if ( !err )
		{
			fs.readFile( templateName, 'utf8', function ( err, template )
			{

				if ( !err )
				{

					dataObject = JSON.parse( data );

					var Mark = require( "markup-js" );

					var result = Mark.up( template, dataObject );

					fs.writeFile( "result.html", result, function ( err )
					{
						if ( err )
						{
							return console.log( err );
						}

						console.log( "The file was saved!" );
						process.exit();
					} );
				}
			} )
		}
	} );
}

