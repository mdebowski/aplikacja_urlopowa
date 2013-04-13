GameBoard = {
	
	rows: 7,
	cols: 7,

	create: function(new_rows, new_cols) {
		var x = 0;
		var y = 0;
		var order = 0;

		this.rows = new_rows || 7;
		this.cols = new_cols || 7;
		

		for (y = 0; y < this.rows; y++) {
			var row = $('<tr />');
			for (x = 0; x < this.cols; x++) {
				order++;
				var text = order;

				if (order < 10) {
					text = '0'+order;
				}

				var item = $('<td><button id="btn-'+order+'" class="btn">'+text+'</button></td>');
				
				// item.attr('id', order);
				item.appendTo(row);

			}
			row.appendTo('#buttons');
		}
	}

}