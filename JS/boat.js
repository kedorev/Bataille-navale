/**
 * Created by apprenant on 27/02/17.
 */
function Boat(position, direction, size)
{
    var pos = position;
    var dir = direction;
    var size = size;
    var hullPoint = size;

    this.getDir = function()
    {
        return dir;
    }

    this.isHit = function(FirePosition, player)
    {
        if(pos == FirePosition)
        {
            this.removeHullPoint(player);
            return true;
        }
        else
        {
            if(dir == "S")
            {
                if(FirePosition.charAt(1) != pos.charAt(1))
                {
                    return false;
                }
                else
                {
                    if(FirePosition.charCodeAt(0) < pos.charCodeAt(0) || FirePosition.charCodeAt(0) > pos.charCodeAt(0) + size -1)
                    {
                        return false;
                    }
                    else
                    {
                        this.removeHullPoint(player);
                        return true;
                    }
                }
            }
            else if(dir == "N")
            {
                if(FirePosition.charAt(1) != pos.charAt(1))
                {
                    return false;
                }
                else
                {
                    //console.log(parseInt(pos.charCodeAt(0)) + size -1 );
                    //console.log(FirePosition.charAt(0)+ "      " + pos.charAt(0));
                    if(FirePosition.charCodeAt(0) > pos.charCodeAt(0) || FirePosition.charCodeAt(0) < pos.charCodeAt(0) - size +1 )
                    {
                        return false;
                    }
                    else
                    {
                        this.removeHullPoint(player);
                        return true;
                    }
                }
            }
            else if(dir == "E")
            {
                if(FirePosition.charAt(0) != pos.charAt(0))
                {
                    return false;
                }
                else
                {
                    //console.log(parseInt(pos.charCodeAt(0)) + size -1 );
                    //console.log(FirePosition.charAt(0)+ "      " + pos.charAt(0));
                    if(FirePosition.charCodeAt(1) < pos.charCodeAt(1) || FirePosition.charCodeAt(1) > pos.charCodeAt(1) + size - 1 )
                    {
                        return false;
                    }
                    else
                    {
                        this.removeHullPoint(player);
                        return true;
                    }
                }
            }
            else if(dir == "O")
            {
                if(FirePosition.charAt(0) != pos.charAt(0))
                {
                    return false;
                }
                else
                {
                    //console.log(parseInt(pos.charCodeAt(0)) + size -1 );
                    //console.log(FirePosition.charAt(0)+ "      " + pos.charAt(0));
                    if(FirePosition.charCodeAt(1) > pos.charCodeAt(1) || FirePosition.charCodeAt(1) < pos.charCodeAt(1) - size + 1 )
                    {
                        return false;
                    }
                    else
                    {
                        this.removeHullPoint(player);
                        return true;
                    }
                }
            }
            else
            {
                return false;
            }
        }
    }

    this.removeHullPoint = function(player)
    {
        //console.log(size + "     "+hullPoint);
        hullPoint = hullPoint -1;
        if(hullPoint == 0 )
        {
            //console.log(size + "     "+hullPoint);
            if(player == 1) {
                player1Boat = player1Boat - 1;
            }
            else
            {
                player2Boat = player2Boat - 1;
            }
        }
        return hullPoint;
    }


    this.positionAvailable = function (position) {
        if(pos == position)
        {
            return false;
        }
        else {
            if (dir == "S") {
                if (position.charAt(1) != pos.charAt(1)) {
                    return true;
                }
                else {
                    if (position.charCodeAt(0) < pos.charCodeAt(0) || position.charCodeAt(0) > pos.charCodeAt(0) + size - 1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            else if (dir == "N") {
                if (FirePosition.charAt(1) != pos.charAt(1)) {
                    return true;
                }
                else {
                    if (position.charCodeAt(0) > pos.charCodeAt(0) || position.charCodeAt(0) < pos.charCodeAt(0) - size + 1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            else if (dir == "E") {
                if (position.charAt(0) != pos.charAt(0)) {
                    return true;
                }
                else {
                    if (position.charCodeAt(1) < pos.charCodeAt(1) || position.charCodeAt(1) > pos.charCodeAt(1) + size - 1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            else if (dir == "O") {
                if (position.charAt(0) != pos.charAt(0)) {
                    return false;
                }
                else {
                    if (position.charCodeAt(1) > pos.charCodeAt(1) || position.charCodeAt(1) < pos.charCodeAt(1) - size + 1) {
                        return false;
                    }
                    else {
                        this.removeHullPoint(player);
                        return true;
                    }
                }
            }
            else {
                return false;
            }
        }
    }


    this.legit = function ()
    {
        if(dir == "O")
        {
            if(pos.charCodeAt(1) - size + 1 < 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        else if(dir == "E")
        {
            if(pos.charCodeAt(1) + size - 1 > NbCol)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        else if(dir == "N")
        {
            if(pos.charCodeAt(0) - size + 1 < 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        else if(dir == "N")
        {
            if(pos.charCodeAt(0) + size - 1 > NbCol)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }

    this.getAllPositions = function()
    {
        var res = new Array();
        if(dir == "O")
        {
            for(var i = pos.charCodeAt(1) ;i > pos.charCodeAt(1) - size + 1; i--)
            {
                res.push(pos.charCodeAt(1));
                col = pos.charAt(0);
                row = pos.charAt(1)+1
                pos = pos.charAt(0)+(pos.charCodeAt(1)+1);
                console.log(col + "   " + row);
            }
        }
        return res;
    }
}


function setCarrier(position, direction)
{
    var boat = new Boat(position, direction, 5);
    return boat;
}


function setBattleCruiser(position, direction)
{
    var boat = new Boat(position, direction, 4);
    return boat;
}


function setFregate(position, direction)
{
    var boat = new Boat(position, direction, 3);
    return boat;
}

function setDestroyer(position, direction)
{
    var boat = new Boat(position, direction, 2);
    return boat;
}

function randomDirection()
{
    direction = Math.floor(Math.random()*10 % 4);
    switch(direction) {
        case 0:
            return "N";
            break;
        case 1:
            return "S";
            break;
        case 2:
            return "E";
            break;
        case 3:
            return "O";
            break;
    }
}


/*
 $( ".navaleCells" ).droppable({
      drop: function( event, ui ) {
        $(this).html( "Dropped!" );
      }});
    */