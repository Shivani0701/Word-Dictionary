<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Dictionary</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <section>
        <form class="searchForm">
            <h1>Word Dictionary</h1>
            <input type="search" name="searchBox" id="searchBox" placeholder="word to search">
            <input type="button" name="submit" value="submit" onclick="wordSearch()">
            <input type="reset" value="reset" onclick="reloadPage()">
        </form>

        <div class="searchResult" id="searchResult">
            <div>
                <h1>Word</h1>
                <p id="word"></p>
            </div>
            <div>
                <h1>Definition</h1>
                <p id="definition"></p>
            </div>
            <div>
                <h1>Example</h1>
                <p id="example"></p>
            </div>
            <div>
                <h1>How To Spell?</h1>
                <p id="spell"></p>
            </div>
        </div>
    </section>

    <script src="js/main.js"></script>

</body>

</html>
