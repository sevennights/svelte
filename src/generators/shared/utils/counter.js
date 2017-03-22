export default function counter ( generator, aliaser ) {
	const counts = new Map();

	generator.names.forEach( name => counts.set( name, 1 ) );

	return function ( name ) {
		let count = counts.get( name ) || 0;
		const newName = `${name}${count++}`;
		counts.set( name, count );
		return generator[ aliaser ]( newName );
	};
}
