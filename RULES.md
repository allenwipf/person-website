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



	display: flex;
	justify-content: space-between;
	padding-right: 30px;
	padding-left: 30px;
	align-items: center;
 	background: #F4F2F0;
 	box-shadow: 0px 3px 1px lightgrey;
 	overflow-x: hidden;
 	position: fixed;

 	transition: 0.3s;