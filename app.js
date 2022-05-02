var count = 0;

$("#submit").click(function (event) {
  event.preventDefault();
  console.log($("#form").serialize());

  let cityFrom = document.getElementById("from").value;
  let cityTo = document.getElementById("to").value;

  var dateControl = document.querySelectorAll('input[type="datetime-local"]');
  let startDate = dateControl[0].value;
  let returnDate = dateControl[1].value;

  if (startDate) startDate = new Date(startDate);
  if (returnDate) returnDate = new Date(returnDate);
  $.ajax({
    method: "GET",
    headers: {
      ApiKey: "gubahackatonbyramin",
    },
    dataType: "json",
    data: $("#form").serialize(),
    url: "http://ramin000-001-site1.dtempurl.com/api/admin/all",
    success: function data(datas) {
      datas = datas.filter((e) => e.from === cityFrom);
      datas = datas.filter((e) => e.to === cityTo);
      var result = "";
      let tabledata = document.getElementById("tableid");
      tabledata.innerHTML = "";
      datas.forEach((item) => {
        let date1 = new Date(item.flightTime);
        console.log(date1);
        result += 
       `<div class="card">
            <div class="image">
                <img src="${item.imageUrl}" alt="">
            </div>
            <div class="middle">
                <div class="direction">
                    <span class="from">${item.from}</span>
                    &#8594;
                    <span class="to">${item.to}</span>
                </div>
                <div class="time">
                    <h2>Tarix: ${item.flightTime}</h2>
                </div>

                <div class="price">
                    Qiymet: ${item.ticketPriceForAdult} azn
                </div>
            </div>
            <div class="middle2">
                <div class="baqajfree">
                    <p>Baqaj Veşi: ${item.flightInformation.freeBaggage} Kg</p>
                </div>
                <div class="handbaqaj">
                    <p>Əl Veşi: ${item.flightInformation.handBag}</p>
                </div>
                <div class="ticket-amount">
                    <button id="buy" onclick="overDiv()" type="submit">Bileti Al</button>
                    <button type="submit">Imtina Et</button>
                </div>
            </div>
        </div>
        `;
      });
      $(".display-data").append(result);
    },
  });
});