export default class User {
    constructor(username, email, password) {
        this._username = username;
        this._email = email;
        this._password = password;
        this._userId = User.incrementId;
        this._isLoggedIn = false;

        this._userInfo = [];
        this._userInfo.push(this._username, this._email, this._password);
        localStorage.setItem('Minberg-Coding_'+this._username+'\'s info', this._userInfo);
        // localStorage.setItem('Minberg-Coding_'+this._username+'\'s email', this._email);
        // localStorage.setItem('Minberg-Coding_'+this._username+'\'s password', this._password);
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
    }

    login() {
        if(this._isLoggedIn) return;
        console.log('User has logged In!');
        this._isLoggedIn = true;
        localStorage.setItem('Minberg-Coding_loggedIn', true);
    }

    logout() {
        if(!this._isLoggedIn) return;
        console.log('User has logged out!');
        this._isLoggedIn = false;
        localStorage.setItem('Minberg-Coding_loggedIn', false);
    }
}