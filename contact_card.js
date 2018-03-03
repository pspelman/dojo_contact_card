function setEventHandlers() {
    // if you dynamically create content, you should call event handlers after creation
    $('.dynamic-p').css('background-color','aqua');
    $('h1').css('font-size','24pt');
}

// function addTableRow(rowData){
//     var addRowHTML = "<tr><td>" + rowData.first_name + "</td>"; 
//     addRowHTML += "<td>" + rowData.last_name + "</td>";
//     addRowHTML += "<td>" + rowData.details_text + "</td>";
//     // addRowHTML += "<td>" + rowData.contact_number + "</td>"
//     addRowHTML += "</tr>";
//     $('.contacts_table').append(addRowHTML);    
// }

function setShowCardButtonListener(){
    console.log("ShowCardButtonListener set");
    $('.card_book').on('click','.show_contact_card_button',function() {
        // alert("TOGGLE THE CARD toggler!!");
        toggleCard($(this));
        // event.stopPropagation();
    })
}


function toggleCard(cardObject) {
    console.log("toggleCard triggered");
    // alert("TOGGLE THE CARD toggler!!");
    $(cardObject).siblings().slideToggle();
    // $(cardObject).hide();
    // $(cardObject).children().slideToggle();
}

function addContactCard(cardObject){
    var cards=0;
    var first_name = cardObject.first_name;
    var last_name = cardObject.last_name;
    var description = cardObject.details_text;
    console.log(description);

    var cardHTML = `
        <div class="contact_card" style="display: block;">
            <button id="${first_name}" class="show_contact_card_button" name="${cardObject.first_name} ${cardObject.last_name}">
                ${cardObject.first_name} ${cardObject.last_name}</button>
            <div class="contact_card_details" style="display: none" >
               
                <p class="description" >${cardObject.details_text}</p>
                </p>
            </div>
        </div>`;

        // <h1>${cardObject.first_name} ${cardObject.last_name}</h1>
    cards++;
    var currentCardbook = $('.card_book').html();
    $('.card_book').html(currentCardbook + cardHTML);
}


// function addContactCard(inputData) {
//     var newCardHTML = "";

//     <div class="contact_card" style="display: block;">
//         <button id="show_card_first_last0" class="show_contact_card_button" name="first_last">Show Card: first_name + last_name</button>
//         <div class="contact_card_details" style="display: none" >
//             <h1>Person Name</h1>
//             <p class="description" >This is a brief description of the person</p>
//             <p style="display: none;">This is how slide toggle works. It's pretty sweet.
//                             </p>
//         </div>
//     </div>
// }

function resetFields(formFields){
    // console.log(formFields);
    // console.log($(formFields['first_name']));
    console.log($(this.first_name).val());
    $(this.first_name).val("First");
    $(this.last_name).val("Last");
    $(this.details_text).val("Description");
    // $(formFields.last_name).val("last_name");
    // $(formFields.details_text).val("description");
    // $(this.email).val("email");
    // $(this.contact_number).val("contact_number");
}

$(document).ready(function() {

    // $('.contacts_table').click(function() {
    //     // $(this).hide();
    // })

    $('form .form_field, form .contact_card_details').click(function() {
        $(this).val("");
        $('.contact_card_details').attr('placeholder','');
        // $(this.details_text).val("");
        });

    $('.input_form').on("submit",function() {

        newData = [{
            first_name: "",
            last_name: "",
            details_text: "",
            // email: "",
            // contact_number: "",
        }];
        newData.first_name = $(this.first_name).val();
        newData.last_name = $(this.last_name).val();
        newData.details_text = $(this.details_text).val();
        console.log($(this.details_text).val());
        
        // addTableRow(newData);
        addContactCard(newData);
        resetFields($(this));

        // reset the form fields


        // addContactCard(newData);
        return false;
    })


    //set setShowCardButtonListener
    setShowCardButtonListener();






    //TRYING STUFF DOWN HERE...DIDN'T GET IT WORKING...wanted to iterate through the object somehow
    var obj = { first: "John", last: "Doe" };
    
    var descriptors = Object.getOwnPropertyDescriptors(obj);
    // Visit non-inherited enumerable keys
    var fields = [];
    Object.keys(obj).forEach(function(key) {
        fields.push(key);
        console.log(key);
    });
    for(let i = 0; i<fields.length; i++){
        console.log(fields[i]);
    }
console.log(fields[0]);



})