console.log("opened");
updateBar();

weightDeleteTimeout = Promise;


$(".weight").click(function(){
    $(".weight").removeClass("moved-weight");
    clearTimeout(weightDeleteTimeout);
    console.log("weightClicked");
    $(this).addClass("removed-weight");
    updateBar();
    weightDeleteTimeout = setTimeout('respaceWeights()', 1100);
});

function respaceWeights(){
    $(".removed-weight").remove();   
    $(".weight").addClass("moved-weight");
    console.log("moved");
}

function updateBar(){
    numCat1 = $(".cat1:not(.removed-weight)").length*4;
    numCat1 += $(".cat1.❗:not(.removed-weight)").length*4;
    numCat1 += $(".cat1.❗❗:not(.removed-weight)").length*12;
    numCat1 += $(".cat1.❗❗❗:not(.removed-weight)").length*28;
    
    numCat2 = $(".cat2:not(.removed-weight)").length*4;
    numCat2 += $(".cat2.❗:not(.removed-weight)").length*4;
    numCat2 += $(".cat2.❗❗:not(.removed-weight)").length*12;
    numCat2 += $(".cat2.❗❗❗:not(.removed-weight)").length*28;

    numCat3 = $(".cat3:not(.removed-weight)").length*4;
    numCat3 += $(".cat3.❗:not(.removed-weight)").length*4;
    numCat3 += $(".cat3.❗❗:not(.removed-weight)").length*12;
    numCat3 += $(".cat3.❗❗❗:not(.removed-weight)").length*28;
    
    console.log(numCat1);
    console.log(numCat2);
    console.log(numCat3);
    $("#cat1Bar").css('flex-grow',numCat1);
    $("#cat2Bar").css('flex-grow',numCat2);
    $("#cat3Bar").css('flex-grow',numCat3);
}