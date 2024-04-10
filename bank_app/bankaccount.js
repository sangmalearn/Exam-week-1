class BankAccount {
    static accountCounter = "";
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
        this.transactions = [];
    }
    Deposit(amount){
        this.balance += amount;
        this.transactions.push(`Deposited ${amount}`);
    }
    withDraw(amount){
        if(amount > this.balance){
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            this.transactions.push(`Withdrawn ${amount}`);
        }
    }
    getBalance(){
        return this.balance;
    }
    displayAccountInfo(){
        let transactionInfo = "";
        for(const transaction of this.transactions){
            transactionInfo += transaction + "\n";
        }
        return `Account Number: ${this.accountNumber}\nAccount Owner: ${this.ownerName}\nBalance: ${this.balance}\n\nTransaction Histry: \n${transactionInfo}`;
    }
}

const bankaccount1 = new BankAccount('Munir Hossain', 1200);
const bankaccount2 = new BankAccount('Rumi Roy', 1800);

// Account 1 
bankaccount1.Deposit(500);
bankaccount1.withDraw(400);

// Account 2 
bankaccount2.Deposit(200);
bankaccount2.withDraw(1100);

// Account 1 information 
console.log("New Balance");

console.log("Account 1 Information");
console.log(bankaccount1.displayAccountInfo(400));


// Account 2 information 
console.log("\nAccount 2 Information");
console.log(bankaccount2.displayAccountInfo(1100));

