
$(document).ready(function(){
    "use strict";

    var $todoListButton = $(".ul-contact-mobile-icon");
    var $todoSidebar = $(".ul-todo-sidebar");
    var $todoSidebarClose = $(".todo-sidebar-close ")

    $todoListButton.on("click" , function(){
        $todoSidebar.addClass('ul-todo-sidebar open');
    })

    $todoSidebarClose.on("click", function(){
        $todoSidebar.removeClass(' open')
    })



    // CRUD operation 
    var persons = [
      {
        id: 1,
        img: "assets/images/faces/1.jpg"
      },
      {
        id: 2,
        img: "assets/images/faces/2.jpg" 
      },
      {
        id: 3,
        img: "assets/images/faces/3.jpg" 
      },
      {
        id: 4,
        img: "assets/images/faces/4.jpg" 
      },
    ]
    var users = [
        {
          id: 1,
          title: "Bob",
          img: "assets/images/faces/1.jpg",
          badge: "<span href=\"#\" class=\"badge badge-warning mr-2\">Test</span>"
         
        },
        {
          id: 2,
          title: "Harry",
          img: "assets/images/faces/2.jpg"
         
        },
        {
          id: 3,
          title: "Bob",
          img: "assets/images/faces/3.jpg"
         
        },
        {
          id: 4,
          title: "Harry",
          img: "assets/images/faces/4.jpg"
         
        }
      ];

      $('#todo-list-search').keyup(function(){
        search_table($(this).val());
        
      });
      function search_table(value){
        $('#userTable li').each(function(){
          var found = 'false';
          $(this).each(function(){
            if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
            {
              found = 'true';
            }
            if(found == 'true'){
              $(this).show();
            }else{
              $(this).hide();
            }
          });
        });
      }
      
    

    $("form").submit(function(e) {
        e.preventDefault();
         
    });

    $.each(users, function(i, user){
        appendToUserTable(user);
    });
    
  
    function addUser(user){
        users.push(user);
        appendToUserTable(user);
    };

    $("form#addUser").submit(function() {
        var modifiedUser = {};
        var nameInput = $('input[name="title"]').val();
        var addressInput = $('textarea[name="description"]').val();
        var selectOption = $(this).find(':selected').val();
        var person  = persons.filter(person => person.id == selectOption);

        if (nameInput && addressInput && selectOption != 0) {
          $(this).serializeArray().map(function(data) {
              modifiedUser[data.name] = data.value;
              modifiedUser = {...modifiedUser, ...person[0]}
          });
          console.log(modifiedUser)
          addUser(modifiedUser);
          this.reset();  
        } else {
          alert('All fields must have a valid value.');
        }

        
      });

      


    function appendToUserTable(user) {
        $("#userTable").append(`<li class="list-group-item">
        <div class="ul-todo-title-wrapper d-flex justify-content-between align-items-center">
            <div  class="ul-todo-area d-flex">
                <div>
                    <label class="checkbox checkbox-primary">
                        <input type="checkbox">
                
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div>
                    ${user.title}
                </div>
               
            </div>
            
            <div class="ul-todo-action d-flex align-items-center">
            
            <span href="#" class="badge badge-danger mr-2">Developer</span>
            <span href="#" class="badge badge-warning mr-2">UI/UX</span>
                <div class="ul-widget4__img">
                    <img src="${user.img}" class="rounded-circle" id="userDropdown" alt="" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                </div>
                <button type="button" class="btn bg-transparent _r_btn border-0" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <span class="_dot _r_block-dot bg-dark"></span>
                    <span class="_dot _r_block-dot bg-dark"></span>
                    <span class="_dot _r_block-dot bg-dark"></span>
                </button>
                <div class="dropdown-menu" x-placement="bottom-start">
                    <a class="dropdown-item" href="#"><i class="nav-icon i-Pen-2 text-success font-weight-bold mr-2"></i>Edit
                        Contact</a>
                    <a class="dropdown-item" href="#"><i class="nav-icon i-Close-Window text-danger font-weight-bold mr-2"></i>Delete
                        Contact</a>
                </div>
            </div>
        </div>
    </li>`);
  }

});