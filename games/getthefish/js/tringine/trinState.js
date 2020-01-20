function TrinState()	{
    this.group = new TrinLayer();
}


TrinState.prototype.group               =   null;
TrinState.prototype.create		=	function()	{
};
TrinState.prototype.update		=	function()	{
    this.group.update();
};
TrinState.prototype.draw		=	function(context)	{
    this.group.draw(context);
};
TrinState.prototype.destroy		=	function()	{
    this.group.destroy();
};
TrinState.prototype.add			=	function(entity)	{
    this.group.add(entity);
};
TrinState.prototype.remove		= 	function(entity)	{
    this.group.remove(entity);
};
TrinState.prototype.resized		= 	function()	{};
