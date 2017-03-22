export default function counter ( generator, aliaser ) {
	const counts = new Map();

	generator.names.forEach( name => counts.set( name, 1 ) );

	return function ( name ) {
		if ( counts.has( name ) ) {
			const count = counts.get( name );
			const newName = `${name}${count}`;
			counts.set( name, count + 1 );
			return generator[ aliaser ]( newName );
		}

		counts.set( name, 1 );
		return generator[ aliaser ]( name );
	};
}
