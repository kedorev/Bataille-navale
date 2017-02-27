<html>
    <head>
        <title>Bataille navalle</title>
        <script type="application/javascript" src="JS/jquery-3.1.1.min.js"></script>
        <script
                src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
                integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
                crossorigin="anonymous"></script>
        <script type="application/javascript" src="JS/boat.js"></script>
        <script type="application/javascript" src="JS/main.js"></script>


        <link rel="stylesheet" href="CSS/main.css">
    </head>

    <body class="container">
        <div class="main">
            <h2>Balistic sheet</h2>
            <table>
                <?php
                    for($i = 0; $i <10; $i++)
                    {
                        echo "<tr>";
                        $col = chr(ord("A")+$i);
                        for($j = 0; $j<10; $j++)
                        {

                            echo "<td class='navaleCells' data-id=\"".$col.$j."\" id=".$col.$j.">";

                            echo "</td>";
                        }
                        echo "</tr>";
                    }
                ?>
            </table>

            <br>
            <br>
            <br>

            <h2>Preparation sheet</h2>
            <table>
                <?php
                for($i = 0; $i <10; $i++)
                {
                    echo "<tr>";
                    $col = chr(ord("A")+$i);
                    for($j = 0; $j<10; $j++)
                    {

                        echo "<td class='navaleCells' id=\"Computer".$col.$j."\">";

                        echo "</td>";
                    }
                    echo "</tr>";
                }
                ?>
            </table>
        </div>
        <div class="data">
            Player 1 :
            <ul>
                <li id="Player1CarrierDesc">
                    Carrier<br>
                    <div class="makeMeDraggable">
                        <img class="boat " src="Img/Carrier.gif">
                    </div>
                </li>
                <li id="Player1BattleCruiserADesc">
                    Battle Cruiser
                </li>
                <li id="Player1BattleCruiserBDesc">
                    Battle Cruiser B
                </li>
                <li id="Player1Destroyer">
                    Destroyer
                </li>
            </ul>
            <br>
            <br>
            <br>
            Player 2 :
            <ul>
                <li id="Player1CarrierDesc">
                    Carrier
                </li>
                <li id="Player1BattleCruiserADesc">
                    Battle Cruiser A
                </li>
                <li id="Player1BattleCruiserBDesc">
                    Battle Cruiser B
                </li>
                <li id="Player1Destroyer">
                    Destroyer
                </li>
            </ul>

            To fire, click on the Balistic Sheet.
        </div>
    </body>
</html>
