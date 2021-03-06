class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid first Name";
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid  last Name";
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address ";
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city ";
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zip ";
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    toString() {
        return "First Name: " + this.firstName
            + ", Last Name: " + this.lastName
            + "\nAddress: " + this.address
            + ", City: " + this.city
            + ", State: " + this.state
            + ", Zip: " + this.zip
            + "\nPhone Number: " + this.phoneNumber
            + ", Email: " + this.email;
    }
}
console.log("Welcome to the Address Book Program");
try {
    let detailsArray = new Array();
    detailsArray.push(new Contact("Nagireddy", "Somula", "Kurnool", "Kurnool", "AP", "518134",
        "91 9492880337", "somulanagireddy@gmail.com"));
    detailsArray.push(new Contact("Siva", "Somula", "Nandyal","Kurnool", "AP", "518134",
         "91 9492880337", "sivaramreddy@gmail.com"));
    detailsArray.push(new Contact("Sivaram", "Somula", "Hyderabad","Hyderabad", "TG", "500038",
         "91 9493922495", "somulasivaramireddy@gmail.com"));
    detailsArray.push(new Contact("Nagireddy", "Nandyal", "Allagada","Kurnool", "AP",
        "518134", "91 9441605203", "nagireddy@gmail.com"));
        console.log("\ncontacts before being updated\n");

        detailsArray.forEach((contact) => console.log(contact.toString()));

        detailsArray.filter(contact => contact.firstName == "Nagireddy").map(contact => contact.firstName = "Sivaramreddy");
        console.log("\ncontacts after being updated\n");
        detailsArray.forEach((contact) => console.log(contact.toString()));
    
        let index = detailsArray.findIndex(contact => contact.firstName == "Sivaram");
        detailsArray.splice(index, 1);
        console.log("\naddress book after deleting contct");
        detailsArray.forEach((contact) => console.log(contact.toString()));
    
        let count = 0;
        function FindNumberOfContacts(contact) {
            if (contact != null)
                return count++;
        }
        detailsArray.reduce(FindNumberOfContacts, 0);
        console.log("\nTotal number of contacts in array  : " + count);
    
        let newContact = new Contact("Sivaram", "Somula", "Hyderabad","Hyderabad", "TG", "500038",
        "91 9493922495", "somulasivaramireddy@gmail.com");
    
    
        function checkDuplicates(count, contact) {
            if (contact != null)
                count++;
            return count;
        }
    
        function addContact() {
            if (countDuplicate == 0) detailsArray.push(newContact);
            else console.log("\nContact not added in the address book. Duplicate Entry found.\n");
        }
    
        let countDuplicate = detailsArray.filter(contact => contact.firstName == newContact.firstName).map(contact => contact).reduce(checkDuplicates, 0);
        addContact();
        console.log("Checking duplicate while adding new contact in the address book");
        detailsArray.forEach((contact) => console.log(contact.toString()));
    
        //UC 8 search by city and state
        function countPersonByCity(countByCity, contact) {
            if (contact != null)
                countByCity++;
            return countByCity;
        }
        function searchByCity() {
            if (serchByCity == 0) console.log("\nSearch not found by city name " + searchCity);
            else console.log("\n" + serchByCity + " Search found by city name " + searchCity);
        }
        let searchCity = "Kurnool";
        let serchByCity = detailsArray.filter(contact => contact.city == searchCity).map(contact => contact).reduce(countPersonByCity, 0);
        searchByCity();
    
    
        function countPersonByCity(countByState, contact) {
            if (contact != null)
                countByState++;
            return countByState;
        }
        function searchByState() {
            if (serchByState == 0) console.log("\nSearch not found by state name " + searchState);
            else console.log("\n" + serchByState + " Search found by state name " + searchState);
        }
        let searchState = "TG";
        let serchByState = detailsArray.filter(contact => contact.state == searchState).map(contact => contact).reduce(countPersonByCity, 0);
        searchByState();

        //UC9 View person by city or state
        let contactCity = "Kurnool";
        let contactState = "AP";
        let contactByCityArray = detailsArray.filter(contact => contact.city == contactCity).map(contact => contact);
        contactByCityArray.forEach(contact => console.log(contact.toString()))
        let contactByStateArray = detailsArray.filter(contact => contact.state == contactState).map(contact => contact);
        contactByStateArray.forEach(contact => console.log(contact.toString()));

        //UC10 Count by city or state
        function countContacts(counter, contact) {
        if (contact !== null)
            counter++;
        return counter;
        }
        let countByCity = detailsArray.filter(contact => contact.city !== null).map(contact => contact).reduce(countContacts, 0);
        console.log("Count by City " + countByCity);
        let countByState = detailsArray.filter(contact => contact.state !== null).map(contact => contact).reduce(countContacts, 0);
        console.log("Count by City " + countByState);

        function sortByName() {
            for (let details in detailsArray) {
                detailsArray.sort(details.firstName);
            }
            detailsArray.forEach(contact => console.log(contact.toString()));
        }
        console.log("Sorting by firstName");
        sortByName();

        //UC12 sort address book by city state and zip

    let cityArray = detailsArray.filter(contact => contact.city != null).map(contact => contact.city).sort();
    console.log("\nSort By City");
    cityArray.forEach(city => {
        console.log(detailsArray.filter(contact => contact.city == city))
    });

    console.log("\nSort By State");
    let stateArray = detailsArray.filter(contact => contact.state != null).map(contact => contact.state).sort();
    stateArray.forEach(state => {
        console.log(detailsArray.filter(contact => contact.state == state))
    });

    console.log("\nSort By Zip");
    let zipArray = detailsArray.filter(contact => contact.zip != null).map(contact => contact.zip).sort();
    zipArray.forEach(zip => {
        console.log(detailsArray.filter(contact => contact.zip == zip))
    });
    }
    catch (e) {
        console.log(e);
    }