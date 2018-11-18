// On page load
window.onload = function() {
	load_default_data();
	parse_data();
}

function load_default_data() {
	for (var index = 0; index < default_depths.length; index++) {
		depth_table.appendChild(get_row(default_depths[index], default_colors[index]));
	}
}

function parse_data() {
	// Canvas dimensions
	canv.width = parseInt(width_input.value);
	canv.height = parseInt(height_input.value);

	// Center variables
	center_real = parseFloat(center_real_input.value);
	center_imag = parseFloat(center_imag_input.value);

	// Scale variables
	width_scale = parseFloat(width_scale_input.value);
	aspect_ratio = canv.width / canv.height;

	// Depths and colors
	depth_list = [];
	color_list = [bg_color_input.value];

	for (var index = 3; index < depth_rows.length; index++) {
		depth_list.push(parseInt(depth_rows[index].firstChild.firstChild.value))
		color_list.push(depth_rows[index].lastChild.firstChild.value)
	}

	// Make sure that the depths are sorted and render
	if (are_depths_sorted()) {
		render();
	} else {
		alert("Make sure that the depths are sorted from smallest to largest with no duplicates.");
	}
}

function render() {
	var left_real = center_real - width_scale / 2;
	var top_imag = center_imag + width_scale / (2 * aspect_ratio);
	var divergence_depth;

	for (var current_real = 0; current_real < canv.width; current_real++) {
		for (var current_imag = 0; current_imag < canv.height; current_imag++) {
			divergence_depth = get_divergence(left_real + current_real * width_scale / canv.width,
				top_imag - current_imag * width_scale / (aspect_ratio * canv.height),
				depth_list[depth_list.length - 1]);
			ctx.fillStyle = get_color(divergence_depth);
			ctx.fillRect(current_real, current_imag, 1, 1);
		}
	}
}

function get_color(depth) {
	for (var index = 0; index < depth_list.length; index++) {
		if (depth < depth_list[index]) {
			return color_list[index];
		}
	}
	return color_list[depth_list.length];
}

function get_divergence(real, imag, depth) {
	var real_old = real;
	var imag_old = imag;
	var real_new;
	var imag_new;

	for (var index = 0; index < depth; index++) {
		if (within_radius_2(real_old, imag_old)) {
			real_new = real_old ** 2 - imag_old ** 2 + real;
			imag_new = 2 * real_old * imag_old + imag;

			real_old = real_new;
			imag_old = imag_new;
		} else {
			return index;
		}
	}

	return depth;
}

function are_depths_sorted() {
	for (var index = 0; index < depth_list.length - 1; index++) {
		if (depth_list[index] >= depth_list[index + 1]) {
			return false;
		}
	}
	return true;
}

function within_radius_2(real, imag) {
	return Math.sqrt(real ** 2 + imag ** 2) < 2;
}

function get_row(depth, color) {
	// Build depth input node
	var depth_input_node = document.createElement("input");
	depth_input_node.type = "number";
	depth_input_node.min = "1";
	depth_input_node.value = depth;

	// Build color input node
	var color_input_node = document.createElement("input");
	depth_input_node.type = "text";
	color_input_node.value = color;

	// Create row and column elements for the table
	var row_node = document.createElement("tr");
	var depth_column_node = document.createElement("td");
	var color_column_node = document.createElement("td");

	// Add inputs to column nodes
	depth_column_node.appendChild(depth_input_node);
	color_column_node.appendChild(color_input_node);

	// Add column nodes to row node
	row_node.appendChild(depth_column_node);
	row_node.appendChild(color_column_node);

	// Return row node
	return row_node;
}

function plus_click() {
	// Get depth from final item
	var final_depth = parseInt(depth_table.lastChild.firstChild.firstChild.value);

	// Create and add generic row
	var row_node = get_row(final_depth + 1, "#000000");
	depth_table.appendChild(row_node);
}

function minus_click() {
	if (depth_rows.length > 4) {
		depth_table.removeChild(depth_table.lastChild);
	}
}

function render_click() {
	parse_data();
}
