$(function() {
    $("#calculate-btn").on("click", function() {
      var m2Price = parseFloat($("#m2-price").val());
      var m2Quantity = parseFloat($("#m2-quantity").val());
      var houseAge = $("#house-age").val();
      var mp75M2PerBag = parseFloat($("#mp75-m2-per-bag").val()) || 0;
      var mp75TotalM2 = parseFloat($("#mp75-total-m2").val()) || 0;
  
  
        if (isNaN(mp75M2PerBag)) {
            alert("Voer een geldig aantal vierkante meters per zak gips in.");
            return;
        }
  
        // Berekening voor het aantal benodigde zakken gips
        var mp75BagsNeeded = Math.ceil(m2Quantity / mp75M2PerBag);
        $("#mp75-bags-result").html("Aantal benodigde zakken MP75: <span class='green-text'>" + mp75BagsNeeded + "</span");
      // Nieuwe berekening voor het aantal mandagen
      var mandays = Math.ceil(m2Quantity / 25); // 1 mandag voor 25 m²
      $("#mandays-result").html("Aantal mandagen nodig: <span class='green-text'>" + mandays + "</span>");
  
      // Berekening voor het totaalbedrag
      var totalAmount = m2Price * m2Quantity;
      $("#result").html("Totaalbedrag: <span class='green-text'>" + totalAmount.toFixed(2) + " euro</span>");
  
      // Berekening voor BTW
      var btwRate = (houseAge === "older-than-2") ? 0.09 : 0.21; // 9% bij ouder dan 2 jaar, anders 21%
      var btwAmount = totalAmount * btwRate;
      $("#btw-result").html("BTW (9% of 21%): <span class='green-text'>" + btwAmount.toFixed(2) + " euro</span>");
  
      // Berekening voor het totaalbedrag inclusief BTW
      var totalIncludingBtw = totalAmount + btwAmount;
      $("#total-including-btw").html("Totaalbedrag inclusief BTW: <span class='green-text'>" + totalIncludingBtw.toFixed(2) + " euro</span>");
    });
  });
  
  
    $(function() {
      $("#calculate-btn-3").on("click", function() {
        // Calculator 3
        var mp75Price = parseFloat($("#mp75-price").val()) || 0;
        var mp75Quantity = parseFloat($("#mp75-quantity").val()) || 0;
    
        var quikPrice = parseFloat($("#quik-price").val()) || 0;
        var quikQuantity = parseFloat($("#quik-quantity").val()) || 0;
    
        var rifinoPrice = parseFloat($("#rifino-price").val()) || 0;
        var rifinoQuantity = parseFloat($("#rifino-quantity").val()) || 0;
    
        var hoekspeer3mmPrice = parseFloat($("#hoekspeer-3mm-price").val()) || 0;
        var hoekspeer3mmQuantity = parseFloat($("#hoekspeer-3mm-quantity").val()) || 0;
    
        var hoekspeer6mmPrice = parseFloat($("#hoekspeer-6mm-price").val()) || 0;
        var hoekspeer6mmQuantity = parseFloat($("#hoekspeer-6mm-quantity").val()) || 0;
    
        var stucstop3mmPrice = parseFloat($("#stucstop-3mm-price").val()) || 0;
        var stucstop3mmQuantity = parseFloat($("#stucstop-3mm-quantity").val()) || 0;
    
        var stucstop6mmPrice = parseFloat($("#stucstop-6mm-price").val()) || 0;
        var stucstop6mmQuantity = parseFloat($("#stucstop-6mm-quantity").val()) || 0;
    
        var gaasbandPrice = parseFloat($("#gaasband-price").val()) || 0;
        var gaasbandQuantity = parseFloat($("#gaasband-quantity").val()) || 0;
    
        var gitexPrice = parseFloat($("#gitex-price").val()) || 0;
        var gitexQuantity = parseFloat($("#gitex-quantity").val()) || 0;
    
        var stucloperPrice = parseFloat($("#stucloper-price").val()) || 0;
        var stucloperQuantity = parseFloat($("#stucloper-quantity").val()) || 0;
    
        var plasticPrice = parseFloat($("#plastic-price").val()) || 0;
        var plasticQuantity = parseFloat($("#plastic-quantity").val()) || 0;
    
        var tapePrice = parseFloat($("#tape-price").val()) || 0;
        var tapeQuantity = parseFloat($("#tape-quantity").val()) || 0;
    
        var voorstrijkPrice = parseFloat($("#voorstrijk-price").val()) || 0;
        var voorstrijkQuantity = parseFloat($("#voorstrijk-quantity").val()) || 0;
    
        // Berekening voor het totaalbedrag stucmaterialen
        var totalMaterialPrice =
          (mp75Price * mp75Quantity) +
          (quikPrice * quikQuantity) +
          (rifinoPrice * rifinoQuantity) +
          (hoekspeer3mmPrice * hoekspeer3mmQuantity) +
          (hoekspeer6mmPrice * hoekspeer6mmQuantity) +
          (stucstop3mmPrice * stucstop3mmQuantity) +
          (stucstop6mmPrice * stucstop6mmQuantity) +
          (gaasbandPrice * gaasbandQuantity) +
          (gitexPrice * gitexQuantity) +
          (stucloperPrice * stucloperQuantity) +
          (plasticPrice * plasticQuantity) +
          (tapePrice * tapeQuantity) +
          (voorstrijkPrice * voorstrijkQuantity);
    
        $("#result-3").html("Totaalbedrag stucmaterialen: <span class='green-text'>" + totalMaterialPrice.toFixed(2) + " euro</span>");
      });
    });
  
    