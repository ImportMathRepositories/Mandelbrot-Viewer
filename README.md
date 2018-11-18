# Mandelbrot-Viewer
Mandelbrot set fractal viewer for the web.  

# Setting Up  
This is a basic web viewer that can be run in any browser:  
1. Click clone and download ZIP file  
2. Unzip and open the src folder  
3. Open index.html (double click or right click + open with your browser of choice)  
4. The webpage will open with the default inputs  

# Explaining the Inputs  
1. Width and Height: Enter positive integers for the number of pixels wide and high. I've found that 600x500 to 2400x2000 is the useful range, depending on whether you want an instant draft or a professional render. Feel free to use whatever aspect ratio you want, but remember that this is the dominant factor of render times.  
2. Center Coordinates: These are the coordinates of the Cartesian center of the canvas. Mathematically, these are just the real and imaginary components. These can be any real number and I've verified that they are accurate to at least the trillionth (and likely far beyond).  
3. Viewport Zoom: This is the Euclidean width of your viewport. The height is determined by maintaining the aspect ratio chosen from your width and height in pixels. The smaller this number is, the more zoomed in the viewport is. I've tested this as low as one trillionth (and it probably works far beyond that).  
4. Background Color: This is the background color of the canvas (numbers definitely not part of the set). I would recommend using hex codes as there is no color validation, but many English words for colors work as well.  
5. Depths and Colors: These are the layers of colors that make up the render. Enter positive integers for the depths and make sure that they are sorted from smallest to largest. Use the plus and minus buttons to add or remove layers. The color matched with the largest number will represent the area most likely to be part of the set.  
