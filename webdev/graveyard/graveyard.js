//Welcome to the graveyard. This serves as a graveyard for all of the code that
//are no longer used or still being used. These are stored here to maintain a record
//of all of the previous iterations of a code and ensure that if ever something breaks
//we would be able to take a look at these and fix them or reuse them.


// ------------------------------------------------------------------------------------1


//This is the original displayItem function. Uncomment this to access the old Function

// function displayItem(item) {
//     const itemDisplay = document.getElementById('item_display')

//     // Create HTML elements to display item information
//     const itemDiv = document.createElement('div')
//     itemDiv.classList.add('item')

//     const itemDivinner = document.createElement('div')
//     itemDivinner.classList.add('inner');

//     //sample only, change if item has an image
//     const itemimg =document.createElement('img');
//     itemimg.src = item.imgurl
//     //assuming naa nay page mo view sa item detail w/ seller contact, change lang kung unsa imo trippings
//     const button =document.createElement('button');
//     button.innerHTML=`contact seller`

//     const name = document.createElement('p')
//     name.textContent = `Name of product: ${item.name}`

//     const price = document.createElement('p')
//     price.textContent = `Price: ${item.price}`

//     const description = document.createElement('p');
//     description.textContent = `Description: ${item.desc}`

   

//     // Append elements to the container
//         itemDivinner.appendChild(name)
//         itemDivinner.appendChild(price)
//         itemDivinner.appendChild(description)
//         itemDivinner.appendChild(button);
//         itemDiv.appendChild(itemimg);
//         itemDiv.appendChild(itemDivinner)
//         itemDisplay.appendChild(itemDiv)
// }

// ------------------------------------------------------------------------------------2


//displayItem (Revised) Function Ver 1

// function displayItem(item, includeButton=true) {
//     const itemDisplay = document.getElementById('item_display')

//     // Create HTML elements to display item information
//     const itemDiv = document.createElement('div')
//     itemDiv.classList.add('item')

//     const itemDivinner = document.createElement('div')
//     itemDivinner.classList.add('inner');

//     //sample only, change if item has an image
//     const itemimg =document.createElement('img');
//     itemimg.src = item.imgurl


//     const name = document.createElement('p')
//     name.textContent = `Name of product: ${item.name}`

//     const price = document.createElement('p')
//     price.textContent = `Price: ${item.price}`

//     const description = document.createElement('p');
//     description.textContent = `Description: ${item.desc}`

   

//     // Append elements to the container
//         itemDivinner.appendChild(name)
//         itemDivinner.appendChild(price)
//         itemDivinner.appendChild(description)
        
//         itemDiv.appendChild(itemimg);
//         itemDiv.appendChild(itemDivinner)
        

//         if(includeButton==true){
//             //assuming naa nay page mo view sa item detail w/ seller contact, change lang kung unsa imo trippings
//             const button =document.createElement('button');
//             button.innerHTML=`contact seller`
//             itemDivinner.appendChild(button);
//         }else{
//             const button1 =document.createElement('button');
//             button1.innerHTML=`Edit Item`
//             button1.addEventListener('click', () => {
//                 const editForm=document.createElement('form')
//                 editForm.addEventListener('submit', (event) => {
//                     event.preventDefault()
//                     editItem(item)
        
        
//                 })
                
//                 const nameLabel=document.createElement('label')
//                 nameLabel.textContent='New name: '
//                 const nameInput=document.createElement('input')
//                 nameInput.type='text'
//                 nameInput.id='Nname'
//                 nameInput.value=item.name
//                 nameLabel.appendChild(nameInput)
//                 editForm.appendChild(nameLabel)
        
//                 const priceLabel=document.createElement('label')
//                 priceLabel.textContent='New price: '
//                 const priceInput=document.createElement('input')
//                 priceInput.type='text'
//                 priceInput.id='Nprice'
//                 priceInput.value=item.price
//                 priceLabel.appendChild(priceInput)
//                 editForm.appendChild(priceLabel)
        
//                 const descLabel=document.createElement('label')
//                 descLabel.textContent='New description: '
//                 const descInput=document.createElement('input')
//                 descInput.type='text'
//                 descInput.id='Ndesc'
//                 descInput.value=item.desc
//                 descLabel.appendChild(descInput)
//                 editForm.appendChild(descLabel)
        
//                 const submitButton=document.createElement('button')
//                 submitButton.type='submit'
//                 submitButton.textContent='Save Changes'
//                 editForm.appendChild(submitButton)
        
//                 // Replace item display with edit form
//                 itemDisplay.replaceChild(editForm, itemDiv)
//             })
        
//             const button2 =document.createElement('button')
//             button2.innerHTML=`Delete Item`

//             itemDivinner.appendChild(button1)
//             itemDivinner.appendChild(button2)
//         }

//         itemDisplay.appendChild(itemDiv)
// }
