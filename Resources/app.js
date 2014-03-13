Titanium.UI.setBackgroundColor('#000');

var gameList = [{title: "Super Mario Bros", description: "The Super Mario Brothers had their debut in 1985, as an interesting platformer followed the adventure of pair of plumbers attempting to save a princess."}, 
				{title: "The Legend of Zelda", description: "The Legend of Zelda is an action-adventure series starting in 1986. This game series follows a boy garbed in a green tunic, traveling the fantasy world of Hyrule to save Princess Zelda."}, 
				{title: "Pokemon", description: "Pokemon is a series of role playing games originating in 1996. The series is well known for the idea of using your collected monsters to defeat eight Gym Masters, and finally defeat the Elite Four and becoming the Pokemon Champion."}, 
				{title: "inFamous", description: "inFamous is comparatively more recent to the action-adventure series, with the first game releasing in 2009. You follow the story of Cole MacGrath, a courier who suddenly receives special lightning superpowers."}];
				
var recentReleases = [{title: "South Park: The Stick of Truth", description: "The Stick of Truth came out early March 2014. It is a clever twist on role playing games, using a lot of references to the South Park show, but allowing for large world exploration and adventure."}, 
{title: "Dark Souls 2", description: "Dark Souls 2 is an action role playing game that was released mid March 2014. You play as a cursed undead, searching a fantasy kingdom in order to find a cure for said curse."}, 
{title: "Titanfall", description: "Titanfall is a first person shooter released mid March 2014. It takes place in a futuristic world in a war, allowing you to play as free-running pilots, or their large mechanical walkers called Titans."}];

var firstWindow = Ti.UI.createWindow({
	title: "My First Window",
	backgroundColor: "#fff",
});

var firstView = Ti.UI.createView({
	height: 65,
	backgroundColor:"#fff",
	top:0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: firstView.height + firstView.top
});

var topTitle = Ti.UI.createLabel({
	text: "Favorite Video Game Franchises",
	font: {fontSize: 20, fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var gameTable = Ti.UI.createTableView({
	top: border.top + border.height
});

var majorSection = Ti.UI.createTableViewSection({
	headerTitle: "Favorite Game Franchises",
	footerTitle: "Major Franchises"
});

var recentSection = Ti.UI.createTableViewSection({
	headerTitle: "Recent Releases",
	footerTitle: "Most Recent Hits"
});

var allGamesSections = [majorSection, recentSection];


if(Ti.Platform.name ==="iPhone OS"){
	gameTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

gameTable.setData(allGamesSections);

var loadFile = require("games");

firstView.add(topTitle);
firstWindow.add(firstView, border, gameTable);
firstWindow.open();
