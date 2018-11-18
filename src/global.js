// Default depth data
var default_depths = [12, 13, 14, 16, 18, 21, 24, 28, 32, 37, 42, 48, 54];
var default_colors = ["#9933FF", "#CC33FF", "#FF66FF", "#FF66CC", "#FF6699", "#FF6666", "#FF9966", "#FFCC66", "#FFFF66", "#FFFF99", "#FFFFCC", "#FFFFFF", "#000000"];

// Canvas variables
var canv = document.getElementById("mc");
var	ctx = canv.getContext("2d");

// Canvas Dimension Inputs
var width_input = document.getElementById("widthInput");
var height_input = document.getElementById("heightInput");

// Center Inputs
var center_real_input = document.getElementById("realCenter");
var center_imag_input = document.getElementById("imagCenter");

// Zoom Input
var width_scale_input = document.getElementById("widthScale");

// Background Color
var bg_color_input = document.getElementById("bgColor");

// Depth Chart
var depth_table = document.getElementById("depthTable");
var depth_rows = depth_table.childNodes;

// Center variables
var center_real;
var center_imag;

// Scale variables
var width_scale;
var aspect_ratio;

// Depth and colors
var depth_list;
var color_list;
