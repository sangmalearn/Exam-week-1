class BankAccount {
    static accountCounter = 1000;
    static accountNumbers = new Set();
    constructor(ownerName, initialBalance){
        let newAccountNumber;
        do {
            newAccountNumber = ++BankAccount.accountCounter;
        } while (BankAccount.accountNumbers.has(newAccountNumber));
        this.accountNumber = newAccountNumber;
        BankAccount.accountNumbers.add(this.accountNumber);
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    Deposit(amount){
        this.balance += amount;
    }
    withDraw(amount){
        if(amount>this.balance){
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            //console.log(`Withdraw ${amount} from ${this.ownerName}. Remaining balance: ${this.balance}`);
        }
    }
    getBalance(){
        return this.balance;
    }
    displayAccountInfo(){
        return `Account Number: ${this.accountNumber}\nAccount Owner: ${this.ownerName}\nBalance: ${this.balance}`;

    }
}
const bankaccount1 = new BankAccount('Munir Hossain', 1200);
const bankaccount2 = new BankAccount('Rumi Roy', 800);

// Accoount 1 
bankaccount1.Deposit(500);
bankaccount1.withDraw(400);

// Account 2 
bankaccount2.Deposit(200);
bankaccount2.withDraw(1100);

// Account 1 informaton 
console.log("Account 1 Informaton")
console.log(bankaccount1.displayAccountInfo());

// Account 2 informaton 
console.log("\nAccount 2 Informaton")
console.log(bankaccount2.displayAccountInfo());
