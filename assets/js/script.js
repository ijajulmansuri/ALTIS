
      $(document).ready(function () {
        // Show the submenu when hovering over the parent button
        $("#homebtn").hover(
          function () {
            $("#homemenu").removeClass("hidden");
          },
          function () {
            // Hide the submenu when the mouse leaves the button
            setTimeout(() => {
              if (!$("#homemenu").is(":hover")) {
                $("#homemenu").addClass("hidden");
              }
            }, 200);
          }
        );
    
        // Keep the submenu visible when hovering over it
        $("#homemenu").hover(
          function () {
            $(this).removeClass("hidden");
          },
          function () {
            // Hide the submenu when the mouse leaves it
            setTimeout(()=>{$(this).addClass("hidden")}, 500)
          }
        );


        // Show the submenu when hovering over the parent button
        $("#sharebtn").hover(
            function () {
              $("#sharemenu").removeClass("hidden");
            },
            function () {
              // Hide the submenu when the mouse leaves the button
              setTimeout(() => {
                if (!$("#sharemenu").is(":hover")) {
                  $("#sharemenu").addClass("hidden");
                }
              }, 200);
            }
          );
      
          // Keep the submenu visible when hovering over it
          $("#sharemenu").hover(
            function () {
              $(this).removeClass("hidden");
            },
            function () {
              // Hide the submenu when the mouse leaves it
              setTimeout(()=>{$(this).addClass("hidden")}, 500)
            }
          );
      });