          function removeItem(context) {
                  
                 context.parentElement.remove();
              }
              var form = document.querySelector("#newItem");
              var list = document.querySelector("#items");
              var submitBtn = document.querySelector("#submitBtn");
              submitBtn.onclick = function(e){
                  event.preventDefault();
                 var newItem = document.createElement("li");
                 var submitValue = document.querySelector("#newValue").value;
                 newItem.innerHTML = '<button class="remove" onclick="removeItem(this)">X</button>' + submitValue;
                 list.appendChild(newItem);
              }