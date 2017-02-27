$( document ).ready(function() {
    newGame()
    console.log("debug on");
    $(".navaleCells").click(function () {
        player1Fire($(this).attr('data-id'));
    })
});

var NbCol = 10;

var player1Carrier;
var player2Carrier;

var player1Destroyer;
var player2Destroyer;

var player1BattleCruiser;
var player2BattleCruiser;

var player1FregateA;
var player1FregateB;
var player2FregateA;
var player2FregateB;

var player1Played;
var player2Played;

var player1Boat = 5;
var player2Boat = 5;


function newGame()
{
    var carrierDir;
    var carrierPos;

    player1Played = [[],[]];
    player2Played = [[],[]];
    dragable();

    player2Carrier = setCarrier(randomPos(),randomDirection());
    while(!player2Carrier.legit())
    {
        player2Carrier = setCarrier(randomPos(),randomDirection());
    }
    console.log(player2Carrier.getDir());
    console.log(player2Carrier.getAllPositions());

    player2BattleCruiser = setBattleCruiser(randomPos(),randomDirection());
    while(!player2BattleCruiser.legit())
    {
        player2BattleCruiser = setBattleCruiser(randomPos(),randomDirection());
    }

    player2FregateA = setFregate(randomPos(),randomDirection());
    while(!player2FregateA.legit())
    {
        player2FregateA = setFregate(randomPos(),randomDirection());
    }

    player2FregateB = setFregate(randomPos(),randomDirection());
    while(!player2FregateB.legit())
    {
        player2FregateB = setFregate(randomPos(),randomDirection());
    }

    player2Destroyer = setDestroyer(randomPos(),randomDirection());
    while(!player2Destroyer.legit())
    {
        player2Destroyer = setDestroyer(randomPos(),randomDirection());
    }


    //carrierPos = window.prompt("Please set the carrier main point :","");
    //carrierDir = window.prompt("and the direction ( N/S/E/O ) :","");
    //player1Carrier = setCarrier(carrierPos,carrierDir);
    //$("#"+carrierPos).addClass('hit');
    player1BattleCruiser = setBattleCruiser("A3","S");
    player1FregateA = setFregate("A6","S");
    player1FregateB = setFregate("F8","S");
    player1Destroyer = setDestroyer("I6","O");
}


function player1Fire(position)
{
    //console.log(position);
    if(jQuery.inArray(position, player1Played) == -1)
    {
        player1Played.push(position);
        if(player2Carrier.isHit(position,2))
        {
            $("#"+position).addClass('hit');
        }
        else if(player2Destroyer.isHit(position,2))
        {
            $("#"+position).addClass('hit');
        }
        else if(player2BattleCruiser.isHit(position,2))
        {
            $("#"+position).addClass('hit');
        }
        else if(player2FregateA.isHit(position,2))
        {
            $("#"+position).addClass('hit');
        }
        else if(player2FregateB.isHit(position,2))
        {
            $("#"+position).addClass('hit');
        }
        else
        {
            $("#"+position).addClass('plouf');
        }
    }
    else
    {
        alert("Commander, nous avons déjà effectué des tirs de barrages à ces coordonnées !")
    }
    //console.log(player2Boat);

    if(player2Boat == 0)
    {
        alert("Vous avez gagné");
    }


    npcPos = randomPos();
    console.log(npcPos);
    fireNPC(npcPos);

    if(player1Boat == 0)
    {
        alert("Vous avez perdu");
    }

}


function randomPos()
{
    return generateCol()+generateRow();
}

function generateRow()
{
    return Math.floor(Math.random()*100 % NbCol);
}

function generateCol()
{
    asciiA = "A".charCodeAt(0);
    return String.fromCharCode(asciiA+Math.floor(Math.random()*100 % NbCol));
}

function fireNPC(position)
{
    if(jQuery.inArray(position, player2Played) == -1)
    {
        player2Played.push(position);
        if(player1Carrier.isHit(position,2))
        {
            $("#Computer"+position).addClass('hit');
        }
        else if(player1Destroyer.isHit(position,2))
        {
            $("#Computer"+position).addClass('hit');
        }
        else if(player1BattleCruiser.isHit(position,2))
        {
            $("#Computer"+position).addClass('hit');
        }
        else if(player1FregateB.isHit(position,2))
        {
            $("#Computer"+position).addClass('hit');
        }
        else if(player1FregateA.isHit(position,2))
        {
            $("#Computer"+position).addClass('hit');
        }
        else
        {
            $("#Computer"+position).addClass('plouf');
        }
    }
    else
    {

        fireNPC(randomPos());
    }
}

function dragable() {
    $('.makeMeDraggable').draggable();
}
