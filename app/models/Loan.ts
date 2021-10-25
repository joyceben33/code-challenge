
interface iLoan {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    loanNumber: string;
}


export default class Loan implements iLoan {
    id = 0;
    firstName = ''
    lastName = ''
    email = ''
    address = ''
    city = ''
    state = ''
    zip = ''
    loanNumber = ''

    constructor(select: any) {
        this.id = select.id ?? this.id;
        this.firstName = select.first_name ?? this.firstName;
        this.lastName = select.last_name ?? this.lastName;
        this.email = select.email ?? this.email;
        this.address = select.address ?? this.address;
        this.city = select.city ?? this.city;
        this.state = select.state ?? this.state
        this.zip = select.zip ?? this.zip;
        this.loanNumber = select.loan_number ?? this.loanNumber;
    }
}
