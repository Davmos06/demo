<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лекция 2</title>
</head>
<body>
<p>Параграф</p>
<p>В этом параграфе встроен <span>оригинальный фрагмент</span>
</p>
<p>В текущем параграфе есть <br>разрыв строки</p>
</body>
<script>
    const item = document.getElementsByTagName('p')[1]
    console.log(item.innerHTML)
    item.innerHTML = 'новое значение'
    console.log(item.innerHTML)
</script>
</html> 
