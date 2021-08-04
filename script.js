$(function() {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function() {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);


        let order = (f, s, c, t, n, total) => {
            return { f, s, c, t, n, total };
        };

        let price, totalPrice;
        switch (flavour) {
            case flavour = "Hawaian":
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === "Double thin crust") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === " Doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "medium":
                        price = 1000;
                        if (crust === " Double thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "Doblethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Double flatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                }
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === " Double thin") {
                            totalPrice = (price * number) +200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === " Doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "medium":
                        price = 1000;
                        if (crust === "Double thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "Doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "Double thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === " doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
      }
                        break;
                }
                break;
            case flavour = " Chickenperiperi":
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === "doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === " doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "medium":
                        price = 1000;
                        if (crust === "doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === " doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === " doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                }
                break;
            case flavour = "mushroompizza":
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === " doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === " doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "medium":
                        price = 1000;
                        if (crust === "doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === " doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                }
                break;
            case flavour = "pinapple pizza":
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === " doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === " doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "medium":
                        price = 1000;
                        if (crust === " doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "doublethin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "doubleflatbread") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number) + 450;
                        }
                        break;
                }
                break;
            
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 100;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 100;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 180;
                break;
            case topping = "redpepper":
                totalPrice = totalPrice + 80;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 150;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 120;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 220;
                break;
            case topping = "mabacon":
                totalPrice = totalPrice + 120;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 220;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 300;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 370;
                break;

        }


        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder);

        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.DeliverNot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   " +
            newOrder.s + "<br>" + "Crust :     " +
            newOrder.c + "<br>" + "Toppings :     " +
            newOrder.t + "<br>" + " Number of pizzas :    " +
            newOrder.n + "<br>" + "Total Price :  " +
            newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    };


    $(".deliver").click(function() {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.DeliverNot').hide(1000);
        $('.cdata-overlay').slideDown();
    });

    $(".DeliverNot").click(function() {

    });

    $(function() {
        $.scrollify.move('#sum-order');
    });  }