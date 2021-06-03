flowers = [];

function submit()
{
    var name_of_flowers = [];
    for (i = 1; i <= 4; i++)
    {
        var a = document.getElementById("flower"+i).value;
        name_of_flowers.push(a);
        console.log(name_of_flowers);
    }
    document.getElementById("Flower_names").innerHTML = name_of_flowers;
}