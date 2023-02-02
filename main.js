var myArray = [
    {
        'name' : 'Calvin', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    }, 
    {
        'name' : 'Elan', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    }, 
    {
        'name' : 'Jesse', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    }, 
    {
        'name' : 'Matthew', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    }, 
    {
        'name' : 'Rynell', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    }, 
    {
        'name' : 'Tumi', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    }, 
    {
        'name' : 'Basla', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    }, 
    {
        'name' : 'Ethan', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Jordan', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Nahum', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Nathan', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Latham', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Kirwin', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Cullen', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Luke', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Anele', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Dillon', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
    {
        'name' : 'Lyndon', 'goals' : '0', 'assists' : '0', 'position' : 'ST'
    },
]


buildTable(myArray)

function buildTable(data) {
    var table = document.getElementById('myTable')
    table.innerHTML = ''

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


$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if (order == 'desc') {
        $(this).data('order', 'asc')
        myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'
    } else {
        $(this).data('order', 'desc')
        myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
        text += '&#9650'
    }
    $(this).html(text)
    buildTable(myArray)
})

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}