window.addEventListener("load", function () {
  var count_el;
  var count;
  var cnt_page;
  var paginator = document.querySelector(".paginator");
  var page = "";
  var div_num = document.querySelectorAll(".show");
  var cnt = 5; //сколько отображаем сначала

  var search = document.getElementsByClassName('search');
  var search_bar = document.getElementsByClassName('search-bar');



  search[1].addEventListener("click", displayDate);
  search[0].addEventListener("click", displayDate);
  search[1].addEventListener("click", displayDate);
  search[0].addEventListener("click", displayDate);


  function displayDate() {
    search[0].classList.toggle("active");
    search[1].classList.toggle("active");
    search_bar[0].classList.toggle("active");
    search_bar[1].classList.toggle("active");
  }

  filterSelection("all")

  window.addEventListener('click', hide, false);

  function hide(e) {
    var target = e.target
    var filter = target.dataset.filter;
    var pag = target.parentElement.classList.value;
    if (filter == 'all' || filter == 'nature' || filter == 'cars' || filter == "people") {
      filterSelection(filter);
    } else if (pag == 'paginator') {
      pagination(e);
    }
  }

  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      w3RemoveClass(x[i], "pag");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
    count_el = document.querySelectorAll(".show").length;
    first_page(count_el)

  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }


  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  //pagination

  function first_page(count) {
    count = count; //всего записей
    // cnt = 4; //сколько отображаем сначала
    cnt_page = Math.ceil(count / cnt); //кол-во страниц

    listPages();
    //выводим первые записи {cnt}
    var div_num = document.querySelectorAll(".show");
    for (var i = 0; i < div_num.length; i++) {
      if (i < cnt) {
        div_num[i].classList.add("pag");
      }
    }

    var main_page = document.getElementById("page1");
    main_page.classList.add("paginator_active");
  }

  //выводим список страниц
  function listPages() {
    for (var i = 0; i < cnt_page; i++) {
      page += "<span class=\"pagination\" href=\"#\" data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\"></span>";
    }
    paginator.innerHTML = page;
    page = "";
  }

  listPages();

  //выводим первые записи {cnt}

  for (var i = 0; i < div_num.length; i++) {
    if (i < cnt) {
      div_num[i].classList.add("pag");
    }
  }

  var main_page = document.getElementById("page1");
  main_page.classList.add("paginator_active");

  //листаем
  function pagination(event) {
    var div_num = document.querySelectorAll(".show");
    var e = event || window.event;
    var target = e.target;
    var id = target.id;
    var page1 = document.getElementById('page1')

    if (target.tagName.toLowerCase() != "span") return;

    var num_ = id.substr(4);
    var data_page = +target.dataset.page;
    page1.classList.remove('paginator_active');
    main_page.classList.remove("paginator_active");
    main_page = document.getElementById(id);
    main_page.classList.add("paginator_active");

    var j = 0;
    for (var i = 0; i < div_num.length; i++) {
      var data_num = div_num[i].dataset.num;
      if (data_num <= data_page || data_num >= data_page)
        div_num[i].classList.remove("pag");

    }
    for (var i = data_page; i < div_num.length; i++) {
      if (j >= cnt) break;
      div_num[i].classList.add("pag");
      j++;
    }
  }

})


var btnMenu = document.getElementById('menu-button');
var menu = document.getElementById('mobile-menu');
var body = document.querySelector('body');

btnMenu.addEventListener("click", show);

function show() {
  this.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('active');
}


