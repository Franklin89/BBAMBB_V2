/**
 * Created by Matteo on 22/01/16.
 */

function bookingRequest() {

    $("#sendingRequestLoader").show();
    $("#reservationForm").hide();

    var selecedApartments = [];

    $("input:checkbox[name=apartmentId]:checked").each(function (){
        selecedApartments.push(this.value);
    });

    var booking = {
        Arrival: $("#arrival").val(),
        Departure: $("#departure").val(),
        ApartmentIds: selecedApartments,
        Title: $("input:radio[name=title]:checked").val(),
        FirstName: $("#firstname").val(),
        LastName: $("#lastname").val(),
        Address: $("#address").val(),
        Zip: $("#zip").val(),
        City: $("#city").val(),
        Country: $("#country").val(),
        Message: $("#message").val()
    };

    console.log(JSON.stringify(booking));

    $.ajax({
        url: '/php/booking.php',
        type: 'POST',
        data: booking,
        success: function (data) {
            console.log(data);
            $("#reservationForm").trigger("reset");
            $("#sendingRequestLoader").hide();
            $("#reservationForm").show();
            swal('Danke...', data, 'success');
        },
        error: function (x, y, z) {
            console.log(x + '\n' + y + '\n' + z);
            $("#sendingRequestLoader").hide();
            $("#reservationForm").show();
            swal('Oops...', x + '\n' + y + '\n' + z, 'error');
        },
        timeout: 30000
    });
}
