<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>电锯切割狂</title>
		<meta name="viewport" content="" data-original="width = device-width, initial-scale=1, maximum-scale=1.01" />
		<style>
			body {
				background-color: black;
				background-image: url(index_gradient.png), url(index_bg.jpg);
				background-size: 100% auto, auto 100%;
				background-position: center bottom, left top;
				background-repeat: repeat-y, repeat-x;
				padding: 0px;
				margin: 0px;
			}
		</style>
		<script type="text/javascript" src="js/phaser.min.js"></script>
		<script type="text/javascript" src="js/game.min.js"></script>


	</head>

	<body>
	<div style="display:none;">
	 <img src="big_icon.jpg" />
	</div>
		<script>		    
    		game = new Phaser.Game(420, 525, Phaser.CANVAS, '',"",false);
    		game.state.add('Boot', Boot);
    		game.state.add('Preload', Preload);
    		game.state.add('MainMenu', MainMenu);
    		game.state.add('Play', Play);
    		//game.state.add('PhotoMaker', PhotoMaker);
    		game.state.start('Boot');
		</script>
	</body>
</html>