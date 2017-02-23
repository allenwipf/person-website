Any time you float elements, MAKE SURE there is a CLEAR div immediately before their PARENT ENDS.

<div class="floatContainer">
	<div class="floatedChild"></div>
	<div class="floatedChild"></div>

	<div class="clear"></div>
</div>

<style type="text/css">
	.clear{
		clear: both;
	}
</style>