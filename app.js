


// colorChanger.addEventListener('dbclick', resetColor);
// function resetColor()
//form validation
// const form = document.getElementById('contact-form');
// const email = document.getElementById('email');
// const mobile = document.getElementById('mobile');
// const message = document.getElementById('message');
// const submit = document.getElementById('submit-button');
// // const emailWarning = document.getElementById('email-warning'); 
// // const mobileWarning1 = document.getElementById('mobile-warning1');
// // const mobileWarning2 = document.getElementById('mobile-warning2');
// // const messageWarning = document.getElementById('message-warning');
// //const results = [];
// form.addEventListener('click', validate);
// submit.addEventListener('click', formSubmit);
// let fields  = [email, mobile, message];
// function validate(e){
    
//     for(let i=0; i < fields.length ; i++)
//     {
//       if(fields[i].value === '')
//         {
//             fields[i].style.border = '2px solid #C96567';

//         }
//       else{
//           fields[i].style.border = "2px solid gray";
//             if(fields[i] === mobile)
//             {
//               if(fields[i].value.length < 10 || isNaN(fields[i].value) === true)
//               {
//               fields[i].style.border = '2px solid #C96567';
//               fields[i].style.color= '#C96567';
//               }
//               else{
//               fields[i].style.border = "2px solid gray";
//               fields[i].style.color= '#fff';
//               }
//             }
            
//         }

//     }
//     e.preventDefault();
// }

// function formSubmit(e){
//         if(fields[0].style.border === '2px solid gray' && fields[1].style.border === '2px solid gray' && fields[1].style.border === '2px solid gray')
//        {
//         result.style.display = 'block';
//        result.innerHTML = `<h1>FORM SUBMITTED </h1> <br> Email-id : ${email.value} <br> mobile-no:${mobile.value} <br> message : ${message.value}`;
//        for(let i=0;i<fields.length;i++)
//        {
//            fields.style.border = '2px solid white';
//        }
//        }
    
//     form.reset();
   
//     e.preventDefault();
// }

// function validate(e)
// {
//    if(email.value === "")
//     {   
//         // alert('Mail cannot be blank ');
//         emailWarning.style.display = 'block';
//     }
//     else{
//         emailWarning.style.display = 'none';
//         //results[0] = email.value;
//     }
//     if(mobile.value === "")
//     {  
//         mobileWarning1.style.display = 'block';
//         mobileWarning2.style.display = 'none';    
        
                 
//         // alert('Mobile cannot be blank ')
//     }else{
//         mobileWarning1.style.display = 'none';
//         if(isNaN(mobile.value) === true || mobile.value.length < 10 )
//     {
//         // alert('please enter an appropriate number');
        

//         mobileWarning2.style.display = 'block';    
//     }
//     else{
//         mobileWarning2.style.display = 'none';    
//         //results[1] = mobile.value;
//     }

//     }
//     if(message.value === "")
//     {
//         // alert('Message cannot be blank ')
//         messageWarning.style.display = 'block';
//     }
//     else{
//         messageWarning.style.display = 'none';
//         // results[2] = message.value;
//     }
    
    
    

//     if(emailWarning.style.display === 'none' && mobileWarning1.style.display ==='none' && mobileWarning2.style.display === 'none' && messageWarning.style.display === 'none')
//     {  
//       let field = [email.value, mobile.value,  message.value];
//       console.log(results);
//      result.style.display = "block";
//      for(let i = 0 ; i < field.length;i++)
//      {
//        result.innerHTML = `Email:${field[0]} <br>  Mobile:${field[1]} <br> message:${field[2]}`;
//      }
//      form.reset();
//     }
    
    
   
// e.preventDefault();
    
// }
$('.menu-btn').off('click').on('click', function(){
    $('.sidebar').animate({
        width:"toggle"
    });
});
$('.side-close').off('click').on('click',function(){
    $('.sidebar').animate({
        width:"toggle"
    });
});
$(window).scroll(function(){
    if($(this).scrollTop() > 0)
    {
        $('.navbar').addClass('navbar-scroll');
        $('.item').addClass('item-scroll');
        $('.item-link').css('color', '#000');
    }
    else{
        $('.navbar').removeClass('navbar-scroll');
        $('.item').removeClass('item-scroll');
        $('.item-link').removeAttr('style');
    }
});


const email = $("#email");
const mobile = $("#mobile");
const message = $("#message");
const fields = [email, mobile, message];
const result = $(".display-result");
function clearInput()
{
    for(let i=0;i<fields.length;i++)
    {
        fields[i].val('');
    }
}

function submit(){
    for(let i=0;i<fields.length;i++)
    {
        if(fields[i].val() === '')
        {
            fields[i].css('border','2px solid #C96567');
        }
        else{
            fields[i].css('border','2px solid gray');
            fields[i].css('color','#fff');
            }
      
            if(fields[i] == mobile)
            {
        
                if(fields[i].val().length < 10 || $.isNumeric(fields[i].val()) === false)
                {
                    fields[i].css('border','2px solid #C96567');
                    fields[i].css('color','#C96567');
                }
                
            }
            
 
    }
    if(fields[0].css('border-color') === 'rgb(128, 128, 128)' && fields[1].css('border-color') === 'rgb(128, 128, 128)'&& fields[2].css('border-color') === 'rgb(128, 128, 128)')
            {
                result.css('display', 'block');
                result.append(`<br><span id="email">Email-id:${fields[0].val()}</span><br><span id="mobile">Mobile-no:${fields[1].val()}</span><br><span>Message:${fields[2].val()}</span>`);
                debugger;
               clearInput();
               
            }
            else{
               
                result.css('display', 'none');
                
                
            }
           
    
             
}

