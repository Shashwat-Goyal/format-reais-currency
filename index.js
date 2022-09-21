const formatReaisCurrency = (price) => {
	if (typeof price !== 'number') {
		price = Number(price);
	}

	if(isNaN(price)) {
		price = 0;
	}

	let formattedPrice = price.toFixed(2);
	const centIndex = formattedPrice.lastIndexOf(".");
	
	if(centIndex !== -1){
		formattedPrice = [...formattedPrice];
		formattedPrice[centIndex] = ',';
		formattedPrice = formattedPrice.join('');
	}

	return `R$ ${formattedPrice}`;
}

module.exports = {
	formatReaisCurrency
};