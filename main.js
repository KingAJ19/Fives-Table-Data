var myArray = [
    {
        'name' : 'Calvin', 'goals' : '10', 'assists' : '7', 'position' : 'ST'
    }, 
    {
        'name' : 'Elan', 'goals' : '10', 'assists' : '7', 'position' : 'ST'
    }, 
    {
        'name' : 'Jesse', 'goals' : '10', 'assists' : '7', 'position' : 'ST'
    }, 
    {
        'name' : 'Matthew', 'goals' : '10', 'assists' : '7', 'position' : 'ST'
    }, 
    {
        'name' : 'Rynell', 'goals' : '10', 'assists' : '7', 'position' : 'ST'
    }, 
    {
        'name' : 'Tumi', 'goals' : '10', 'assists' : '7', 'position' : 'ST'
    }, 
    {
        'name' : 'Basla', 'goals' : '10', 'assists' : '7', 'position' : 'ST'
    }, 
]


$('#search-input').on('keyup', function(){
    var value = $(this).val()
    console.log('Value:', value)
    var data = searchTable(value, myArray)
    buildTable(data)
})


function searchTable(value, data){
    var filteredData = []

    for (var i = 0; i < data.length; i++){
        value = value.toLowerCase()
        var name = data[i].name.toLowerCase()
    
        if(name.startsWith(value)) {
            filteredData.push(data[i])
        }
    }
    return filteredData
} 

buildTable(myArray)

function buildTable(data) {
    var table = document.getElementById('myTable')

    for ( var i = 0; i < data.length; i++) {
        var row = `<tr>
                   <td>${data[i].name}</td>
                   <td>${data[i].goals}</td>
                   <td>${data[i].assists}</td>
                   <td>${data[i].position}</td>
                   </tr>`
                table.innerHTML += row
    }
}

