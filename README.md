Light Weight Modal Windows
=============

A simple extendable modal window script for displaying content, video and images in popup windows. The modal windows are built using JQuery, HTML and CSS3. All the CSS classes for the modal windows are are available in the modal.css file to make it easier to style the modals the way you want. A SASS file is also included to compile the modal.css.

How to Use
----------

Minimal configuration


Integration
-----------------
Add JavaScript reference to the modals-min.js or modals.js in your HTML. Make sure to load reference after JQuery.
	
	<script src="js/modals-min.js" type="text/javascript"></script>

Add a reference to the modal.css file.

	<link rel="stylesheet" href="css/modal.css" type="text/css" media="screen">

HTML link to open content in a modal window.

	<a href="content, video or image added here" class="modal">Modal Window</a>

How to open Youtube videos in modal window

	<a href="youTubeEmbed('youtubeVideoIDHere','rel=0&amp;hd=1&amp;wmode=transparent')" class="modal">Open video</a>

How to open JPG or PNG image files in a modal window

	<a href="/pathtoyourimage/image.jpg" class="modal">Open video</a>
	 	



