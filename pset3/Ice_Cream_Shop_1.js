const priceOfIceCream = 9;
let paymentRecieved = prompt("Insert cash here please");
let isPaymentEnough = paymentRecieved >= priceOfIceCream;
let tooMuch = paymentRecieved > priceOfIceCream;
if (isPaymentEnough){
    let changeAmount = paymentRecieved - priceOfIceCream;
    if (tooMuch){
        print("Thanks! Enjoy your ice cream!")
        print("Your change is $" + changeAmount)
    }else{
        print("Thanks! Enjoy your ice cream!")
    }
} else {
    print("Are you broke?")
}
