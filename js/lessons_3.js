window.LESSONS_PART_3 = [
    // SQL
    {
        id: 'sql-1', language: 'SQL', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Basic Select',
        code: `SELECT FirstName, LastName, Email\nFROM Employees\nWHERE Department = 'Sales'\nORDER BY LastName ASC;`
    },
    {
        id: 'sql-2', language: 'SQL', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Insert Data',
        code: `INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nVALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');`
    },
    {
        id: 'sql-3', language: 'SQL', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Update Statement',
        code: `UPDATE Customers\nSET ContactName = 'Alfred Schmidt', City = 'Frankfurt'\nWHERE CustomerID = 1;`
    },
    {
        id: 'sql-4', language: 'SQL', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Inner Join',
        code: `SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;\n\n-- Returns records that have matching values in both tables`
    },
    {
        id: 'sql-5', language: 'SQL', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Group By',
        code: `SELECT COUNT(CustomerID), Country\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5\nORDER BY COUNT(CustomerID) DESC;`
    },
    {
        id: 'sql-6', language: 'SQL', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Create Table',
        code: `CREATE TABLE Persons (\n    PersonID int,\n    LastName varchar(255),\n    FirstName varchar(255),\n    Address varchar(255),\n    City varchar(255)\n);`
    },
    {
        id: 'sql-7', language: 'SQL', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Delete Records',
        code: `DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';\n\n-- Be careful when deleting records in a table!\n-- Notice the WHERE clause in the DELETE statement.`
    },
    {
        id: 'sql-8', language: 'SQL', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Left Join',
        code: `SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nORDER BY Customers.CustomerName;`
    },
    {
        id: 'sql-9', language: 'SQL', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Alter Table',
        code: `ALTER TABLE Customers\nADD Email varchar(255);\n\nALTER TABLE Customers\nDROP COLUMN Email;`
    },
    {
        id: 'sql-10', language: 'SQL', type: 'code', difficulty: 'Hard', timeLimit: 110, title: 'Subquery',
        code: `SELECT ProductName\nFROM Products\nWHERE ProductID = ANY\n  (SELECT ProductID\n  FROM OrderDetails\n  WHERE Quantity = 10);`
    },
    // HTML
    {
        id: 'html-1', language: 'HTML', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Basic Structure',
        code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>`
    },
    {
        id: 'html-2', language: 'HTML', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Simple Form',
        code: `<form action="/action_page.php">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname" value="John"><br>\n  <label for="lname">Last name:</label><br>\n  <input type="text" id="lname" name="lname" value="Doe"><br><br>\n  <input type="submit" value="Submit">\n</form>`
    },
    {
        id: 'html-3', language: 'HTML', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Table Structure',
        code: `<table>\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n    <th>Country</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Centro comercial</td>\n    <td>Francisco Chang</td>\n    <td>Mexico</td>\n  </tr>\n</table>`
    },
    {
        id: 'html-4', language: 'HTML', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Unordered List',
        code: `<ul>\n  <li>Coffee</li>\n  <li>Tea\n    <ul>\n      <li>Black tea</li>\n      <li>Green tea</li>\n    </ul>\n  </li>\n  <li>Milk</li>\n</ul>`
    },
    {
        id: 'html-5', language: 'HTML', type: 'code', difficulty: 'Medium', timeLimit: 70, title: 'Images and Links',
        code: `<a href="https://www.w3schools.com">\n  <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">\n</a>\n\n<p>The image above is a link to W3Schools.</p>`
    },
    {
        id: 'html-6', language: 'HTML', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Semantic Tags',
        code: `<article>\n  <header>\n    <h1>What Does WWF Do?</h1>\n    <p>WWF's mission:</p>\n  </header>\n  <p>WWF's mission is to stop the degradation of our planet's natural environment.</p>\n</article>`
    },
    {
        id: 'html-7', language: 'HTML', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Meta Tags',
        code: `<head>\n  <meta charset="UTF-8">\n  <meta name="description" content="Free Web tutorials">\n  <meta name="keywords" content="HTML, CSS, JavaScript">\n  <meta name="author" content="John Doe">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>`
    },
    {
        id: 'html-8', language: 'HTML', type: 'code', difficulty: 'Hard', timeLimit: 110, title: 'Input Types',
        code: `<form>\n  <label for="favcolor">Select your favorite color:</label>\n  <input type="color" id="favcolor" name="favcolor">\n  \n  <label for="birthday">Birthday:</label>\n  <input type="date" id="birthday" name="birthday">\n  \n  <label for="quantity">Quantity (between 1 and 5):</label>\n  <input type="number" id="quantity" name="quantity" min="1" max="5">\n</form>`
    },
    {
        id: 'html-9', language: 'HTML', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Video Element',
        code: `<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.ogg" type="video/ogg">\n  Your browser does not support the video tag.\n</video>`
    },
    {
        id: 'html-10', language: 'HTML', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Internal CSS (Flexbox)',
        code: `<style>\n.flex-container {\n  display: flex;\n  background-color: DodgerBlue;\n}\n\n.flex-container > div {\n  background-color: #f1f1f1;\n  margin: 10px;\n  padding: 20px;\n  font-size: 30px;\n}\n</style>\n\n<div class="flex-container">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>`
    },
    // Text
    {
        id: 'text-eng-1', language: 'English', type: 'text', difficulty: 'Easy', timeLimit: 60, title: 'Steve Jobs Quote',
        code: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
    },
    {
        id: 'text-eng-2', language: 'English', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Clean Code Principle',
        code: "Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer's intent but rather is full of crisp abstractions and straightforward lines of control."
    },
    {
        id: 'text-vn-1', language: 'Vietnamese', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Tục ngữ Việt Nam',
        code: "Có công mài sắt, có ngày nên kim. Học, học nữa, học mãi. Đi một ngày đàng, học một sàng khôn."
    },
    {
        id: 'gen-English-50', language: 'English', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random English (50 Words)',
        code: generateRandomText('English', 50)
    },
    {
        id: 'gen-English-100', language: 'English', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random English (100 Words)',
        code: generateRandomText('English', 100)
    },
    {
        id: 'gen-Vietnamese-50', language: 'Vietnamese', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random Vietnamese (50 Words)',
        code: generateRandomText('Vietnamese', 50)
    },
    {
        id: 'gen-Vietnamese-100', language: 'Vietnamese', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random Vietnamese (100 Words)',
        code: generateRandomText('Vietnamese', 100)
    },
    {
        id: 'text-fr-1', language: 'French', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Citation Française',
        code: "Le petit prince s'assit sur une pierre et leva les yeux vers le ciel. Je me demande, dit-il, si les étoiles sont éclairées afin que chacun puisse un jour retrouver la sienne."
    },
    {
        id: 'text-de-1', language: 'German', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Deutsches Sprichwort',
        code: "Aller Anfang ist schwer. Übung macht den Meister. Wer rastet, der rostet. Morgenstund hat Gold im Mund."
    },
    {
        id: 'text-es-1', language: 'Spanish', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Cita de Cervantes',
        code: "La pluma es la lengua del alma; cuales fueren los conceptos que en ella se engendraron, tales serán sus escritos."
    },
    {
        id: 'text-jp-1', language: 'Japanese', type: 'text', difficulty: 'Medium', timeLimit: 60, title: '日本のことわざ',
        code: "七転び八起き。猿も木から落ちる。知らぬが仏。千里の道も一歩から。"
    },
    {
        id: 'text-kr-1', language: 'Korean', type: 'text', difficulty: 'Medium', timeLimit: 60, title: '한국 속담',
        code: "가는 말이 고와야 오는 말이 곱다. 시작이 반이다. 천 리 길도 한 걸음부터. 소 잃고 외양간 고친다."
    },
    {
        id: 'text-cn-1', language: 'Chinese', type: 'text', difficulty: 'Medium', timeLimit: 60, title: '中国谚语',
        code: "千里之行，始于足下。学而时习之，不亦说乎？有朋自远方来，不亦乐乎？"
    },
    {
        id: 'text-ru-1', language: 'Russian', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Русская пословица',
        code: "Век живи — век учись. Без труда не выловишь и рыбку из пруда. Слово — не воробей, вылетит — не поймаешь."
    },
    // Random Generators for New Languages
    {
        id: 'gen-French-50', language: 'French', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random French (50 Words)',
        code: generateRandomText('French', 50)
    },
    {
        id: 'gen-French-100', language: 'French', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random French (100 Words)',
        code: generateRandomText('French', 100)
    },
    {
        id: 'gen-German-50', language: 'German', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random German (50 Words)',
        code: generateRandomText('German', 50)
    },
    {
        id: 'gen-German-100', language: 'German', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random German (100 Words)',
        code: generateRandomText('German', 100)
    },
    {
        id: 'gen-Spanish-50', language: 'Spanish', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random Spanish (50 Words)',
        code: generateRandomText('Spanish', 50)
    },
    {
        id: 'gen-Spanish-100', language: 'Spanish', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random Spanish (100 Words)',
        code: generateRandomText('Spanish', 100)
    },
    {
        id: 'gen-Japanese-50', language: 'Japanese', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random Japanese (50 Words)',
        code: generateRandomText('Japanese', 50)
    },
    {
        id: 'gen-Japanese-100', language: 'Japanese', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random Japanese (100 Words)',
        code: generateRandomText('Japanese', 100)
    },
    {
        id: 'gen-Korean-50', language: 'Korean', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random Korean (50 Words)',
        code: generateRandomText('Korean', 50)
    },
    {
        id: 'gen-Korean-100', language: 'Korean', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random Korean (100 Words)',
        code: generateRandomText('Korean', 100)
    },
    {
        id: 'gen-Chinese-50', language: 'Chinese', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random Chinese (50 Words)',
        code: generateRandomText('Chinese', 50)
    },
    {
        id: 'gen-Chinese-100', language: 'Chinese', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random Chinese (100 Words)',
        code: generateRandomText('Chinese', 100)
    },
    {
        id: 'gen-Russian-50', language: 'Russian', type: 'text', difficulty: 'Medium', timeLimit: 60, title: 'Random Russian (50 Words)',
        code: generateRandomText('Russian', 50)
    },
    {
        id: 'gen-Russian-100', language: 'Russian', type: 'text', difficulty: 'Hard', timeLimit: 120, title: 'Random Russian (100 Words)',
        code: generateRandomText('Russian', 100)
    }
];
