const markAllAsReadBtn = document.getElementById("mark-all-as-read-btn")
const unreadNotifications = document.getElementsByClassName("unread")
const unreadNotificationsNumber = document.getElementById("unread-notification-number")

const unreadNotificationsLength = unreadNotifications.length
markAllAsReadBtn.addEventListener("click", function(){
   for(let i = 0; i < unreadNotificationsLength; i++)
   {
    removeUnread()
   }
   unreadNotificationsNumber.textContent = unreadNotifications.length
});

function removeUnread() {
    
    unreadNotifications[0].classList.remove("unread");

}



