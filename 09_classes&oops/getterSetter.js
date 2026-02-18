class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value  // bcz constructor also sets the value. we take a different variable _email
    }

    get password(){
        return `${this._password}ani`
    }

    set password(value){
        this._password = value
    }
}

const ani = new User("a@ani.ai", "abc")
console.log(ani.email);