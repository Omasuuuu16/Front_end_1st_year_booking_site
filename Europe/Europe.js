function toggleSidebar() {
  const sidebar =document.getElementById("mySidebar");
  const body =document.body;
  if(sidebar.style.width === "250px") {
    sidebar.style.width ="0";
    body.classList.remove("sidebar-open");
  } else {
    sidebar.style.width = "250px";
    body.classList.add("sidebar-open");
  }
  }
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    toggleSidebar(); // دالة فتح/إغلاق القائمة الجانبية لديك
  });

 